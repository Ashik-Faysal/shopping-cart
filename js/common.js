function getTextFieldValueBYId(elementId) {
  const phoneTotalElement = document.getElementById(elementId);
  const currentPhoneTotalString = phoneTotalElement.innerText;
  const currentPhoneTotal = parseInt(currentPhoneTotalString);
  return currentPhoneTotal;
}

function setTextElementById(elementId, value) {
  const subTotalElement = document.getElementById(elementId);
  subTotalElement.innerText = value;
}

function calculateSubTotal() {
  // Calculate Total
  const currentPhoneTotal = getTextFieldValueBYId("phone-total");
  const currentCaseTotal = getTextFieldValueBYId("case-total");
  const currentSubTotal = currentPhoneTotal + currentCaseTotal;

  const subTotalElement = document.getElementById("sub-total");
  subTotalElement.innerText = currentSubTotal;

  //calculate Tax
  const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
  const taxAmount = parseFloat(taxAmountString);
  setTextElementById("tax-amount", taxAmount);
  const finalAmount = currentSubTotal + taxAmount;
  setTextElementById("final-amount", finalAmount);
}
