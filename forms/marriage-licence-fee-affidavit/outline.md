# Form outline: form.pdf

Source type: Adobe XFA form. Fields: 30. Buttons: 3. Repeating groups: 0. Scripts on fields: 22. Fields flagged required in the form definition: 0.
A required count of 0 does not mean nothing is mandatory: many forms enforce it in scripts. Check the PDF.

```
SECTION form1
  SCRIPT on initialize (javascript):
    | var oDoc = event.target;
    | oDoc.nocache = true;
    | oDoc.noautocomplete = true;
    | if (xfa.host.name == "Acrobat") {
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
      TEXT "R0lGODlhJQvVAvcAAAAAAP////7+/v39/fr6+vn5+ff39/T09PLy8vDw8O7u7u3t7evr6+jo6Ofn 5+Xl5eLi4uDg4N7e3t3d3dvb29jY2NfX19XV1dPT09DQ0M7Ozs3NzcrKysjIyMbGxsTExMLCwsDA wL6+vr29vbq6uri4uLa2trW1tbKysrCwsK6urq2traurq6ioqKampqWlpaOjo6CgoJ+fn52dnZub m5iYmJeXl5SUlJOTk5GRkY+Pj42NjYqKioiIiIeHh4WFhYKCgoCAgH5+fn19fXt7e3h4e"
      TEXT "Office of the Registrar General PO Box 4600 189 Red River Road Thunder Bay ON P7B 6L8"
      TEXT "Affidavit to Waive Provincial Fee for a Marriage Licence Marriage Act Form 8"
      FIELD TextField1; type=textEdit; label="Text Field"; presence=hidden
        SCRIPT on click (javascript):
          | oUtility.scrollTo(xfa.resolveNode(this.rawValue))
      FIELD initFld; type=textEdit; label="Text Field"; presence=hidden
    SECTION body
      SECTION declaration
        TEXT "This Affidavit may be taken in Ontario by the Marriage Licence Issuer, Commissioner for Taking Affidavits or Notary Public."
        TEXT "This form is to be used to waive the $75 provincial fee for a marriage licence if both parties to the marriage have or are entitled to have registered Indian status under Canada’s Indian Act and also reside in Ontario on a reserve or Crown lands."
      SECTION affidavit
        TEXT "Affidavit"
        TEXT "Canada, province of Ontario, in the matter of an application for a Licence under the Marriage Act , for the marriage of"
        TEXT "TO WIT:"
        SECTION last
          FIELD lastName; type=textEdit; label="Current First Name, Middle Name(s), Last Name or Single Name of Applicant"; help="Affidavit. Current First Name, Middle Name(s), Last Name or Single Name of Applicant."
            SCRIPT on exit (javascript):
              | //this.rawValue = controller.trim(this.rawValue);
              | validator.validateAlpha(xfa.event)
        TEXT "of"
        SECTION address
          TEXT "Applicant Current Address"
          FIELD unitNo; type=textEdit; label="Unit Number"; maxChars=8; help="Affidavit. Applicant Current Address. Unit Number."
          FIELD streetNo; type=textEdit; label="Street Number"; maxChars=6; help="Affidavit. Applicant Current Address. Street Number."
          FIELD streetName; type=textEdit; label="Street Name"; maxChars=45; help="Affidavit. Applicant Current Address. Street Name."
          FIELD poBox; type=textEdit; label="PO Box"; maxChars=6; help="Affidavit. Applicant Current Address. Post Office Box."
          FIELD city; type=textEdit; label="City/Reserve"; maxChars=45; help="Affidavit. Applicant Current Address. City or Reserve."
          FIELD province; type=textEdit; label="Province"; maxChars=45; help="Affidavit. Applicant Current Address. Province."
            SCRIPT on ready (javascript):
              | //this.assist.toolTip.value="Section 2. Mailing Address. Province.\n" + controller.iMessage(["mgs10E"])+" "+ controller.iMessage(["mgs9E"]);
          FIELD postalCode; type=textEdit; label="Postal Code"; maxChars=7
            SCRIPT on exit (javascript):
              | controller.validatePostalCodeExit(xfa.event)
            SCRIPT on ready (javascript):
              | this.assist.toolTip.value="Affidavit. Applicant Current Address. Postal Code.\n" + controller.iMessage(["mgs6E"]) +" "+ controller.iMessage(["mgs9E"]);
        TEXT "and"
        SECTION last2
          FIELD lastName; type=textEdit; label="Current First Name, Middle Name(s), Last Name or Single Name of Joint Applicant"; help="Affidavit. Current First Name, Middle Name(s), Last Name or Single Name of Joint Applicant"
            SCRIPT on exit (javascript):
              | //this.rawValue = controller.trim(this.rawValue);
              | validator.validateAlpha(xfa.event)
        TEXT "of"
        SECTION address2
          TEXT "Joint Applicant Current Address"
          FIELD unitNo; type=textEdit; label="Unit Number"; maxChars=8; help="Affidavit. Joint Applicant Current Address. Unit Number."
          FIELD streetNo; type=textEdit; label="Street Number"; maxChars=6; help="Affidavit. Joint Applicant Current Address. Street Number."
          FIELD streetName; type=textEdit; label="Street Name"; maxChars=45; help="Affidavit. Joint Applicant Current Address. Street Name."
          FIELD poBox; type=textEdit; label="PO Box"; maxChars=6; help="Affidavit. Joint Applicant Current Address. Post Office Box."
          FIELD city; type=textEdit; label="City/Reserve"; maxChars=45; help="Affidavit. Joint Applicant Current Address. City or Reserve."
          FIELD province; type=textEdit; label="Province"; maxChars=45; help="Affidavit. Joint Applicant Current Address. Province."
            SCRIPT on ready (javascript):
              | //this.assist.toolTip.value="Section 2. Mailing Address. Province.\n" + controller.iMessage(["mgs10E"])+" "+ controller.iMessage(["mgs9E"]);
          FIELD postalCode; type=textEdit; label="Postal Code"; maxChars=7
            SCRIPT on exit (javascript):
              | controller.validatePostalCodeExit(xfa.event)
            SCRIPT on ready (javascript):
              | this.assist.toolTip.value="Affidavit. Joint Applicant Current Address. Postal Code.\n" + controller.iMessage(["mgs6E"]) ;
      SECTION oath
        TEXT "I,"
        FIELD ApplicantName; type=textEdit; label="(print full name of Applicant or Joint Applicant)"; access=readOnly; help="I (print full name of Applicant or Joint Applicant)"
        TEXT "make oath and say that:"
        SECTION ul
          SECTION li
            TEXT "1. I am one of the parties aforesaid."
          SECTION li
            TEXT "2. According to the best of my knowledge, information and belief, both the parties identified above have or are entitled to have registered Indian status and reside on a reserve in Ontario (or on Crown lands in Ontario, as the case may be)."
          SECTION personalInfo
            FIELD yearLast; type=textEdit; access=readOnly; maxChars=50; help="Sworn (or affirmed) before me this year"
              SCRIPT on exit (javascript):
                | //this.rawValue = controller.trim(this.rawValue);
                | validator.validateAlpha(xfa.event)
            TEXT ", 20"
            FIELD month; type=textEdit; access=readOnly; maxChars=50; help="Sworn (or affirmed) before me this"
              SCRIPT on exit (javascript):
                | //this.rawValue = controller.trim(this.rawValue);
                | validator.validateAlpha(xfa.event)
            TEXT ", this"
            FIELD day; type=textEdit; access=readOnly; maxChars=50; help="Sworn (or affirmed) before me this day of"
              SCRIPT on exit (javascript):
                | //this.rawValue = controller.trim(this.rawValue);
                | validator.validateAlpha(xfa.event)
            TEXT "day of"
            FIELD province; type=textEdit; access=readOnly; maxChars=50; help="in the Province of"
              SCRIPT on exit (javascript):
                | //this.rawValue = controller.trim(this.rawValue);
                | validator.validateAlpha(xfa.event)
            TEXT "in the Province of"
            FIELD city; type=textEdit; access=readOnly; maxChars=50; help="Sworn (or affirmed) before me at the (City, Town, etc) of"
              SCRIPT on exit (javascript):
                | //this.rawValue = controller.trim(this.rawValue);
                | validator.validateAlpha(xfa.event)
            TEXT "Sworn (or affirmed ) before me at the (City, Town, etc) of"
            FIELD appSignature; type=textEdit; label="Signature of Applicant or Joint Applicant"; access=readOnly; maxChars=30
            FIELD comSignature; type=textEdit; label="A Commissioner, etc. (sign, print name, and affix stamp of Commissioner or describe office, if stamp not required)"; access=readOnly; maxChars=30
      SECTION MarriageLicence
        TEXT "To be completed by the Marriage Licence Issuer"
        FIELD marriageLicence; type=textEdit; label="Number of Marriage Licence"; maxChars=30; help="To be completed by the Marriage Licence Issuer. Number of Marriage Licence"
        FIELD date; type=dateTimeEdit; label="Date of Issue (yyyy/mm/dd)"; format=date{YYYY/MM/DD}
          SCRIPT on exit (javascript):
            | controller.validateDateExit(xfa.event,"yyyy/mm/dd")
          SCRIPT on ready (javascript):
            | this.assist.toolTip.value="To be completed by the Marriage Licence Issuer. Date of Issue (yyyy/mm/dd).\n" + controller.iMessage(["mgs5E"]);
          SCRIPT on change (javascript):
            | form1.variables.controller.validNumberDateChange(xfa.event)
        FIELD place; type=textEdit; label="Place of Issue"; help="To be completed by the Marriage Licence Issuer. Place of Issue"
        FIELD signature; type=textEdit; label="Signature of Issuer"; access=readOnly; maxChars=30; help="To be completed by the Marriage Licence Issuer. Signature of Issuer"
        TEXT "Personal information contained on this form is collected under the authority of the Marriage Act , R.S.O. 1990, c. M.3 and will be used to determine whether to issue the marriage licence, to register and record the marriage, provide certified copies, extracts, certificates, search notices, photocopi"
      SECTION navigationBtns
        FIELD saveForm; type=button; label="Save Form"
          SCRIPT on click (javascript):
            | app.execMenuItem("SaveAs");
        FIELD Print; type=button; label="Print Form"
          SCRIPT on click (javascript):
            | xfa.host.print(1, "0", (xfa.host.numPages -1).toString(), 0, 0, 0, 0, 0);
            | //if (!myUtil.checkManadatory())
            | //{
            | // xfa.host.print(1, "0", (xfa.host.numPages -1).toString(), 0, 0, 0, 0, 0);
            | //}
          SCRIPT on prePrint (javascript):
            | //validator.setPrePrint()
          SCRIPT on postPrint (javascript):
            | //validator.setPostPrint()
        FIELD Reset; type=button; label="Clear Form"
          SCRIPT on click (javascript):
            | //// do not modify below this line. mgs8E
            | var oPrintForm = app.alert({
            | cMsg: controller.iMessage(["mgs7E"]),
            | cTitle: controller.iMessage(["mgs8E"]),
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
