# Form outline: form.pdf

Source type: Adobe XFA form. Fields: 37. Buttons: 2. Repeating groups: 0. Scripts on fields: 33. Fields flagged required in the form definition: 0.
A required count of 0 does not mean nothing is mandatory: many forms enforce it in scripts. Check the PDF.

```
SECTION form1
  SCRIPT on initialize (javascript):
    | var oDoc = event.target;
    | oDoc.nocache = true;
    | oDoc.noautocomplete = true;
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
      TEXT "Ministry of Transportation Program Development & Evaluation Branch 145 Sir William Hearst Ave Toronto ON M3M 0B6"
      TEXT "Established Place of Business and Residence Questionnaire"
      FIELD TextField1; type=textEdit; label="Text Field"; presence=hidden
        SCRIPT on click (javascript):
          | oUtility.scrollTo(xfa.resolveNode(this.rawValue))
      FIELD initFld; type=textEdit; label="Text Field"; presence=hidden
      TEXT "/9j/4Q25RXhpZgAATU0AKgAAAAgABwESAAMAAAABAAEAAAEaAAUAAAABAAAAYgEbAAUAAAABAAAA agEoAAMAAAABAAIAAAExAAIAAAAiAAAAcgEyAAIAAAAUAAAAlIdpAAQAAAABAAAAqAAAANQANWfg AAAnEAA1Z+AAACcQQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpADIwMTk6MDQ6MTYg MTY6MDc6MDYAAAOgAQADAAAAAf//AACgAgAEAAAAAQAABDagAwAEAAAAAQAAARgAAAAAA"
    SECTION body
      SECTION instructions
        TEXT "This form must be completed and supporting documentation provided prior to prorate registration or change of prorate registered physical address in accordance with IRP Plan, Sections 305."
        TEXT "Selection of Base Jurisdictions (Section 305)"
        TEXT "The IRP agreement requires carriers to maintain an Established Place of Business or Residence in the jurisdiction where they base plate."
        TEXT "Note: Please see page 2 for a list of acceptable supporting document and requirements"
      SECTION section1
        TEXT "1. Established Place of Business"
        TEXT "Means a physical structure, located within the base jurisdiction that is owned or leased, such lease agreements shall be for no less than 12 months by the Applicant or Registrant and whose street address shall be specified by the Applicant or Registrant. The physical structure shall have clear compa"
        SECTION ul
          SECTION li
            TEXT "• Post office box numbers are not allowed (Land location is required in rural areas, e.g. lot and concession)."
        SECTION (unnamed)
          TEXT "If registering as an Established Place of Business , please complete the following questions:"
          FIELD lastName; type=textEdit; label="Name of Company"; maxChars=50; help="Section 1. Established Place of Business. Name of Company"
            SCRIPT on exit (javascript):
              | //this.rawValue = controller.trim(this.rawValue);
        FIELD question1; type=textEdit; label="1. What are your business hours?"; help="Section 1. Established Place of Business. 1. What are your business hours?"
        SECTION question3
          TEXT "2. Provide the name of the company owner or director"
          FIELD lastName; type=textEdit; label="Last Name"; maxChars=50; help="Section 1. 2. Provide the name of the company owner or director. Last Name"
          FIELD firstName; type=textEdit; label="First Name"; maxChars=30; help="Section 1. 2. Provide the name of the company owner or director. First Name"
          FIELD middleIntial; type=textEdit; label="Middle Initial"; maxChars=3; help="Section 1. 2. Provide the name of the company owner or director. Middle Initial"
        SECTION question4
          TEXT "3. Are trucks dispatched from this location?"
          FIELD yes; type=checkButton; label="Yes"; options=[1 | ]; help="Section 1. 3. Are trucks dispatched from this location?. yes"
            SCRIPT on initialize (formcalc):
              | $.font.fill.color.value="0,0,255";
            SCRIPT on click (javascript):
              | if(no.rawValue!=2)
              | {
              | location.rawValue="";
              | location.access="readOnly";
              | }
              | else
              | {
              | location.access="open";
              | }
          FIELD no; type=checkButton; label="No"; options=[2 | ]; help="Section 1. 3. Are trucks dispatched from this location?. no"
            SCRIPT on initialize (formcalc):
              | $.font.fill.color.value="0,0,255";
            SCRIPT on click (javascript):
              | if(no.rawValue!=2)
              | {
              | location.rawValue="";
              | location.access="readOnly";
              | }
              | else
              | {
              | location.access="open";
              | }
          FIELD location; type=textEdit; label="If no, where?"; help="Section 1. 3. Are trucks dispatched from this location?. no. If no, where?"
        SECTION question5
          TEXT "4. Are the operational records of the fleet located at this location?"
          FIELD yes; type=checkButton; label="Yes"; options=[1 | ]; help="Section 1. 4. Are the operational records of the fleet located at this location?. yes"
            SCRIPT on initialize (formcalc):
              | $.font.fill.color.value="0,0,255";
            SCRIPT on click (javascript):
              | if(no.rawValue!=2)
              | {
              | location.rawValue="";
              | location.access="readOnly";
              | }
              | else
              | {
              | location.access="open";
              | }
          FIELD no; type=checkButton; label="No"; options=[2 | ]; help="Section 1. 4. Are the operational records of the fleet located at this location?. no"
            SCRIPT on initialize (formcalc):
              | $.font.fill.color.value="0,0,255";
            SCRIPT on click (javascript):
              | if(no.rawValue!=2)
              | {
              | location.rawValue="";
              | location.access="readOnly";
              | }
              | else
              | {
              | location.access="open";
              | }
          FIELD location; type=textEdit; label="If no, where?"; help="Section 1. 4. Are the operational records of the fleet located at this location?. no. If no, where?"
      SECTION section2
        TEXT "2. Residence"
        TEXT "If an applicant does not have an Established Place of Business in any Jurisdiction the Applicant may designate as a base jurisdiction any member jurisdiction (i) where the applicant can demonstrate residence, (ii) where the fleet the applicant seeks to register under the Plan accrues distance, and ("
        SECTION ul
          SECTION li
            TEXT "• Post office box numbers are not allowed (Land location is required in rural areas, e.g. lot and concession)."
        TEXT "Provide the name of the registrant or company owner."
        FIELD LastName; type=textEdit; label="Last Name"; maxChars=50; help="Section 2. Residence. Last Name."
        FIELD FirstName; type=textEdit; label="First Name"; maxChars=30; help="Section 2. Residence. First Name."
        FIELD MiddleIntial; type=textEdit; label="Middle Initial"; maxChars=3; help="Section 2. Residence. Middle Initial."
        FIELD city; type=textEdit; label="Name of Company (if applicable)"; maxChars=50; help="Section 2. Residence. Name of Company (if applicable)"
      SECTION section3
        TEXT "3. Both Established Place of Business and Residence applicants must complete the following section:"
        SECTION question
          TEXT "Have you previously been prorated?"
          FIELD yes; type=checkButton; label="Yes"; options=[1 | ]; help="Section 3. Both Established Place of Business and Residence applicants must complete the following section:. Have you previously been prorated?. yes"
            SCRIPT on initialize (formcalc):
              | $.font.fill.color.value="0,0,255";
            SCRIPT on click (javascript):
              | if(yes.rawValue!=1)
              | {
              | location.rawValue="";
              | location.access="readOnly";
              | }
              | else
              | {
              | location.access="open";
              | }
          FIELD no; type=checkButton; label="No"; options=[2 | ]; help="Section 3. Have you previously been prorated?. no"
            SCRIPT on initialize (formcalc):
              | $.font.fill.color.value="0,0,255";
            SCRIPT on click (javascript):
              | if(yes.rawValue!=1)
              | {
              | location.rawValue="";
              | location.access="readOnly";
              | }
              | else
              | {
              | location.access="open";
              | }
          FIELD location; type=textEdit; label="If yes, where?"; help="Section 3. Have you previously been prorated?. yes. If yes, where?"
        FIELD telephoneNo; type=textEdit; label="Telephone Number"; maxChars=12; format=text{999-999-9999}; help="Section 3. Telephone Number"
          SCRIPT on exit (javascript):
            | form1.variables.controller.validatePhoneExit(xfa.event)
          SCRIPT on change (javascript):
            | form1.variables.controller.validNumber(xfa.event)
        SECTION address
          TEXT "Provide Address of Ontario Physical Location"
          FIELD unitNo; type=textEdit; label="Unit Number"; maxChars=8; help="Section 3. Provide Address of Ontario Physical Location. Unit Number"
          FIELD streetNo; type=textEdit; label="Street Number"; maxChars=6; help="Section 3. Provide Address of Ontario Physical Location. Street Number"
          FIELD streetName; type=textEdit; label="Street Name"; maxChars=45; help="Section 3. Provide Address of Ontario Physical Location. Street Name"
          FIELD city; type=textEdit; label="City/Town"; maxChars=45; help="Section 3. Provide Address of Ontario Physical Location. City/Town"
          FIELD province; type=textEdit; label="Province"; maxChars=45; help="Section 3. Provide Address of Ontario Physical Location. Province"
            SCRIPT on ready (javascript):
              | //this.assist.toolTip.value="Section 2. Mailing Address. Province.\n" + controller.iMessage(["mgs10E"])+" "+ controller.iMessage(["mgs9E"]);
          FIELD postalCode; type=textEdit; label="Postal Code"; maxChars=7
            SCRIPT on exit (javascript):
              | controller.validatePostalCodeExit(xfa.event)
            SCRIPT on ready (javascript):
              | this.assist.toolTip.value="Section 3. Provide Address of Ontario Physical Location. \n" + controller.iMessage(["mgs6E"])+" "+ controller.iMessage(["mgs9E"]);
      SECTION signature
        TEXT "I/we, the undersigned, do hereby certify, that the statements made herein are true and correct."
        FIELD signature; type=textEdit; label="Signature of Registrant"; access=readOnly
        FIELD esoName; type=textEdit; label="Print Name"; maxChars=80
        FIELD date; type=dateTimeEdit; label="Date (yyyy/mm/dd)"; format=date{YYYY/MM/DD}
          SCRIPT on exit (javascript):
            | controller.validateDateExit(xfa.event,"yyyy/mm/dd")
          SCRIPT on ready (javascript):
            | this.assist.toolTip.value="Signature Date.\n" + controller.iMessage(["mgs5E"]);
          SCRIPT on change (javascript):
            | form1.variables.controller.validNumberDateChange(xfa.event)
      SECTION section4
        TEXT "4. Supporting Documents"
        TEXT "For Established Place of Business, you must include at least 2 of the first 3 following supporting documents listed. To establish Residence in Ontario, an applicant must provide an Ontario driver’s license or non-driver Ontario issued identification and at least 2 of the last 6 following documents l"
        TEXT "Note: All supporting documents provided must display and match the Ontario physical address and name you are registering under."
        FIELD option1; type=checkButton; label="Ontario Articles of Incorporation or Master Business License (Can only be used for Established Place of Business)"; options=[1 | ]; help="Section 4. Supporting Documents. Ontario Articles of Incorporation or Master Business License (Can only be used for Established Place of Business)"
          SCRIPT on initialize (formcalc):
            | $.font.fill.color.value="0,0,255";
        FIELD option2; type=checkButton; label="A copy of the lease, mortgage, or current Property Tax"; options=[1 | ]; help="Section 4. A copy of the lease, mortgage or current Property Tax"
          SCRIPT on initialize (formcalc):
            | $.font.fill.color.value="0,0,255";
        FIELD option3; type=checkButton; label="A copy of any utility bill (e.g. telephone, gas or hydro bill)"; options=[1 | ]; help="Section 4. A copy of any utility bill (e.g. telephone, gas or hydro bill)"
          SCRIPT on initialize (formcalc):
            | $.font.fill.color.value="0,0,255";
        FIELD option4; type=checkButton; label="Ontario Driver’s License or non-driver Ontario Issued Identification (Mandatory for Residence, can only be used for Residence)"; options=[1 | ]; help="Section 4. Ontario Driver’s License or non-driver Ontario Issued Identification (Mandatory for Residence, can only be used for Residence)"
          SCRIPT on initialize (formcalc):
            | $.font.fill.color.value="0,0,255";
        FIELD option5; type=checkButton; label="Personal Income Tax Assessment (Can only be used for Residence)"; options=[1 | ]; help="Section 4. Personal Income Tax Assessment (Can only be used for Residence)"
          SCRIPT on initialize (formcalc):
            | $.font.fill.color.value="0,0,255";
        FIELD option6; type=checkButton; label="Valid Ontario Ownership for a vehicle owned by the registrant (Can only be used for Residence)"; options=[1 | ]; help="Section 4. Valid Ontario Ownership for a vehicle owned by the registrant (Can only be used for Residence)"
          SCRIPT on initialize (formcalc):
            | $.font.fill.color.value="0,0,255";
        FIELD option7; type=checkButton; label="Insurance Pink Slip or Bank Statement (Can only be used for Residence)"; options=[1 | ]; help="Section 4. Insurance Pink Slip or Bank Statement (Can only be used for Residence)"
          SCRIPT on initialize (formcalc):
            | $.font.fill.color.value="0,0,255";
      SECTION navigationBtns
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
        FIELD Print; type=button; label="Print Form"
          SCRIPT on click (javascript):
            | xfa.host.print(1, "0", (xfa.host.numPages -1).toString(), 0, 0, 0, 0, 0);
          SCRIPT on prePrint (javascript):
            | validator.setPrePrint()
          SCRIPT on postPrint (javascript):
            | validator.setPostPrint()
```
