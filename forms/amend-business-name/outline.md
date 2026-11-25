# Form outline: form.pdf

Source type: Adobe XFA form. Fields: 332. Buttons: 11. Repeating groups: 0. Scripts on fields: 336. Fields flagged required in the form definition: 1.
A required count of 0 does not mean nothing is mandatory: many forms enforce it in scripts. Check the PDF.

```
SECTION form1
  SCRIPT on initialize (javascript):
    | var oDoc = event.target;
    | oDoc.nocache = true;
    | oDoc.noautocomplete = true;
    | pageVisibility.visibility();
  SCRIPT on ready (javascript):
    | if (!app.runtimeHighlight){
    | app.runtimeHighlight = true;
    | }
  SECTION FormCalc [presence=hidden]
    SCRIPT on enter (formcalc):
      | if (FunctionName == "WordNum") then
      | Result = WordNum(P1, P2)
      | elseif (FunctionName == "Parse") then
      | Result = Parse(P1, P2)
      | elseif (FunctionName == "Format") then
      | if (P2.isNull) then
      | Result = Format(P1, null)
      | else
      | Result = Format(P1, P2)
      | endif
      | elseif (FunctionName == "Uuid") then
      | Result = Uuid(P1)
      | elseif (FunctionName == "UnitValue") then
      | Result = UnitValue(P1, P2)
      | elseif (FunctionName == "UnitType") then
      | Result = UnitType(P1)
      | elseif (FunctionName == "Get") then
      | Result = Get(P1)
      | elseif (FunctionName == "Decode") then
      | Result = Decode(P1, P2)
      | elseif (FunctionName == "Encode") then
      | Result = Encode(P1, P2)
      | elseif (FunctionName == "Within") then
      | Result = Within(P1, P2, P3)
      | elseif (FunctionName == "Str") then
      | Result = Str(P1, P2, P3)
      | elseif (FunctionName == "Space") then
      | Result = Space(P1)
      | elseif (FunctionName == "Eval") then
      | Result = Eval(P1)
      | endif
  SECTION page1
    SECTION header
      TEXT "/9j/4Q25RXhpZgAATU0AKgAAAAgABwESAAMAAAABAAEAAAEaAAUAAAABAAAAYgEbAAUAAAABAAAA agEoAAMAAAABAAIAAAExAAIAAAAiAAAAcgEyAAIAAAAUAAAAlIdpAAQAAAABAAAAqAAAANQANWfg AAAnEAA1Z+AAACcQQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpADIwMTk6MDQ6MTYg MTY6MDc6MDYAAAOgAQADAAAAAf//AACgAgAEAAAAAQAABDagAwAEAAAAAQAAARgAAAAAA"
      TEXT "Ministry of Public and Business Service Delivery"
      TEXT "Amend a Business Name for a Corporation Business Names Act"
      FIELD TextField1; type=textEdit; label="Text Field"; presence=hidden
        SCRIPT on click (javascript):
          | oUtility.scrollTo(xfa.resolveNode(this.rawValue))
      FIELD initFld; type=textEdit; label="Text Field"; presence=hidden
    SECTION body
      FIELD initialValue; type=textEdit; presence=hidden; access=readOnly; help="Office use only"
      SECTION note
        TEXT "For questions or more information to complete this form, please refer to the instruction page."
      TEXT "Fields marked with an asterisk ( * ) are mandatory."
      TEXT "Developer Notes:"
      SECTION filerInfo
        TEXT "1. Business Name Information"
        TEXT "Please provide the following information for the person we should contact regarding this filing. This person will receive any correspondence, official documents or notices relating to this filing. We will also contact this person if we need additional information."
        SECTION (unnamed)
          FIELD corpName; type=textEdit; label="Business Name *"; maxChars=175; help="Section 1. Business Name Information. Business Name. This field is mandatory."
          FIELD help; type=button; label="i"; help="Help"
            SCRIPT on click (javascript):
              | xfa.host.messageBox("This is the name of the registration to be amended. The name entered must be the same as it appears on the ministry’s records.","Help Information",3,0);
        FIELD corpNo; type=textEdit; label="Business Identification Number (BIN) *"; maxChars=10; help="Section 1. Business Identification Number (BIN). This field is mandatory."
          SCRIPT on change (javascript):
            | form1.variables.controller.validNumberB(xfa.event)
          SCRIPT on exit (javascript):
            | /*
            | if (this.rawValue!=null){
            | var pattern = /^([a-znikon el14A-Z0-9]){10}$/;
            | var input= this.rawValue;
            | if (!input.match(pattern)){
            | xfa.host.messageBox("Ontario Corporation Number must be 10 digits.");
            | this.rawValue="";
            | xfa.host.setFocus(this.name);
            | }
            | }
            | */
        TEXT "Registrant Information"
        FIELD corpName1; type=textEdit; label="Corporation Name *"; maxChars=175; help="Section 1. Registrant Information. Corporation Name. This field is mandatory."
        FIELD corpNo1; type=textEdit; label="Ontario Corporation Number (OCN) *"; maxChars=10; help="Section 1. Registrant Information. Ontario Corporation Number (OCN). This field is mandatory."
          SCRIPT on change (javascript):
            | form1.variables.controller.validNumberB(xfa.event)
          SCRIPT on exit (javascript):
            | /*
            | if (this.rawValue!=null){
            | var pattern = /^([a-znikon el14A-Z0-9]){10}$/;
            | var input= this.rawValue;
            | if (!input.match(pattern)){
            | xfa.host.messageBox("Ontario Corporation Number must be 10 digits.");
            | this.rawValue="";
            | xfa.host.setFocus(this.name);
            | }
            | }
            | */
        FIELD comKey; type=textEdit; label="Company Key *"; maxChars=9; help="Section 1. Registrant Information. Company Key. This field is mandatory."
          SCRIPT on change (javascript):
            | form1.variables.controller.validNumber(xfa.event)
          SCRIPT on exit (javascript):
            | if (this.rawValue!=null){
            | var pattern = /^([a-zA-Z0-9]){9}$/;
            | var input= this.rawValue;
            | if (!input.match(pattern)){
            | xfa.host.messageBox("Company Key must be 9 digits.");
            | this.rawValue="";
            | xfa.host.setFocus(this.name);
            | }
            | }
        SECTION (unnamed)
          FIELD email; type=textEdit; label="Official Email Address *"; maxChars=50; help="Section 1. Registrant Information. Official Email Address. This field is mandatory."
            SCRIPT on exit (javascript):
              | var re= /^([a-zA-Z0-9_\.\-\'])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
              | if(this.rawValue!=null){
              | var input = this.rawValue // convert to a string
              | if(this.value!=null){
              | if(!input.match(re)){
              | app.alert("Invalid email address. Please enter a valid email address.");
              | xfa.host.setFocus(this);
              | this.rawValue="";
              | }
              | }
              | }
          FIELD help; type=button; label="i"; help="Help"
            SCRIPT on click (javascript):
              | xfa.host.messageBox("This is the official email address of the corporation. You must enter the official email address on record with the ministry.","Help Information",3,0);
      SECTION contactInfo
        TEXT "2. Contact Information"
        TEXT "Please provide the following information for the person we should contact regarding this filing. This person will receive official documents or notices and correspondence related to this filing. By proceeding with this filing, you are confirming that you have been duly authorized to do so."
        FIELD firstName; type=textEdit; label="First Name *"; maxChars=30; help="Section 2. Contact Information. First Name. This field is mandatory."
        FIELD middleName; type=textEdit; label="Middle Name"; maxChars=13; help="Section 2. Middle Name."
        FIELD lastName; type=textEdit; label="Last Name *"; maxChars=50; help="Section 2. Last Name. This field is mandatory."
        FIELD countryCode; type=textEdit; label="Telephone Country Code"; maxChars=12; help="Section 2. Telephone Country Code"
          SCRIPT on change (javascript):
            | form1.variables.controller.validNumber(xfa.event)
        FIELD telephoneNo; type=textEdit; label="Telephone Number *"; maxChars=12; format=text{999 999-9999}; help="Section 2. Telephone Number. This field is mandatory."
          SCRIPT on exit (javascript):
            | form1.variables.controller.validatePhoneExit(xfa.event)
          SCRIPT on change (javascript):
            | form1.variables.controller.validNumber(xfa.event)
        FIELD extension; type=textEdit; label="Extension"; maxChars=5; help="Section 2. Telephone Number. Extension"
          SCRIPT on change (javascript):
            | form1.variables.controller.validNumber(xfa.event)
        SECTION (unnamed)
          FIELD email; type=textEdit; label="Email Address *"; maxChars=50; help="Section 2. Email Address. This field is mandatory."
            SCRIPT on exit (javascript):
              | var re= /^([a-zA-Z0-9_\.\-\'])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
              | if(this.rawValue!=null){
              | var input = this.rawValue // convert to a string
              | if(this.value!=null){
              | if(!input.match(re)){
              | app.alert("Invalid email address. Please enter a valid email address.");
              | xfa.host.setFocus(this);
              | this.rawValue="";
              | }
              | }
              | }
          FIELD help; type=button; label="i"; help="Help"
            SCRIPT on click (javascript):
              | xfa.host.messageBox("This is the email address of the contact person.","Help Information",3,0);
      SECTION address
        TEXT "3. Address (if applicable)"
        TEXT "Complete this section only if you are changing the principal place of business."
        TEXT "Address of the Principal Place of Business"
        SECTION (unnamed)
          SECTION (unnamed)
            TEXT "Does the business have a new Principal Place of Business in Ontario?"
            FIELD help; type=button; label="i"; help="Help"
              SCRIPT on click (javascript):
                | xfa.host.messageBox('This is the place of business in Ontario. where this business name is used. If you have more than one place of business in Ontario, select one address as the principal place of bu
          FIELD yes; type=checkButton; label="Yes"; options=[1 | ]; help="Section 3. Address (if applicable). Address of the Principal Place of Business. Does the business have a new Principal Place of Business in Ontario ? Yes."
            SCRIPT on initialize (formcalc):
              | $.font.fill.color.value="0,0,255";
            SCRIPT on change (javascript):
              | if(this.rawValue == "1"){
              | optA.presence = "visible";
              | optA.standadrdAddr.presence = "hidden"
              | optA.lotConcession.presence = "hidden"
              | optB.presence = "hidden"
              | xfa.host.resetData(optB.somExpression)
              | optB.canada.presence = "hidden"
              | optB.usa.presence = "hidden"
              | optB.international.presence = "hidden"
              | }
              | else{
              | optA.presence = "hidden";
              | xfa.host.resetData(optA.somExpression)
              | optA.standadrdAddr.presence = "hidden"
              | optA.lotConcession.presence = "hidden"
              | optB.presence = "hidden";
              | xfa.host.resetData(optB.somExpression)
              | optB.canada.presence = "hidden"
              | optB.usa.presence = "hidden"
              | optB.international.presence = "hidden"
              | }
          FIELD no; type=checkButton; label="No"; options=[2 | ]; help="Section 3. Address of the Principal Place of Business. Does the business have a new Principal Place of Business in Ontario ? No"
            SCRIPT on initialize (formcalc):
              | $.font.fill.color.value="0,0,255";
            SCRIPT on change (javascript):
              | if(this.rawValue == "2"){
              | optA.presence = "hidden";
              | xfa.host.resetData(optA.somExpression)
              | optA.standadrdAddr.presence = "hidden"
              | optA.lotConcession.presence = "hidden"
              | optB.presence = "visible";
              | optB.canada.presence = "hidden"
              | optB.usa.presence = "hidden"
              | optB.international.presence = "hidden"
              | }
              | else{
              | optA.presence = "hidden";
              | xfa.host.resetData(optA.somExpression)
              | optA.standadrdAddr.presence = "hidden"
              | optA.lotConcession.presence = "hidden"
              | optB.presence = "hidden";
              | xfa.host.resetData(optB.somExpression)
              | optB.canada.presence = "hidden"
              | optB.usa.presence = "hidden"
              | optB.international.presence = "hidden"
              | }
        SECTION optA
          TEXT "New Principal Place of Business in Ontario *"
          FIELD standard; type=checkButton; label="Standard Address"; options=[1 | ]; help="Section 3. Address of the Principal Place of Business. Does the business have a new Principal Place of Business in Ontario ? Yes. New Principal Place of Busines"
            SCRIPT on initialize (formcalc):
              | $.font.fill.color.value="0,0,255";
            SCRIPT on change (javascript):
              | if(this.rawValue == "1"){
              | standadrdAddr.presence = "visible"
              | lotConcession.presence = "hidden"
              | xfa.host.resetData(lotConcession.somExpression)
              | }
              | else{
              | standadrdAddr.presence = "hidden"
              | xfa.host.resetData(standadrdAddr.somExpression)
              | lotConcession.presence = "hidden"
              | xfa.host.resetData(lotConcession.somExpression)
              | }
          FIELD concession; type=checkButton; label="Lot/Concession Address"; options=[2 | ]; help="Section 3. Address of the Principal Place of Business. Does the business have a new Principal Place of Business in Ontario ? Yes. New Principal Place of Busines"
            SCRIPT on initialize (formcalc):
              | $.font.fill.color.value="0,0,255";
            SCRIPT on change (javascript):
              | if(this.rawValue == "2"){
              | lotConcession.presence = "visible"
              | standadrdAddr.presence = "hidden"
              | xfa.host.resetData(standadrdAddr.somExpression)
              | }
              | else{
              | standadrdAddr.presence = "hidden"
              | xfa.host.resetData(standadrdAddr.somExpression)
              | lotConcession.presence = "hidden"
              | xfa.host.resetData(lotConcession.somExpression)
              | }
          SECTION standadrdAddr
            FIELD streetNo; type=textEdit; label="Street Number *"; maxChars=6; help="Section 3. Address of the Principal Place of Business. New Principal Place of Business in Ontario. Standard address. Street Number. This field is mandatory."
            FIELD streetName; type=textEdit; label="Street Name *"; maxChars=45; help="Section 3. Address of the Principal Place of Business. New Principal Place of Business in Ontario. Standard address. Street Name. This field is mandatory."
            FIELD unitNo; type=textEdit; label="Unit Number"; maxChars=8; help="Section 3. Address of the Principal Place of Business. New Principal Place of Business in Ontario. Standard address. Unit Number."
            FIELD city; type=textEdit; label="City/Town *"; maxChars=45; help="Section 3. Address of the Principal Place of Business. New Principal Place of Business in Ontario. Standard address. City or Town. This field is mandatory."
            FIELD province; type=textEdit; label="Province"; access=readOnly; maxChars=30; help="Section 3. Address of the Principal Place of Business. New Principal Place of Business in Ontario. Standard address. Province."
            FIELD postalCode; type=textEdit; label="Postal Code *"; maxChars=7
              SCRIPT on exit (javascript):
                | controller.validatePostalCodeExit(xfa.event)
              SCRIPT on ready (javascript):
                | this.assist.toolTip.value="Section 3. Address of the Principal Place of Business. New Principal Place of Business in Ontario. Standard address. Postal Code.\n" + controller.iMessage(["mgs6E"])+" "+ co
            FIELD country; type=textEdit; label="Country"; access=readOnly; maxChars=30; help="Section 3. Address of the Principal Place of Business. New Principal Place of Business in Ontario. Standard address. Country."
          SECTION lotConcession
            FIELD line1; type=textEdit; label="Address Line 1 *"; help="Section 3. Address of the Principal Place of Business. New Principal Place of Business in Ontario. Lot or Concession address. Address Line 1. This field is mand"
            FIELD line2; type=textEdit; label="Address Line 2"; help="Section 3. Address of the Principal Place of Business. New Principal Place of Business in Ontario. Lot or Concession address. Address Line 2."
            FIELD city; type=textEdit; label="City/Town *"; maxChars=45; help="Section 3. Address of the Principal Place of Business. New Principal Place of Business in Ontario. Lot or Concession address. City or Town. This field is mandat"
            FIELD province; type=textEdit; label="Province"; access=readOnly; maxChars=30; help="Section 3. Address of the Principal Place of Business. New Principal Place of Business in Ontario. Lot or Concession address. Province."
            FIELD postalCode; type=textEdit; label="Postal Code *"; maxChars=7
              SCRIPT on exit (javascript):
                | controller.validatePostalCodeExit(xfa.event)
              SCRIPT on ready (javascript):
                | this.assist.toolTip.value="Section 3. Address of the Principal Place of Business. New Principal Place of Business in Ontario. Lot or Concession address. Postal Code.\n" + controller.iMessage(["mgs6E"]
            FIELD country; type=textEdit; label="Country"; access=readOnly; maxChars=30; help="Section 3. Address of the Principal Place of Business. New Principal Place of Business in Ontario. Lot or Concession address. Country."
        SECTION optB
          TEXT "New Principal Place of Business *"
          FIELD can; type=checkButton; label="Canada"; options=[canada | ]; help="Section 3. New Principal Place of Business. This field is mandatory. Canada."
            SCRIPT on initialize (formcalc):
              | $.font.fill.color.value="0,0,255";
            SCRIPT on change (javascript):
              | if(this.rawValue == "canada"){
              | canada.presence = "visible"
              | xfa.host.setFocus(canada.standard);
              | usa.presence = "hidden"
              | xfa.host.resetData(usa.somExpression);
              | international.presence = "hidden"
              | xfa.host.resetData(international.somExpression);
              | }
              | else{
              | canada.presence = "hidden"
              | canada.standadrdAddr.presence = "hidden"
              | canada.lotConcession.presence = "hidden"
              | xfa.host.resetData(canada.somExpression);
              | }
              | /*
              | if(this.rawValue == "canada"){
              | canada.presence = "visible"
              | xfa.host.setFocus(canada.streetNo);
              | usa.presence = "hidden"
              | xfa.host.resetData(usa.somExpression);
              | international.presence = "hidden"
              | xfa.host.resetData(international.somExpression);
              | }
              | else{
              | canada.presence = "hidden"
              | xfa.host.resetData(canada.somExpression);
              | }
              | */
          FIELD us; type=checkButton; label="U.S.A."; options=[usa | ]; help="Section 3. New Principal Place of Business. This field is mandatory. U.S.A."
            SCRIPT on initialize (formcalc):
              | $.font.fill.color.value="0,0,255";
            SCRIPT on change (javascript):
              | if(this.rawValue == "usa"){
              | usa.presence = "visible"
              | xfa.host.setFocus(usa.streetNo);
              | canada.presence = "hidden"
              | canada.standadrdAddr.presence = "hidden"
              | canada.lotConcession.presence = "hidden"
              | xfa.host.resetData(canada.somExpression);
              | international.presence = "hidden"
              | xfa.host.resetData(international.somExpression);
              | }
              | else{
              | usa.presence = "hidden"
              | xfa.host.resetData(usa.somExpression);
              | }
              | /*
              | if(this.rawValue == "usa"){
              | usa.presence = "visible"
              | xfa.host.setFocus(usa.streetNo);
              | canada.presence = "hidden"
              | xfa.host.resetData(canada.somExpression);
              | international.presence = "hidden"
              | xfa.host.resetData(international.somExpression);
              | }
              | else{
              | usa.presence = "hidden"
              | xfa.host.resetData(usa.somExpression);
              | }
              | */
          FIELD intern; type=checkButton; label="International"; options=[international | ]; help="Section 3. New Principal Place of Business. This field is mandatory. International."
            SCRIPT on initialize (formcalc):
              | $.font.fill.color.value="0,0,255";
            SCRIPT on change (javascript):
              | if(this.rawValue == "international"){
              | international.presence = "visible"
              | xfa.host.setFocus(international.line1);
              | canada.presence = "hidden"
              | canada.standadrdAddr.presence = "hidden"
              | canada.lotConcession.presence = "hidden"
              | xfa.host.resetData(canada.somExpression);
              | usa.presence = "hidden"
              | xfa.host.resetData(usa.somExpression);
              | }
              | else{
              | international.presence = "hidden"
              | xfa.host.resetData(international.somExpression);
              | }
              | /*
              | if(this.rawValue == "international"){
              | international.presence = "visible"
              | xfa.host.setFocus(international.line1);
              | canada.presence = "hidden"
              | xfa.host.resetData(canada.somExpression);
              | usa.presence = "hidden"
              | xfa.host.resetData(usa.somExpression);
              | }
              | else{
              | international.presence = "hidden"
              | xfa.host.resetData(international.somExpression);
              | }
              | */
          SECTION canada
            FIELD standard; type=checkButton; label="Standard Address"; options=[1 | ]; help="Section 3. New Principal Place of Business. Canada. This field is mandatory. Standard address."
              SCRIPT on initialize (formcalc):
                | $.font.fill.color.value="0,0,255";
              SCRIPT on change (javascript):
                | if(this.rawValue == "1"){
                | standadrdAddr.presence = "visible"
                | lotConcession.presence = "hidden"
                | xfa.host.resetData(lotConcession.somExpression)
                | }
                | else{
                | standadrdAddr.presence = "hidden"
                | xfa.host.resetData(standadrdAddr.somExpression)
                | lotConcession.presence = "hidden"
                | xfa.host.resetData(lotConcession.somExpression)
                | }
            FIELD concession; type=checkButton; label="Lot/Concession Address"; options=[2 | ]; help="Section 3. New Principal Place of Business. Country. Canada. This field is mandatory. Lot or Concession address."
              SCRIPT on initialize (formcalc):
                | $.font.fill.color.value="0,0,255";
              SCRIPT on change (javascript):
                | if(this.rawValue == "2"){
                | lotConcession.presence = "visible"
                | standadrdAddr.presence = "hidden"
                | xfa.host.resetData(standadrdAddr.somExpression)
                | }
                | else{
                | standadrdAddr.presence = "hidden"
                | xfa.host.resetData(standadrdAddr.somExpression)
                | lotConcession.presence = "hidden"
                | xfa.host.resetData(lotConcession.somExpression)
                | }
            SECTION standadrdAddr
              FIELD streetNo; type=textEdit; label="Street Number *"; maxChars=6; help="Section 3. New Principal Place of Business. Canada. Standard address. Street Number. This field is mandatory."
              FIELD streetName; type=textEdit; label="Street Name *"; maxChars=45; help="Section 3. New Principal Place of Business. Canada. Standard address. Street Name. This field is mandatory."
              FIELD unitNo; type=textEdit; label="Unit Number"; maxChars=8; help="Section 3. New Principal Place of Business. Canada. Standard address. Unit Number."
              FIELD city; type=textEdit; label="City/Town *"; maxChars=45; help="Section 3. New Principal Place of Business. Canada. Standard address. City or Town. This field is mandatory."
              FIELD province; type=choiceList; label="Province *"; options=[Alberta | British Columbia | Manitoba | New Brunswick | Newfoundland and Labrador | Nova Scotia | Northwest Territories | Nunavut | Prince Edward Island | Quebec | Saskatchewan | Yukon]
                SCRIPT on ready (javascript):
                  | this.assist.toolTip.value ="Section 3. New Principal Place of Business. Canada. Standard address. Province.\n" + controller.iMessage(["mgs10E"])+" "+ controller.iMessage(["mgs9E"]);
              FIELD postalCode; type=textEdit; label="Postal Code *"; maxChars=7
                SCRIPT on exit (javascript):
                  | controller.validatePostalCodeExit(xfa.event)
                SCRIPT on ready (javascript):
                  | this.assist.toolTip.value="Section 3. New Principal Place of Business. Canada. Standard address. Postal Code.\n" + controller.iMessage(["mgs6E"])+" "+ controller.iMessage(["mgs9E"]);
              FIELD country; type=textEdit; label="Country"; access=readOnly; maxChars=30; help="Section 3. New Principal Place of Business. Canada. Standard address. Country."
            SECTION lotConcession
              FIELD line1; type=textEdit; label="Address Line 1 *"; help="Section 3. New Principal Place of Business. Canada. Lot or Concession address. Address Line 1. This field is mandatory."
              FIELD line2; type=textEdit; label="Address Line 2"; help="Section 3. New Principal Place of Business. Canada. Lot or Concession address. Address Line 2."
              FIELD city; type=textEdit; label="City/Town *"; maxChars=45; help="Section 3. New Principal Place of Business. Canada. Lot or Concession address. City or Town. This field is mandatory."
              FIELD province; type=choiceList; label="Province *"; options=[Alberta | British Columbia | Manitoba | New Brunswick | Newfoundland and Labrador | Nova Scotia | Northwest Territories | Nunavut | Prince Edward Island | Quebec | Saskatchewan | Yukon]
                SCRIPT on ready (javascript):
                  | this.assist.toolTip.value ="Section 3. New Principal Place of Business. Canada. Lot or Concession address. Province.\n" + controller.iMessage(["mgs10E"])+" "+ controller.iMessage(["mgs9E"]);
              FIELD postalCode; type=textEdit; label="Postal Code *"; maxChars=7
                SCRIPT on exit (javascript):
                  | controller.validatePostalCodeExit(xfa.event)
                SCRIPT on ready (javascript):
                  | this.assist.toolTip.value="Section 3. New Principal Place of Business. Canada. Lot or Concession address. Postal Code.\n" + controller.iMessage(["mgs6E"])+" "+ controller.iMessage(["mgs9E"]);
              FIELD country; type=textEdit; label="Country"; access=readOnly; maxChars=30; help="Section 3. New Principal Place of Business. Canada. Lot or Concession address. Country."
          SECTION usa
            FIELD streetNo; type=textEdit; label="Street Number *"; maxChars=6
              SCRIPT on exit (javascript):
                | var r = new RegExp("^[A-Za-z' '\àâçéèêëîïôûùüÿñæœ\0-9\'\-]*$");
                | var result = r.test(this.rawValue);
                | if(this.rawValue!=null){
                | if ( result != true )
                | {
                | xfa.host.messageBox( "Street Number field format is invalid." );
                | xfa.host.setFocus(this);
                | this.rawValue="";
                | }
                | }
              SCRIPT on ready (javascript):
                | this.assist.toolTip.value ="Section 3. New Principal Place of Business. U.S.A. Street Number. This field is mandatory.";
            FIELD streetName; type=textEdit; label="Street Name *"; maxChars=45
              SCRIPT on exit (javascript):
                | var r = new RegExp("^[A-Za-z' '\àâçéèêëîïôûùüÿñæœ\0-9\'\-]*$");
                | var result = r.test(this.rawValue);
                | if(this.rawValue!=null){
                | if ( result != true )
                | {
                | xfa.host.messageBox( "Street Name field format is invalid." );
                | xfa.host.setFocus(this);
                | this.rawValue="";
                | }
                | }
              SCRIPT on ready (javascript):
                | this.assist.toolTip.value ="Section 3. New Principal Place of Business. U.S.A. Street Name. This field is mandatory.";
            FIELD unitNo; type=textEdit; label="Unit Number"; maxChars=8
              SCRIPT on ready (javascript):
                | this.assist.toolTip.value ="Section 3. New Principal Place of Business. U.S.A. Unit Number.";
            FIELD city; type=textEdit; label="City/Town *"; maxChars=45
              SCRIPT on exit (javascript):
                | var r = new RegExp("^[A-Za-z' '\àâçéèêëîïôûùüÿñæœ\'\-]*$");
                | var result = r.test(this.rawValue);
                | if(this.rawValue!=null){
                | if ( result != true )
                | {
                | xfa.host.messageBox( "City\Town field format is invalid." );
                | xfa.host.setFocus(this);
                | this.rawValue="";
                | }
                | }
              SCRIPT on ready (javascript):
                | this.assist.toolTip.value ="Section 3. New Principal Place of Business. U.S.A. City or Town. This field is mandatory.";
            FIELD state; type=choiceList; label="State *"; options=[Alabama | Alaska | Arizona | Arkansas | California | Colorado | Connecticut | Delaware | District of Columbia | Florida | Georgia | Hawaii | Idaho | Illinois | Indiana | Iowa | Kansas | Kentucky | Louisiana | Maine | Maryland | Massachusetts | Michigan | Minnesota | Mississippi | Missouri | Montana | Nebraska | Nevada | New Hampshire...]
              SCRIPT on exit (javascript):
                | var r = new RegExp("^[A-Za-z' '\àâçéèêëîïôûùüÿñæœ\'\-]*$");
                | var result = r.test(this.rawValue);
                | if(this.rawValue!=null){
                | if ( result != true )
                | {
                | xfa.host.messageBox( "State field format is invalid." );
                | xfa.host.setFocus(this);
                | this.rawValue="";
                | }
                | }
              SCRIPT on ready (javascript):
                | this.assist.toolTip.value ="Section 3. New Principal Place of Business. U.S.A. State. Select State from the drop down menu. This field is mandatory.";
            FIELD zipCode; type=textEdit; label="Zip Code *"
              SCRIPT on exit (javascript):
                | var pattern1 = /^\d{5}(\d{4})?$/;
                | var pattern2 = /^\d{5}(-\d{4})?$/;
                | var inputValue = xfa.event.target.rawValue
                | if(inputValue!=null)
                | {
                | // if input value does NOT match the pattern, display a validation message
                | if(!inputValue.match(pattern1) && !inputValue.match(pattern2))
                | {
                | app.alert("Zip code field format is invalid.For example the format should be: 12345 or 12345-6789.");
                | xfa.host.setFocus(this);
                | this.rawValue="";
                | }
                | else
                | {
                | if (inputValue.length == 9 )
                | {
                | xfa.event.target.rawValue = inputValue.substring(0,5) + "-" + inputValue.substring(5,9);
                | }
                | }
                | }
              SCRIPT on ready (javascript):
                | this.assist.toolTip.value ="Section 3. New Principal Place of Business. U.S.A. Zip Code. This field is mandatory.";
            FIELD country; type=textEdit; label="Country"; access=readOnly; maxChars=30
              SCRIPT on ready (javascript):
                | this.assist.toolTip.value ="Section 3. New Principal Place of Business. U.S.A. Country.";
          SECTION international
            FIELD line1; type=textEdit; label="Address line 1 *"
              SCRIPT on ready (javascript):
                | this.assist.toolTip.value ="Section 3. New Principal Place of Business. International. Address Line 1. This field is mandatory.";
            FIELD line2; type=textEdit; label="Address line 2"
              SCRIPT on ready (javascript):
                | this.assist.toolTip.value ="Section 3. New Principal Place of Business. International. Address Line 2.";
            FIELD city; type=textEdit; label="City/Town *"; maxChars=45
              SCRIPT on exit (javascript):
                | var r = new RegExp("^[A-Za-z' '\àâçéèêëîïôûùüÿñæœ\'\-]*$");
                | var result = r.test(this.rawValue);
                | if(this.rawValue!=null){
                | if ( result != true )
                | {
                | xfa.host.messageBox( "City\Town field format is invalid." );
                | xfa.host.setFocus(this);
                | this.rawValue="";
                | }
                | }
              SCRIPT on ready (javascript):
                | this.assist.toolTip.value ="Section 3. New Principal Place of Business. International. City or Town. This field is mandatory.";
            SECTION (unnamed)
              FIELD region; type=textEdit; label="Region *"
                SCRIPT on exit (javascript):
                  | var r = new RegExp("^[A-Za-z' '\àâçéèêëîïôûùüÿñæœ\'\-]*$");
                  | var result = r.test(this.rawValue);
                  | if(this.rawValue!=null){
                  | if ( result != true )
                  | {
                  | xfa.host.messageBox( "Region field format is invalid." );
                  | xfa.host.setFocus(this);
                  | this.rawValue="";
                  | }
                  | }
                SCRIPT on ready (javascript):
                  | this.assist.toolTip.value ="Section 3. New Principal Place of Business. International. Region. This field is mandatory.";
              FIELD help; type=button; label="i"; help="Help"
                SCRIPT on click (javascript):
                  | xfa.host.messageBox("If you have an international address and the “Region” field is not applicable to you, please enter the ‘Parish’, ‘County’ or any other equivalent information in the “Region” field
            SECTION (unnamed)
              FIELD postal; type=textEdit; label="Postal Code *"
                SCRIPT on ready (javascript):
                  | this.assist.toolTip.value ="Section 3. New Principal Place of Business. International. Postal Code. This field is mandatory.";
              FIELD help; type=button; label="i"; help="Help"
                SCRIPT on click (javascript):
                  | xfa.host.messageBox("If you do not have a postal code or zip code, enter a period in this field.","Help Information",3,0);
            FIELD country; type=choiceList; label="Country *"; options=[Afghanistan | Aland Islands | Albania | Algeria | American Samoa | Andorra | Angola | Anguilla | Antarctica | Antigua And Barbuda | Argentina | Armenia | Aruba | Australia | Austria | Azerbaijan | Bahamas | Bahrain | Bangladesh | Barbados | Belarus | Belgium | Belize | Benin | Bermuda | Bhutan | Bolivia, Plurinational State Of | Bonaire, Sint Eustatius And Saba | Bosnia And Herzegovina | Botswana...]
              SCRIPT on exit (javascript):
                | /*
                | var r = new RegExp("^[A-Za-z' '\àâçéèêëîïôûùüÿñæœ\'\-,)(]*$");
                | var result = r.test(this.rawValue);
                | if(this.rawValue!=null){
                | if ( result != true )
                | {
                | xfa.host.messageBox( "Country field format is invalid." );
                | xfa.host.setFocus(this);
                | this.rawValue="";
                | }
                | }
                | */
              SCRIPT on ready (javascript):
                | this.assist.toolTip.value ="Section 3. New Principal Place of Business. International. Country. Select Country from drop down menu. This field is mandatory.";
      SECTION genDetails
        TEXT "4. General Details (if applicable)"
        TEXT "Complete this section only if there is a change in the primary activity being carried out under the business name."
        SECTION (unnamed)
          FIELD activityCode; type=textEdit; label="New Primary Activity Code"; maxChars=6; help="Section 4. General Details (if applicable). New Primary Activity Code."
            SCRIPT on change (javascript):
              | form1.variables.controller.validNumber(xfa.event)
          FIELD help; type=button; label="i"; help="Help"
            SCRIPT on click (javascript):
              | xfa.host.messageBox("The primary activity is the main activity being carried out under the business name. You must select the NAICS code that best describes the main activity.","Help Information",3,0)
      SECTION authorization
        TEXT "5. Authorization"
        SECTION epca_nfpca
          TEXT "Please check one *"
          FIELD nfpca; type=checkButton; label="Ontario Corporation including NFPCA"; options=[1 | ]; help="Section 5. Authorization. Please check one. This field is mandatory. Ontario Corporation including NFPCA"
            SCRIPT on initialize (formcalc):
              | $.font.fill.color.value="0,0,255";
            SCRIPT on change (javascript):
              | if(this.rawValue == "1"){
              | authorization.nfpca.presence = "visible";
              | authorization.nfpca.selection.presence = "visible";
              | authorization.epca.presence = "hidden";
              | xfa.host.resetData(authorization.epca.somExpression)
              | authorization.epca.optA.presence = "hidden";
              | xfa.host.resetData(authorization.epca.optA.somExpression)
              | authorization.nfpca.optB.presence = "hidden"
              | xfa.host.resetData(authorization.nfpca.optB.somExpression)
              | authorization.nfpca.optB.b1.presence = "hidden"
              | authorization.nfpca.optB.b1.addressService.presence = "hidden"
              | authorization.nfpca.optB.b1.addressService.canada.presence = "hidden"
              | authorization.nfpca.optB.b1.addressService.canada.standadrdAddr.presence = "hidden"
              | authorization.nfpca.optB.b1.addressService.canada.lotConcession.presence = "hidden"
              | authorization.nfpca.optB.b2.presence = "hidden"
              | authorization.nfpca.optB.b3.presence = "hidden"
              | authorization.nfpca.optB.b3.addressService.presence = "hidden"
              | authorization.nfpca.optB.b3.addressService.canada.presence = "hidden"
              | authorization.nfpca.optB.b3.addressService.canada.standadrdAddr.presence = "hidden"
              | authorization.nfpca.optB.b3.addressService.canada.lotConcession.presence = "hidden"
              | }
              | else{
              | authorization.nfpca.selection.presence = "hidden";
              | authorization.nfpca.presence = "hidden";
              | xfa.host.resetData(authorization.nfpca.somExpression)
              | xfa.host.resetData(authorization.nfpca.selection.somExpression)
              | authorization.nfpca.optA.presence = "hidden";
              | xfa.host.resetData(authorization.nfpca.optA.somExpression)
              | authorization.nfpca.optB.presence = "hidden";
              | xfa.host.resetData(authorization.nfpca.optB.somExpression)
              | authorization.nfpca.optB.b1.presence = "hidden"
              | authorization.nfpca.optB.b1.addressService.presence = "hidden"
              | authorization.nfpca.optB.b1.addressService.canada.presence = "hidden"
              | authorization.nfpca.optB.b1.addressService.canada.standadrdAddr.presence = "hidden"
              | authorization.nfpca.optB.b1.addressService.canada.lotConcession.presence = "hidden"
              | authorization.nfpca.optB.b2.presence = "hidden"
              | authorization.nfpca.optB.b3.presence = "hidden"
              | authorization.nfpca.optB.b3.addressService.presence = "hidden"
              | authorization.nfpca.optB.b3.addressService.canada.presence = "hidden"
              | authorization.nfpca.optB.b3.addressService.canada.standadrdAddr.presence = "hidden"
          FIELD epc; type=checkButton; label="Extra Provincial Corporation and Special Act Corporations"; options=[2 | ]; help="Section 5. Authorization. Please check one. This field is mandatory. Extra Provincial Corporation and Special Act Corporations"
            SCRIPT on initialize (formcalc):
              | $.font.fill.color.value="0,0,255";
            SCRIPT on change (javascript):
              | if(this.rawValue == "2"){
              | /* F5295.presence = "visible";
              | F5295.selection.presence = "visible";
              | F5295_nfpca.presence = "hidden";
              | xfa.host.resetData(F5295_nfpca.somExpression)
              | F5295.optA.presence = "hidden";
              | F5295.optA.addressService.presence = "hidden"
              | F5295.optA.addressService.canada.presence = "hidden"
              | F5295.optA.addressService.canada.standadrdAddr.presence = "hidden"
              | F5295.optA.addressService.canada.lotConcession.presence = "hidden"
              | F5295.optA.addressService.usa.presence = "hidden"
              | F5295.optA.addressService.international.presence = "hidden"
              | F5295.optB.presence = "hidden"
              | xfa.host.resetData(F5295.optB.somExpression)
              | F5295.optB.b1.presence = "hidden"
              | F5295.optB.b1.addressService.presence = "hidden"
              | F5295.optB.b1.addressService.canada.presence = "hidden"
              | F5295.optB.b1.addressService.canada.standadrdAddr.presence = "hidden"
              | F5295.optB.b1.addressService.canada.lotConcession.presence = "hidden"
              | F5295.optB.b2.presence = "hidden"
              | F5295.optB.b3.presence = "hidden"
              | F5295.optB.b3.addressService.presence = "hidden"
              | F5295.optB.b3.addressService.canada.presence = "hidden"
              | F5295.optB.b3.addressService.canada.standadrdAddr.presence = "hidden"
              | F5295.optB.b3.addressService.canada.lotConcession.presence = "hidden"
              | }
              | else{
              | F5295.selection.presence = "hidden";
              | F5295.presence = "hidden";
              | xfa.host.resetData(F5295.somExpression)
              | xfa.host.resetData(F5295.selection.somExpression)
              | F5295.optA.presence = "hidden";
              | F5295.optA.addressService.presence = "hidden"
              | F5295.optA.addressService.canada.presence = "hidden"
              | F5295.optA.addressService.canada.standadrdAddr.presence = "hidden"
              | F5295.optA.addressService.canada.lotConcession.presence = "hidden"
              | F5295.optA.addressService.usa.presence = "hidden"
              | F5295.optA.addressService.international.presence = "hidden"
              | xfa.host.resetData(F5295.optA.somExpression)
              | F5295.optB.presence = "hidden";
        SECTION nfpca
          SECTION selection
            TEXT "Person authorizing amendment *"
            FIELD dir; type=checkButton; label="Director or Officer"; options=[1 | ]; help="Section 5. Authorization. Person authorizing amendment. This field is mandatory. Director or Officer"
              SCRIPT on initialize (formcalc):
                | $.font.fill.color.value="0,0,255";
              SCRIPT on change (javascript):
                | if(this.rawValue == "1"){
                | optA.presence = "visible";
                | //optA.addressService.presence = "visible"
                | //optA.addressService.canada.presence = "hidden"
                | //optA.addressService.canada.standadrdAddr.presence = "hidden"
                | //optA.addressService.canada.lotConcession.presence = "hidden"
                | //optA.addressService.usa.presence = "hidden"
                | //optA.addressService.international.presence = "hidden"
                | optB.presence = "hidden"
                | xfa.host.resetData(optB.somExpression)
                | optB.b1.presence = "hidden"
                | optB.b1.addressService.presence = "hidden"
                | optB.b1.addressService.canada.presence = "hidden"
                | optB.b1.addressService.canada.standadrdAddr.presence = "hidden"
                | optB.b1.addressService.canada.lotConcession.presence = "hidden"
                | optB.b2.presence = "hidden"
                | optB.b3.presence = "hidden"
                | optB.b3.addressService.presence = "hidden"
                | optB.b3.addressService.canada.presence = "hidden"
                | optB.b3.addressService.canada.standadrdAddr.presence = "hidden"
                | optB.b3.addressService.canada.lotConcession.presence = "hidden"
                | }
                | else{
                | optA.presence = "hidden";
                | xfa.host.resetData(optA.somExpression)
                | //optA.addressService.presence = "visible"
                | //optA.addressService.canada.presence = "hidden"
                | //optA.addressService.canada.standadrdAddr.presence = "hidden"
                | //optA.addressService.canada.lotConcession.presence = "hidden"
                | //optA.addressService.usa.presence = "hidden"
                | //optA.addressService.international.presence = "hidden"
                | optB.presence = "hidden";
                | xfa.host.resetData(optB.somExpression)
                | optB.b1.presence = "hidden"
                | optB.b1.addressService.presence = "hidden"
                | optB.b1.addressService.canada.presence = "hidden"
                | optB.b1.addressService.canada.standadrdAddr.presence = "hidden"
                | optB.b1.addressService.canada.lotConcession.presence = "hidden"
                | optB.b2.presence = "hidden"
                | optB.b3.presence = "hidden"
            FIELD poa; type=checkButton; label="Person Acting Under Power of Attorney"; options=[2 | ]; help="Section 5. Person authorizing amendment. This field is mandatory. Person Acting Under Power of Attorney"
              SCRIPT on initialize (formcalc):
                | $.font.fill.color.value="0,0,255";
              SCRIPT on change (javascript):
                | if(this.rawValue == "2"){
                | optA.presence = "hidden";
                | xfa.host.resetData(optA.somExpression)
                | //optA.addressService.presence = "visible"
                | //optA.addressService.canada.presence = "hidden"
                | //optA.addressService.canada.standadrdAddr.presence = "hidden"
                | //optA.addressService.canada.lotConcession.presence = "hidden"
                | //optA.addressService.usa.presence = "hidden"
                | //optA.addressService.international.presence = "hidden"
                | optB.presence = "visible";
                | optB.b1.presence = "hidden"
                | optB.b1.addressService.presence = "hidden"
                | optB.b1.addressService.canada.presence = "hidden"
                | optB.b1.addressService.canada.standadrdAddr.presence = "hidden"
                | optB.b1.addressService.canada.lotConcession.presence = "hidden"
                | // optB.b1.addressService.usa.presence = "hidden"
                | // optB.b1.addressService.international.presence = "hidden"
                | optB.b2.presence = "hidden"
                | optB.b3.presence = "hidden"
                | optB.b3.addressService.presence = "hidden"
                | optB.b3.addressService.canada.presence = "hidden"
                | optB.b3.addressService.canada.standadrdAddr.presence = "hidden"
                | optB.b3.addressService.canada.lotConcession.presence = "hidden"
                | // optB.b3.addressService.usa.presence = "hidden"
                | // optB.b3.addressService.international.presence = "hidden"
                | }
                | else{
                | optA.presence = "hidden";
                | xfa.host.resetData(optA.somExpression)
                | //optA.addressService.presence = "visible"
                | //optA.addressService.canada.presence = "hidden"
                | //optA.addressService.canada.standadrdAddr.presence = "hidden"
                | //optA.addressService.canada.lotConcession.presence = "hidden"
                | //optA.addressService.usa.presence = "hidden"
                | //optA.addressService.international.presence = "hidden"
                | optB.presence = "hidden";
                | xfa.host.resetData(optB.somExpression)
                | optB.b1.presence = "hidden"
                | optB.b1.addressService.presence = "hidden"
                | optB.b1.addressService.canada.presence = "hidden"
          SECTION optA
            TEXT "Full Name"
            FIELD firstName; type=textEdit; label="First Name *"; maxChars=30; help="Section 5. Person authorizing amendment. Director or Officer. Full Name. First Name. This field is mandatory."
            FIELD middleName; type=textEdit; label="Middle Name"; maxChars=13; help="Section 5. Person authorizing amendment. Director or Officer. Full Name. Middle Name."
            FIELD lastName; type=textEdit; label="Last Name *"; maxChars=50; help="Section 5. Person authorizing amendment. Director or Officer. Full Name. Last Name. This field is mandatory."
            FIELD position; type=choiceList; label="Position"; options=[Assistant Secretary | Assistant Treasurer | Authorized Signing Officer | Chair | Chair Person | Chairman | Chairwoman | Chief Administrative Officer | Chief Executive Officer | Chief Financial Officer | Chief Information Officer | Chief Manager | Chief Operating Officer | Comptroller | Director | Executive Director | General Manager | Managing Director | Other (untitled) | President | Secretary | Treasurer | Vice-Chair | Vice-President]; help="Section 5. Person authorizing amendment. Director or Officer. Position"
            TEXT "The corporation acknowledges that the address for service of the above individual shown in the records maintained by the ministry will form part of the amendment."
            SECTION addressService_RemovedFromBR [presence=hidden]
              TEXT "Address for Service *"
              FIELD can; type=checkButton; label="Canada"; options=[canada | ]; help="Section 5. Person authorizing amendment. Director or Officer. Address for Service. Country. This field is mandatory. Canada."
                SCRIPT on initialize (formcalc):
                  | $.font.fill.color.value="0,0,255";
                SCRIPT on change (javascript):
                  | if(this.rawValue == "canada"){
                  | canada.presence = "visible"
                  | xfa.host.setFocus(canada.standard);
                  | usa.presence = "hidden"
                  | xfa.host.resetData(usa.somExpression);
                  | international.presence = "hidden"
                  | xfa.host.resetData(international.somExpression);
                  | }
                  | else{
                  | canada.presence = "hidden"
                  | canada.standadrdAddr.presence = "hidden"
                  | canada.lotConcession.presence = "hidden"
                  | xfa.host.resetData(canada.somExpression);
                  | }
              FIELD us; type=checkButton; label="U.S.A."; options=[usa | ]; help="Section 5. Person authorizing amendment. Director or Officer. Address for Service. Country. This field is mandatory. U.S.A."
                SCRIPT on initialize (formcalc):
                  | $.font.fill.color.value="0,0,255";
                SCRIPT on change (javascript):
                  | if(this.rawValue == "usa"){
                  | usa.presence = "visible"
                  | xfa.host.setFocus(usa.streetNo);
                  | canada.presence = "hidden"
                  | canada.standadrdAddr.presence = "hidden"
                  | canada.lotConcession.presence = "hidden"
                  | xfa.host.resetData(canada.somExpression);
                  | international.presence = "hidden"
                  | xfa.host.resetData(international.somExpression);
                  | }
                  | else{
                  | usa.presence = "hidden"
                  | xfa.host.resetData(usa.somExpression);
                  | }
              FIELD intern; type=checkButton; label="International"; options=[international | ]; help="Section 5. Person authorizing amendment. Director or Officer. Address for Service. Country. This field is mandatory. International."
                SCRIPT on initialize (formcalc):
                  | $.font.fill.color.value="0,0,255";
                SCRIPT on change (javascript):
                  | if(this.rawValue == "international"){
                  | international.presence = "visible"
                  | xfa.host.setFocus(international.line1);
                  | canada.presence = "hidden"
                  | canada.standadrdAddr.presence = "hidden"
                  | canada.lotConcession.presence = "hidden"
                  | xfa.host.resetData(canada.somExpression);
                  | usa.presence = "hidden"
                  | xfa.host.resetData(usa.somExpression);
                  | }
                  | else{
                  | international.presence = "hidden"
                  | xfa.host.resetData(international.somExpression);
                  | }
              SECTION canada
                FIELD standard; type=checkButton; label="Standard Address"; options=[1 | ]; help="Section 5. Person authorizing amendment. Director or Officer. Address for Service. Country. Canada. This field is mandatory. Standard address."
                  SCRIPT on initialize (formcalc):
                    | $.font.fill.color.value="0,0,255";
                  SCRIPT on change (javascript):
                    | if(this.rawValue == "1"){
                    | standadrdAddr.presence = "visible"
                    | lotConcession.presence = "hidden"
                    | xfa.host.resetData(lotConcession.somExpression)
                    | }
                    | else{
                    | standadrdAddr.presence = "hidden"
                    | xfa.host.resetData(standadrdAddr.somExpression)
                    | lotConcession.presence = "hidden"
                    | xfa.host.resetData(lotConcession.somExpression)
                    | }
                FIELD concession; type=checkButton; label="Lot/Concession Address"; options=[2 | ]; help="Section 5. Person authorizing amendment. Director or Officer. Address for Service. Country. Canada. This field is mandatory. Lot or Concession address."
                  SCRIPT on initialize (formcalc):
                    | $.font.fill.color.value="0,0,255";
                  SCRIPT on change (javascript):
                    | if(this.rawValue == "2"){
                    | lotConcession.presence = "visible"
                    | standadrdAddr.presence = "hidden"
                    | xfa.host.resetData(standadrdAddr.somExpression)
                    | }
                    | else{
                    | standadrdAddr.presence = "hidden"
                    | xfa.host.resetData(standadrdAddr.somExpression)
                    | lotConcession.presence = "hidden"
                    | xfa.host.resetData(lotConcession.somExpression)
                    | }
                SECTION standadrdAddr
                  FIELD streetNo; type=textEdit; label="Street Number *"; maxChars=6; help="Section 5. Person authorizing amendment. Director or Officer. Address for Service. Country. Canada. Standard address. Street Number. This field is mandatory."
                  FIELD streetName; type=textEdit; label="Street Name *"; maxChars=45; help="Section 5. Person authorizing amendment. Director or Officer. Address for Service. Country. Canada. Standard address. Street Name. This field is mandatory."
                  FIELD unitNo; type=textEdit; label="Unit Number"; maxChars=8; help="Section 5. Person authorizing amendment. Director or Officer. Address for Service. Country. Canada. Standard address. Unit Number."
                  FIELD city; type=textEdit; label="City/Town *"; maxChars=45; help="Section 5. Person authorizing amendment. Director or Officer. Address for Service. Country. Canada. Standard address. City or Town. This field is mandatory."
                  FIELD province; type=choiceList; label="Province *"; options=[Alberta | British Columbia | Manitoba | New Brunswick | Newfoundland and Labrador | Nova Scotia | Northwest Territories | Nunavut | Ontario | Prince Edward Island | Quebec | Saskatchewan | Yukon]
                    SCRIPT on ready (javascript):
                      | //if(this.parent.index=="0"){
                      | //this.assist.toolTip.value ="Section 7. Director " + (this.parent.parent.index + 1) + ". Address for Service. Province.\n" + controller.iMessage(["mgs10E"])+" "+ controller.iMessage(["mgs9E"]);
                      | //}
                      | //else{
                      | this.assist.toolTip.value ="Section 5. Person authorizing amendment. Director or Officer. Address for Service. Country. Canada. Standard address. Province.\n" + controller.iMessage(["mgs10E"])+" "+ co
                      | //}
                  FIELD postalCode; type=textEdit; label="Postal Code *"; maxChars=7
                    SCRIPT on exit (javascript):
                      | controller.validatePostalCodeExit(xfa.event)
                    SCRIPT on ready (javascript):
                      | this.assist.toolTip.value="Section 5. Person authorizing amendment. Director or Officer. Address for Service. Country. Canada. Standard address. Postal Code.\n" + controller.iMessage(["mgs6E"])+" "+ c
                  FIELD country; type=textEdit; label="Country"; access=readOnly; maxChars=30; help="Section 5. Person authorizing amendment. Director or Officer. Address for Service. Country. Canada. Standard address. Country. Canada"
                SECTION lotConcession
                  FIELD line1; type=textEdit; label="Address Line 1 *"; help="Section 5. Person authorizing amendment. Director or Officer. Address for Service. Country. Canada. Lot or Concession address. Address Line 1. This field is man"
                  FIELD line2; type=textEdit; label="Address Line 2"; help="Section 5. Person authorizing amendment. Director or Officer. Address for Service. Country. Canada. Lot or Concession address. Address Line 2."
                  FIELD city; type=textEdit; label="City/Town *"; maxChars=45; help="Section 5. Person authorizing amendment. Director or Officer. Address for Service. Country. Canada. Lot or Concession address. City or Town. This field is manda"
                  FIELD province; type=choiceList; label="Province *"; options=[Alberta | British Columbia | Manitoba | New Brunswick | Newfoundland and Labrador | Nova Scotia | Northwest Territories | Nunavut | Ontario | Prince Edward Island | Quebec | Saskatchewan | Yukon]
                    SCRIPT on ready (javascript):
                      | //if(this.parent.index=="0"){
                      | //this.assist.toolTip.value ="Section 7. Director " + (this.parent.parent.index + 1) + ". Address for Service. Province.\n" + controller.iMessage(["mgs10E"])+" "+ controller.iMessage(["mgs9E"]);
                      | //}
                      | //else{
                      | this.assist.toolTip.value ="Section 5. Person authorizing amendment. Director or Officer. Address for Service. Country. Canada. Lot or Concession address. Province.\n" + controller.iMessage(["mgs10E"]
                      | //}
                  FIELD postalCode; type=textEdit; label="Postal Code *"; maxChars=7
                    SCRIPT on exit (javascript):
                      | controller.validatePostalCodeExit(xfa.event)
                    SCRIPT on ready (javascript):
                      | this.assist.toolTip.value="Section 5. Person authorizing amendment. Director or Officer. Address for Service. Country. Canada. Lot or Concession address. Postal Code.\n" + controller.iMessage(["mgs6E"
                  FIELD country; type=textEdit; label="Country"; access=readOnly; maxChars=30; help="Section 5. Person authorizing amendment. Director or Officer. Address for Service. Country. Canada. Lot or Concession address. Country. Canada."
              SECTION usa
                FIELD streetNo; type=textEdit; label="Street Number *"; maxChars=6
                  SCRIPT on exit (javascript):
                    | var r = new RegExp("^[A-Za-z' '\àâçéèêëîïôûùüÿñæœ\0-9\'\-]*$");
                    | var result = r.test(this.rawValue);
                    | if(this.rawValue!=null){
                    | if ( result != true )
                    | {
                    | xfa.host.messageBox( "Street Number field format is invalid." );
                    | xfa.host.setFocus(this);
                    | this.rawValue="";
                    | }
                    | }
                  SCRIPT on ready (javascript):
                    | //if(this.parent.index=="0"){
                    | //this.assist.toolTip.value ="Section 7. Director " + (this.parent.parent.index + 1) + ". Address for Service. Street Number. This field is mandatory.";
                    | //}
                    | //else{
                    | this.assist.toolTip.value ="Section 5. Person authorizing amendment. Director or Officer. Address for Service. Country. U.S.A. Street Number. This field is mandatory.";
                    | //}
                FIELD streetName; type=textEdit; label="Street Name *"; maxChars=45
                  SCRIPT on exit (javascript):
                    | var r = new RegExp("^[A-Za-z' '\àâçéèêëîïôûùüÿñæœ\0-9\'\-]*$");
                    | var result = r.test(this.rawValue);
                    | if(this.rawValue!=null){
                    | if ( result != true )
                    | {
                    | xfa.host.messageBox( "Street Name field format is invalid." );
                    | xfa.host.setFocus(this);
                    | this.rawValue="";
                    | }
                    | }
                  SCRIPT on ready (javascript):
                    | //if(this.parent.index=="0"){
                    | //this.assist.toolTip.value ="Section 7. Director " + (this.parent.parent.index + 1) + ". Address for Service. Street Name. This field is mandatory.";
                    | //}
                    | //else{
                    | this.assist.toolTip.value ="Section 5. Person authorizing amendment. Director or Officer. Address for Service. Country. U.S.A. Street Name. This field is mandatory.";
                    | //}
                FIELD unitNo; type=textEdit; label="Unit Number"; maxChars=8
                  SCRIPT on ready (javascript):
                    | //if(this.parent.index=="0"){
                    | //this.assist.toolTip.value ="Section 7. Director " + (this.parent.parent.index + 1) + ". Address for Service. Unit Number.";
                    | //}
                    | //else{
                    | this.assist.toolTip.value ="Section 5. Person authorizing amendment. Director or Officer. Address for Service. Country. U.S.A. Unit Number.";
                    | //}
                FIELD city; type=textEdit; label="City/Town *"; maxChars=45
                  SCRIPT on exit (javascript):
                    | var r = new RegExp("^[A-Za-z' '\àâçéèêëîïôûùüÿñæœ\'\-]*$");
                    | var result = r.test(this.rawValue);
                    | if(this.rawValue!=null){
                    | if ( result != true )
                    | {
                    | xfa.host.messageBox( "City\Town field format is invalid." );
                    | xfa.host.setFocus(this);
                    | this.rawValue="";
                    | }
                    | }
                  SCRIPT on ready (javascript):
                    | //if(this.parent.index=="0"){
                    | //this.assist.toolTip.value ="Section 7. Director " + (this.parent.parent.index + 1) + ". Address for Service. City or Town. This field is mandatory.";
                    | //}
                    | //else{
                    | this.assist.toolTip.value ="Section 5. Person authorizing amendment. Director or Officer. Address for Service. Country. U.S.A. City or Town. This field is mandatory.";
                    | //}
                FIELD state; type=choiceList; label="State *"; options=[Alabama | Alaska | Arizona | Arkansas | California | Colorado | Connecticut | Delaware | District of Columbia | Florida | Georgia | Hawaii | Idaho | Illinois | Indiana | Iowa | Kansas | Kentucky | Louisiana | Maine | Maryland | Massachusetts | Michigan | Minnesota | Mississippi | Missouri | Montana | Nebraska | Nevada | New Hampshire...]
                  SCRIPT on exit (javascript):
                    | var r = new RegExp("^[A-Za-z' '\àâçéèêëîïôûùüÿñæœ\'\-]*$");
                    | var result = r.test(this.rawValue);
                    | if(this.rawValue!=null){
                    | if ( result != true )
                    | {
                    | xfa.host.messageBox( "State field format is invalid." );
                    | xfa.host.setFocus(this);
                    | this.rawValue="";
                    | }
                    | }
                  SCRIPT on ready (javascript):
                    | //if(this.parent.index=="0"){
                    | //this.assist.toolTip.value ="Section 7. Director " + (this.parent.parent.index + 1) + ". Address for Service. State. Select State from the drop down menu. This field is mandatory.";
                    | //}
                    | //else{
                    | this.assist.toolTip.value ="Section 5. Person authorizing amendment. Director or Officer. Address for Service. Country. U.S.A. State. Select State from the drop down menu. This field is mandatory.";
                    | //}
                FIELD zipCode; type=textEdit; label="Zip Code *"
                  SCRIPT on exit (javascript):
                    | var pattern1 = /^\d{5}(\d{4})?$/;
                    | var pattern2 = /^\d{5}(-\d{4})?$/;
                    | var inputValue = xfa.event.target.rawValue
                    | if(inputValue!=null)
                    | {
                    | // if input value does NOT match the pattern, display a validation message
                    | if(!inputValue.match(pattern1) && !inputValue.match(pattern2))
                    | {
                    | app.alert("Zip code field format is invalid.For example the format should be: 12345 or 12345-6789.");
                    | xfa.host.setFocus(this);
                    | this.rawValue="";
                    | }
                    | else
                    | {
                    | if (inputValue.length == 9 )
                    | {
                    | xfa.event.target.rawValue = inputValue.substring(0,5) + "-" + inputValue.substring(5,9);
                    | }
                    | }
                    | }
                  SCRIPT on ready (javascript):
                    | //if(this.parent.index=="0"){
                    | //this.assist.toolTip.value ="Section 7. Director " + (this.parent.parent.index + 1) + ". Address for Service. Zip Code. This field is mandatory.";
                    | //}
                    | //else{
                    | this.assist.toolTip.value ="Section 5. Person authorizing amendment. Director or Officer. Address for Service. Country. U.S.A. Zip Code. This field is mandatory.";
                    | //}
                FIELD country; type=textEdit; label="Country"; access=readOnly; maxChars=30
                  SCRIPT on ready (javascript):
                    | //if(this.parent.index=="0"){
                    | //this.assist.toolTip.value ="Section 7. Director " + (this.parent.parent.index + 1) + ". Address for Service. Country. United Stetes.";
                    | //}
                    | //else{
                    | this.assist.toolTip.value ="Section 5. Person authorizing amendment. Director or Officer. Address for Service. Country. U.S.A. Country. United Stetes.";
                    | //}
              SECTION international
                FIELD line1; type=textEdit; label="Address line 1 *"
                  SCRIPT on ready (javascript):
                    | //if(this.parent.index=="0"){
                    | //this.assist.toolTip.value ="Section 7. Director " + (this.parent.parent.index + 1) + ". Address for Service. Address Line 1. This field is mandatory.";
                    | //}
                    | //else{
                    | this.assist.toolTip.value ="Section 5. Person authorizing amendment. Director or Officer. Address for Service. Country. International. Address Line 1. This field is mandatory.";
                    | //}
                FIELD line2; type=textEdit; label="Address line 2"
                  SCRIPT on ready (javascript):
                    | //if(this.parent.index=="0"){
                    | //this.assist.toolTip.value ="Section 7. Director " + (this.parent.parent.index + 1) + ". Address for Service. Address Line 2.";
                    | //}
                    | //else{
                    | this.assist.toolTip.value ="Section 5. Person authorizing amendment. Director or Officer. Address for Service. Country. International. Address Line 2.";
                    | //}
                FIELD city; type=textEdit; label="City/Town *"; maxChars=45
                  SCRIPT on exit (javascript):
                    | var r = new RegExp("^[A-Za-z' '\àâçéèêëîïôûùüÿñæœ\'\-]*$");
                    | var result = r.test(this.rawValue);
                    | if(this.rawValue!=null){
                    | if ( result != true )
                    | {
                    | xfa.host.messageBox( "City\Town field format is invalid." );
                    | xfa.host.setFocus(this);
                    | this.rawValue="";
                    | }
                    | }
                  SCRIPT on ready (javascript):
                    | //if(this.parent.index=="0"){
                    | //this.assist.toolTip.value ="Section 7. Director " + (this.parent.parent.index + 1) + ". Address for Service. City or Town. This field is mandatory.";
                    | //}
                    | //else{
                    | this.assist.toolTip.value ="Section 5. Person authorizing amendment. Director or Officer. Address for Service. Country. International. City or Town. This field is mandatory.";
                    | //}
                FIELD region; type=textEdit; label="Region *"
                  SCRIPT on exit (javascript):
                    | var r = new RegExp("^[A-Za-z' '\àâçéèêëîïôûùüÿñæœ\'\-]*$");
                    | var result = r.test(this.rawValue);
                    | if(this.rawValue!=null){
                    | if ( result != true )
                    | {
                    | xfa.host.messageBox( "Region field format is invalid." );
                    | xfa.host.setFocus(this);
                    | this.rawValue="";
                    | }
                    | }
                  SCRIPT on ready (javascript):
                    | //if(this.parent.index=="0"){
                    | //this.assist.toolTip.value ="Section 7. Director " + (this.parent.parent.index + 1) + ". Address for Service. Region. This field is mandatory.";
                    | //}
                    | //else{
                    | this.assist.toolTip.value ="Section 5. Person authorizing amendment. Director or Officer. Address for Service. Country. International. Region. This field is mandatory.";
                    | //}
                FIELD postal; type=textEdit; label="Postal Code *"
                  SCRIPT on ready (javascript):
                    | //if(this.parent.index=="0"){
                    | //this.assist.toolTip.value ="Section 7. Director " + (this.parent.parent.index + 1) + ". Address for Service. Postal Code. This field is mandatory.";
                    | //}
                    | //else{
                    | this.assist.toolTip.value ="Section 5. Person authorizing amendment. Director or Officer. Address for Service. Country. International. Postal Code. This field is mandatory.";
                    | //}
                FIELD country; type=choiceList; label="Country *"; options=[Afghanistan | Aland Islands | Albania | Algeria | American Samoa | Andorra | Angola | Anguilla | Antarctica | Antigua And Barbuda | Argentina | Armenia | Aruba | Australia | Austria | Azerbaijan | Bahamas | Bahrain | Bangladesh | Barbados | Belarus | Belgium | Belize | Benin | Bermuda | Bhutan | Bolivia, Plurinational State Of | Bonaire, Sint Eustatius And Saba | Bosnia And Herzegovina | Botswana...]
                  SCRIPT on exit (javascript):
                    | /*
                    | var r = new RegExp("^[A-Za-z' '\àâçéèêëîïôûùüÿñæœ\'\-,)(]*$");
                    | var result = r.test(this.rawValue);
                    | if(this.rawValue!=null){
                    | if ( result != true )
                    | {
                    | xfa.host.messageBox( "Country field format is invalid." );
                    | xfa.host.setFocus(this);
                    | this.rawValue="";
                    | }
                    | }
                    | */
                  SCRIPT on ready (javascript):
                    | //if(this.parent.index=="0"){
                    | //this.assist.toolTip.value ="Section 7. Director " + (this.parent.parent.index + 1) + ". Address for Service. Country. This field is mandatory.";
                    | //}
                    | //else{
                    | this.assist.toolTip.value ="Section 5. Person authorizing amendment. Director or Officer. Address for Service. Country. International. Country. Select Country from drop down menu. This field is mandat
                    | //}
          SECTION optB
            TEXT "Type *"
            FIELD ind; type=checkButton; label="Individual"; options=[1 | ]; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. This field is mandatory. Individual."
              SCRIPT on initialize (formcalc):
                | $.font.fill.color.value="0,0,255";
              SCRIPT on change (javascript):
                | if(this.rawValue == "1"){
                | b1.presence = "visible";
                | b2.presence = "hidden"
                | xfa.host.resetData(b2.somExpression)
                | b3.presence = "hidden"
                | xfa.host.resetData(b3.somExpression)
                | b1.addressService.presence = "visible"
                | b1.addressService.canada.presence = "visible"
                | b1.addressService.canada.standadrdAddr.presence = "hidden"
                | b1.addressService.canada.lotConcession.presence = "hidden"
                | // b1.addressService.usa.presence = "hidden"
                | // b1.addressService.international.presence = "hidden"
                | b3.addressService.presence = "hidden"
                | b3.addressService.canada.presence = "hidden"
                | b3.addressService.canada.standadrdAddr.presence = "hidden"
                | b3.addressService.canada.lotConcession.presence = "hidden"
                | // b3.addressService.usa.presence = "hidden"
                | // b3.addressService.international.presence = "hidden"
                | }
                | else{
                | b1.presence = "hidden"
                | xfa.host.resetData(b1.somExpression)
                | b2.presence = "hidden"
                | xfa.host.resetData(b2.somExpression)
                | b3.presence = "hidden"
                | xfa.host.resetData(b3.somExpression)
                | b1.addressService.presence = "hidden"
                | b1.addressService.canada.presence = "hidden"
                | b1.addressService.canada.standadrdAddr.presence = "hidden"
                | b1.addressService.canada.lotConcession.presence = "hidden"
                | // b1.addressService.usa.presence = "hidden"
                | // b1.addressService.international.presence = "hidden"
                | b3.addressService.presence = "hidden"
                | b3.addressService.canada.presence = "hidden"
                | b3.addressService.canada.standadrdAddr.presence = "hidden"
                | b3.addressService.canada.lotConcession.presence = "hidden"
                | // b3.addressService.usa.presence = "hidden"
                | // b3.addressService.international.presence = "hidden"
                | }
            FIELD corp; type=checkButton; label="Corporation or Registered Entity"; options=[2 | ]; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. This field is mandatory. Corporation or Registered Entity."
              SCRIPT on initialize (formcalc):
                | $.font.fill.color.value="0,0,255";
              SCRIPT on change (javascript):
                | if(this.rawValue == "2"){
                | b1.presence = "hidden"
                | xfa.host.resetData(b1.somExpression)
                | b2.presence = "visible";
                | b3.presence = "hidden"
                | xfa.host.resetData(b3.somExpression)
                | b1.addressService.presence = "hidden"
                | b1.addressService.canada.presence = "hidden"
                | b1.addressService.canada.standadrdAddr.presence = "hidden"
                | b1.addressService.canada.lotConcession.presence = "hidden"
                | // b1.addressService.usa.presence = "hidden"
                | // b1.addressService.international.presence = "hidden"
                | b2.addressService.presence = "visible"
                | b2.addressService.canada.presence = "visible"
                | b2.addressService.canada.standadrdAddr.presence = "hidden"
                | b2.addressService.canada.lotConcession.presence = "hidden"
                | b3.addressService.presence = "hidden"
                | b3.addressService.canada.presence = "hidden"
                | b3.addressService.canada.standadrdAddr.presence = "hidden"
                | b3.addressService.canada.lotConcession.presence = "hidden"
                | // b3.addressService.usa.presence = "hidden"
                | // b3.addressService.international.presence = "hidden"
                | }
                | else{
                | b1.presence = "hidden"
                | xfa.host.resetData(b1.somExpression)
                | b2.presence = "hidden"
                | xfa.host.resetData(b2.somExpression)
                | b3.presence = "hidden"
                | xfa.host.resetData(b3.somExpression)
                | b1.addressService.presence = "hidden"
                | b1.addressService.canada.presence = "hidden"
                | b1.addressService.canada.standadrdAddr.presence = "hidden"
                | b1.addressService.canada.lotConcession.presence = "hidden"
                | // b1.addressService.usa.presence = "hidden"
                | // b1.addressService.international.presence = "hidden"
                | b2.addressService.presence = "hidden"
                | b2.addressService.canada.presence = "hidden"
                | b2.addressService.canada.standadrdAddr.presence = "hidden"
                | b2.addressService.canada.lotConcession.presence = "hidden"
            FIELD other; type=checkButton; label="Other"; options=[3 | ]; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. This field is mandatory. Other"
              SCRIPT on initialize (formcalc):
                | $.font.fill.color.value="0,0,255";
              SCRIPT on change (javascript):
                | if(this.rawValue == "3"){
                | b1.presence = "hidden"
                | xfa.host.resetData(b1.somExpression)
                | b2.presence = "hidden"
                | xfa.host.resetData(b2.somExpression)
                | b3.presence = "visible";
                | b1.addressService.presence = "hidden"
                | b1.addressService.canada.presence = "hidden"
                | b1.addressService.canada.standadrdAddr.presence = "hidden"
                | b1.addressService.canada.lotConcession.presence = "hidden"
                | // b1.addressService.usa.presence = "hidden"
                | // b1.addressService.international.presence = "hidden"
                | b3.addressService.presence = "visible"
                | b3.addressService.canada.presence = "visible"
                | b3.addressService.canada.standadrdAddr.presence = "hidden"
                | b3.addressService.canada.lotConcession.presence = "hidden"
                | // b3.addressService.usa.presence = "hidden"
                | // b3.addressService.international.presence = "hidden"
                | }
                | else{
                | b1.presence = "hidden"
                | xfa.host.resetData(b1.somExpression)
                | b2.presence = "hidden"
                | xfa.host.resetData(b2.somExpression)
                | b3.presence = "hidden"
                | xfa.host.resetData(b3.somExpression)
                | b1.addressService.presence = "hidden"
                | b1.addressService.canada.presence = "hidden"
                | b1.addressService.canada.standadrdAddr.presence = "hidden"
                | b1.addressService.canada.lotConcession.presence = "hidden"
                | // b1.addressService.usa.presence = "hidden"
                | // b1.addressService.international.presence = "hidden"
                | b3.addressService.presence = "hidden"
                | b3.addressService.canada.presence = "hidden"
                | b3.addressService.canada.standadrdAddr.presence = "hidden"
                | b3.addressService.canada.lotConcession.presence = "hidden"
                | // b3.addressService.usa.presence = "hidden"
                | // b3.addressService.international.presence = "hidden"
                | }
            SECTION b1
              TEXT "Full Name"
              FIELD firstName; type=textEdit; label="First Name *"; maxChars=30; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Individual. Full Name. First Name. This field is mandatory."
              FIELD middleName; type=textEdit; label="Middle Name"; maxChars=13; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Individual. Full Name. Middle Name."
              FIELD lastName; type=textEdit; label="Last Name *"; maxChars=50; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Individual. Full Name. Last Name. This field is mandatory."
              SECTION addressService
                TEXT "Address for Service *"
                SECTION canada
                  FIELD standard; type=checkButton; label="Standard Address"; options=[1 | ]; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Individual. Address for Service. This field is mandatory. Standard address."
                    SCRIPT on initialize (formcalc):
                      | $.font.fill.color.value="0,0,255";
                    SCRIPT on change (javascript):
                      | if(this.rawValue == "1"){
                      | standadrdAddr.presence = "visible"
                      | lotConcession.presence = "hidden"
                      | xfa.host.resetData(lotConcession.somExpression)
                      | }
                      | else{
                      | standadrdAddr.presence = "hidden"
                      | xfa.host.resetData(standadrdAddr.somExpression)
                      | lotConcession.presence = "hidden"
                      | xfa.host.resetData(lotConcession.somExpression)
                      | }
                  FIELD concession; type=checkButton; label="Lot/Concession Address"; options=[2 | ]; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Individual. Address for Service. This field is mandatory. Lot or Concession addr"
                    SCRIPT on initialize (formcalc):
                      | $.font.fill.color.value="0,0,255";
                    SCRIPT on change (javascript):
                      | if(this.rawValue == "2"){
                      | lotConcession.presence = "visible"
                      | standadrdAddr.presence = "hidden"
                      | xfa.host.resetData(standadrdAddr.somExpression)
                      | }
                      | else{
                      | standadrdAddr.presence = "hidden"
                      | xfa.host.resetData(standadrdAddr.somExpression)
                      | lotConcession.presence = "hidden"
                      | xfa.host.resetData(lotConcession.somExpression)
                      | }
                  SECTION standadrdAddr
                    FIELD streetNo; type=textEdit; label="Street Number *"; maxChars=6; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Individual. Address for Service. Standard Address. Street Number. This fie"
                    FIELD streetName; type=textEdit; label="Street Name *"; maxChars=45; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Individual. Address for Service. Standard Address. Street Name. This field"
                    FIELD unitNo; type=textEdit; label="Unit Number"; maxChars=8; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Individual. Address for Service. Standard Address. Unit Number."
                    FIELD city; type=textEdit; label="City/Town *"; maxChars=45; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Individual. Address for Service. Standard Address. City or Town. This fiel"
                    FIELD province; type=textEdit; label="Province"; access=readOnly; maxChars=30; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Individual. Address for Service. Standard Address. Province."
                    FIELD postalCode; type=textEdit; label="Postal Code *"; maxChars=7
                      SCRIPT on exit (javascript):
                        | controller.validatePostalCodeExit(xfa.event)
                      SCRIPT on ready (javascript):
                        | this.assist.toolTip.value="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Individual. Address for Service. Standard Address. Postal Code.\n" + controller.iMessag
                    FIELD country; type=textEdit; label="Country"; access=readOnly; maxChars=30; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Individual. Address for Service. Standard Address. Country"
                  SECTION lotConcession
                    FIELD line1; type=textEdit; label="Address Line 1 *"; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Individual. Address for Service. Lot or Concession address. Address Line 1"
                    FIELD line2; type=textEdit; label="Address Line 2"; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Individual. Address for Service. Lot or Concession address. Address Line 2"
                    FIELD city; type=textEdit; label="City/Town *"; maxChars=45; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Individual. Address for Service. Lot or Concession address. City or Town. "
                    FIELD province; type=textEdit; label="Province"; access=readOnly; maxChars=30; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Individual. Address for Service. Province."
                    FIELD postalCode; type=textEdit; label="Postal Code *"; maxChars=7
                      SCRIPT on exit (javascript):
                        | controller.validatePostalCodeExit(xfa.event)
                      SCRIPT on ready (javascript):
                        | this.assist.toolTip.value="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Individual. Address for Service. Postal Code.\n" + controller.iMessage(["mgs6E"])+" "+ 
                    FIELD country; type=textEdit; label="Country"; access=readOnly; maxChars=30; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Individual. Address for Service. Lot or Concession address. Country"
                SECTION _extra [presence=inactive]
                  FIELD can; type=checkButton; label="Canada"; options=[canada | ]; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Individual. Address for Service. Country. This field is mandatory. Canada."
                    SCRIPT on initialize (formcalc):
                      | $.font.fill.color.value="0,0,255";
                    SCRIPT on change (javascript):
                      | if(this.rawValue == "canada"){
                      | canada.presence = "visible"
                      | xfa.host.setFocus(canada.standard);
                      | usa.presence = "hidden"
                      | xfa.host.resetData(usa.somExpression);
                      | international.presence = "hidden"
                      | xfa.host.resetData(international.somExpression);
                      | }
                      | else{
                      | canada.presence = "hidden"
                      | canada.standadrdAddr.presence = "hidden"
                      | canada.lotConcession.presence = "hidden"
                      | xfa.host.resetData(canada.somExpression);
                      | }
                  FIELD us; type=checkButton; label="U.S.A."; options=[usa | ]; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Individual. Address for Service. Country. This field is mandatory. U.S.A."
                    SCRIPT on initialize (formcalc):
                      | $.font.fill.color.value="0,0,255";
                    SCRIPT on change (javascript):
                      | if(this.rawValue == "usa"){
                      | usa.presence = "visible"
                      | xfa.host.setFocus(usa.streetNo);
                      | canada.presence = "hidden"
                      | canada.standadrdAddr.presence = "hidden"
                      | canada.lotConcession.presence = "hidden"
                      | xfa.host.resetData(canada.somExpression);
                      | international.presence = "hidden"
                      | xfa.host.resetData(international.somExpression);
                      | }
                      | else{
                      | usa.presence = "hidden"
                      | xfa.host.resetData(usa.somExpression);
                      | }
                  FIELD intern; type=checkButton; label="International"; options=[international | ]; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Individual. Address for Service. Country. This field is mandatory. International"
                    SCRIPT on initialize (formcalc):
                      | $.font.fill.color.value="0,0,255";
                    SCRIPT on change (javascript):
                      | if(this.rawValue == "international"){
                      | international.presence = "visible"
                      | xfa.host.setFocus(international.line1);
                      | canada.presence = "hidden"
                      | canada.standadrdAddr.presence = "hidden"
                      | canada.lotConcession.presence = "hidden"
                      | xfa.host.resetData(canada.somExpression);
                      | usa.presence = "hidden"
                      | xfa.host.resetData(usa.somExpression);
                      | }
                      | else{
                      | international.presence = "hidden"
                      | xfa.host.resetData(international.somExpression);
                      | }
                  SECTION usa
                    FIELD streetNo; type=textEdit; label="Street Number *"; maxChars=6
                      SCRIPT on exit (javascript):
                        | var r = new RegExp("^[A-Za-z' '\àâçéèêëîïôûùüÿñæœ\0-9\'\-]*$");
                        | var result = r.test(this.rawValue);
                        | if(this.rawValue!=null){
                        | if ( result != true )
                        | {
                        | xfa.host.messageBox( "Street Number field format is invalid." );
                        | xfa.host.setFocus(this);
                        | this.rawValue="";
                        | }
                        | }
                      SCRIPT on ready (javascript):
                        | //if(this.parent.index=="0"){
                        | //this.assist.toolTip.value ="Section 7. Director " + (this.parent.parent.index + 1) + ". Address for Service. Street Number. This field is mandatory.";
                        | //}
                        | //else{
                        | this.assist.toolTip.value ="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Individual. Address for Service. Country. U.S.A. Street Number. This field is mandator
                        | //}
                    FIELD streetName; type=textEdit; label="Street Name *"; maxChars=45
                      SCRIPT on exit (javascript):
                        | var r = new RegExp("^[A-Za-z' '\àâçéèêëîïôûùüÿñæœ\0-9\'\-]*$");
                        | var result = r.test(this.rawValue);
                        | if(this.rawValue!=null){
                        | if ( result != true )
                        | {
                        | xfa.host.messageBox( "Street Name field format is invalid." );
                        | xfa.host.setFocus(this);
                        | this.rawValue="";
                        | }
                        | }
                      SCRIPT on ready (javascript):
                        | //if(this.parent.index=="0"){
                        | //this.assist.toolTip.value ="Section 7. Director " + (this.parent.parent.index + 1) + ". Address for Service. Street Name. This field is mandatory.";
                        | //}
                        | //else{
                        | this.assist.toolTip.value ="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Individual. Address for Service. Country. U.S.A. This field is mandatory.";
                        | //}
                    FIELD unitNo; type=textEdit; label="Unit Number"; maxChars=8
                      SCRIPT on ready (javascript):
                        | //if(this.parent.index=="0"){
                        | //this.assist.toolTip.value ="Section 7. Director " + (this.parent.parent.index + 1) + ". Address for Service. Unit Number.";
                        | //}
                        | //else{
                        | this.assist.toolTip.value ="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Individual. Address for Service. Country. U.S.A. Unit Number.";
                        | //}
                    FIELD city; type=textEdit; label="City/Town *"; maxChars=45
                      SCRIPT on exit (javascript):
                        | var r = new RegExp("^[A-Za-z' '\àâçéèêëîïôûùüÿñæœ\'\-]*$");
                        | var result = r.test(this.rawValue);
                        | if(this.rawValue!=null){
                        | if ( result != true )
                        | {
                        | xfa.host.messageBox( "City\Town field format is invalid." );
                        | xfa.host.setFocus(this);
                        | this.rawValue="";
                        | }
                        | }
                      SCRIPT on ready (javascript):
                        | //if(this.parent.index=="0"){
                        | //this.assist.toolTip.value ="Section 7. Director " + (this.parent.parent.index + 1) + ". Address for Service. City or Town. This field is mandatory.";
                        | //}
                        | //else{
                        | this.assist.toolTip.value ="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Individual. Address for Service. Country. U.S.A. City or Town. This field is mandatory
                        | //}
                    FIELD state; type=choiceList; label="State *"; options=[Alabama | Alaska | Arizona | Arkansas | California | Colorado | Connecticut | Delaware | District of Columbia | Florida | Georgia | Hawaii | Idaho | Illinois | Indiana | Iowa | Kansas | Kentucky | Louisiana | Maine | Maryland | Massachusetts | Michigan | Minnesota | Mississippi | Missouri | Montana | Nebraska | Nevada | New Hampshire...]
                      SCRIPT on exit (javascript):
                        | var r = new RegExp("^[A-Za-z' '\àâçéèêëîïôûùüÿñæœ\'\-]*$");
                        | var result = r.test(this.rawValue);
                        | if(this.rawValue!=null){
                        | if ( result != true )
                        | {
                        | xfa.host.messageBox( "State field format is invalid." );
                        | xfa.host.setFocus(this);
                        | this.rawValue="";
                        | }
                        | }
                      SCRIPT on ready (javascript):
                        | //if(this.parent.index=="0"){
                        | //this.assist.toolTip.value ="Section 7. Director " + (this.parent.parent.index + 1) + ". Address for Service. State. Select State from the drop down menu. This field is mandatory.";
                        | //}
                        | //else{
                        | this.assist.toolTip.value ="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Individual. Address for Service. Country. U.S.A. State. Select State from the drop dow
                        | //}
                    FIELD zipCode; type=textEdit; label="Zip Code *"
                      SCRIPT on exit (javascript):
                        | var pattern1 = /^\d{5}(\d{4})?$/;
                        | var pattern2 = /^\d{5}(-\d{4})?$/;
                        | var inputValue = xfa.event.target.rawValue
                        | if(inputValue!=null)
                        | {
                        | // if input value does NOT match the pattern, display a validation message
                        | if(!inputValue.match(pattern1) && !inputValue.match(pattern2))
                        | {
                        | app.alert("Zip code field format is invalid.For example the format should be: 12345 or 12345-6789.");
                        | xfa.host.setFocus(this);
                        | this.rawValue="";
                        | }
                        | else
                        | {
                        | if (inputValue.length == 9 )
                        | {
                        | xfa.event.target.rawValue = inputValue.substring(0,5) + "-" + inputValue.substring(5,9);
                        | }
                        | }
                        | }
                      SCRIPT on ready (javascript):
                        | //if(this.parent.index=="0"){
                        | //this.assist.toolTip.value ="Section 7. Director " + (this.parent.parent.index + 1) + ". Address for Service. Zip Code. This field is mandatory.";
                        | //}
                        | //else{
                        | this.assist.toolTip.value ="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Individual. Address for Service. Country. U.S.A. Zip Code. This field is mandatory.";
                        | //}
                    FIELD country; type=textEdit; label="Country"; access=readOnly; maxChars=30
                      SCRIPT on ready (javascript):
                        | //if(this.parent.index=="0"){
                        | //this.assist.toolTip.value ="Section 7. Director " + (this.parent.parent.index + 1) + ". Address for Service. Country. United Stetes.";
                        | //}
                        | //else{
                        | this.assist.toolTip.value ="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Individual. Address for Service. Country. U.S.A. Country. United Stetes.";
                        | //}
                  SECTION international
                    FIELD line1; type=textEdit; label="Address line 1 *"
                      SCRIPT on ready (javascript):
                        | //if(this.parent.index=="0"){
                        | //this.assist.toolTip.value ="Section 7. Director " + (this.parent.parent.index + 1) + ". Address for Service. Address Line 1. This field is mandatory.";
                        | //}
                        | //else{
                        | this.assist.toolTip.value ="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Individual. Address for Service. Country. International. Address Line 1. This field is
                        | //}
                    FIELD line2; type=textEdit; label="Address line 2"
                      SCRIPT on ready (javascript):
                        | //if(this.parent.index=="0"){
                        | //this.assist.toolTip.value ="Section 7. Director " + (this.parent.parent.index + 1) + ". Address for Service. Address Line 2.";
                        | //}
                        | //else{
                        | this.assist.toolTip.value ="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Individual. Address for Service. Country. International. Address Line 2.";
                        | //}
                    FIELD city; type=textEdit; label="City/Town *"; maxChars=45
                      SCRIPT on exit (javascript):
                        | var r = new RegExp("^[A-Za-z' '\àâçéèêëîïôûùüÿñæœ\'\-]*$");
                        | var result = r.test(this.rawValue);
                        | if(this.rawValue!=null){
                        | if ( result != true )
                        | {
                        | xfa.host.messageBox( "City\Town field format is invalid." );
                        | xfa.host.setFocus(this);
                        | this.rawValue="";
                        | }
                        | }
                      SCRIPT on ready (javascript):
                        | //if(this.parent.index=="0"){
                        | //this.assist.toolTip.value ="Section 7. Director " + (this.parent.parent.index + 1) + ". Address for Service. City or Town. This field is mandatory.";
                        | //}
                        | //else{
                        | this.assist.toolTip.value ="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Individual. Address for Service. Country. International. City or Town. This field is m
                        | //}
                    FIELD region; type=textEdit; label="Region *"
                      SCRIPT on exit (javascript):
                        | var r = new RegExp("^[A-Za-z' '\àâçéèêëîïôûùüÿñæœ\'\-]*$");
                        | var result = r.test(this.rawValue);
                        | if(this.rawValue!=null){
                        | if ( result != true )
                        | {
                        | xfa.host.messageBox( "Region field format is invalid." );
                        | xfa.host.setFocus(this);
                        | this.rawValue="";
                        | }
                        | }
                      SCRIPT on ready (javascript):
                        | //if(this.parent.index=="0"){
                        | //this.assist.toolTip.value ="Section 7. Director " + (this.parent.parent.index + 1) + ". Address for Service. Region. This field is mandatory.";
                        | //}
                        | //else{
                        | this.assist.toolTip.value ="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Individual. Address for Service. Country. International. Region. This field is mandato
                        | //}
                    FIELD postal; type=textEdit; label="Postal Code *"
                      SCRIPT on ready (javascript):
                        | //if(this.parent.index=="0"){
                        | //this.assist.toolTip.value ="Section 7. Director " + (this.parent.parent.index + 1) + ". Address for Service. Postal Code. This field is mandatory.";
                        | //}
                        | //else{
                        | this.assist.toolTip.value ="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Individual. Address for Service. Country. International. Postal Code. This field is ma
                        | //}
                    FIELD country; type=choiceList; label="Country *"; options=[Afghanistan | Aland Islands | Albania | Algeria | American Samoa | Andorra | Angola | Anguilla | Antarctica | Antigua And Barbuda | Argentina | Armenia | Aruba | Australia | Austria | Azerbaijan | Bahamas | Bahrain | Bangladesh | Barbados | Belarus | Belgium | Belize | Benin | Bermuda | Bhutan | Bolivia, Plurinational State Of | Bonaire, Sint Eustatius And Saba | Bosnia And Herzegovina | Botswana...]
                      SCRIPT on exit (javascript):
                        | /*
                        | var r = new RegExp("^[A-Za-z' '\àâçéèêëîïôûùüÿñæœ\'\-,)(]*$");
                        | var result = r.test(this.rawValue);
                        | if(this.rawValue!=null){
                        | if ( result != true )
                        | {
                        | xfa.host.messageBox( "Country field format is invalid." );
                        | xfa.host.setFocus(this);
                        | this.rawValue="";
                        | }
                        | }
                        | */
                      SCRIPT on ready (javascript):
                        | //if(this.parent.index=="0"){
                        | //this.assist.toolTip.value ="Section 7. Director " + (this.parent.parent.index + 1) + ". Address for Service. Country. This field is mandatory.";
                        | //}
                        | //else{
                        | this.assist.toolTip.value ="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Individual. Address for Service. Country. International. Country. Select Country from 
                        | //}
            SECTION b2
              FIELD corpName; type=textEdit; label="Corporation Name/Entity Name *"; maxChars=175; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Corporation or Registered Entity. Corporation Name or Entity Name. This field is"
              FIELD corpNo; type=textEdit; label="Ontario Corporation Number (OCN)/Business Identification Number (BIN) *"; maxChars=10; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Corporation or Registered Entity. Ontario Corporation Number (OCN) or Business I"
                SCRIPT on change (javascript):
                  | form1.variables.controller.validNumberB(xfa.event)
                SCRIPT on exit (javascript):
                  | /*
                  | if (this.rawValue!=null){
                  | var pattern = /^([a-znikon el14A-Z0-9]){10}$/;
                  | var input= this.rawValue;
                  | if (!input.match(pattern)){
                  | xfa.host.messageBox("Ontario Corporation Number must be 10 digits.");
                  | this.rawValue="";
                  | xfa.host.setFocus(this.name);
                  | }
                  | }
                  | */
              SECTION addressService
                TEXT "Address for Service *"
                SECTION canada
                  FIELD standard; type=checkButton; label="Standard Address"; options=[1 | ]; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Corporation or Registered Entity. Address for Service. This field is manda"
                    SCRIPT on initialize (formcalc):
                      | $.font.fill.color.value="0,0,255";
                    SCRIPT on change (javascript):
                      | if(this.rawValue == "1"){
                      | standadrdAddr.presence = "visible"
                      | lotConcession.presence = "hidden"
                      | xfa.host.resetData(lotConcession.somExpression)
                      | }
                      | else{
                      | standadrdAddr.presence = "hidden"
                      | xfa.host.resetData(standadrdAddr.somExpression)
                      | lotConcession.presence = "hidden"
                      | xfa.host.resetData(lotConcession.somExpression)
                      | }
                  FIELD concession; type=checkButton; label="Lot/Concession Address"; options=[2 | ]; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Corporation or Registered Entity. Address for Service. This field is manda"
                    SCRIPT on initialize (formcalc):
                      | $.font.fill.color.value="0,0,255";
                    SCRIPT on change (javascript):
                      | if(this.rawValue == "2"){
                      | lotConcession.presence = "visible"
                      | standadrdAddr.presence = "hidden"
                      | xfa.host.resetData(standadrdAddr.somExpression)
                      | }
                      | else{
                      | standadrdAddr.presence = "hidden"
                      | xfa.host.resetData(standadrdAddr.somExpression)
                      | lotConcession.presence = "hidden"
                      | xfa.host.resetData(lotConcession.somExpression)
                      | }
                  SECTION standadrdAddr
                    FIELD streetNo; type=textEdit; label="Street Number *"; maxChars=6; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Corporation or Registered Entity. Address for Service. Standard address. S"
                    FIELD streetName; type=textEdit; label="Street Name *"; maxChars=45; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Corporation or Registered Entity. Address for Service. Standard address. S"
                    FIELD unitNo; type=textEdit; label="Unit Number"; maxChars=8; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Corporation or Registered Entity. Address for Service. Standard address. U"
                    FIELD city; type=textEdit; label="City/Town *"; maxChars=45; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Corporation or Registered Entity. Address for Service. Standard address. C"
                    FIELD province; type=textEdit; label="Province"; access=readOnly; maxChars=30; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Corporation or Registered Entity. Address for Service. Standard address. P"
                    FIELD postalCode; type=textEdit; label="Postal Code *"; maxChars=7
                      SCRIPT on exit (javascript):
                        | controller.validatePostalCodeExit(xfa.event)
                      SCRIPT on ready (javascript):
                        | this.assist.toolTip.value="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Corporation or Registered Entity. Address for Service. Standard address. Postal Code.\n
                    FIELD country; type=textEdit; label="Country"; access=readOnly; maxChars=30; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Corporation or Registered Entity. Address for Service. Standard address. C"
                  SECTION lotConcession
                    FIELD line1; type=textEdit; label="Address Line 1 *"; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Corporation or Registered Entity. Address for Service. Lot or Concession a"
                    FIELD line2; type=textEdit; label="Address Line 2"; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Corporation or Registered Entity. Address for Service. Lot or Concession a"
                    FIELD city; type=textEdit; label="City/Town *"; maxChars=45; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Corporation or Registered Entity. Address for Service. Lot or Concession a"
                    FIELD province; type=textEdit; label="Province"; access=readOnly; maxChars=30; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Corporation or Registered Entity. Address for Service. Lot or Concession a"
                    FIELD postalCode; type=textEdit; label="Postal Code *"; maxChars=7
                      SCRIPT on exit (javascript):
                        | controller.validatePostalCodeExit(xfa.event)
                      SCRIPT on ready (javascript):
                        | this.assist.toolTip.value="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Corporation or Registered Entity. Address for Service. Lot or Concession address. Posta
                    FIELD country; type=textEdit; label="Country"; access=readOnly; maxChars=30; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Corporation or Registered Entity. Address for Service. Lot or Concession a"
              TEXT "Individual Representing the Corporation or Registered Entity"
              TEXT "Full Name"
              FIELD firstName; type=textEdit; label="First Name *"; maxChars=30; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Corporation or Registered Entity. Individual Representing the Corporation "
              FIELD middleName; type=textEdit; label="Middle Name"; maxChars=13; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Corporation or Registered Entity. Individual Representing the Corporation "
              FIELD lastName; type=textEdit; label="Last Name *"; maxChars=50; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Corporation or Registered Entity. Individual Representing the Corporation "
              FIELD position; type=textEdit; label="Position *"; maxChars=120; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Corporation or Registered Entity. Individual Representing the Corporation "
            SECTION b3
              FIELD name; type=textEdit; label="Name *"; maxChars=120; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Other. Name. This field is mandatory."
              SECTION addressService
                TEXT "Address for Service *"
                SECTION canada
                  FIELD standard; type=checkButton; label="Standard Address"; options=[1 | ]; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Other. Address for Service. This field is mandatory. Standard address."
                    SCRIPT on initialize (formcalc):
                      | $.font.fill.color.value="0,0,255";
                    SCRIPT on change (javascript):
                      | if(this.rawValue == "1"){
                      | standadrdAddr.presence = "visible"
                      | lotConcession.presence = "hidden"
                      | xfa.host.resetData(lotConcession.somExpression)
                      | }
                      | else{
                      | standadrdAddr.presence = "hidden"
                      | xfa.host.resetData(standadrdAddr.somExpression)
                      | lotConcession.presence = "hidden"
                      | xfa.host.resetData(lotConcession.somExpression)
                      | }
                  FIELD concession; type=checkButton; label="Lot/Concession Address"; options=[2 | ]; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Other. Address for Service. This field is mandatory. Lot or Concession add"
                    SCRIPT on initialize (formcalc):
                      | $.font.fill.color.value="0,0,255";
                    SCRIPT on change (javascript):
                      | if(this.rawValue == "2"){
                      | lotConcession.presence = "visible"
                      | standadrdAddr.presence = "hidden"
                      | xfa.host.resetData(standadrdAddr.somExpression)
                      | }
                      | else{
                      | standadrdAddr.presence = "hidden"
                      | xfa.host.resetData(standadrdAddr.somExpression)
                      | lotConcession.presence = "hidden"
                      | xfa.host.resetData(lotConcession.somExpression)
                      | }
                  SECTION standadrdAddr
                    FIELD streetNo; type=textEdit; label="Street Number *"; maxChars=6; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Other. Address for Service. Standard address. Street Number. This field is"
                    FIELD streetName; type=textEdit; label="Street Name *"; maxChars=45; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Other. Address for Service. Standard address. Street Name. This field is m"
                    FIELD unitNo; type=textEdit; label="Unit Number"; maxChars=8; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Other. Address for Service. Standard address. Unit Number."
                    FIELD city; type=textEdit; label="City/Town *"; maxChars=45; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Other. Address for Service. Standard address. City or Town. This field is "
                    FIELD province; type=textEdit; label="Province"; access=readOnly; maxChars=30; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Other. Address for Service. Standard address. Province."
                    FIELD postalCode; type=textEdit; label="Postal Code *"; maxChars=7
                      SCRIPT on exit (javascript):
                        | controller.validatePostalCodeExit(xfa.event)
                      SCRIPT on ready (javascript):
                        | this.assist.toolTip.value="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Other. Address for Service. Standard address. Postal Code.\n" + controller.iMessage(["m
                    FIELD country; type=textEdit; label="Country"; access=readOnly; maxChars=30; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Other. Address for Service. Standard address. Country"
                  SECTION lotConcession
                    FIELD line1; type=textEdit; label="Address Line 1 *"; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Other. Address for Service. Lot or Concession address. Address Line 1. Thi"
                    FIELD line2; type=textEdit; label="Address Line 2"; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Other. Address for Service. Lot or Concession address. Address Line 2."
                    FIELD city; type=textEdit; label="City/Town *"; maxChars=45; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Other. Address for Service. Lot or Concession address. City or Town. This "
                    FIELD province; type=textEdit; label="Province"; access=readOnly; maxChars=30; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Other. Address for Service. Lot or Concession address. Province."
                    FIELD postalCode; type=textEdit; label="Postal Code *"; maxChars=7
                      SCRIPT on exit (javascript):
                        | controller.validatePostalCodeExit(xfa.event)
                      SCRIPT on ready (javascript):
                        | this.assist.toolTip.value="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Other. Address for Service. Lot or Concession address. Postal Code.\n" + controller.iMe
                    FIELD country; type=textEdit; label="Country"; access=readOnly; maxChars=30; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Other. Address for Service. Lot or Concession address. Country."
                SECTION _extra [presence=inactive]
                  FIELD can; type=checkButton; label="Canada"; options=[canada | ]; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Other. Address for Service. Country. This field is mandatory. Canada."
                    SCRIPT on initialize (formcalc):
                      | $.font.fill.color.value="0,0,255";
                    SCRIPT on change (javascript):
                      | if(this.rawValue == "canada"){
                      | canada.presence = "visible"
                      | xfa.host.setFocus(canada.standard);
                      | usa.presence = "hidden"
                      | xfa.host.resetData(usa.somExpression);
                      | international.presence = "hidden"
                      | xfa.host.resetData(international.somExpression);
                      | }
                      | else{
                      | canada.presence = "hidden"
                      | canada.standadrdAddr.presence = "hidden"
                      | canada.lotConcession.presence = "hidden"
                      | xfa.host.resetData(canada.somExpression);
                      | }
                  FIELD us; type=checkButton; label="U.S.A."; options=[usa | ]; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Other. Address for Service. Country. This field is mandatory. U.S.A."
                    SCRIPT on initialize (formcalc):
                      | $.font.fill.color.value="0,0,255";
                    SCRIPT on change (javascript):
                      | if(this.rawValue == "usa"){
                      | usa.presence = "visible"
                      | xfa.host.setFocus(usa.streetNo);
                      | canada.presence = "hidden"
                      | canada.standadrdAddr.presence = "hidden"
                      | canada.lotConcession.presence = "hidden"
                      | xfa.host.resetData(canada.somExpression);
                      | international.presence = "hidden"
                      | xfa.host.resetData(international.somExpression);
                      | }
                      | else{
                      | usa.presence = "hidden"
                      | xfa.host.resetData(usa.somExpression);
                      | }
                  FIELD intern; type=checkButton; label="International"; options=[international | ]; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Other. Address for Service. Country. This field is mandatory. Internationa"
                    SCRIPT on initialize (formcalc):
                      | $.font.fill.color.value="0,0,255";
                    SCRIPT on change (javascript):
                      | if(this.rawValue == "international"){
                      | international.presence = "visible"
                      | xfa.host.setFocus(international.line1);
                      | canada.presence = "hidden"
                      | canada.standadrdAddr.presence = "hidden"
                      | canada.lotConcession.presence = "hidden"
                      | xfa.host.resetData(canada.somExpression);
                      | usa.presence = "hidden"
                      | xfa.host.resetData(usa.somExpression);
                      | }
                      | else{
                      | international.presence = "hidden"
                      | xfa.host.resetData(international.somExpression);
                      | }
                  SECTION usa
                    FIELD streetNo; type=textEdit; label="Street Number *"; maxChars=6
                      SCRIPT on exit (javascript):
                        | var r = new RegExp("^[A-Za-z' '\àâçéèêëîïôûùüÿñæœ\0-9\'\-]*$");
                        | var result = r.test(this.rawValue);
                        | if(this.rawValue!=null){
                        | if ( result != true )
                        | {
                        | xfa.host.messageBox( "Street Number field format is invalid." );
                        | xfa.host.setFocus(this);
                        | this.rawValue="";
                        | }
                        | }
                      SCRIPT on ready (javascript):
                        | //if(this.parent.index=="0"){
                        | //this.assist.toolTip.value ="Section 7. Director " + (this.parent.parent.index + 1) + ". Address for Service. Street Number. This field is mandatory.";
                        | //}
                        | //else{
                        | this.assist.toolTip.value ="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Other. Address for Service. Country. U.S.A. Street Number. This field is mandatory.";
                        | //}
                    FIELD streetName; type=textEdit; label="Street Name *"; maxChars=45
                      SCRIPT on exit (javascript):
                        | var r = new RegExp("^[A-Za-z' '\àâçéèêëîïôûùüÿñæœ\0-9\'\-]*$");
                        | var result = r.test(this.rawValue);
                        | if(this.rawValue!=null){
                        | if ( result != true )
                        | {
                        | xfa.host.messageBox( "Street Name field format is invalid." );
                        | xfa.host.setFocus(this);
                        | this.rawValue="";
                        | }
                        | }
                      SCRIPT on ready (javascript):
                        | //if(this.parent.index=="0"){
                        | //this.assist.toolTip.value ="Section 7. Director " + (this.parent.parent.index + 1) + ". Address for Service. Street Name. This field is mandatory.";
                        | //}
                        | //else{
                        | this.assist.toolTip.value ="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Other. Address for Service. Country. U.S.A. Street Name. This field is mandatory.";
                        | //}
                    FIELD unitNo; type=textEdit; label="Unit Number"; maxChars=8
                      SCRIPT on ready (javascript):
                        | //if(this.parent.index=="0"){
                        | //this.assist.toolTip.value ="Section 7. Director " + (this.parent.parent.index + 1) + ". Address for Service. Unit Number.";
                        | //}
                        | //else{
                        | this.assist.toolTip.value ="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Other. Address for Service. Country. U.S.A. Unit Number.";
                        | //}
                    FIELD city; type=textEdit; label="City/Town *"; maxChars=45
                      SCRIPT on exit (javascript):
                        | var r = new RegExp("^[A-Za-z' '\àâçéèêëîïôûùüÿñæœ\'\-]*$");
                        | var result = r.test(this.rawValue);
                        | if(this.rawValue!=null){
                        | if ( result != true )
                        | {
                        | xfa.host.messageBox( "City\Town field format is invalid." );
                        | xfa.host.setFocus(this);
                        | this.rawValue="";
                        | }
                        | }
                      SCRIPT on ready (javascript):
                        | //if(this.parent.index=="0"){
                        | //this.assist.toolTip.value ="Section 7. Director " + (this.parent.parent.index + 1) + ". Address for Service. City or Town. This field is mandatory.";
                        | //}
                        | //else{
                        | this.assist.toolTip.value ="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Other. Address for Service. Country. U.S.A. City or Town. This field is mandatory.";
                        | //}
                    FIELD state; type=choiceList; label="State *"; options=[Alabama | Alaska | Arizona | Arkansas | California | Colorado | Connecticut | Delaware | District of Columbia | Florida | Georgia | Hawaii | Idaho | Illinois | Indiana | Iowa | Kansas | Kentucky | Louisiana | Maine | Maryland | Massachusetts | Michigan | Minnesota | Mississippi | Missouri | Montana | Nebraska | Nevada | New Hampshire...]
                      SCRIPT on exit (javascript):
                        | var r = new RegExp("^[A-Za-z' '\àâçéèêëîïôûùüÿñæœ\'\-]*$");
                        | var result = r.test(this.rawValue);
                        | if(this.rawValue!=null){
                        | if ( result != true )
                        | {
                        | xfa.host.messageBox( "State field format is invalid." );
                        | xfa.host.setFocus(this);
                        | this.rawValue="";
                        | }
                        | }
                      SCRIPT on ready (javascript):
                        | //if(this.parent.index=="0"){
                        | //this.assist.toolTip.value ="Section 7. Director " + (this.parent.parent.index + 1) + ". Address for Service. State. Select State from the drop down menu. This field is mandatory.";
                        | //}
                        | //else{
                        | this.assist.toolTip.value ="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Other. Address for Service. Country. U.S.A. State. Select State from the drop down men
                        | //}
                    FIELD zipCode; type=textEdit; label="Zip Code *"
                      SCRIPT on exit (javascript):
                        | var pattern1 = /^\d{5}(\d{4})?$/;
                        | var pattern2 = /^\d{5}(-\d{4})?$/;
                        | var inputValue = xfa.event.target.rawValue
                        | if(inputValue!=null)
                        | {
                        | // if input value does NOT match the pattern, display a validation message
                        | if(!inputValue.match(pattern1) && !inputValue.match(pattern2))
                        | {
                        | app.alert("Zip code field format is invalid.For example the format should be: 12345 or 12345-6789.");
                        | xfa.host.setFocus(this);
                        | this.rawValue="";
                        | }
                        | else
                        | {
                        | if (inputValue.length == 9 )
                        | {
                        | xfa.event.target.rawValue = inputValue.substring(0,5) + "-" + inputValue.substring(5,9);
                        | }
                        | }
                        | }
                      SCRIPT on ready (javascript):
                        | //if(this.parent.index=="0"){
                        | //this.assist.toolTip.value ="Section 7. Director " + (this.parent.parent.index + 1) + ". Address for Service. Zip Code. This field is mandatory.";
                        | //}
                        | //else{
                        | this.assist.toolTip.value ="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Other. Address for Service. Country. U.S.A. Zip Code. This field is mandatory.";
                        | //}
                    FIELD country; type=textEdit; label="Country"; access=readOnly; maxChars=30
                      SCRIPT on ready (javascript):
                        | //if(this.parent.index=="0"){
                        | //this.assist.toolTip.value ="Section 7. Director " + (this.parent.parent.index + 1) + ". Address for Service. Country. United Stetes.";
                        | //}
                        | //else{
                        | this.assist.toolTip.value ="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Other. Address for Service. Country. U.S.A. Country. United Stetes.";
                        | //}
                  SECTION international
                    FIELD line1; type=textEdit; label="Address line 1 *"
                      SCRIPT on ready (javascript):
                        | //if(this.parent.index=="0"){
                        | //this.assist.toolTip.value ="Section 7. Director " + (this.parent.parent.index + 1) + ". Address for Service. Address Line 1. This field is mandatory.";
                        | //}
                        | //else{
                        | this.assist.toolTip.value ="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Other. Address for Service. Country. International. Address Line 1. This field is mand
                        | //}
                    FIELD line2; type=textEdit; label="Address line 2"
                      SCRIPT on ready (javascript):
                        | //if(this.parent.index=="0"){
                        | //this.assist.toolTip.value ="Section 7. Director " + (this.parent.parent.index + 1) + ". Address for Service. Address Line 2.";
                        | //}
                        | //else{
                        | this.assist.toolTip.value ="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Other. Address for Service. Country. International. Address Line 2.";
                        | //}
                    FIELD city; type=textEdit; label="City/Town *"; maxChars=45
                      SCRIPT on exit (javascript):
                        | var r = new RegExp("^[A-Za-z' '\àâçéèêëîïôûùüÿñæœ\'\-]*$");
                        | var result = r.test(this.rawValue);
                        | if(this.rawValue!=null){
                        | if ( result != true )
                        | {
                        | xfa.host.messageBox( "City\Town field format is invalid." );
                        | xfa.host.setFocus(this);
                        | this.rawValue="";
                        | }
                        | }
                      SCRIPT on ready (javascript):
                        | //if(this.parent.index=="0"){
                        | //this.assist.toolTip.value ="Section 7. Director " + (this.parent.parent.index + 1) + ". Address for Service. City or Town. This field is mandatory.";
                        | //}
                        | //else{
                        | this.assist.toolTip.value ="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Other. Address for Service. Country. International. City or Town. This field is mandat
                        | //}
                    FIELD region; type=textEdit; label="Region *"
                      SCRIPT on exit (javascript):
                        | var r = new RegExp("^[A-Za-z' '\àâçéèêëîïôûùüÿñæœ\'\-]*$");
                        | var result = r.test(this.rawValue);
                        | if(this.rawValue!=null){
                        | if ( result != true )
                        | {
                        | xfa.host.messageBox( "Region field format is invalid." );
                        | xfa.host.setFocus(this);
                        | this.rawValue="";
                        | }
                        | }
                      SCRIPT on ready (javascript):
                        | //if(this.parent.index=="0"){
                        | //this.assist.toolTip.value ="Section 7. Director " + (this.parent.parent.index + 1) + ". Address for Service. Region. This field is mandatory.";
                        | //}
                        | //else{
                        | this.assist.toolTip.value ="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Other. Address for Service. Country. International. Region. This field is mandatory.";
                        | //}
                    FIELD postal; type=textEdit; label="Postal Code *"
                      SCRIPT on ready (javascript):
                        | //if(this.parent.index=="0"){
                        | //this.assist.toolTip.value ="Section 7. Director " + (this.parent.parent.index + 1) + ". Address for Service. Postal Code. This field is mandatory.";
                        | //}
                        | //else{
                        | this.assist.toolTip.value ="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Other. Address for Service. Country. International. Postal Code. This field is mandato
                        | //}
                    FIELD country; type=choiceList; label="Country *"; options=[Afghanistan | Aland Islands | Albania | Algeria | American Samoa | Andorra | Angola | Anguilla | Antarctica | Antigua And Barbuda | Argentina | Armenia | Aruba | Australia | Austria | Azerbaijan | Bahamas | Bahrain | Bangladesh | Barbados | Belarus | Belgium | Belize | Benin | Bermuda | Bhutan | Bolivia, Plurinational State Of | Bonaire, Sint Eustatius And Saba | Bosnia And Herzegovina | Botswana...]
                      SCRIPT on exit (javascript):
                        | /*
                        | var r = new RegExp("^[A-Za-z' '\àâçéèêëîïôûùüÿñæœ\'\-,)(]*$");
                        | var result = r.test(this.rawValue);
                        | if(this.rawValue!=null){
                        | if ( result != true )
                        | {
                        | xfa.host.messageBox( "Country field format is invalid." );
                        | xfa.host.setFocus(this);
                        | this.rawValue="";
                        | }
                        | }
                        | */
                      SCRIPT on ready (javascript):
                        | //if(this.parent.index=="0"){
                        | //this.assist.toolTip.value ="Section 7. Director " + (this.parent.parent.index + 1) + ". Address for Service. Country. This field is mandatory.";
                        | //}
                        | //else{
                        | this.assist.toolTip.value ="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Other. Address for Service. Country. International. Country. Select Country from drop 
                        | //}
              TEXT "Individual Representing the Entity"
              TEXT "Full Name"
              FIELD firstName; type=textEdit; label="First Name *"; maxChars=30; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Other. Individual Representing the Entity. Full Name. First Name. This fie"
              FIELD middleName; type=textEdit; label="Middle Name"; maxChars=13; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Other. Individual Representing the Entity. Full Name. Middle Name."
              FIELD lastName; type=textEdit; label="Last Name *"; maxChars=50; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Other. Individual Representing the Entity. Full Name. Last Name. This fiel"
              FIELD position; type=textEdit; label="Position *"; maxChars=120; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Other. Individual Representing the Entity. Position. This field is mandato"
        SECTION epca
          SECTION selection
            TEXT "Person authorizing amendment *"
            FIELD dir; type=checkButton; label="Director or Officer"; options=[1 | ]; help="Section 5. Authorization. Person authorizing amendment. This field is mandatory. Director or Officer"
              SCRIPT on initialize (formcalc):
                | $.font.fill.color.value="0,0,255";
              SCRIPT on change (javascript):
                | if(this.rawValue == "1"){
                | optA.presence = "visible";
                | optA.addressService.presence = "visible"
                | optA.addressService.canada.presence = "hidden"
                | optA.addressService.canada.standadrdAddr.presence = "hidden"
                | optA.addressService.canada.lotConcession.presence = "hidden"
                | optA.addressService.usa.presence = "hidden"
                | optA.addressService.international.presence = "hidden"
                | optB.presence = "hidden"
                | xfa.host.resetData(optB.somExpression)
                | optB.b1.presence = "hidden"
                | optB.b1.addressService.presence = "hidden"
                | optB.b1.addressService.canada.presence = "hidden"
                | optB.b1.addressService.canada.standadrdAddr.presence = "hidden"
                | optB.b1.addressService.canada.lotConcession.presence = "hidden"
                | optB.b2.presence = "hidden"
                | optB.b3.presence = "hidden"
                | optB.b3.addressService.presence = "hidden"
                | optB.b3.addressService.canada.presence = "hidden"
                | optB.b3.addressService.canada.standadrdAddr.presence = "hidden"
                | optB.b3.addressService.canada.lotConcession.presence = "hidden"
                | }
                | else{
                | optA.presence = "hidden";
                | xfa.host.resetData(optA.somExpression)
                | optA.addressService.presence = "visible"
                | optA.addressService.canada.presence = "hidden"
                | optA.addressService.canada.standadrdAddr.presence = "hidden"
                | optA.addressService.canada.lotConcession.presence = "hidden"
                | optA.addressService.usa.presence = "hidden"
                | optA.addressService.international.presence = "hidden"
                | optB.presence = "hidden";
                | xfa.host.resetData(optB.somExpression)
                | optB.b1.presence = "hidden"
                | optB.b1.addressService.presence = "hidden"
                | optB.b1.addressService.canada.presence = "hidden"
                | optB.b1.addressService.canada.standadrdAddr.presence = "hidden"
                | optB.b1.addressService.canada.lotConcession.presence = "hidden"
                | optB.b2.presence = "hidden"
                | optB.b3.presence = "hidden"
            FIELD poa; type=checkButton; label="Person Acting Under Power of Attorney"; options=[2 | ]; help="Section 5. Person authorizing amendment. This field is mandatory. Person Acting Under Power of Attorney"
              SCRIPT on initialize (formcalc):
                | $.font.fill.color.value="0,0,255";
              SCRIPT on change (javascript):
                | if(this.rawValue == "2"){
                | optA.presence = "hidden";
                | xfa.host.resetData(optA.somExpression)
                | optA.addressService.presence = "visible"
                | optA.addressService.canada.presence = "hidden"
                | optA.addressService.canada.standadrdAddr.presence = "hidden"
                | optA.addressService.canada.lotConcession.presence = "hidden"
                | optA.addressService.usa.presence = "hidden"
                | optA.addressService.international.presence = "hidden"
                | optB.presence = "visible";
                | optB.b1.presence = "hidden"
                | optB.b1.addressService.presence = "hidden"
                | optB.b1.addressService.canada.presence = "hidden"
                | optB.b1.addressService.canada.standadrdAddr.presence = "hidden"
                | optB.b1.addressService.canada.lotConcession.presence = "hidden"
                | // optB.b1.addressService.usa.presence = "hidden"
                | // optB.b1.addressService.international.presence = "hidden"
                | optB.b2.presence = "hidden"
                | optB.b3.presence = "hidden"
                | optB.b3.addressService.presence = "hidden"
                | optB.b3.addressService.canada.presence = "hidden"
                | optB.b3.addressService.canada.standadrdAddr.presence = "hidden"
                | optB.b3.addressService.canada.lotConcession.presence = "hidden"
                | // optB.b3.addressService.usa.presence = "hidden"
                | // optB.b3.addressService.international.presence = "hidden"
                | }
                | else{
                | optA.presence = "hidden";
                | xfa.host.resetData(optA.somExpression)
                | optA.addressService.presence = "visible"
                | optA.addressService.canada.presence = "hidden"
                | optA.addressService.canada.standadrdAddr.presence = "hidden"
                | optA.addressService.canada.lotConcession.presence = "hidden"
                | optA.addressService.usa.presence = "hidden"
                | optA.addressService.international.presence = "hidden"
                | optB.presence = "hidden";
                | xfa.host.resetData(optB.somExpression)
                | optB.b1.presence = "hidden"
                | optB.b1.addressService.presence = "hidden"
                | optB.b1.addressService.canada.presence = "hidden"
          SECTION optA
            TEXT "Full Name"
            FIELD firstName; type=textEdit; label="First Name *"; maxChars=30; help="Section 5. Person authorizing amendment. Director or Officer. Full Name. First Name. This field is mandatory."
            FIELD middleName; type=textEdit; label="Middle Name"; maxChars=13; help="Section 5. Person authorizing amendment. Director or Officer. Full Name. Middle Name."
            FIELD lastName; type=textEdit; label="Last Name *"; maxChars=50; help="Section 5. Person authorizing amendment. Director or Officer. Full Name. Last Name. This field is mandatory."
            FIELD position; type=choiceList; label="Position"; options=[Director | Officer]; help="Section 5. Person authorizing amendment. Director or Officer. Position"
            SECTION addressService
              TEXT "Address for Service *"
              FIELD can; type=checkButton; label="Canada"; options=[canada | ]; help="Section 5. Person authorizing amendment. Director or Officer. Address for Service. Country. This field is mandatory. Canada."
                SCRIPT on initialize (formcalc):
                  | $.font.fill.color.value="0,0,255";
                SCRIPT on change (javascript):
                  | if(this.rawValue == "canada"){
                  | canada.presence = "visible"
                  | xfa.host.setFocus(canada.standard);
                  | usa.presence = "hidden"
                  | xfa.host.resetData(usa.somExpression);
                  | international.presence = "hidden"
                  | xfa.host.resetData(international.somExpression);
                  | }
                  | else{
                  | canada.presence = "hidden"
                  | canada.standadrdAddr.presence = "hidden"
                  | canada.lotConcession.presence = "hidden"
                  | xfa.host.resetData(canada.somExpression);
                  | }
              FIELD us; type=checkButton; label="U.S.A."; options=[usa | ]; help="Section 5. Person authorizing amendment. Director or Officer. Address for Service. Country. This field is mandatory. U.S.A."
                SCRIPT on initialize (formcalc):
                  | $.font.fill.color.value="0,0,255";
                SCRIPT on change (javascript):
                  | if(this.rawValue == "usa"){
                  | usa.presence = "visible"
                  | xfa.host.setFocus(usa.streetNo);
                  | canada.presence = "hidden"
                  | canada.standadrdAddr.presence = "hidden"
                  | canada.lotConcession.presence = "hidden"
                  | xfa.host.resetData(canada.somExpression);
                  | international.presence = "hidden"
                  | xfa.host.resetData(international.somExpression);
                  | }
                  | else{
                  | usa.presence = "hidden"
                  | xfa.host.resetData(usa.somExpression);
                  | }
              FIELD intern; type=checkButton; label="International"; options=[international | ]; help="Section 5. Person authorizing amendment. Director or Officer. Address for Service. Country. This field is mandatory. International."
                SCRIPT on initialize (formcalc):
                  | $.font.fill.color.value="0,0,255";
                SCRIPT on change (javascript):
                  | if(this.rawValue == "international"){
                  | international.presence = "visible"
                  | xfa.host.setFocus(international.line1);
                  | canada.presence = "hidden"
                  | canada.standadrdAddr.presence = "hidden"
                  | canada.lotConcession.presence = "hidden"
                  | xfa.host.resetData(canada.somExpression);
                  | usa.presence = "hidden"
                  | xfa.host.resetData(usa.somExpression);
                  | }
                  | else{
                  | international.presence = "hidden"
                  | xfa.host.resetData(international.somExpression);
                  | }
              SECTION canada
                FIELD standard; type=checkButton; label="Standard Address"; options=[1 | ]; help="Section 5. Person authorizing amendment. Director or Officer. Address for Service. Country. Canada. This field is mandatory. Standard address."
                  SCRIPT on initialize (formcalc):
                    | $.font.fill.color.value="0,0,255";
                  SCRIPT on change (javascript):
                    | if(this.rawValue == "1"){
                    | standadrdAddr.presence = "visible"
                    | lotConcession.presence = "hidden"
                    | xfa.host.resetData(lotConcession.somExpression)
                    | }
                    | else{
                    | standadrdAddr.presence = "hidden"
                    | xfa.host.resetData(standadrdAddr.somExpression)
                    | lotConcession.presence = "hidden"
                    | xfa.host.resetData(lotConcession.somExpression)
                    | }
                FIELD concession; type=checkButton; label="Lot/Concession Address"; options=[2 | ]; help="Section 5. Person authorizing amendment. Director or Officer. Address for Service. Country. Canada. This field is mandatory. Lot or Concession address."
                  SCRIPT on initialize (formcalc):
                    | $.font.fill.color.value="0,0,255";
                  SCRIPT on change (javascript):
                    | if(this.rawValue == "2"){
                    | lotConcession.presence = "visible"
                    | standadrdAddr.presence = "hidden"
                    | xfa.host.resetData(standadrdAddr.somExpression)
                    | }
                    | else{
                    | standadrdAddr.presence = "hidden"
                    | xfa.host.resetData(standadrdAddr.somExpression)
                    | lotConcession.presence = "hidden"
                    | xfa.host.resetData(lotConcession.somExpression)
                    | }
                SECTION standadrdAddr
                  FIELD streetNo; type=textEdit; label="Street Number *"; maxChars=6; help="Section 5. Person authorizing amendment. Director or Officer. Address for Service. Country. Canada. Standard address. Street Number. This field is mandatory."
                  FIELD streetName; type=textEdit; label="Street Name *"; maxChars=45; help="Section 5. Person authorizing amendment. Director or Officer. Address for Service. Country. Canada. Standard address. Street Name. This field is mandatory."
                  FIELD unitNo; type=textEdit; label="Unit Number"; maxChars=8; help="Section 5. Person authorizing amendment. Director or Officer. Address for Service. Country. Canada. Standard address. Unit Number."
                  FIELD city; type=textEdit; label="City/Town *"; maxChars=45; help="Section 5. Person authorizing amendment. Director or Officer. Address for Service. Country. Canada. Standard address. City or Town. This field is mandatory."
                  FIELD province; type=choiceList; label="Province *"; options=[Alberta | British Columbia | Manitoba | New Brunswick | Newfoundland and Labrador | Nova Scotia | Northwest Territories | Nunavut | Ontario | Prince Edward Island | Quebec | Saskatchewan | Yukon]
                    SCRIPT on ready (javascript):
                      | //if(this.parent.index=="0"){
                      | //this.assist.toolTip.value ="Section 7. Director " + (this.parent.parent.index + 1) + ". Address for Service. Province.\n" + controller.iMessage(["mgs10E"])+" "+ controller.iMessage(["mgs9E"]);
                      | //}
                      | //else{
                      | this.assist.toolTip.value ="Section 5. Person authorizing amendment. Director or Officer. Address for Service. Country. Canada. Standard address. Province.\n" + controller.iMessage(["mgs10E"])+" "+ co
                      | //}
                  FIELD postalCode; type=textEdit; label="Postal Code *"; maxChars=7
                    SCRIPT on exit (javascript):
                      | controller.validatePostalCodeExit(xfa.event)
                    SCRIPT on ready (javascript):
                      | this.assist.toolTip.value="Section 5. Person authorizing amendment. Director or Officer. Address for Service. Country. Canada. Standard address. Postal Code.\n" + controller.iMessage(["mgs6E"])+" "+ c
                  FIELD country; type=textEdit; label="Country"; access=readOnly; maxChars=30; help="Section 5. Person authorizing amendment. Director or Officer. Address for Service. Country. Canada. Standard address. Country. Canada"
                SECTION lotConcession
                  FIELD line1; type=textEdit; label="Address Line 1 *"; help="Section 5. Person authorizing amendment. Director or Officer. Address for Service. Country. Canada. Lot or Concession address. Address Line 1. This field is man"
                  FIELD line2; type=textEdit; label="Address Line 2"; help="Section 5. Person authorizing amendment. Director or Officer. Address for Service. Country. Canada. Lot or Concession address. Address Line 2."
                  FIELD city; type=textEdit; label="City/Town *"; maxChars=45; help="Section 5. Person authorizing amendment. Director or Officer. Address for Service. Country. Canada. Lot or Concession address. City or Town. This field is manda"
                  FIELD province; type=choiceList; label="Province *"; options=[Alberta | British Columbia | Manitoba | New Brunswick | Newfoundland and Labrador | Nova Scotia | Northwest Territories | Nunavut | Ontario | Prince Edward Island | Quebec | Saskatchewan | Yukon]
                    SCRIPT on ready (javascript):
                      | //if(this.parent.index=="0"){
                      | //this.assist.toolTip.value ="Section 7. Director " + (this.parent.parent.index + 1) + ". Address for Service. Province.\n" + controller.iMessage(["mgs10E"])+" "+ controller.iMessage(["mgs9E"]);
                      | //}
                      | //else{
                      | this.assist.toolTip.value ="Section 5. Person authorizing amendment. Director or Officer. Address for Service. Country. Canada. Lot or Concession address. Province.\n" + controller.iMessage(["mgs10E"]
                      | //}
                  FIELD postalCode; type=textEdit; label="Postal Code *"; maxChars=7
                    SCRIPT on exit (javascript):
                      | controller.validatePostalCodeExit(xfa.event)
                    SCRIPT on ready (javascript):
                      | this.assist.toolTip.value="Section 5. Person authorizing amendment. Director or Officer. Address for Service. Country. Canada. Lot or Concession address. Postal Code.\n" + controller.iMessage(["mgs6E"
                  FIELD country; type=textEdit; label="Country"; access=readOnly; maxChars=30; help="Section 5. Person authorizing amendment. Director or Officer. Address for Service. Country. Canada. Lot or Concession address. Country. Canada."
              SECTION usa
                FIELD streetNo; type=textEdit; label="Street Number *"; maxChars=6
                  SCRIPT on exit (javascript):
                    | var r = new RegExp("^[A-Za-z' '\àâçéèêëîïôûùüÿñæœ\0-9\'\-]*$");
                    | var result = r.test(this.rawValue);
                    | if(this.rawValue!=null){
                    | if ( result != true )
                    | {
                    | xfa.host.messageBox( "Street Number field format is invalid." );
                    | xfa.host.setFocus(this);
                    | this.rawValue="";
                    | }
                    | }
                  SCRIPT on ready (javascript):
                    | //if(this.parent.index=="0"){
                    | //this.assist.toolTip.value ="Section 7. Director " + (this.parent.parent.index + 1) + ". Address for Service. Street Number. This field is mandatory.";
                    | //}
                    | //else{
                    | this.assist.toolTip.value ="Section 5. Person authorizing amendment. Director or Officer. Address for Service. Country. U.S.A. Street Number. This field is mandatory.";
                    | //}
                FIELD streetName; type=textEdit; label="Street Name *"; maxChars=45
                  SCRIPT on exit (javascript):
                    | var r = new RegExp("^[A-Za-z' '\àâçéèêëîïôûùüÿñæœ\0-9\'\-]*$");
                    | var result = r.test(this.rawValue);
                    | if(this.rawValue!=null){
                    | if ( result != true )
                    | {
                    | xfa.host.messageBox( "Street Name field format is invalid." );
                    | xfa.host.setFocus(this);
                    | this.rawValue="";
                    | }
                    | }
                  SCRIPT on ready (javascript):
                    | //if(this.parent.index=="0"){
                    | //this.assist.toolTip.value ="Section 7. Director " + (this.parent.parent.index + 1) + ". Address for Service. Street Name. This field is mandatory.";
                    | //}
                    | //else{
                    | this.assist.toolTip.value ="Section 5. Person authorizing amendment. Director or Officer. Address for Service. Country. U.S.A. Street Name. This field is mandatory.";
                    | //}
                FIELD unitNo; type=textEdit; label="Unit Number"; maxChars=8
                  SCRIPT on ready (javascript):
                    | //if(this.parent.index=="0"){
                    | //this.assist.toolTip.value ="Section 7. Director " + (this.parent.parent.index + 1) + ". Address for Service. Unit Number.";
                    | //}
                    | //else{
                    | this.assist.toolTip.value ="Section 5. Person authorizing amendment. Director or Officer. Address for Service. Country. U.S.A. Unit Number.";
                    | //}
                FIELD city; type=textEdit; label="City/Town *"; maxChars=45
                  SCRIPT on exit (javascript):
                    | var r = new RegExp("^[A-Za-z' '\àâçéèêëîïôûùüÿñæœ\'\-]*$");
                    | var result = r.test(this.rawValue);
                    | if(this.rawValue!=null){
                    | if ( result != true )
                    | {
                    | xfa.host.messageBox( "City\Town field format is invalid." );
                    | xfa.host.setFocus(this);
                    | this.rawValue="";
                    | }
                    | }
                  SCRIPT on ready (javascript):
                    | //if(this.parent.index=="0"){
                    | //this.assist.toolTip.value ="Section 7. Director " + (this.parent.parent.index + 1) + ". Address for Service. City or Town. This field is mandatory.";
                    | //}
                    | //else{
                    | this.assist.toolTip.value ="Section 5. Person authorizing amendment. Director or Officer. Address for Service. Country. U.S.A. City or Town. This field is mandatory.";
                    | //}
                FIELD state; type=choiceList; label="State *"; options=[Alabama | Alaska | Arizona | Arkansas | California | Colorado | Connecticut | Delaware | District of Columbia | Florida | Georgia | Hawaii | Idaho | Illinois | Indiana | Iowa | Kansas | Kentucky | Louisiana | Maine | Maryland | Massachusetts | Michigan | Minnesota | Mississippi | Missouri | Montana | Nebraska | Nevada | New Hampshire...]
                  SCRIPT on exit (javascript):
                    | var r = new RegExp("^[A-Za-z' '\àâçéèêëîïôûùüÿñæœ\'\-]*$");
                    | var result = r.test(this.rawValue);
                    | if(this.rawValue!=null){
                    | if ( result != true )
                    | {
                    | xfa.host.messageBox( "State field format is invalid." );
                    | xfa.host.setFocus(this);
                    | this.rawValue="";
                    | }
                    | }
                  SCRIPT on ready (javascript):
                    | //if(this.parent.index=="0"){
                    | //this.assist.toolTip.value ="Section 7. Director " + (this.parent.parent.index + 1) + ". Address for Service. State. Select State from the drop down menu. This field is mandatory.";
                    | //}
                    | //else{
                    | this.assist.toolTip.value ="Section 5. Person authorizing amendment. Director or Officer. Address for Service. Country. U.S.A. State. Select State from the drop down menu. This field is mandatory.";
                    | //}
                FIELD zipCode; type=textEdit; label="Zip Code *"
                  SCRIPT on exit (javascript):
                    | var pattern1 = /^\d{5}(\d{4})?$/;
                    | var pattern2 = /^\d{5}(-\d{4})?$/;
                    | var inputValue = xfa.event.target.rawValue
                    | if(inputValue!=null)
                    | {
                    | // if input value does NOT match the pattern, display a validation message
                    | if(!inputValue.match(pattern1) && !inputValue.match(pattern2))
                    | {
                    | app.alert("Zip code field format is invalid.For example the format should be: 12345 or 12345-6789.");
                    | xfa.host.setFocus(this);
                    | this.rawValue="";
                    | }
                    | else
                    | {
                    | if (inputValue.length == 9 )
                    | {
                    | xfa.event.target.rawValue = inputValue.substring(0,5) + "-" + inputValue.substring(5,9);
                    | }
                    | }
                    | }
                  SCRIPT on ready (javascript):
                    | //if(this.parent.index=="0"){
                    | //this.assist.toolTip.value ="Section 7. Director " + (this.parent.parent.index + 1) + ". Address for Service. Zip Code. This field is mandatory.";
                    | //}
                    | //else{
                    | this.assist.toolTip.value ="Section 5. Person authorizing amendment. Director or Officer. Address for Service. Country. U.S.A. Zip Code. This field is mandatory.";
                    | //}
                FIELD country; type=textEdit; label="Country"; access=readOnly; maxChars=30
                  SCRIPT on ready (javascript):
                    | //if(this.parent.index=="0"){
                    | //this.assist.toolTip.value ="Section 7. Director " + (this.parent.parent.index + 1) + ". Address for Service. Country. United Stetes.";
                    | //}
                    | //else{
                    | this.assist.toolTip.value ="Section 5. Person authorizing amendment. Director or Officer. Address for Service. Country. U.S.A. Country. United Stetes.";
                    | //}
              SECTION international
                FIELD line1; type=textEdit; label="Address line 1 *"
                  SCRIPT on ready (javascript):
                    | //if(this.parent.index=="0"){
                    | //this.assist.toolTip.value ="Section 7. Director " + (this.parent.parent.index + 1) + ". Address for Service. Address Line 1. This field is mandatory.";
                    | //}
                    | //else{
                    | this.assist.toolTip.value ="Section 5. Person authorizing amendment. Director or Officer. Address for Service. Country. International. Address Line 1. This field is mandatory.";
                    | //}
                FIELD line2; type=textEdit; label="Address line 2"
                  SCRIPT on ready (javascript):
                    | //if(this.parent.index=="0"){
                    | //this.assist.toolTip.value ="Section 7. Director " + (this.parent.parent.index + 1) + ". Address for Service. Address Line 2.";
                    | //}
                    | //else{
                    | this.assist.toolTip.value ="Section 5. Person authorizing amendment. Director or Officer. Address for Service. Country. International. Address Line 2.";
                    | //}
                FIELD city; type=textEdit; label="City/Town *"; maxChars=45
                  SCRIPT on exit (javascript):
                    | var r = new RegExp("^[A-Za-z' '\àâçéèêëîïôûùüÿñæœ\'\-]*$");
                    | var result = r.test(this.rawValue);
                    | if(this.rawValue!=null){
                    | if ( result != true )
                    | {
                    | xfa.host.messageBox( "City\Town field format is invalid." );
                    | xfa.host.setFocus(this);
                    | this.rawValue="";
                    | }
                    | }
                  SCRIPT on ready (javascript):
                    | //if(this.parent.index=="0"){
                    | //this.assist.toolTip.value ="Section 7. Director " + (this.parent.parent.index + 1) + ". Address for Service. City or Town. This field is mandatory.";
                    | //}
                    | //else{
                    | this.assist.toolTip.value ="Section 5. Person authorizing amendment. Director or Officer. Address for Service. Country. International. City or Town. This field is mandatory.";
                    | //}
                SECTION (unnamed)
                  FIELD region; type=textEdit; label="Region *"
                    SCRIPT on exit (javascript):
                      | var r = new RegExp("^[A-Za-z' '\àâçéèêëîïôûùüÿñæœ\'\-]*$");
                      | var result = r.test(this.rawValue);
                      | if(this.rawValue!=null){
                      | if ( result != true )
                      | {
                      | xfa.host.messageBox( "Region field format is invalid." );
                      | xfa.host.setFocus(this);
                      | this.rawValue="";
                      | }
                      | }
                    SCRIPT on ready (javascript):
                      | //if(this.parent.index=="0"){
                      | //this.assist.toolTip.value ="Section 7. Director " + (this.parent.parent.index + 1) + ". Address for Service. Region. This field is mandatory.";
                      | //}
                      | //else{
                      | this.assist.toolTip.value ="Section 5. Person authorizing amendment. Director or Officer. Address for Service. Country. International. Region. This field is mandatory.";
                      | //}
                  FIELD help; type=button; label="i"; help="Help"
                    SCRIPT on click (javascript):
                      | xfa.host.messageBox("If you have an international address and the “Region” field is not applicable to you, please enter the ‘Parish’, ‘County’ or any other equivalent information in the “Region” field
                FIELD postal; type=textEdit; label="Postal Code *"
                  SCRIPT on ready (javascript):
                    | //if(this.parent.index=="0"){
                    | //this.assist.toolTip.value ="Section 7. Director " + (this.parent.parent.index + 1) + ". Address for Service. Postal Code. This field is mandatory.";
                    | //}
                    | //else{
                    | this.assist.toolTip.value ="Section 5. Person authorizing amendment. Director or Officer. Address for Service. Country. International. Postal Code. This field is mandatory.";
                    | //}
                FIELD country; type=choiceList; label="Country *"; options=[Afghanistan | Aland Islands | Albania | Algeria | American Samoa | Andorra | Angola | Anguilla | Antarctica | Antigua And Barbuda | Argentina | Armenia | Aruba | Australia | Austria | Azerbaijan | Bahamas | Bahrain | Bangladesh | Barbados | Belarus | Belgium | Belize | Benin | Bermuda | Bhutan | Bolivia, Plurinational State Of | Bonaire, Sint Eustatius And Saba | Bosnia And Herzegovina | Botswana...]
                  SCRIPT on exit (javascript):
                    | /*
                    | var r = new RegExp("^[A-Za-z' '\àâçéèêëîïôûùüÿñæœ\'\-,)(]*$");
                    | var result = r.test(this.rawValue);
                    | if(this.rawValue!=null){
                    | if ( result != true )
                    | {
                    | xfa.host.messageBox( "Country field format is invalid." );
                    | xfa.host.setFocus(this);
                    | this.rawValue="";
                    | }
                    | }
                    | */
                  SCRIPT on ready (javascript):
                    | //if(this.parent.index=="0"){
                    | //this.assist.toolTip.value ="Section 7. Director " + (this.parent.parent.index + 1) + ". Address for Service. Country. This field is mandatory.";
                    | //}
                    | //else{
                    | this.assist.toolTip.value ="Section 5. Person authorizing amendment. Director or Officer. Address for Service. Country. International. Country. Select Country from drop down menu. This field is mandat
                    | //}
          SECTION optB
            TEXT "Type *"
            FIELD ind; type=checkButton; label="Individual"; options=[1 | ]; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. This field is mandatory. Individual."
              SCRIPT on initialize (formcalc):
                | $.font.fill.color.value="0,0,255";
              SCRIPT on change (javascript):
                | if(this.rawValue == "1"){
                | b1.presence = "visible";
                | b2.presence = "hidden"
                | xfa.host.resetData(b2.somExpression)
                | b3.presence = "hidden"
                | xfa.host.resetData(b3.somExpression)
                | b1.addressService.presence = "visible"
                | b1.addressService.canada.presence = "visible"
                | b1.addressService.canada.standadrdAddr.presence = "hidden"
                | b1.addressService.canada.lotConcession.presence = "hidden"
                | // b1.addressService.usa.presence = "hidden"
                | // b1.addressService.international.presence = "hidden"
                | b3.addressService.presence = "hidden"
                | b3.addressService.canada.presence = "hidden"
                | b3.addressService.canada.standadrdAddr.presence = "hidden"
                | b3.addressService.canada.lotConcession.presence = "hidden"
                | // b3.addressService.usa.presence = "hidden"
                | // b3.addressService.international.presence = "hidden"
                | }
                | else{
                | b1.presence = "hidden"
                | xfa.host.resetData(b1.somExpression)
                | b2.presence = "hidden"
                | xfa.host.resetData(b2.somExpression)
                | b3.presence = "hidden"
                | xfa.host.resetData(b3.somExpression)
                | b1.addressService.presence = "hidden"
                | b1.addressService.canada.presence = "hidden"
                | b1.addressService.canada.standadrdAddr.presence = "hidden"
                | b1.addressService.canada.lotConcession.presence = "hidden"
                | // b1.addressService.usa.presence = "hidden"
                | // b1.addressService.international.presence = "hidden"
                | b3.addressService.presence = "hidden"
                | b3.addressService.canada.presence = "hidden"
                | b3.addressService.canada.standadrdAddr.presence = "hidden"
                | b3.addressService.canada.lotConcession.presence = "hidden"
                | // b3.addressService.usa.presence = "hidden"
                | // b3.addressService.international.presence = "hidden"
                | }
            FIELD corp; type=checkButton; label="Corporation or Registered Entity"; options=[2 | ]; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. This field is mandatory. Corporation or Registered Entity."
              SCRIPT on initialize (formcalc):
                | $.font.fill.color.value="0,0,255";
              SCRIPT on change (javascript):
                | if(this.rawValue == "2"){
                | b1.presence = "hidden"
                | xfa.host.resetData(b1.somExpression)
                | b2.presence = "visible";
                | b3.presence = "hidden"
                | xfa.host.resetData(b3.somExpression)
                | b1.addressService.presence = "hidden"
                | b1.addressService.canada.presence = "hidden"
                | b1.addressService.canada.standadrdAddr.presence = "hidden"
                | b1.addressService.canada.lotConcession.presence = "hidden"
                | // b1.addressService.usa.presence = "hidden"
                | // b1.addressService.international.presence = "hidden"
                | b2.addressService.presence = "visible"
                | b2.addressService.canada.presence = "visible"
                | b2.addressService.canada.standadrdAddr.presence = "hidden"
                | b2.addressService.canada.lotConcession.presence = "hidden"
                | b3.addressService.presence = "hidden"
                | b3.addressService.canada.presence = "hidden"
                | b3.addressService.canada.standadrdAddr.presence = "hidden"
                | b3.addressService.canada.lotConcession.presence = "hidden"
                | // b3.addressService.usa.presence = "hidden"
                | // b3.addressService.international.presence = "hidden"
                | }
                | else{
                | b1.presence = "hidden"
                | xfa.host.resetData(b1.somExpression)
                | b2.presence = "hidden"
                | xfa.host.resetData(b2.somExpression)
                | b3.presence = "hidden"
                | xfa.host.resetData(b3.somExpression)
                | b1.addressService.presence = "hidden"
                | b1.addressService.canada.presence = "hidden"
                | b1.addressService.canada.standadrdAddr.presence = "hidden"
                | b1.addressService.canada.lotConcession.presence = "hidden"
                | // b1.addressService.usa.presence = "hidden"
                | // b1.addressService.international.presence = "hidden"
                | b2.addressService.presence = "hidden"
                | b2.addressService.canada.presence = "hidden"
                | b2.addressService.canada.standadrdAddr.presence = "hidden"
                | b2.addressService.canada.lotConcession.presence = "hidden"
            FIELD other; type=checkButton; label="Other"; options=[3 | ]; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. This field is mandatory. Other"
              SCRIPT on initialize (formcalc):
                | $.font.fill.color.value="0,0,255";
              SCRIPT on change (javascript):
                | if(this.rawValue == "3"){
                | b1.presence = "hidden"
                | xfa.host.resetData(b1.somExpression)
                | b2.presence = "hidden"
                | xfa.host.resetData(b2.somExpression)
                | b3.presence = "visible";
                | b1.addressService.presence = "hidden"
                | b1.addressService.canada.presence = "hidden"
                | b1.addressService.canada.standadrdAddr.presence = "hidden"
                | b1.addressService.canada.lotConcession.presence = "hidden"
                | // b1.addressService.usa.presence = "hidden"
                | // b1.addressService.international.presence = "hidden"
                | b3.addressService.presence = "visible"
                | b3.addressService.canada.presence = "visible"
                | b3.addressService.canada.standadrdAddr.presence = "hidden"
                | b3.addressService.canada.lotConcession.presence = "hidden"
                | // b3.addressService.usa.presence = "hidden"
                | // b3.addressService.international.presence = "hidden"
                | }
                | else{
                | b1.presence = "hidden"
                | xfa.host.resetData(b1.somExpression)
                | b2.presence = "hidden"
                | xfa.host.resetData(b2.somExpression)
                | b3.presence = "hidden"
                | xfa.host.resetData(b3.somExpression)
                | b1.addressService.presence = "hidden"
                | b1.addressService.canada.presence = "hidden"
                | b1.addressService.canada.standadrdAddr.presence = "hidden"
                | b1.addressService.canada.lotConcession.presence = "hidden"
                | // b1.addressService.usa.presence = "hidden"
                | // b1.addressService.international.presence = "hidden"
                | b3.addressService.presence = "hidden"
                | b3.addressService.canada.presence = "hidden"
                | b3.addressService.canada.standadrdAddr.presence = "hidden"
                | b3.addressService.canada.lotConcession.presence = "hidden"
                | // b3.addressService.usa.presence = "hidden"
                | // b3.addressService.international.presence = "hidden"
                | }
            SECTION b1
              TEXT "Full Name"
              FIELD firstName; type=textEdit; label="First Name *"; maxChars=30; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Individual. Full Name. First Name. This field is mandatory."
              FIELD middleName; type=textEdit; label="Middle Name"; maxChars=13; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Individual. Full Name. Middle Name."
              FIELD lastName; type=textEdit; label="Last Name *"; maxChars=50; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Individual. Full Name. Last Name. This field is mandatory."
              SECTION addressService
                TEXT "Address for Service *"
                SECTION canada
                  FIELD standard; type=checkButton; label="Standard Address"; options=[1 | ]; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Individual. Address for Service. This field is mandatory. Standard address."
                    SCRIPT on initialize (formcalc):
                      | $.font.fill.color.value="0,0,255";
                    SCRIPT on change (javascript):
                      | if(this.rawValue == "1"){
                      | standadrdAddr.presence = "visible"
                      | lotConcession.presence = "hidden"
                      | xfa.host.resetData(lotConcession.somExpression)
                      | }
                      | else{
                      | standadrdAddr.presence = "hidden"
                      | xfa.host.resetData(standadrdAddr.somExpression)
                      | lotConcession.presence = "hidden"
                      | xfa.host.resetData(lotConcession.somExpression)
                      | }
                  FIELD concession; type=checkButton; label="Lot/Concession Address"; options=[2 | ]; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Individual. Address for Service. This field is mandatory. Lot or Concession addr"
                    SCRIPT on initialize (formcalc):
                      | $.font.fill.color.value="0,0,255";
                    SCRIPT on change (javascript):
                      | if(this.rawValue == "2"){
                      | lotConcession.presence = "visible"
                      | standadrdAddr.presence = "hidden"
                      | xfa.host.resetData(standadrdAddr.somExpression)
                      | }
                      | else{
                      | standadrdAddr.presence = "hidden"
                      | xfa.host.resetData(standadrdAddr.somExpression)
                      | lotConcession.presence = "hidden"
                      | xfa.host.resetData(lotConcession.somExpression)
                      | }
                  SECTION standadrdAddr
                    FIELD streetNo; type=textEdit; label="Street Number *"; maxChars=6; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Individual. Address for Service. Standard Address. Street Number. This fie"
                    FIELD streetName; type=textEdit; label="Street Name *"; maxChars=45; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Individual. Address for Service. Standard Address. Street Name. This field"
                    FIELD unitNo; type=textEdit; label="Unit Number"; maxChars=8; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Individual. Address for Service. Standard Address. Unit Number."
                    FIELD city; type=textEdit; label="City/Town *"; maxChars=45; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Individual. Address for Service. Standard Address. City or Town. This fiel"
                    FIELD province; type=textEdit; label="Province"; access=readOnly; maxChars=30; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Individual. Address for Service. Standard Address. Province."
                    FIELD postalCode; type=textEdit; label="Postal Code *"; maxChars=7
                      SCRIPT on exit (javascript):
                        | controller.validatePostalCodeExit(xfa.event)
                      SCRIPT on ready (javascript):
                        | this.assist.toolTip.value="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Individual. Address for Service. Standard Address. Postal Code.\n" + controller.iMessag
                    FIELD country; type=textEdit; label="Country"; access=readOnly; maxChars=30; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Individual. Address for Service. Standard Address. Country"
                  SECTION lotConcession
                    FIELD line1; type=textEdit; label="Address Line 1 *"; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Individual. Address for Service. Lot or Concession address. Address Line 1"
                    FIELD line2; type=textEdit; label="Address Line 2"; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Individual. Address for Service. Lot or Concession address. Address Line 2"
                    FIELD city; type=textEdit; label="City/Town *"; maxChars=45; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Individual. Address for Service. Lot or Concession address. City or Town. "
                    FIELD province; type=textEdit; label="Province"; access=readOnly; maxChars=30; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Individual. Address for Service. Province."
                    FIELD postalCode; type=textEdit; label="Postal Code *"; maxChars=7
                      SCRIPT on exit (javascript):
                        | controller.validatePostalCodeExit(xfa.event)
                      SCRIPT on ready (javascript):
                        | this.assist.toolTip.value="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Individual. Address for Service. Postal Code.\n" + controller.iMessage(["mgs6E"])+" "+ 
                    FIELD country; type=textEdit; label="Country"; access=readOnly; maxChars=30; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Individual. Address for Service. Lot or Concession address. Country"
                SECTION _extra [presence=inactive]
                  FIELD can; type=checkButton; label="Canada"; options=[canada | ]; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Individual. Address for Service. Country. This field is mandatory. Canada."
                    SCRIPT on initialize (formcalc):
                      | $.font.fill.color.value="0,0,255";
                    SCRIPT on change (javascript):
                      | if(this.rawValue == "canada"){
                      | canada.presence = "visible"
                      | xfa.host.setFocus(canada.standard);
                      | usa.presence = "hidden"
                      | xfa.host.resetData(usa.somExpression);
                      | international.presence = "hidden"
                      | xfa.host.resetData(international.somExpression);
                      | }
                      | else{
                      | canada.presence = "hidden"
                      | canada.standadrdAddr.presence = "hidden"
                      | canada.lotConcession.presence = "hidden"
                      | xfa.host.resetData(canada.somExpression);
                      | }
                  FIELD us; type=checkButton; label="U.S.A."; options=[usa | ]; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Individual. Address for Service. Country. This field is mandatory. U.S.A."
                    SCRIPT on initialize (formcalc):
                      | $.font.fill.color.value="0,0,255";
                    SCRIPT on change (javascript):
                      | if(this.rawValue == "usa"){
                      | usa.presence = "visible"
                      | xfa.host.setFocus(usa.streetNo);
                      | canada.presence = "hidden"
                      | canada.standadrdAddr.presence = "hidden"
                      | canada.lotConcession.presence = "hidden"
                      | xfa.host.resetData(canada.somExpression);
                      | international.presence = "hidden"
                      | xfa.host.resetData(international.somExpression);
                      | }
                      | else{
                      | usa.presence = "hidden"
                      | xfa.host.resetData(usa.somExpression);
                      | }
                  FIELD intern; type=checkButton; label="International"; options=[international | ]; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Individual. Address for Service. Country. This field is mandatory. International"
                    SCRIPT on initialize (formcalc):
                      | $.font.fill.color.value="0,0,255";
                    SCRIPT on change (javascript):
                      | if(this.rawValue == "international"){
                      | international.presence = "visible"
                      | xfa.host.setFocus(international.line1);
                      | canada.presence = "hidden"
                      | canada.standadrdAddr.presence = "hidden"
                      | canada.lotConcession.presence = "hidden"
                      | xfa.host.resetData(canada.somExpression);
                      | usa.presence = "hidden"
                      | xfa.host.resetData(usa.somExpression);
                      | }
                      | else{
                      | international.presence = "hidden"
                      | xfa.host.resetData(international.somExpression);
                      | }
                  SECTION usa
                    FIELD streetNo; type=textEdit; label="Street Number *"; maxChars=6
                      SCRIPT on exit (javascript):
                        | var r = new RegExp("^[A-Za-z' '\àâçéèêëîïôûùüÿñæœ\0-9\'\-]*$");
                        | var result = r.test(this.rawValue);
                        | if(this.rawValue!=null){
                        | if ( result != true )
                        | {
                        | xfa.host.messageBox( "Street Number field format is invalid." );
                        | xfa.host.setFocus(this);
                        | this.rawValue="";
                        | }
                        | }
                      SCRIPT on ready (javascript):
                        | //if(this.parent.index=="0"){
                        | //this.assist.toolTip.value ="Section 7. Director " + (this.parent.parent.index + 1) + ". Address for Service. Street Number. This field is mandatory.";
                        | //}
                        | //else{
                        | this.assist.toolTip.value ="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Individual. Address for Service. Country. U.S.A. Street Number. This field is mandator
                        | //}
                    FIELD streetName; type=textEdit; label="Street Name *"; maxChars=45
                      SCRIPT on exit (javascript):
                        | var r = new RegExp("^[A-Za-z' '\àâçéèêëîïôûùüÿñæœ\0-9\'\-]*$");
                        | var result = r.test(this.rawValue);
                        | if(this.rawValue!=null){
                        | if ( result != true )
                        | {
                        | xfa.host.messageBox( "Street Name field format is invalid." );
                        | xfa.host.setFocus(this);
                        | this.rawValue="";
                        | }
                        | }
                      SCRIPT on ready (javascript):
                        | //if(this.parent.index=="0"){
                        | //this.assist.toolTip.value ="Section 7. Director " + (this.parent.parent.index + 1) + ". Address for Service. Street Name. This field is mandatory.";
                        | //}
                        | //else{
                        | this.assist.toolTip.value ="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Individual. Address for Service. Country. U.S.A. This field is mandatory.";
                        | //}
                    FIELD unitNo; type=textEdit; label="Unit Number"; maxChars=8
                      SCRIPT on ready (javascript):
                        | //if(this.parent.index=="0"){
                        | //this.assist.toolTip.value ="Section 7. Director " + (this.parent.parent.index + 1) + ". Address for Service. Unit Number.";
                        | //}
                        | //else{
                        | this.assist.toolTip.value ="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Individual. Address for Service. Country. U.S.A. Unit Number.";
                        | //}
                    FIELD city; type=textEdit; label="City/Town *"; maxChars=45
                      SCRIPT on exit (javascript):
                        | var r = new RegExp("^[A-Za-z' '\àâçéèêëîïôûùüÿñæœ\'\-]*$");
                        | var result = r.test(this.rawValue);
                        | if(this.rawValue!=null){
                        | if ( result != true )
                        | {
                        | xfa.host.messageBox( "City\Town field format is invalid." );
                        | xfa.host.setFocus(this);
                        | this.rawValue="";
                        | }
                        | }
                      SCRIPT on ready (javascript):
                        | //if(this.parent.index=="0"){
                        | //this.assist.toolTip.value ="Section 7. Director " + (this.parent.parent.index + 1) + ". Address for Service. City or Town. This field is mandatory.";
                        | //}
                        | //else{
                        | this.assist.toolTip.value ="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Individual. Address for Service. Country. U.S.A. City or Town. This field is mandatory
                        | //}
                    FIELD state; type=choiceList; label="State *"; options=[Alabama | Alaska | Arizona | Arkansas | California | Colorado | Connecticut | Delaware | District of Columbia | Florida | Georgia | Hawaii | Idaho | Illinois | Indiana | Iowa | Kansas | Kentucky | Louisiana | Maine | Maryland | Massachusetts | Michigan | Minnesota | Mississippi | Missouri | Montana | Nebraska | Nevada | New Hampshire...]
                      SCRIPT on exit (javascript):
                        | var r = new RegExp("^[A-Za-z' '\àâçéèêëîïôûùüÿñæœ\'\-]*$");
                        | var result = r.test(this.rawValue);
                        | if(this.rawValue!=null){
                        | if ( result != true )
                        | {
                        | xfa.host.messageBox( "State field format is invalid." );
                        | xfa.host.setFocus(this);
                        | this.rawValue="";
                        | }
                        | }
                      SCRIPT on ready (javascript):
                        | //if(this.parent.index=="0"){
                        | //this.assist.toolTip.value ="Section 7. Director " + (this.parent.parent.index + 1) + ". Address for Service. State. Select State from the drop down menu. This field is mandatory.";
                        | //}
                        | //else{
                        | this.assist.toolTip.value ="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Individual. Address for Service. Country. U.S.A. State. Select State from the drop dow
                        | //}
                    FIELD zipCode; type=textEdit; label="Zip Code *"
                      SCRIPT on exit (javascript):
                        | var pattern1 = /^\d{5}(\d{4})?$/;
                        | var pattern2 = /^\d{5}(-\d{4})?$/;
                        | var inputValue = xfa.event.target.rawValue
                        | if(inputValue!=null)
                        | {
                        | // if input value does NOT match the pattern, display a validation message
                        | if(!inputValue.match(pattern1) && !inputValue.match(pattern2))
                        | {
                        | app.alert("Zip code field format is invalid.For example the format should be: 12345 or 12345-6789.");
                        | xfa.host.setFocus(this);
                        | this.rawValue="";
                        | }
                        | else
                        | {
                        | if (inputValue.length == 9 )
                        | {
                        | xfa.event.target.rawValue = inputValue.substring(0,5) + "-" + inputValue.substring(5,9);
                        | }
                        | }
                        | }
                      SCRIPT on ready (javascript):
                        | //if(this.parent.index=="0"){
                        | //this.assist.toolTip.value ="Section 7. Director " + (this.parent.parent.index + 1) + ". Address for Service. Zip Code. This field is mandatory.";
                        | //}
                        | //else{
                        | this.assist.toolTip.value ="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Individual. Address for Service. Country. U.S.A. Zip Code. This field is mandatory.";
                        | //}
                    FIELD country; type=textEdit; label="Country"; access=readOnly; maxChars=30
                      SCRIPT on ready (javascript):
                        | //if(this.parent.index=="0"){
                        | //this.assist.toolTip.value ="Section 7. Director " + (this.parent.parent.index + 1) + ". Address for Service. Country. United Stetes.";
                        | //}
                        | //else{
                        | this.assist.toolTip.value ="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Individual. Address for Service. Country. U.S.A. Country. United Stetes.";
                        | //}
                  SECTION international
                    FIELD line1; type=textEdit; label="Address line 1 *"
                      SCRIPT on ready (javascript):
                        | //if(this.parent.index=="0"){
                        | //this.assist.toolTip.value ="Section 7. Director " + (this.parent.parent.index + 1) + ". Address for Service. Address Line 1. This field is mandatory.";
                        | //}
                        | //else{
                        | this.assist.toolTip.value ="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Individual. Address for Service. Country. International. Address Line 1. This field is
                        | //}
                    FIELD line2; type=textEdit; label="Address line 2"
                      SCRIPT on ready (javascript):
                        | //if(this.parent.index=="0"){
                        | //this.assist.toolTip.value ="Section 7. Director " + (this.parent.parent.index + 1) + ". Address for Service. Address Line 2.";
                        | //}
                        | //else{
                        | this.assist.toolTip.value ="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Individual. Address for Service. Country. International. Address Line 2.";
                        | //}
                    FIELD city; type=textEdit; label="City/Town *"; maxChars=45
                      SCRIPT on exit (javascript):
                        | var r = new RegExp("^[A-Za-z' '\àâçéèêëîïôûùüÿñæœ\'\-]*$");
                        | var result = r.test(this.rawValue);
                        | if(this.rawValue!=null){
                        | if ( result != true )
                        | {
                        | xfa.host.messageBox( "City\Town field format is invalid." );
                        | xfa.host.setFocus(this);
                        | this.rawValue="";
                        | }
                        | }
                      SCRIPT on ready (javascript):
                        | //if(this.parent.index=="0"){
                        | //this.assist.toolTip.value ="Section 7. Director " + (this.parent.parent.index + 1) + ". Address for Service. City or Town. This field is mandatory.";
                        | //}
                        | //else{
                        | this.assist.toolTip.value ="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Individual. Address for Service. Country. International. City or Town. This field is m
                        | //}
                    FIELD region; type=textEdit; label="Region *"
                      SCRIPT on exit (javascript):
                        | var r = new RegExp("^[A-Za-z' '\àâçéèêëîïôûùüÿñæœ\'\-]*$");
                        | var result = r.test(this.rawValue);
                        | if(this.rawValue!=null){
                        | if ( result != true )
                        | {
                        | xfa.host.messageBox( "Region field format is invalid." );
                        | xfa.host.setFocus(this);
                        | this.rawValue="";
                        | }
                        | }
                      SCRIPT on ready (javascript):
                        | //if(this.parent.index=="0"){
                        | //this.assist.toolTip.value ="Section 7. Director " + (this.parent.parent.index + 1) + ". Address for Service. Region. This field is mandatory.";
                        | //}
                        | //else{
                        | this.assist.toolTip.value ="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Individual. Address for Service. Country. International. Region. This field is mandato
                        | //}
                    FIELD postal; type=textEdit; label="Postal Code *"
                      SCRIPT on ready (javascript):
                        | //if(this.parent.index=="0"){
                        | //this.assist.toolTip.value ="Section 7. Director " + (this.parent.parent.index + 1) + ". Address for Service. Postal Code. This field is mandatory.";
                        | //}
                        | //else{
                        | this.assist.toolTip.value ="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Individual. Address for Service. Country. International. Postal Code. This field is ma
                        | //}
                    FIELD country; type=choiceList; label="Country *"; options=[Afghanistan | Aland Islands | Albania | Algeria | American Samoa | Andorra | Angola | Anguilla | Antarctica | Antigua And Barbuda | Argentina | Armenia | Aruba | Australia | Austria | Azerbaijan | Bahamas | Bahrain | Bangladesh | Barbados | Belarus | Belgium | Belize | Benin | Bermuda | Bhutan | Bolivia, Plurinational State Of | Bonaire, Sint Eustatius And Saba | Bosnia And Herzegovina | Botswana...]
                      SCRIPT on exit (javascript):
                        | /*
                        | var r = new RegExp("^[A-Za-z' '\àâçéèêëîïôûùüÿñæœ\'\-,)(]*$");
                        | var result = r.test(this.rawValue);
                        | if(this.rawValue!=null){
                        | if ( result != true )
                        | {
                        | xfa.host.messageBox( "Country field format is invalid." );
                        | xfa.host.setFocus(this);
                        | this.rawValue="";
                        | }
                        | }
                        | */
                      SCRIPT on ready (javascript):
                        | //if(this.parent.index=="0"){
                        | //this.assist.toolTip.value ="Section 7. Director " + (this.parent.parent.index + 1) + ". Address for Service. Country. This field is mandatory.";
                        | //}
                        | //else{
                        | this.assist.toolTip.value ="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Individual. Address for Service. Country. International. Country. Select Country from 
                        | //}
            SECTION b2
              FIELD corpName; type=textEdit; label="Corporation Name/Entity Name *"; maxChars=175; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Corporation or Registered Entity. Corporation Name or Entity Name. This field is"
              FIELD corpNo; type=textEdit; label="Ontario Corporation Number (OCN)/Business Identification Number (BIN) *"; maxChars=10; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Corporation or Registered Entity. Ontario Corporation Number (OCN) or Business I"
                SCRIPT on change (javascript):
                  | form1.variables.controller.validNumberB(xfa.event)
                SCRIPT on exit (javascript):
                  | /*
                  | if (this.rawValue!=null){
                  | var pattern = /^([a-znikon el14A-Z0-9]){10}$/;
                  | var input= this.rawValue;
                  | if (!input.match(pattern)){
                  | xfa.host.messageBox("Ontario Corporation Number must be 10 digits.");
                  | this.rawValue="";
                  | xfa.host.setFocus(this.name);
                  | }
                  | }
                  | */
              SECTION addressService
                TEXT "Address for Service *"
                SECTION canada
                  FIELD standard; type=checkButton; label="Standard Address"; options=[1 | ]; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Corporation or Registered Entity. Address for Service. This field is manda"
                    SCRIPT on initialize (formcalc):
                      | $.font.fill.color.value="0,0,255";
                    SCRIPT on change (javascript):
                      | if(this.rawValue == "1"){
                      | standadrdAddr.presence = "visible"
                      | lotConcession.presence = "hidden"
                      | xfa.host.resetData(lotConcession.somExpression)
                      | }
                      | else{
                      | standadrdAddr.presence = "hidden"
                      | xfa.host.resetData(standadrdAddr.somExpression)
                      | lotConcession.presence = "hidden"
                      | xfa.host.resetData(lotConcession.somExpression)
                      | }
                  FIELD concession; type=checkButton; label="Lot/Concession Address"; options=[2 | ]; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Corporation or Registered Entity. Address for Service. This field is manda"
                    SCRIPT on initialize (formcalc):
                      | $.font.fill.color.value="0,0,255";
                    SCRIPT on change (javascript):
                      | if(this.rawValue == "2"){
                      | lotConcession.presence = "visible"
                      | standadrdAddr.presence = "hidden"
                      | xfa.host.resetData(standadrdAddr.somExpression)
                      | }
                      | else{
                      | standadrdAddr.presence = "hidden"
                      | xfa.host.resetData(standadrdAddr.somExpression)
                      | lotConcession.presence = "hidden"
                      | xfa.host.resetData(lotConcession.somExpression)
                      | }
                  SECTION standadrdAddr
                    FIELD streetNo; type=textEdit; label="Street Number *"; maxChars=6; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Corporation or Registered Entity. Address for Service. Standard address. S"
                    FIELD streetName; type=textEdit; label="Street Name *"; maxChars=45; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Corporation or Registered Entity. Address for Service. Standard address. S"
                    FIELD unitNo; type=textEdit; label="Unit Number"; maxChars=8; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Corporation or Registered Entity. Address for Service. Standard address. U"
                    FIELD city; type=textEdit; label="City/Town *"; maxChars=45; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Corporation or Registered Entity. Address for Service. Standard address. C"
                    FIELD province; type=textEdit; label="Province"; access=readOnly; maxChars=30; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Corporation or Registered Entity. Address for Service. Standard address. P"
                    FIELD postalCode; type=textEdit; label="Postal Code *"; maxChars=7
                      SCRIPT on exit (javascript):
                        | controller.validatePostalCodeExit(xfa.event)
                      SCRIPT on ready (javascript):
                        | this.assist.toolTip.value="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Corporation or Registered Entity. Address for Service. Standard address. Postal Code.\n
                    FIELD country; type=textEdit; label="Country"; access=readOnly; maxChars=30; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Corporation or Registered Entity. Address for Service. Standard address. C"
                  SECTION lotConcession
                    FIELD line1; type=textEdit; label="Address Line 1 *"; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Corporation or Registered Entity. Address for Service. Lot or Concession a"
                    FIELD line2; type=textEdit; label="Address Line 2"; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Corporation or Registered Entity. Address for Service. Lot or Concession a"
                    FIELD city; type=textEdit; label="City/Town *"; maxChars=45; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Corporation or Registered Entity. Address for Service. Lot or Concession a"
                    FIELD province; type=textEdit; label="Province"; access=readOnly; maxChars=30; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Corporation or Registered Entity. Address for Service. Lot or Concession a"
                    FIELD postalCode; type=textEdit; label="Postal Code *"; maxChars=7
                      SCRIPT on exit (javascript):
                        | controller.validatePostalCodeExit(xfa.event)
                      SCRIPT on ready (javascript):
                        | this.assist.toolTip.value="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Corporation or Registered Entity. Address for Service. Lot or Concession address. Posta
                    FIELD country; type=textEdit; label="Country"; access=readOnly; maxChars=30; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Corporation or Registered Entity. Address for Service. Lot or Concession a"
              TEXT "Individual Representing the Corporation or Registered Entity"
              TEXT "Full Name"
              FIELD firstName; type=textEdit; label="First Name *"; maxChars=30; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Corporation or Registered Entity. Individual Representing the Corporation "
              FIELD middleName; type=textEdit; label="Middle Name"; maxChars=13; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Corporation or Registered Entity. Individual Representing the Corporation "
              FIELD lastName; type=textEdit; label="Last Name *"; maxChars=50; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Corporation or Registered Entity. Individual Representing the Corporation "
              FIELD position; type=textEdit; label="Position *"; maxChars=120; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Corporation or Registered Entity. Individual Representing the Corporation "
            SECTION b3
              FIELD name; type=textEdit; label="Name *"; maxChars=120; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Other. Name. This field is mandatory."
              SECTION addressService
                TEXT "Address for Service *"
                SECTION canada
                  FIELD standard; type=checkButton; label="Standard Address"; options=[1 | ]; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Other. Address for Service. This field is mandatory. Standard address."
                    SCRIPT on initialize (formcalc):
                      | $.font.fill.color.value="0,0,255";
                    SCRIPT on change (javascript):
                      | if(this.rawValue == "1"){
                      | standadrdAddr.presence = "visible"
                      | lotConcession.presence = "hidden"
                      | xfa.host.resetData(lotConcession.somExpression)
                      | }
                      | else{
                      | standadrdAddr.presence = "hidden"
                      | xfa.host.resetData(standadrdAddr.somExpression)
                      | lotConcession.presence = "hidden"
                      | xfa.host.resetData(lotConcession.somExpression)
                      | }
                  FIELD concession; type=checkButton; label="Lot/Concession Address"; options=[2 | ]; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Other. Address for Service. This field is mandatory. Lot or Concession add"
                    SCRIPT on initialize (formcalc):
                      | $.font.fill.color.value="0,0,255";
                    SCRIPT on change (javascript):
                      | if(this.rawValue == "2"){
                      | lotConcession.presence = "visible"
                      | standadrdAddr.presence = "hidden"
                      | xfa.host.resetData(standadrdAddr.somExpression)
                      | }
                      | else{
                      | standadrdAddr.presence = "hidden"
                      | xfa.host.resetData(standadrdAddr.somExpression)
                      | lotConcession.presence = "hidden"
                      | xfa.host.resetData(lotConcession.somExpression)
                      | }
                  SECTION standadrdAddr
                    FIELD streetNo; type=textEdit; label="Street Number *"; maxChars=6; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Other. Address for Service. Standard address. Street Number. This field is"
                    FIELD streetName; type=textEdit; label="Street Name *"; maxChars=45; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Other. Address for Service. Standard address. Street Name. This field is m"
                    FIELD unitNo; type=textEdit; label="Unit Number"; maxChars=8; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Other. Address for Service. Standard address. Unit Number."
                    FIELD city; type=textEdit; label="City/Town *"; maxChars=45; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Other. Address for Service. Standard address. City or Town. This field is "
                    FIELD province; type=textEdit; label="Province"; access=readOnly; maxChars=30; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Other. Address for Service. Standard address. Province."
                    FIELD postalCode; type=textEdit; label="Postal Code *"; maxChars=7
                      SCRIPT on exit (javascript):
                        | controller.validatePostalCodeExit(xfa.event)
                      SCRIPT on ready (javascript):
                        | this.assist.toolTip.value="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Other. Address for Service. Standard address. Postal Code.\n" + controller.iMessage(["m
                    FIELD country; type=textEdit; label="Country"; access=readOnly; maxChars=30; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Other. Address for Service. Standard address. Country"
                  SECTION lotConcession
                    FIELD line1; type=textEdit; label="Address Line 1 *"; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Other. Address for Service. Lot or Concession address. Address Line 1. Thi"
                    FIELD line2; type=textEdit; label="Address Line 2"; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Other. Address for Service. Lot or Concession address. Address Line 2."
                    FIELD city; type=textEdit; label="City/Town *"; maxChars=45; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Other. Address for Service. Lot or Concession address. City or Town. This "
                    FIELD province; type=textEdit; label="Province"; access=readOnly; maxChars=30; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Other. Address for Service. Lot or Concession address. Province."
                    FIELD postalCode; type=textEdit; label="Postal Code *"; maxChars=7
                      SCRIPT on exit (javascript):
                        | controller.validatePostalCodeExit(xfa.event)
                      SCRIPT on ready (javascript):
                        | this.assist.toolTip.value="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Other. Address for Service. Lot or Concession address. Postal Code.\n" + controller.iMe
                    FIELD country; type=textEdit; label="Country"; access=readOnly; maxChars=30; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Other. Address for Service. Lot or Concession address. Country."
                SECTION _extra [presence=inactive]
                  FIELD can; type=checkButton; label="Canada"; options=[canada | ]; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Other. Address for Service. Country. This field is mandatory. Canada."
                    SCRIPT on initialize (formcalc):
                      | $.font.fill.color.value="0,0,255";
                    SCRIPT on change (javascript):
                      | if(this.rawValue == "canada"){
                      | canada.presence = "visible"
                      | xfa.host.setFocus(canada.standard);
                      | usa.presence = "hidden"
                      | xfa.host.resetData(usa.somExpression);
                      | international.presence = "hidden"
                      | xfa.host.resetData(international.somExpression);
                      | }
                      | else{
                      | canada.presence = "hidden"
                      | canada.standadrdAddr.presence = "hidden"
                      | canada.lotConcession.presence = "hidden"
                      | xfa.host.resetData(canada.somExpression);
                      | }
                  FIELD us; type=checkButton; label="U.S.A."; options=[usa | ]; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Other. Address for Service. Country. This field is mandatory. U.S.A."
                    SCRIPT on initialize (formcalc):
                      | $.font.fill.color.value="0,0,255";
                    SCRIPT on change (javascript):
                      | if(this.rawValue == "usa"){
                      | usa.presence = "visible"
                      | xfa.host.setFocus(usa.streetNo);
                      | canada.presence = "hidden"
                      | canada.standadrdAddr.presence = "hidden"
                      | canada.lotConcession.presence = "hidden"
                      | xfa.host.resetData(canada.somExpression);
                      | international.presence = "hidden"
                      | xfa.host.resetData(international.somExpression);
                      | }
                      | else{
                      | usa.presence = "hidden"
                      | xfa.host.resetData(usa.somExpression);
                      | }
                  FIELD intern; type=checkButton; label="International"; options=[international | ]; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Other. Address for Service. Country. This field is mandatory. Internationa"
                    SCRIPT on initialize (formcalc):
                      | $.font.fill.color.value="0,0,255";
                    SCRIPT on change (javascript):
                      | if(this.rawValue == "international"){
                      | international.presence = "visible"
                      | xfa.host.setFocus(international.line1);
                      | canada.presence = "hidden"
                      | canada.standadrdAddr.presence = "hidden"
                      | canada.lotConcession.presence = "hidden"
                      | xfa.host.resetData(canada.somExpression);
                      | usa.presence = "hidden"
                      | xfa.host.resetData(usa.somExpression);
                      | }
                      | else{
                      | international.presence = "hidden"
                      | xfa.host.resetData(international.somExpression);
                      | }
                  SECTION usa
                    FIELD streetNo; type=textEdit; label="Street Number *"; maxChars=6
                      SCRIPT on exit (javascript):
                        | var r = new RegExp("^[A-Za-z' '\àâçéèêëîïôûùüÿñæœ\0-9\'\-]*$");
                        | var result = r.test(this.rawValue);
                        | if(this.rawValue!=null){
                        | if ( result != true )
                        | {
                        | xfa.host.messageBox( "Street Number field format is invalid." );
                        | xfa.host.setFocus(this);
                        | this.rawValue="";
                        | }
                        | }
                      SCRIPT on ready (javascript):
                        | //if(this.parent.index=="0"){
                        | //this.assist.toolTip.value ="Section 7. Director " + (this.parent.parent.index + 1) + ". Address for Service. Street Number. This field is mandatory.";
                        | //}
                        | //else{
                        | this.assist.toolTip.value ="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Other. Address for Service. Country. U.S.A. Street Number. This field is mandatory.";
                        | //}
                    FIELD streetName; type=textEdit; label="Street Name *"; maxChars=45
                      SCRIPT on exit (javascript):
                        | var r = new RegExp("^[A-Za-z' '\àâçéèêëîïôûùüÿñæœ\0-9\'\-]*$");
                        | var result = r.test(this.rawValue);
                        | if(this.rawValue!=null){
                        | if ( result != true )
                        | {
                        | xfa.host.messageBox( "Street Name field format is invalid." );
                        | xfa.host.setFocus(this);
                        | this.rawValue="";
                        | }
                        | }
                      SCRIPT on ready (javascript):
                        | //if(this.parent.index=="0"){
                        | //this.assist.toolTip.value ="Section 7. Director " + (this.parent.parent.index + 1) + ". Address for Service. Street Name. This field is mandatory.";
                        | //}
                        | //else{
                        | this.assist.toolTip.value ="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Other. Address for Service. Country. U.S.A. Street Name. This field is mandatory.";
                        | //}
                    FIELD unitNo; type=textEdit; label="Unit Number"; maxChars=8
                      SCRIPT on ready (javascript):
                        | //if(this.parent.index=="0"){
                        | //this.assist.toolTip.value ="Section 7. Director " + (this.parent.parent.index + 1) + ". Address for Service. Unit Number.";
                        | //}
                        | //else{
                        | this.assist.toolTip.value ="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Other. Address for Service. Country. U.S.A. Unit Number.";
                        | //}
                    FIELD city; type=textEdit; label="City/Town *"; maxChars=45
                      SCRIPT on exit (javascript):
                        | var r = new RegExp("^[A-Za-z' '\àâçéèêëîïôûùüÿñæœ\'\-]*$");
                        | var result = r.test(this.rawValue);
                        | if(this.rawValue!=null){
                        | if ( result != true )
                        | {
                        | xfa.host.messageBox( "City\Town field format is invalid." );
                        | xfa.host.setFocus(this);
                        | this.rawValue="";
                        | }
                        | }
                      SCRIPT on ready (javascript):
                        | //if(this.parent.index=="0"){
                        | //this.assist.toolTip.value ="Section 7. Director " + (this.parent.parent.index + 1) + ". Address for Service. City or Town. This field is mandatory.";
                        | //}
                        | //else{
                        | this.assist.toolTip.value ="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Other. Address for Service. Country. U.S.A. City or Town. This field is mandatory.";
                        | //}
                    FIELD state; type=choiceList; label="State *"; options=[Alabama | Alaska | Arizona | Arkansas | California | Colorado | Connecticut | Delaware | District of Columbia | Florida | Georgia | Hawaii | Idaho | Illinois | Indiana | Iowa | Kansas | Kentucky | Louisiana | Maine | Maryland | Massachusetts | Michigan | Minnesota | Mississippi | Missouri | Montana | Nebraska | Nevada | New Hampshire...]
                      SCRIPT on exit (javascript):
                        | var r = new RegExp("^[A-Za-z' '\àâçéèêëîïôûùüÿñæœ\'\-]*$");
                        | var result = r.test(this.rawValue);
                        | if(this.rawValue!=null){
                        | if ( result != true )
                        | {
                        | xfa.host.messageBox( "State field format is invalid." );
                        | xfa.host.setFocus(this);
                        | this.rawValue="";
                        | }
                        | }
                      SCRIPT on ready (javascript):
                        | //if(this.parent.index=="0"){
                        | //this.assist.toolTip.value ="Section 7. Director " + (this.parent.parent.index + 1) + ". Address for Service. State. Select State from the drop down menu. This field is mandatory.";
                        | //}
                        | //else{
                        | this.assist.toolTip.value ="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Other. Address for Service. Country. U.S.A. State. Select State from the drop down men
                        | //}
                    FIELD zipCode; type=textEdit; label="Zip Code *"
                      SCRIPT on exit (javascript):
                        | var pattern1 = /^\d{5}(\d{4})?$/;
                        | var pattern2 = /^\d{5}(-\d{4})?$/;
                        | var inputValue = xfa.event.target.rawValue
                        | if(inputValue!=null)
                        | {
                        | // if input value does NOT match the pattern, display a validation message
                        | if(!inputValue.match(pattern1) && !inputValue.match(pattern2))
                        | {
                        | app.alert("Zip code field format is invalid.For example the format should be: 12345 or 12345-6789.");
                        | xfa.host.setFocus(this);
                        | this.rawValue="";
                        | }
                        | else
                        | {
                        | if (inputValue.length == 9 )
                        | {
                        | xfa.event.target.rawValue = inputValue.substring(0,5) + "-" + inputValue.substring(5,9);
                        | }
                        | }
                        | }
                      SCRIPT on ready (javascript):
                        | //if(this.parent.index=="0"){
                        | //this.assist.toolTip.value ="Section 7. Director " + (this.parent.parent.index + 1) + ". Address for Service. Zip Code. This field is mandatory.";
                        | //}
                        | //else{
                        | this.assist.toolTip.value ="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Other. Address for Service. Country. U.S.A. Zip Code. This field is mandatory.";
                        | //}
                    FIELD country; type=textEdit; label="Country"; access=readOnly; maxChars=30
                      SCRIPT on ready (javascript):
                        | //if(this.parent.index=="0"){
                        | //this.assist.toolTip.value ="Section 7. Director " + (this.parent.parent.index + 1) + ". Address for Service. Country. United Stetes.";
                        | //}
                        | //else{
                        | this.assist.toolTip.value ="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Other. Address for Service. Country. U.S.A. Country. United Stetes.";
                        | //}
                  SECTION international
                    FIELD line1; type=textEdit; label="Address line 1 *"
                      SCRIPT on ready (javascript):
                        | //if(this.parent.index=="0"){
                        | //this.assist.toolTip.value ="Section 7. Director " + (this.parent.parent.index + 1) + ". Address for Service. Address Line 1. This field is mandatory.";
                        | //}
                        | //else{
                        | this.assist.toolTip.value ="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Other. Address for Service. Country. International. Address Line 1. This field is mand
                        | //}
                    FIELD line2; type=textEdit; label="Address line 2"
                      SCRIPT on ready (javascript):
                        | //if(this.parent.index=="0"){
                        | //this.assist.toolTip.value ="Section 7. Director " + (this.parent.parent.index + 1) + ". Address for Service. Address Line 2.";
                        | //}
                        | //else{
                        | this.assist.toolTip.value ="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Other. Address for Service. Country. International. Address Line 2.";
                        | //}
                    FIELD city; type=textEdit; label="City/Town *"; maxChars=45
                      SCRIPT on exit (javascript):
                        | var r = new RegExp("^[A-Za-z' '\àâçéèêëîïôûùüÿñæœ\'\-]*$");
                        | var result = r.test(this.rawValue);
                        | if(this.rawValue!=null){
                        | if ( result != true )
                        | {
                        | xfa.host.messageBox( "City\Town field format is invalid." );
                        | xfa.host.setFocus(this);
                        | this.rawValue="";
                        | }
                        | }
                      SCRIPT on ready (javascript):
                        | //if(this.parent.index=="0"){
                        | //this.assist.toolTip.value ="Section 7. Director " + (this.parent.parent.index + 1) + ". Address for Service. City or Town. This field is mandatory.";
                        | //}
                        | //else{
                        | this.assist.toolTip.value ="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Other. Address for Service. Country. International. City or Town. This field is mandat
                        | //}
                    FIELD region; type=textEdit; label="Region *"
                      SCRIPT on exit (javascript):
                        | var r = new RegExp("^[A-Za-z' '\àâçéèêëîïôûùüÿñæœ\'\-]*$");
                        | var result = r.test(this.rawValue);
                        | if(this.rawValue!=null){
                        | if ( result != true )
                        | {
                        | xfa.host.messageBox( "Region field format is invalid." );
                        | xfa.host.setFocus(this);
                        | this.rawValue="";
                        | }
                        | }
                      SCRIPT on ready (javascript):
                        | //if(this.parent.index=="0"){
                        | //this.assist.toolTip.value ="Section 7. Director " + (this.parent.parent.index + 1) + ". Address for Service. Region. This field is mandatory.";
                        | //}
                        | //else{
                        | this.assist.toolTip.value ="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Other. Address for Service. Country. International. Region. This field is mandatory.";
                        | //}
                    FIELD postal; type=textEdit; label="Postal Code *"
                      SCRIPT on ready (javascript):
                        | //if(this.parent.index=="0"){
                        | //this.assist.toolTip.value ="Section 7. Director " + (this.parent.parent.index + 1) + ". Address for Service. Postal Code. This field is mandatory.";
                        | //}
                        | //else{
                        | this.assist.toolTip.value ="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Other. Address for Service. Country. International. Postal Code. This field is mandato
                        | //}
                    FIELD country; type=choiceList; label="Country *"; options=[Afghanistan | Aland Islands | Albania | Algeria | American Samoa | Andorra | Angola | Anguilla | Antarctica | Antigua And Barbuda | Argentina | Armenia | Aruba | Australia | Austria | Azerbaijan | Bahamas | Bahrain | Bangladesh | Barbados | Belarus | Belgium | Belize | Benin | Bermuda | Bhutan | Bolivia, Plurinational State Of | Bonaire, Sint Eustatius And Saba | Bosnia And Herzegovina | Botswana...]
                      SCRIPT on exit (javascript):
                        | /*
                        | var r = new RegExp("^[A-Za-z' '\àâçéèêëîïôûùüÿñæœ\'\-,)(]*$");
                        | var result = r.test(this.rawValue);
                        | if(this.rawValue!=null){
                        | if ( result != true )
                        | {
                        | xfa.host.messageBox( "Country field format is invalid." );
                        | xfa.host.setFocus(this);
                        | this.rawValue="";
                        | }
                        | }
                        | */
                      SCRIPT on ready (javascript):
                        | //if(this.parent.index=="0"){
                        | //this.assist.toolTip.value ="Section 7. Director " + (this.parent.parent.index + 1) + ". Address for Service. Country. This field is mandatory.";
                        | //}
                        | //else{
                        | this.assist.toolTip.value ="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Other. Address for Service. Country. International. Country. Select Country from drop 
                        | //}
              TEXT "Individual Representing the Entity"
              TEXT "Full Name"
              FIELD firstName; type=textEdit; label="First Name *"; maxChars=30; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Other. Individual Representing the Entity. Full Name. First Name. This fie"
              FIELD middleName; type=textEdit; label="Middle Name"; maxChars=13; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Other. Individual Representing the Entity. Full Name. Middle Name."
              FIELD lastName; type=textEdit; label="Last Name *"; maxChars=50; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Other. Individual Representing the Entity. Full Name. Last Name. This fiel"
              FIELD position; type=textEdit; label="Position *"; maxChars=120; help="Section 5. Person authorizing amendment. Person Acting Under Power of Attorney. Type. Other. Individual Representing the Entity. Position. This field is mandato"
      SECTION confirmation
        TEXT "6. Confirmation"
        FIELD authorization; type=checkButton; label="* I,"; options=[1 | 0]; help="Section 6. Confirmation. I confirm. This field is mandatory."
          SCRIPT on initialize (formcalc):
            | $.font.fill.color.value="0,0,255";
        FIELD TextField; type=textEdit; presence=hidden; access=readOnly
          SCRIPT calculate:
            | if(!(form1.page1.body.contactInfo.firstName.isNull || form1.page1.body.contactInfo.firstName.rawValue.length == 0) && (!( form1.page1.body.contactInfo.middleName.isNull || form1.page1.body.contactInfo
            | //if(!(form1.page1.body.contactInfo.firstName.isNull || form1.page1.body.contactInfo.firstName.rawValue.length == 0) && (!( form1.page1.body.contactInfo.lastName.isNull || form1.page1.body.contactInfo
            | {
            | this.rawValue = form1.page1.body.contactInfo.firstName.rawValue + " " + form1.page1.body.contactInfo.middleName.rawValue + " " + form1.page1.body.contactInfo.lastName.rawValue;
            | }
            | else if(!(form1.page1.body.contactInfo.firstName.isNull || form1.page1.body.contactInfo.firstName.rawValue.length == 0) && (!( form1.page1.body.contactInfo.lastName.isNull || form1.page1.body.contactI
            | this.rawValue = form1.page1.body.contactInfo.firstName.rawValue + " " + form1.page1.body.contactInfo.lastName.rawValue;
            | }
            | else {
            | this.rawValue ="";
            | }
        TEXT "confirm the accuracy of the information submitted."
        TEXT "Caution - The Act sets out penalties , including fines, for submitting false or misleading information."
      SECTION navigationBtns
        FIELD saveForm; type=button; label="Save Form"
          SCRIPT on click (javascript):
            | app.execMenuItem("SaveAs");
        FIELD Print; type=button; label="Print Form"
          SCRIPT on click (javascript):
            | if (!myUtil.checkManadatory()){
            | form1.page1.body.print.rawValue=1;
            | xfa.host.print(1, "0", (xfa.host.numPages -1).toString(), 0, 0, 0, 0, 0);
            | form1.page1.body.print.rawValue=null;
            | }
          SCRIPT on prePrint (javascript):
            | validator.setPrePrint()
          SCRIPT on postPrint (javascript):
            | validator.setPostPrint()
        FIELD Reset; type=button; label="Clear Form"
          SCRIPT on click (javascript):
            | //// do not modify below this line. mgs8E
            | var oPrintForm = app.alert({
            | cMsg: controller.iMessage(["mgs7E"]),
            | cTitle: controller.iMessage(["mgs8E"]),
            | nIcon: 1, nType: 2
            | });
            | if (oPrintForm == 4){
            | //reset data
            | xfa.datasets.data.loadXML("<eForm/>", true, true);
            | //go to the top of the page - use bookmark function
            | oUtility.goBookMark(page1.header.FormTitle.somExpression)
            | }
            | else{
            | //continued
            | }
      FIELD print; type=textEdit; presence=hidden; REQUIRED; maxChars=15; help="print"
```
