document.getElementById("btn-deposit").addEventListener("click", function () {
  const depositField = document.getElementById("deposit-field");
  const newDepositAmount = parseFloat(depositField.value);

  depositField.value = "";

  if (isNaN(newDepositAmount)) {
    alert("Please provide a number");
    return;
  }

  const depositTotalValue = document.getElementById("deposit-total");
  const previousDepositTotal = parseFloat(depositTotalValue.innerText);

  const currentDepositTotal = previousDepositTotal + newDepositAmount;

  depositTotalValue.innerText = currentDepositTotal;

  //   balanced

  const balanceTotalElement = document.getElementById("balance-total");

  const previousBalanceTotal = parseFloat(balanceTotalElement.innerText);

  const currentBalanceTotal = previousBalanceTotal + newDepositAmount;

  balanceTotalElement.innerText = currentBalanceTotal;
});
