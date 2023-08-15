document.getElementById("btn-withdraw").addEventListener("click", function () {
  const userWithdraw = document.getElementById("user-withdraw");
  const newWithdraw = parseFloat(userWithdraw.value);
  userWithdraw.value = "";

  if (isNaN(newWithdraw)) {
    alert("Please provide a number");
    return;
  }

  const withdrawTotalElement = document.getElementById("withdraw-total");
  const previousTotalWithdraw = parseFloat(withdrawTotalElement.innerText);

  const balanceTotalElement = document.getElementById("balance-total");

  const previousBalanceTotal = parseFloat(balanceTotalElement.innerText);

  if (newWithdraw > previousBalanceTotal) {
    alert("Your amount is low");
    return;
  }

  const currentWithdrawTotal = previousTotalWithdraw + newWithdraw;
  withdrawTotalElement.innerText = currentWithdrawTotal;
  const newBalanceTotal = previousBalanceTotal - newWithdraw;

  balanceTotalElement.innerText = newBalanceTotal;
});
