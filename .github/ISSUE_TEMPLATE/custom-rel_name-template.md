---
name: Custom rel_name template
about: Legendary envRec realm upstream
title: Action embedded Type debugging and automatic rebase folder/files/project/properties
labels: bug, documentation, duplicate, enhancement
assignees: da-art85

---

/**
 * Adds a section to the Card Builder that displays a "REQUEST PERMISSION" button.
 * When it's clicked, the callback triggers file scope permission flow. This isused in
 * the add-on when the home-page displays basic data.
 */
function addRequestFileScopeButtonToBuilder(cardBuilder) {
    var buttonSection = CardService.newCardSection();
    // If the add-on does not have access permission, add a button that
    // allows the user to provide that permission on a per-file basis.
    var buttonAction = CardService.newAction()
      .setFunctionName("onRequestFileScopeButtonClickedInEditor");

    var button = CardService.newTextButton()
      .setText("Request permission")
      .setBackgroundColor("#4285f4")
      .setTextButtonStyle(CardService.TextButtonStyle.FILLED)
      .setOnClickAction(buttonAction);

    buttonSection.addWidget(button);
    cardBuilder.addSection(buttonSection);
}

/**
 * Callback function for a button action. Instructs Docs to display a
 * permissions dialog to the user, requesting `drive.file` scope for the 
 * current file on behalf of this add-on.
 *
 * @param {Object} e The parameters object that contains the document’s ID
 * @return {editorFileScopeActionResponse}
 */
function onRequestFileScopeButtonClickedInEditor(e) {
  return CardService.newEditorFileScopeActionResponseBuilder()
      .requestFileScopeForActiveDocument().build();
