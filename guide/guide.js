/* OPS Microsoft Developer Day lab guide.
   The page works without this file. It adds: copy buttons, ticks that are remembered,
   prompt values you fill in once, the bar that follows the lab you are in, and a filter for the help list.
   Nothing leaves the browser. Ticks and entries are kept in localStorage on this computer. */
(function () {
  'use strict';

  var KEY = 'ops-devday-lab-guide';
  var store = { done: {}, fill: {}, score: {} };
  try {
    var saved = JSON.parse(window.localStorage.getItem(KEY) || '{}');
    store.done = saved.done || {};
    store.fill = saved.fill || {};
    store.score = saved.score || {};
  } catch (e) { /* private mode, or storage turned off: the page still works, nothing is remembered */ }
  function save() {
    try { window.localStorage.setItem(KEY, JSON.stringify(store)); } catch (e) { /* see above */ }
  }

  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

  var header = $('#site-header');
  var labBar = $('#lab-bar');
  var labs = JSON.parse($('#lab-data').textContent);
  var labById = {};
  labs.forEach(function (lab) { labById[lab.id] = lab; });

  // A polite live region: says what a click did, for people who cannot see the change.
  var live = document.createElement('div');
  live.className = 'sr-only';
  live.setAttribute('role', 'status');
  live.setAttribute('aria-live', 'polite');
  document.body.appendChild(live);
  function say(text) { live.textContent = ''; window.setTimeout(function () { live.textContent = text; }, 30); }

  // ---------------------------------------------------------------------------------------------
  // The header stays on top. Links must stop below it, so tell CSS how tall it is.
  // ---------------------------------------------------------------------------------------------
  var BAR = 46; // height of the lab bar, which hangs below the header while you are in a lab
  function measureHeader() {
    document.documentElement.style.setProperty('--header-h', header.offsetHeight + 'px');
  }
  measureHeader();
  window.addEventListener('resize', measureHeader);
  window.addEventListener('load', measureHeader);

  // ---------------------------------------------------------------------------------------------
  // Copy buttons on prompts and terminal commands
  // ---------------------------------------------------------------------------------------------
  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(text);
    return new Promise(function (resolve, reject) {
      var area = document.createElement('textarea');
      area.value = text;
      area.setAttribute('readonly', '');
      area.style.position = 'fixed';
      area.style.top = '-1000px';
      document.body.appendChild(area);
      area.select();
      var ok = false;
      try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
      document.body.removeChild(area);
      if (ok) resolve(); else reject(new Error('copy failed'));
    });
  }
  $$('[data-copy]').forEach(function (box) {
    var pre = $('pre', box);
    var isPrompt = box.classList.contains('box-prompt');
    var what = isPrompt ? 'prompt' : 'command';
    var button = document.createElement('button');
    button.type = 'button';
    button.className = 'copy';
    button.textContent = 'Copy';
    button.setAttribute('aria-label', 'Copy the ' + what);
    box.insertBefore(button, box.firstChild);
    var timer;
    button.addEventListener('click', function () {
      copyText(pre.textContent).then(function () {
        button.textContent = 'Copied';
        button.classList.add('is-copied');
        say('The ' + what + ' is copied.');
      }, function () {
        button.textContent = 'Select and copy';
        var range = document.createRange();
        range.selectNodeContents(pre);
        var selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        say('Copy did not work. The text is selected: press Control and C.');
      }).then(function () {
        window.clearTimeout(timer);
        timer = window.setTimeout(function () { button.textContent = 'Copy'; button.classList.remove('is-copied'); }, 2200);
      });
    });
  });

  // ---------------------------------------------------------------------------------------------
  // Values you fill in once: the form folder, your alias and the issue number
  // ---------------------------------------------------------------------------------------------
  var EMPTY = { form: '<form>', alias: '<alias>', issue: '<number>' };
  function applyFill() {
    Object.keys(EMPTY).forEach(function (key) {
      var value = (store.fill[key] || '').trim();
      $$('.ph[data-ph="' + key + '"]').forEach(function (el) {
        el.textContent = value || EMPTY[key];
        el.classList.toggle('is-filled', !!value);
      });
      $$('[data-fill="' + key + '"]').forEach(function (el) {
        if (el.value !== (store.fill[key] || '')) el.value = store.fill[key] || '';
      });
    });
  }
  $$('[data-fill]').forEach(function (el) {
    el.addEventListener(el.tagName === 'SELECT' ? 'change' : 'input', function () {
      store.fill[el.getAttribute('data-fill')] = el.value;
      save();
      applyFill();
    });
  });
  applyFill();

  // The score table in Lab 2
  $$('[data-score]').forEach(function (el) {
    var key = el.getAttribute('data-score');
    el.value = store.score[key] || '';
    el.addEventListener('input', function () { store.score[key] = el.value; save(); });
  });

  // ---------------------------------------------------------------------------------------------
  // Ticks: mark a step done
  // ---------------------------------------------------------------------------------------------
  function doneCount(lab) { return lab.steps.filter(function (s) { return store.done[s.id]; }).length; }
  function paintDone() {
    $$('[data-done]').forEach(function (box) {
      var id = box.getAttribute('data-done');
      var isDone = !!store.done[id];
      box.checked = isDone;
      var step = document.getElementById(id);
      if (step) step.classList.toggle('is-done', isDone);
      $$('[data-step-row="' + id + '"]').forEach(function (row) { row.classList.toggle('is-done', isDone); });
    });
    labs.forEach(function (lab) {
      var link = $('[data-nav="' + lab.id + '"]');
      if (link) link.classList.toggle('is-complete', doneCount(lab) === lab.steps.length);
    });
    paintLabBar();
  }
  $$('[data-done]').forEach(function (box) {
    box.addEventListener('change', function () {
      var id = box.getAttribute('data-done');
      store.done[id] = box.checked;
      save();
      paintDone();
      var lab = labById[id.split('-')[0]];
      var step = lab.steps.filter(function (s) { return s.id === id; })[0];
      say('Step ' + step.n + (box.checked ? ' marked done. ' : ' not done. ') + doneCount(lab) + ' of ' + lab.steps.length + ' steps done in Lab ' + lab.lab + '.');
    });
  });

  // ---------------------------------------------------------------------------------------------
  // Where you are: the section in the top row, and the steps of the lab in the bar below it
  // ---------------------------------------------------------------------------------------------
  var sections = $$('main > section');
  var navList = $('#main-nav-list');
  var navLinks = $$('[data-nav]', navList);
  var current = { section: null, step: null };
  var NAV_FOR = { today: 'overview' }; // "What today is for" sits under Overview

  function paintLabBar() {
    var lab = labById[current.section];
    if (!lab) { labBar.hidden = true; return; }
    var section = document.getElementById(lab.id);
    var time = section.getAttribute('data-time');
    var name = $('#lab-bar-name');
    name.textContent = 'Lab ' + lab.lab;
    if (time) {
      var when = document.createElement('span');
      when.className = 'lab-bar-time';
      when.textContent = ' | ' + time;
      name.appendChild(when);
    }
    var list = $('#lab-bar-steps');
    list.textContent = '';
    lab.steps.forEach(function (s) {
      var item = document.createElement('li');
      var a = document.createElement('a');
      a.href = '#' + s.id;
      a.textContent = s.n;
      var isDone = !!store.done[s.id];
      a.setAttribute('aria-label', 'Step ' + s.n + ': ' + s.title + (isDone ? ' (done)' : ''));
      a.title = 'Step ' + s.n + ': ' + s.title;
      if (isDone) a.className = 'is-done';
      if (current.step === s.id) a.setAttribute('aria-current', 'step');
      item.appendChild(a);
      list.appendChild(item);
    });
    $('#lab-bar-count').textContent = doneCount(lab) + ' of ' + lab.steps.length + ' done';
    labBar.hidden = false;
  }

  function showNavLink(link) {
    // Scroll the row sideways, never the page.
    var left = link.offsetLeft - (navList.clientWidth - link.offsetWidth) / 2;
    navList.scrollLeft = Math.max(0, left);
  }

  function locate() {
    var line = header.offsetHeight + BAR + 24;
    var found = sections[0].id;
    sections.forEach(function (s) { if (s.getBoundingClientRect().top <= line) found = s.id; });
    // At the very bottom of the page the last section may never reach the line.
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) found = sections[sections.length - 1].id;
    var step = null;
    var lab = labById[found];
    if (lab) lab.steps.forEach(function (s) { if (document.getElementById(s.id).getBoundingClientRect().top <= line) step = s.id; });
    if (found === current.section && step === current.step) return;
    var sectionChanged = found !== current.section;
    current.section = found;
    current.step = step;
    if (sectionChanged) {
      var navId = NAV_FOR[found] || found;
      navLinks.forEach(function (a) {
        if (a.getAttribute('data-nav') === navId) { a.setAttribute('aria-current', 'location'); showNavLink(a); } else a.removeAttribute('aria-current');
      });
    }
    paintLabBar();
  }
  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () { ticking = false; locate(); });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  window.addEventListener('hashchange', onScroll);

  // ---------------------------------------------------------------------------------------------
  // Filter for "If something goes wrong"
  // ---------------------------------------------------------------------------------------------
  var filter = $('#help-filter');
  var helpRows = $$('.help-table tbody tr');
  if (filter) {
    filter.addEventListener('input', function () {
      var words = filter.value.toLowerCase().split(/\s+/).filter(Boolean);
      var shown = 0;
      helpRows.forEach(function (row) {
        var text = row.textContent.toLowerCase();
        var match = words.every(function (w) { return text.indexOf(w) !== -1; });
        row.hidden = !match;
        if (match) shown++;
      });
      $('#help-count').textContent = !words.length ? '' : shown ? shown + ' of ' + helpRows.length + ' shown' : 'Nothing matches. Ask your table lead.';
    });
  }

  // ---------------------------------------------------------------------------------------------
  // A table that is wider than the window scrolls sideways. Make it reachable with the keyboard.
  // ---------------------------------------------------------------------------------------------
  function markScrollers() {
    $$('.table-wrap').forEach(function (wrap) {
      if (wrap.scrollWidth > wrap.clientWidth + 1) {
        wrap.setAttribute('tabindex', '0');
        wrap.setAttribute('role', 'region');
        if (!wrap.getAttribute('aria-label')) {
          var heads = $$('thead th', wrap).map(function (th) { return th.textContent.trim(); });
          wrap.setAttribute('aria-label', 'Table: ' + heads.join(', ') + '. Scroll sideways to see it all.');
        }
      } else {
        wrap.removeAttribute('tabindex');
        wrap.removeAttribute('role');
        wrap.removeAttribute('aria-label');
      }
    });
  }
  markScrollers();
  window.addEventListener('resize', markScrollers);
  window.addEventListener('load', markScrollers);

  // ---------------------------------------------------------------------------------------------
  // Start over
  // ---------------------------------------------------------------------------------------------
  var reset = $('#reset-progress');
  if (reset) {
    reset.addEventListener('click', function () {
      if (!window.confirm('Clear every tick and everything you typed into this page?')) return;
      store = { done: {}, fill: {}, score: {} };
      save();
      $$('[data-score]').forEach(function (el) { el.value = ''; });
      applyFill();
      paintDone();
      say('Ticks and entries cleared.');
    });
  }

  document.documentElement.classList.add('js');
  paintDone();
  locate();
})();
