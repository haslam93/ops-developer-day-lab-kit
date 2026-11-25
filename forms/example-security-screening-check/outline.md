# Form outline: form.pdf

Source type: Adobe XFA form. Fields: 86. Buttons: 6. Repeating groups: 3. Scripts on fields: 67. Fields flagged required in the form definition: 0.
A required count of 0 does not mean nothing is mandatory: many forms enforce it in scripts. Check the PDF.

```
SECTION eForm
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
    SCRIPT on initialize (javascript):
      | initialForm.initForm()
    SECTION header
      TEXT "Ontario Provincial Police"
      TEXT "Security Screening Check Information Sheet"
      FIELD TextField1; type=textEdit; label="TextField1"; presence=hidden
        SCRIPT on click (javascript):
          | oUtility.scrollTo(xfa.resolveNode(this.rawValue))
      FIELD initFld; type=textEdit; label="initFld"; presence=hidden
      TEXT "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEB AQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEB AQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAIOAowDASIA AhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEA"
    SECTION body
      SECTION information
        TEXT "Purpose of Form"
        TEXT "This form authorizes the Ontario Provincial Police (OPP) to conduct a Security Screening Check for Applicants who are either seeking employment with the OPP or being contracted to work in or around an OPP owned building/property or on behalf of an organization/agency seeking record checks for their "
        TEXT "Which Checks Are Conducted and Why?"
        TEXT "The type of checks conducted is determined by the checkboxes selected by your employer or requesting organization/agency on form LE221 Security Screening Check as described below, only the selected checks will be completed. Any questions or concerns regarding why certain checks have been selected sh"
        TEXT "Description of Check Levels"
        TEXT "A signed agreement between the requesting organization/agency and the OPP determines the *Level of Security Screening Check (outlined below) to be performed by the OPP. The following is a description of what will be searched for at each selected level of Security Screening Check. A specific record(s"
        SECTION level1
          TEXT "Level 1"
          FIELD level1_1; type=checkButton; label="Criminal Convictions Search A search is conducted on criminal record information from the Royal Canadian Mounted Police (RCMP) National Repository of Criminal R"; access=readOnly; options=[1 | 0 | 2]; help="Level 1. Criminal Convictions Search. A search is conducted on criminal record information from the Royal Canadian Mounted Police (RCMP) National Repository of "
          FIELD level1_2; type=checkButton; label="Outstanding Entries Search Entries/occurrence information from the Police databases and CPIC (Intelligence and Investigative Databanks), such as outstanding cha"; access=readOnly; options=[1 | 0 | 2]; help="Level 1. Outstanding Entries Search. Entries/occurrence information from the Police databases and CPIC (Intelligence and Investigative Databanks), such as outst"
        SECTION level2
          TEXT "Level 2"
          FIELD level2_1; type=checkButton; label="Local Police Databases Search Occurrences from local police databases that did not result with a charge (e.g., police involvement including but not limited to t"; access=readOnly; options=[1 | 0 | 2]; help="Level 2. Local Police Databases Search. Occurrences from local police databases that did not result with a charge (e.g., police involvement including but not li"
          FIELD level2_2; type=checkButton; label="Other Law Enforcement Databases Search Comprehensive name search of additional police databases, (e.g., CBSA, RCMP Intelligence or Military)."; access=readOnly; options=[1 | 0 | 2]; help="Level 2. Other Law Enforcement Databases Search. Comprehensive name search of additional police databases, (e.g., RCMP Intelligence or Military)."
          FIELD level1_3; type=checkButton; label="Driving History Search Ministry of Transportation Ontario (MTO) driving history search of CPIC (Ancillary Databank). This check includes driver’s licence status"; access=readOnly; options=[1 | 0 | 2]; help="Level 1. Driving History Search. Ministry of Transportation Ontario (MTO) driving history search of CPIC (Ancillary Databank). This check includes driver’s lice"
        SECTION level3
          TEXT "Level 3"
          FIELD level3_1; type=checkButton; label="Open-Source Internet Search Search of open-source internet, social networking websites, blogs, chatrooms, or other content using the Applicant’s information. Ca"; access=readOnly; options=[1 | 0 | 2]; help="Level 3. Social Networking Search. Search of open-source Internet using the Applicant’s name to identify unlawful information or illegal activity. This informat"
          FIELD level3_2; type=checkButton; label="Credit History Check A search of the Applicant’s credit history will be completed using an approved consumer credit bureau."; access=readOnly; options=[1 | 0 | 2]; help="Level 3. Credit History Check. A search of the Applicant’s credit history will be completed using Equifax."
        SECTION level4
          TEXT "Level 4"
          FIELD level4_1; type=checkButton; label="Fingerprint Search of Criminal Convictions A search of criminal convictions from the RCMP National Repository of Criminal Records (Identification Databank) usin"; access=readOnly; options=[1 | 0 | 2]; help="Level 4. Fingerprint Search of Criminal Convictions. A search of criminal convictions from the RCMP National Repository of Criminal Records (Identification Data"
          FIELD level4_3; type=checkButton; label="Out of Country Criminal Record The Applicant is required to provide an Out of Country Criminal Record Certificate from the country(s) where they have resided, o"; access=readOnly; options=[1 | 0 | 2]; help="Level 4. Out of Country Criminal Record Search. A search for a criminal record in other country(s) for Applicant who have resided outside of Canada within five "
        SECTION level5
          TEXT "Level 5"
          FIELD level5_1; type=checkButton; label="Interview and/or Reference Check This check is used where necessary to obtain further information or clarification of information received or to discuss concern"; access=readOnly; options=[1 | 0 | 2]; help="Level 5. Interview and/or Reference Check. This check is used where necessary to obtain further information or clarification of information received or to discu"
        SECTION applicationInfo
          TEXT "Applicant Information"
          SECTION ul
            SECTION li
              TEXT "• Fill out all fields as completely as you can."
            SECTION li
              TEXT "• Information must include all previous last names, which may include maiden names, previous married names or name changes for adoption, etc. Do not use initials; spell out names in full."
            SECTION li
              TEXT "• Include other commonly used first names, and all other first and last names previously or currently used. e.g., a nickname, a middle name if used rather than a first name or a Canadianized name if different from a legal name."
            SECTION li
              TEXT "• Driver’s licence number is only needed when the Level 2 check includes a Ministry of Transportation Ontario check."
        TEXT "Addresses for the Last Five (5) Years"
        TEXT "You must include any addresses where you have resided for the past five years. This is used to determine which police service(s) need to be contacted for the local police records check or out of country checks."
        TEXT "Purpose of Record Check"
        SECTION Table1
          SECTION Row1
            TEXT "Employment"
            TEXT "Paid work (full-time or part-time, permanent or temporary)"
          SECTION Row2
            TEXT "Student Placement"
            TEXT "Cooperative placement or internship"
          SECTION Row4
            TEXT "Contractor"
            TEXT "Work for one specific project or task"
          SECTION Row3
            TEXT "Other"
            TEXT "Anything else that does not fit into the above categories"
        TEXT "Describe the position being applied for and the name of the organization/agency that requires the Security Screening Check."
        TEXT "Third Party Disclosure"
        TEXT "Completing this section gives the OPP permission to release the results of the Security Screening Check directly to the organization/agency identified on the consent form. All fields in this section must be filled out where applicable."
        TEXT "Release, Discharge and Consent"
        TEXT "This section obligates you, the Applicant, to provide true and correct information to the best of your knowledge and belief and authorize the OPP to conduct such searches necessary to obtain the information required to complete the check and disclose such information to the Applicant or requesting o"
        TEXT "Identification"
        TEXT "This section verifies that your two pieces of valid and legible identification (government issued and one must contain a photo) have been approved and authenticated by a company security officer (CSO) or authorized requestor from your employer or requesting organization/agency."
      SECTION headerSubform
        TEXT "Security Screening Check Information Sheet"
        TEXT "Ontario Provincial Police"
        TEXT "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEB AQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEB AQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAIOAowDASIA AhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEA"
        FIELD valFld; type=textEdit; presence=hidden
      SECTION instructions
        TEXT "Altering or tampering with this form, including any information on or attached to it that has been provided by a member of a law enforcement agency is a Criminal Code offence. Personal information contained on this form is collected pursuant to the Community Safety and Policing Act , Part 2, Section"
      SECTION secLevel
        TEXT "This security screening check will include the following information as it exists on the date of the search or searches."
        SECTION level1
          TEXT "Level 1"
          SECTION subformL1
            FIELD level1_1; type=checkButton; label="A search of criminal convictions from the Royal Canadian Mounted Police (RCMP) National Repository of Criminal Records (Identification Databank), the Canadian P"; options=[1 | 0 | 2]; help="Security Screening Check Level 1. A search of criminal convictions from the Royal Canadian Mounted Police (RCMP) National Repository of Criminal Records (Identi"
              SCRIPT on initialize (formcalc):
                | $.font.fill.color.value="0,0,255";
              SCRIPT on exit (javascript):
                | eForm.variables.validator.popHighestLevel()
            FIELD level1_2; type=checkButton; label="A search of outstanding entries from the Canadian Police Information Centre (Intelligence and Investigative Databanks), such as charges and warrants; judicial o"; options=[1 | 0 | 2]; help="Security Screening Check Level 1. A search of outstanding entries from the Canadian Police Information Centre (Intelligence and Investigative Databanks), such a"
              SCRIPT on initialize (formcalc):
                | $.font.fill.color.value="0,0,255";
              SCRIPT on exit (javascript):
                | eForm.variables.validator.popHighestLevel()
            TEXT "Not applicable"
        SECTION level2
          TEXT "Level 2"
          SECTION subform2
            FIELD level2_1; type=checkButton; label="A search of local police databases for occurrences which did not result in charges (e.g., police contacts including but not limited to theft, weapons, sex offen"; options=[1 | 0 | 2]; help="Security Screening Check Level 2. A search of local police databases for occurrences which did not result in charges (e.g., police contacts including but not li"
              SCRIPT on initialize (formcalc):
                | $.font.fill.color.value="0,0,255";
              SCRIPT on exit (javascript):
                | eForm.variables.validator.popHighestLevel()
            FIELD level2_2; type=checkButton; label="A search of any information or records held by all other federal or other law enforcement databases."; options=[1 | 0 | 2]; help="Security Screening Check Level 2. A search of any information or records held by all other federal or other law enforcement databases."
              SCRIPT on initialize (formcalc):
                | $.font.fill.color.value="0,0,255";
              SCRIPT on exit (javascript):
                | eForm.variables.validator.popHighestLevel()
            FIELD level2_3; type=checkButton; label="Ministry of Transportation Ontario ‒ Driver’s Licence History (Ancillary Databank)."; options=[1 | 0 | 2]; help="Security Screening Check Level 2. Ministry of Transportation Ontario - Driver’s Licence History (Ancillary Databank)."
              SCRIPT on change (javascript):
                | if (this.rawValue=="1")
                | {
                | eForm.page1.body.applicantInfo.driverLicenceNo.access = "open"
                | }
                | else
                | {
                | eForm.page1.body.applicantInfo.driverLicenceNo.access = "readOnly"
                | //eForm.page1.body.applicantInfo.driverLicenceNo.presence = "visible"
                | eForm.page1.body.applicantInfo.driverLicenceYes.rawValue = ""
                | }
              SCRIPT on initialize (javascript):
                | $.font.fill.color.value="0,0,255";
              SCRIPT on exit (javascript):
                | eForm.variables.validator.popHighestLevel()
            TEXT "Not applicable"
        SECTION level3
          TEXT "Level 3"
          SECTION subformL3
            FIELD level3_1; type=checkButton; label="Open-source internet search."; options=[1 | 0 | 2]; help="Security Screening Check Level 3. Open-source internet search."
              SCRIPT on initialize (formcalc):
                | $.font.fill.color.value="0,0,255";
              SCRIPT on exit (javascript):
                | eForm.variables.validator.popHighestLevel()
            FIELD level3_2; type=checkButton; label="A search of financial credit history."; options=[1 | 0 | 2]; help="Security Screening Check Level 3. A search of financial credit history."
              SCRIPT on initialize (formcalc):
                | $.font.fill.color.value="0,0,255";
              SCRIPT on exit (javascript):
                | eForm.variables.validator.popHighestLevel()
            TEXT "Not applicable"
        SECTION level4
          TEXT "Level 4"
          SECTION subformL4
            FIELD level4_1; type=checkButton; label="Fingerprint search of criminal convictions from RCMP National Repository of Criminal Records (Identification Databank)."; options=[1 | 0 | 2]; help="Security Screening Check Level 4. Fingerprint search of criminal convictions from RCMP National Repository of Criminal Records (Identification Databank)."
              SCRIPT on initialize (formcalc):
                | $.font.fill.color.value="0,0,255";
              SCRIPT on exit (javascript):
                | eForm.variables.validator.popHighestLevel()
            FIELD level4_3; type=checkButton; label="Out of country criminal record (Provided by the Applicant)."; options=[1 | 0 | 2]; help="Security Screening Check Level 4. Out of country criminal record (Provided by the Applicant)."
              SCRIPT on initialize (formcalc):
                | $.font.fill.color.value="0,0,255";
              SCRIPT on exit (javascript):
                | eForm.variables.validator.popHighestLevel()
            TEXT "Not applicable"
        SECTION level5
          TEXT "Level 5"
          SECTION subformL5
            FIELD level5_1; type=checkButton; label="An interview and/or reference check."; options=[1 | 0 | 2]; help="Security Screening Check Level 5. An interview and/or reference check."
              SCRIPT on initialize (formcalc):
                | $.font.fill.color.value="0,0,255";
              SCRIPT on exit (javascript):
                | eForm.variables.validator.popHighestLevel()
            TEXT "Not applicable"
        TEXT "Results from search levels 2 – 5 are disclosed, if appropriate, at the discretion of the Ontario Provincial Police (OPP)."
      SECTION applicantInfo
        TEXT "Applicant Information"
        FIELD lastName; type=textEdit; label="Last name"; maxChars=50; help="Applicant Information. Last name"
        FIELD firstName; type=textEdit; label="First name"; maxChars=30; help="Applicant Information. First name"
        FIELD middleNames; type=textEdit; label="Middle name(s)"; help="Applicant Information. Middles names"
        FIELD maidenNames; type=textEdit; label="Maiden name(s) and/or other last name(s) previously used"; help="Applicant Information. Maiden name or other last names used"
        FIELD otherNames; type=textEdit; label="Name commonly used, other first name(s), and /or all other names previously/currently used"; help="Applicant Information. Name commonly used or other first names"
        SECTION gender
          TEXT "Gender"
          FIELD male; type=checkButton; label="Male"; options=[1 | 0]; help="Applicant Information. Gender. Female"
            SCRIPT on initialize (formcalc):
              | $.font.fill.color.value="0,0,255";
          FIELD female; type=checkButton; label="Female"; options=[2 | ]; help="Applicant Information. Gender. Female"
            SCRIPT on initialize (formcalc):
              | $.font.fill.color.value="0,0,255";
          FIELD other; type=checkButton; label="Other"; options=[3 | 0]; help="Applicant Information. Gender. Female"
            SCRIPT on initialize (formcalc):
              | $.font.fill.color.value="0,0,255";
        FIELD driverLicenceNo; type=textEdit; label="Driver’s licence number (if applicable; mandatory where level 2 check includes Ministry of Transportation Ontario check)"; access=readOnly; help="Applicant Information. Driver’s licence number (if applicable, mandatory where level 1 check includes Ministry of Transportation Ontario check)"
          SCRIPT on click (javascript):
            | /*if
            | (form1.page1.body.secLevel.level1.level1_3.rawValue != "1")
            | xfa.host.messageBox("Driver's licence number is only required where level 1 check includes Ministry of Transportation Ontario check");*/
            | if
            | (eForm.page1.body.secLevel.level2.level2_2.rawValue != "1")
            | xfa.host.messageBox("Driver's licence number is only required where level 2 check includes Ministry of Transportation Ontario check");
        FIELD dob; type=dateTimeEdit; label="Date of birth (yyyy/mm/dd)"; format=date{YYYY/MM/DD}; help="Applicant Information. Date of birth. Enter date in format: year: 4 digits, month: 2 digits, day: 2 digits. Or select date from the drop down calendar."
          SCRIPT on exit (javascript):
            | controller.validateDateExit(xfa.event,"yyyy/mm/dd")
        FIELD countryBirth; type=textEdit; label="Country of birth"; maxChars=50; help="Applicant Information. Country of birth"
        FIELD email; type=textEdit; label="Email address"; help="Applicant Information. Email Address"
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
        FIELD telephoneNo; type=textEdit; label="Telephone number (include long distance country code if outside Canada)"; format=text{999 999-9999}; help="Applicant Information. Telephone number. Include long distance country code if outside Canada"
          SCRIPT on exit (javascript):
            | controller.validatePhoneExit(xfa.event)
            | //form1.variables.validator.validatePhoneExit(xfa.event)
      SECTION businessInfo
        TEXT "Addresses for the Last Five (5) Years"
        SECTION ownerPresentative [repeats max=-1]
          SECTION authorizationAddressInitial5 [repeats max=-1/min=0/initial=5]
            SCRIPT on indexChange (javascript):
              | var iIndx = (this.index + 1)
              | var sec2= "Addresses for the Last Five Years. List most recent address first. Address " + iIndx+". " ;
              | if (this.index==0){heading.value.text.value = "Address "+iIndx+" (Current Address)"; }
              | else{heading.value.text.value = "Address "+iIndx; }
              | address.unitNo.assist.toolTip.value =sec2+ "Unit Number.";
              | address.streetNo.assist.toolTip.value =sec2+ "Street Number.";
              | address.streetName.assist.toolTip.value =sec2+ "Street Name.";
              | address.city.assist.toolTip.value =sec2+ "City or Town.";
              | address.province.assist.toolTip.value =sec2+ "Province or State.";
              | address.postalCode.assist.toolTip.value =sec2+ "Postal or Zip Code.";
              | address.country.assist.toolTip.value =sec2+ "Country.";
              | address.duration.startDate2.assist.toolTip.value =sec2+ "Duration From (yyyy/mm/dd).Enter date in format: year: 4 digits, month: 2 digits.";
              | address.duration.endDate2.assist.toolTip.value =sec2+ "Duration To (yyyy/mm/dd). Enter date in format: year: 4 digits, month: 2 digits.";
              | navDelBtn.deleteBtn.assist.toolTip.value =sec2+ "Delete Address " + iIndx + "";
              | navDelBtn.deleteBtn.caption.value.text.value = "Delete Address " + iIndx + "";
              | //lastName.assist.toolTip.value =sec2+ "Last Name. " + controller.iMessage(["mgs9E"]) ;
              | ///firstName.assist.toolTip.value =sec2+ "First Name. " + controller.iMessage(["mgs9E"]);
              | //telephoneNo.assist.toolTip.value =sec2+ "Telephone Number. " + controller.iMessage(["mgs9E"]);
              | //phoneExtension.assist.toolTip.value =sec2+ "Telephone Number. Extension ";
              | //email.assist.toolTip.value =sec2+ "Email. " + controller.iMessage(["mgs9E"]);
              | //navDelBtn.deletebtn.assist.toolTip.value =" Delete: Authorized Representative " + iIndx + " ";
            TEXT "Address 1"
            SECTION navDelBtn [presence=hidden]
              FIELD deleteBtn; type=button; label="Delete Address"
                SCRIPT on click (javascript):
                  | //lastName
                  | if(ownerPresentative._authorizationAddress.count>1)
                  | {
                  | theAns = xfa.host.messageBox(controller.iMessage(["mgs1E"]),controller.iMessage(["mgs4E"]),1,2);
                  | if (theAns == 5)
                  | {
                  | allItems = xfa.resolveNodes("ownerPresentative.authorizationAddress[*]");
                  | // set focus
                  | if (this.parent.parent.index > 0) {
                  | xfa.host.setFocus(allItems.item(this.parent.parent.index-1).lastName);
                  | }
                  | else {
                  | xfa.host.setFocus(allItems.item(this.parent.parent.index+1).lastName);
                  | }
                  | //
                  | if(ownerPresentative._authorizationAddress.count ==2)
                  | {
                  | for(var n=0; n<2; n++)
                  | {
                  | if(n!= ownerPresentative.authorizationAddress.index)
                  | allItems.item(0).navDelBtn.deleteBtn.presence = "hidden"; // - hidden
                  | allItems.item(n).navDelBtn.deleteBtn.presence = "hidden"; // - hidden
                  | }
                  | }
                  | ownerPresentative._authorizationAddress.removeInstance(authorizationAddress.index); // remove a row
                  | }
                  | }
                  | else{
                  | xfa.host.messageBox(controller.iMessage(["mgs2E"]) );
                  | }
            SECTION address
              FIELD unitNo; type=textEdit; label="Unit number"
              FIELD streetNo; type=textEdit; label="Street number"
              FIELD streetName; type=textEdit; label="Street name"; maxChars=50
              FIELD city; type=textEdit; label="City/Town"; maxChars=50
              FIELD province; type=textEdit; label="Province/State"; maxChars=50
              FIELD postalCode; type=textEdit; label="Postal/ZIP Code"; maxChars=10
                SCRIPT on change (javascript):
                  | /*if(this.rawValue!=null)
                  | { // pattern to match the postal code
                  | var pattern = /[A-Za-z]\d[A-Za-z] *\d[A-Za-z]\d/;
                  | this.rawValue=this.rawValue.toUpperCase();
                  | // convert to upper case
                  | var input = this.rawValue// convert to a string
                  | // if user's input does NOT match the pattern, display a validation message
                  | if(!input.match(pattern))
                  | {
                  | xfa.host.messageBox(this.validationMessage);
                  | this.rawValue="";
                  | xfa.host.setFocus(this.name);
                  | }
                  | else{
                  | var z=this.rawValue;
                  | if (this.rawValue.indexOf(" ")==-1)
                  | this.rawValue = z.substr(0,3) + " " + z.substr(3,3);
                  | }
                  | }
                  | */
                SCRIPT on exit (javascript):
                  | /*if(this.rawValue!=null)
                  | { // pattern to match the postal code
                  | var pattern = /[A-Za-z]\d[A-Za-z] *\d[A-Za-z]\d/;
                  | this.rawValue=this.rawValue.toUpperCase();
                  | // convert to upper case
                  | var input = this.rawValue// convert to a string
                  | // if user's input does NOT match the pattern, display a validation message
                  | if(!input.match(pattern))
                  | {
                  | xfa.host.messageBox(this.validationMessage);
                  | this.rawValue="";
                  | xfa.host.setFocus(this.name);
                  | }
                  | else{
                  | var z=this.rawValue;
                  | if (this.rawValue.indexOf(" ")==-1)
                  | this.rawValue = z.substr(0,3) + " " + z.substr(3,3);
                  | }
                  | }*/
                MESSAGE validate: "Enter postal code in format: A#A #A#."
              FIELD country; type=textEdit; label="Country"; maxChars=50
              SECTION duration
                TEXT "Duration (yyyy/mm/dd)"
                FIELD startDate2; type=dateTimeEdit; label="From"; format=date{YYYY/MM/DD}
                  SCRIPT on exit (javascript):
                    | controller.validateDateExit(xfa.event,"yyyy/mm/dd")
                    | var endDte2=this.parent.endDate2;
                    | if (this.formattedValue!=null && this.formattedValue!="" && endDte2.formattedValue!=null && endDte2.formattedValue!="" )
                    | {
                    | var sdte=util.scand("yyyy/mm/dd", this.formattedValue);
                    | var edte=util.scand("yyyy/mm/dd", endDte2.formattedValue);
                    | if (sdte>edte)
                    | {
                    | // cancel the change
                    | xfa.host.messageBox("Start date cannot be after end date");
                    | xfa.host.resetData(xfa.event.target.somExpression);
                    | xfa.host.setFocus(xfa.event.target.somExpression)
                    | }
                    | }
                  SCRIPT on ready (javascript):
                    | this.assist.toolTip.value="Section 6. Assignee " + (this.parent.parent.index+ 1 ) + ". Start Date 2. Enter date in format: year: 4 digits, month: 2 digits, day: 2 digits or select date from the drop d
                FIELD endDate2; type=dateTimeEdit; label="To"; format=date{YYYY/MM/DD}
                  SCRIPT on exit (javascript):
                    | controller.validateDateExit(xfa.event,"yyyy/mm/dd")
                    | var startDte2=this.parent.startDate2;
                    | if (this.formattedValue!=null && this.formattedValue!="" && startDte2.formattedValue!=null && startDte2.formattedValue!="" )
                    | {
                    | var sdte=util.scand("yyyy/mm/dd", startDte2.formattedValue);
                    | var edte=util.scand("yyyy/mm/dd", this.formattedValue);
                    | if (sdte>edte)
                    | {
                    | // cancel the change
                    | xfa.host.messageBox("Start date cannot be after end date");
                    | xfa.host.resetData(xfa.event.target.somExpression);
                    | xfa.host.setFocus(xfa.event.target.somExpression)
                    | }
                    | }
                  SCRIPT on ready (javascript):
                    | this.assist.toolTip.value="Section 6. Assignee " + (this.parent.parent.index+ 1 ) + ". End Date 2. Enter date in format: year: 4 digits, month: 2 digits, day: 2 digits or select date from the drop dow
          FIELD level5_1; type=checkButton; label="Check if additional sheet is attached for more addresses (maximum 15)"; options=[1 | 0 | 2]; help="Addresses for the Last Five Years. Check if additional sheet is attached for more addresses"
            SCRIPT on initialize (formcalc):
              | $.font.fill.color.value="0,0,255";
            SCRIPT on change (javascript):
              | if (this.rawValue == "1")
              | {
              | eForm.page1.body.businessInfo.ownerPresentative.authorizationAddress.presence = "visible";
              | eForm.page1.body.businessInfo.ownerPresentative.navAddBtn.presence = "visible";
              | //xfa.host.setFocus("form1.page2.body.addressList[0].address.unitNo")
              | //form1.page3.body.page3.presence = "visible";
              | //form1.page3.body.page2.presence = "hidden";
              | }
              | else if (this.rawValue == "0")
              | {
              | xfa.host.resetData(eForm.page1.body.businessInfo.ownerPresentative.authorizationAddress.somExpression);
              | eForm.page1.body.businessInfo.ownerPresentative.authorizationAddress.presence = "hidden";
              | eForm.page1.body.businessInfo.ownerPresentative.navAddBtn.presence = "hidden";
              | //eForm.page1.body.businessInfo.ownerPresentative.authorizationAddressInitial5.navDelBtn..presence = "hidden";
              | }
          SECTION authorizationAddress [repeats max=-1]
            SCRIPT on indexChange (javascript):
              | var iIndx = (this.index + 6)
              | var sec2= "Addresses for the Last Five Years, if different from above. List most recent address first. Address " + iIndx+". " ;
              | heading.value.text.value = "Address "+iIndx;
              | address.unitNo.assist.toolTip.value =sec2+"Unit Number.";
              | address.streetNo.assist.toolTip.value =sec2+"Street Number.";
              | address.streetName.assist.toolTip.value =sec2+ "Street Name.";
              | address.city.assist.toolTip.value =sec2+"City or Town.";
              | address.province.assist.toolTip.value =sec2+"Province or State.";
              | address.postalCode.assist.toolTip.value =sec2+"Postal or Zip Code.";
              | address.country.assist.toolTip.value =sec2+ "Country.";
              | address.duration.startDate2.assist.toolTip.value =sec2+"Duration From (yyyy/mm/dd).Enter date in format: year: 4 digits, month: 2 digits.";
              | address.duration.endDate2.assist.toolTip.value =sec2+ "Duration To (yyyy/mm/dd). Enter date in format: year: 4 digits, month: 2 digits.";
              | navDelBtn.deleteBtn.assist.toolTip.value =sec2+ "Delete Address " + "";
              | navDelBtn.deleteBtn.caption.value.text.value = "Delete Address " + iIndx + "";
              | //lastName.assist.toolTip.value =sec2+ "Last Name. " + controller.iMessage(["mgs9E"]) ;
              | ///firstName.assist.toolTip.value =sec2+ "First Name. " + controller.iMessage(["mgs9E"]);
              | //telephoneNo.assist.toolTip.value =sec2+ "Telephone Number. " + controller.iMessage(["mgs9E"]);
              | //phoneExtension.assist.toolTip.value =sec2+ "Telephone Number. Extension ";
              | //email.assist.toolTip.value =sec2+ "Email. " + controller.iMessage(["mgs9E"]);
              | //navDelBtn.deletebtn.assist.toolTip.value =" Delete: Authorized Representative " + iIndx + " ";
            TEXT "Address 6"
            SECTION navDelBtn
              FIELD deleteBtn; type=button; label="Delete Address"
                SCRIPT on click (javascript):
                  | //lastName
                  | if(ownerPresentative._authorizationAddress.count>1)
                  | {
                  | theAns = xfa.host.messageBox(controller.iMessage(["mgs1E"]),controller.iMessage(["mgs4E"]),1,2);
                  | if (theAns == 4)
                  | {
                  | allItems = xfa.resolveNodes("ownerPresentative.authorizationAddress[*]");
                  | // set focus
                  | //if (this.parent.parent.index > 0) {
                  | // xfa.host.setFocus(allItems.item(this.parent.parent.index-1).address.unitNo);
                  | // }
                  | //else {
                  | // xfa.host.setFocus(allItems.item(this.parent.parent.index+1).address.unitNo);
                  | //}
                  | ownerPresentative._authorizationAddress.removeInstance(authorizationAddress.index); // remove a row
                  | }
                  | }
                  | else{
                  | xfa.host.messageBox(controller.iMessage(["mgs2E"]) );
                  | }
            SECTION address
              FIELD unitNo; type=textEdit; label="Unit number"
              FIELD streetNo; type=textEdit; label="Street number"
              FIELD streetName; type=textEdit; label="Street name"; maxChars=50
              FIELD city; type=textEdit; label="City/Town"; maxChars=50
              FIELD province; type=textEdit; label="Province/State"; maxChars=50
              FIELD postalCode; type=textEdit; label="Postal/ZIP Code"; maxChars=10
                SCRIPT on change (javascript):
                  | /*if(this.rawValue!=null)
                  | { // pattern to match the postal code
                  | var pattern = /[A-Za-z]\d[A-Za-z] *\d[A-Za-z]\d/;
                  | this.rawValue=this.rawValue.toUpperCase();
                  | // convert to upper case
                  | var input = this.rawValue// convert to a string
                  | // if user's input does NOT match the pattern, display a validation message
                  | if(!input.match(pattern))
                  | {
                  | xfa.host.messageBox(this.validationMessage);
                  | this.rawValue="";
                  | xfa.host.setFocus(this.name);
                  | }
                  | else{
                  | var z=this.rawValue;
                  | if (this.rawValue.indexOf(" ")==-1)
                  | this.rawValue = z.substr(0,3) + " " + z.substr(3,3);
                  | }
                  | }
                  | */
                SCRIPT on exit (javascript):
                  | /*if(this.rawValue!=null)
                  | { // pattern to match the postal code
                  | var pattern = /[A-Za-z]\d[A-Za-z] *\d[A-Za-z]\d/;
                  | this.rawValue=this.rawValue.toUpperCase();
                  | // convert to upper case
                  | var input = this.rawValue// convert to a string
                  | // if user's input does NOT match the pattern, display a validation message
                  | if(!input.match(pattern))
                  | {
                  | xfa.host.messageBox(this.validationMessage);
                  | this.rawValue="";
                  | xfa.host.setFocus(this.name);
                  | }
                  | else{
                  | var z=this.rawValue;
                  | if (this.rawValue.indexOf(" ")==-1)
                  | this.rawValue = z.substr(0,3) + " " + z.substr(3,3);
                  | }
                  | }*/
                MESSAGE validate: "Enter postal code in format: A#A #A#."
              FIELD country; type=textEdit; label="Country"; maxChars=50
              SECTION duration
                TEXT "Duration (yyyy/mm/dd)"
                FIELD startDate2; type=dateTimeEdit; label="From"; format=date{YYYY/MM/DD}
                  SCRIPT on exit (javascript):
                    | controller.validateDateExit(xfa.event,"yyyy/mm/dd")
                    | var endDte2=this.parent.endDate2;
                    | if (this.formattedValue!=null && this.formattedValue!="" && endDte2.formattedValue!=null && endDte2.formattedValue!="" )
                    | {
                    | var sdte=util.scand("yyyy/mm/dd", this.formattedValue);
                    | var edte=util.scand("yyyy/mm/dd", endDte2.formattedValue);
                    | if (sdte>edte)
                    | {
                    | // cancel the change
                    | xfa.host.messageBox("Start date cannot be after end date");
                    | xfa.host.resetData(xfa.event.target.somExpression);
                    | xfa.host.setFocus(xfa.event.target.somExpression)
                    | }
                    | }
                  SCRIPT on ready (javascript):
                    | this.assist.toolTip.value="Section 6. Assignee " + (this.parent.parent.index+ 1 ) + ". Start Date 2. Enter date in format: year: 4 digits, month: 2 digits, day: 2 digits or select date from the drop d
                FIELD endDate2; type=dateTimeEdit; label="To"; format=date{YYYY/MM/DD}
                  SCRIPT on exit (javascript):
                    | controller.validateDateExit(xfa.event,"yyyy/mm/dd")
                    | var startDte2=this.parent.startDate2;
                    | if (this.formattedValue!=null && this.formattedValue!="" && startDte2.formattedValue!=null && startDte2.formattedValue!="" )
                    | {
                    | var sdte=util.scand("yyyy/mm/dd", startDte2.formattedValue);
                    | var edte=util.scand("yyyy/mm/dd", this.formattedValue);
                    | if (sdte>edte)
                    | {
                    | // cancel the change
                    | xfa.host.messageBox("Start date cannot be after end date");
                    | xfa.host.resetData(xfa.event.target.somExpression);
                    | xfa.host.setFocus(xfa.event.target.somExpression)
                    | }
                    | }
                  SCRIPT on ready (javascript):
                    | this.assist.toolTip.value="Section 6. Assignee " + (this.parent.parent.index+ 1 ) + ". End Date 2. Enter date in format: year: 4 digits, month: 2 digits, day: 2 digits or select date from the drop dow
          SECTION navAddBtn
            FIELD addBtn; type=button; label="Add Address"
              SCRIPT on click (javascript):
                | //authorizationAddress.lastName
                | if (ownerPresentative._authorizationAddress.count < 10)
                | {
                | ownerPresentative._authorizationAddress.addInstance(1);
                | xfa.form.recalculate(1);
                | // set focus to the next row
                | allProds = ownerPresentative.resolveNodes("authorizationAddress[*]");
                | xfa.host.setFocus(allProds.item(allProds.length-1).address.unitNo);
                | allProds.item(0).navDelBtn.deleteBtn.presence = "visible";
                | allProds.item(1).navDelBtn.deleteBtn.presence = "visible";
                | }
      SECTION purRecCheck
        TEXT "Purpose of the Record Check"
        SECTION purpose
          FIELD employment; type=checkButton; label="Employment"; options=[1 | 0]; help="Purpose of the record check. Student placement"
            SCRIPT on initialize (formcalc):
              | $.font.fill.color.value="0,0,255";
            SCRIPT on change (javascript):
              | if(this.rawValue == "1"){
              | specifytext.access = "readOnly"
              | xfa.host.resetData(specifytext.somExpression)
              | }
          FIELD contractor; type=checkButton; label="Contractor"; options=[2 | 0]; help="Purpose of the record check. Contractor"
            SCRIPT on initialize (formcalc):
              | $.font.fill.color.value="0,0,255";
            SCRIPT on change (javascript):
              | if(this.rawValue == "2"){
              | specifytext.access = "readOnly"
              | xfa.host.resetData(specifytext.somExpression)
              | }
          FIELD placement; type=checkButton; label="Student placement"; options=[3 | 0]; help="Purpose of the record check. Student placement"
            SCRIPT on initialize (formcalc):
              | $.font.fill.color.value="0,0,255";
            SCRIPT on change (javascript):
              | if(this.rawValue == "3"){
              | specifytext.access = "readOnly"
              | xfa.host.resetData(specifytext.somExpression)
              | }
          FIELD other; type=checkButton; label="Other"; options=[4 | 0]; help="Purpose of the record check. Other"
            SCRIPT on initialize (formcalc):
              | $.font.fill.color.value="0,0,255";
            SCRIPT on change (javascript):
              | if (this.rawValue =="4"){
              | specifytext.access = "open"
              | }
              | else {
              | specifytext.access = "readOnly"
              | xfa.host.resetData(specifytext.somExpression)
              | }
          SECTION specifytext
            TEXT "(specify)"
            TEXT "►"
            FIELD specify; type=textEdit; help="Purpose of the record check. Other. Specify"
        SECTION postDes
          FIELD description; type=textEdit; label="Description of position applied for (e.g., description of duties, organization/agency working for, location, area working, onsite or remote access, - supervisor"; help="Purpose of the Record Check. Description of position applied for"
      SECTION thirdParty
        TEXT "Third Party Disclosure (Results to be released to hiring manager and/or authorized person(s) below)"
        TEXT "I hereby consent to full disclosure, by the OPP to the person listed below, of all personal information about myself responsive to this security screening check. This consent includes the release of records requested. This consent is given pursuant to the Freedom of Information and Protection of Pri"
        FIELD discloseLName; type=textEdit; label="Last name"; maxChars=50; help="Third Party Disclosure. Last name"
        FIELD discloseFName; type=textEdit; label="First name"; maxChars=30; help="Third Party Disclosure. First name"
        FIELD discloseOrg; type=textEdit; label="Name of organization/agency"; help="Third Party Disclosure. Name of organization or agency"
        FIELD discloseTitle; type=textEdit; label="Title of position"; help="Third Party Disclosure. Title of position"
        FIELD discloseLName; type=textEdit; label="Last name"; maxChars=50; help="Third Party Disclosure. Last name"
        FIELD discloseFName; type=textEdit; label="First name"; maxChars=30; help="Third Party Disclosure. First name"
        FIELD discloseOrg; type=textEdit; label="Name of organization/agency"; help="Third Party Disclosure. Name of organization or agency"
        FIELD discloseTitle; type=textEdit; label="Title of position"; help="Third Party Disclosure. Title of position"
      SECTION releaseDischarge
        TEXT "Release, Discharge and Consent"
        TEXT "The undersigned hereby authorizes the OPP to conduct a security screening check about myself. I hereby authorize the OPP to collect personal information about me from third parties. Specifically, I consent to full disclosure to the OPP by any police service, employer, organization, business or perso"
        SECTION sign_Consent
        FIELD formLE229; type=checkButton; label="Form LE229 – Declaration of Criminal Record attached. This form must be completed in order to receive a name based Criminal Record, which includes the Adult Cri"; options=[1 | 0 | 2]; help="Release, Discharge and Consent. Form LE229 – Declaration of Criminal Record attached, if applicable"
          SCRIPT on initialize (formcalc):
            | $.font.fill.color.value="0,0,255";
        TEXT "By signing below, I confirm I have read this form, and I understand the contents of the Security Screening Check – Information Sheet. I understand what level of security screening check I am consenting to, what results may be generated, and I fully consent to such a security screening check being co"
        FIELD signature; type=textEdit; label="Signature of applicant"; access=readOnly; maxChars=30; help="Release, Discharge and Consent. Signature of applicant."
        FIELD signDate; type=dateTimeEdit; label="Date (yyyy/mm/dd)"; format=date{YYYY/MM/DD}; help="Release and Discharge. Date. Enter date in format: year: 4 digits, month: 2 digits, day: 2 digits. Or select date from drop down."
          SCRIPT on exit (javascript):
            | controller.validateDateExit(xfa.event,"yyyy/mm/dd")
        TEXT "I consent to a full or partial level"
        FIELD searchLevel; type=textEdit; label="search."; access=readOnly; help="Release, Discharge and Consent. Signature of applicant. I consent to a full or partial level search"
          SCRIPT calculate:
            | //this.rawValue=eForm.variables.validator.popHighestLevel()
      SECTION identification
        TEXT "Identification (To be Checked by Organization/Agency)"
        FIELD formVerified; type=checkButton; label="Form checked for completeness"; options=[1 | 0 | 2]; help="Identification. To be Checked by Organization or Agency. Form checked for completeness."
          SCRIPT on initialize (formcalc):
            | $.font.fill.color.value="0,0,255";
        SECTION (unnamed)
          TEXT "Identity of applicant has been verified?"
          FIELD formVerified; type=checkButton; label="In-person"; options=[1 | 0 | 2]; help="Identification. To be Checked by Organization or Agency. Identity of applicant has been verified. In-person."
            SCRIPT on initialize (formcalc):
              | $.font.fill.color.value="0,0,255";
          FIELD formVerified; type=checkButton; label="Electronic Identity Verification (EIV)"; options=[1 | 0 | 2]; help="Identification. To be Checked by Organization or Agency. Identity of applicant has been verified. Electronic Identity Verification."
            SCRIPT on initialize (formcalc):
              | $.font.fill.color.value="0,0,255";
        FIELD organization; type=textEdit; label="Name of organization/agency"; maxChars=255; help="Identification. To be Checked by Organization or Agency. Name of organization or agency"
        TEXT "Organization/Agency Witness"
        FIELD witnessLName; type=textEdit; label="Last name"; maxChars=50; help="Identification. To be Checked by Organization or Agency. Last name"
        FIELD witnessFName; type=textEdit; label="First name"; maxChars=30; help="Identification. To be Checked by Organization or Agency. Organization or agency witness. First name"
        FIELD telephoneNo; type=textEdit; label="Telephone Number"; maxChars=12; help="Identification. To be Checked by Organization or Agency. Organization or agency witness. Telephone Number."
          SCRIPT on exit (javascript):
            | eForm.variables.controller.validatePhoneExit(xfa.event)
          SCRIPT on change (javascript):
            | eForm.variables.controller.validNumber(xfa.event)
        FIELD signature; type=textEdit; label="Signature"; access=readOnly; help="Identification. To be Checked by Organization or Agency. Organization or agency witness. Signature"
        FIELD date; type=dateTimeEdit; label="Date (yyyy/mm/dd)"; format=date{YYYY/MM/DD}; help="Identification. To be Checked by Organization or Agency. Organization or agency witness. Signature. Date. Enter date in format: year: 4 digits, month: 2 digits,"
          SCRIPT on exit (javascript):
            | controller.validateDateExit(xfa.event,"yyyy/mm/dd")
      SECTION oppUse
        TEXT "Police Use Only"
        FIELD dateSearch; type=dateTimeEdit; label="Date of search (yyyy/mm/dd)"; access=readOnly; format=date{YYYY/MM/DD}; help="Police Use Only. Date of Search. Enter date in format: year: 4 digits, month: 2 digits, day: 2 digits. Or select date from drop down."
          SCRIPT on exit (javascript):
            | controller.validateDateExit(xfa.event,"yyyy/mm/dd")
        FIELD memberID; type=textEdit; label="Member ID"; access=readOnly; maxChars=30; help="Police Use Only. Member ID"
        FIELD signature; type=textEdit; label="Signature"; access=readOnly; maxChars=30; help="Police Use Only. Signature"
        FIELD accessLevel; type=textEdit; label="Building access level"; access=readOnly; help="Police Use Only. Building access level"
        TEXT "(OPP contractor hiring managers ‒ see OPP Contractor Screening in Security Enquiries Unit website regarding access levels)"
      SECTION navigationBtns
        FIELD saveForm; type=button; label="Save Form"
          SCRIPT on click (javascript):
            | app.execMenuItem("SaveAs");
        FIELD Print; type=button; label="Print Form"
          SCRIPT on click (javascript):
            | xfa.host.print(1, "0", (xfa.host.numPages -1).toString(), 0, 0, 0, 0, 0);
        FIELD Reset; type=button; label="Clear Form"
          SCRIPT on click (javascript):
            | //// do not modify below this line. mgs8E
            | var oPrintForm = app.alert({
            | cMsg: "Are you sure that you want to clear the information you have provided? \nTo continue with this action, select 'Yes'. Please note that once the information is cleared you will be taken back to t
            | cTitle: "Clear Form",
            | nIcon: 1, nType: 2
            | });
            | if (oPrintForm == 4){
            | xfa.datasets.data.loadXML("<eForm/>", true, true);
            | //xfa.host.currentPage=0;
            | xfa.host.currentPage=0;
            | oUtility.goBookMark(page1.header.LogoImage1.somExpression)
            | //xfa.host.currentPage=0;
            | //reset data
            | //go to the top of the page - use bookmark function
            | }
            | else{
            | //continued
            | }
```
