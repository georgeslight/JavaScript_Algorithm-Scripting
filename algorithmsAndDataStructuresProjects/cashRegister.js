// Design a cash register drawer function checkCashRegister() that accepts
// purchase price as the first argument (price), payment as the second argument
// (cash), and cash-in-drawer (cid) as the third argument.

// cid is a 2D array listing available currency.

// The checkCashRegister() function should always return an object with a
// status key and a change key.

// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer
// is less than the change due, or if you cannot return the exact change.

// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the
// value for the key change if it is equal to the change due.

// Otherwise, return {status: "OPEN", change: [...]}, with the change
// due in coins and bills, sorted in highest to lowest order, as the value of the
// change key.

function checkCashRegister(price, cash, cid) {
 
  let register = {
    status: '',
    change: []
  }

  let changeNeeded = Number((cash - price).toFixed(2));
  let changeAvailable = Number(cid.reduce((acc, curr) => acc + curr[1], 0).toFixed(2));

  if (changeNeeded > changeAvailable) return { status: "INSUFFICIENT_FUNDS", change: [] };
  if (changeNeeded === changeAvailable) return { status: "CLOSED", change: cid };
  if (changeNeeded < changeAvailable) register.status = "OPEN";
  console.log(changeNeeded);

  const currency = {
    "ONE HUNDRED": 100.00,
    "TWENTY": 20.00,
    "TEN": 10.00,
    "FIVE": 5.00,
    "ONE": 1.00,
    "QUARTER": 0.25,
    "DIME": 0.10,
    "NICKEL": 0.05,
    "PENNY": 0.01
  }

  for (let i = cid.length - 1; i >= 0; i--) {
    const coinName = cid[i][0];
    const coinTotal = cid[i][1];
    const coinValue = Number(currency[coinName]);
    let coinAmount = Number((coinTotal / coinValue).toFixed(2));
    let coinsToReturn = 0;

    while (changeNeeded >= coinValue && coinAmount > 0) {
      changeNeeded -= coinValue;
      changeNeeded = changeNeeded.toFixed(2);
      coinAmount--;
      coinsToReturn++;
    }

    if (coinsToReturn > 0) register.change.push([coinName, Number(coinsToReturn * coinValue)]);
  }

  if (changeNeeded > register.change.reduce((acc, curr) => acc + curr[1], 0)) return { status: "INSUFFICIENT_FUNDS", change: [] };
  
  return register;
}


console.log(checkCashRegister(19.5, 20, [
  ["PENNY", 1.01], 
  ["NICKEL", 2.05], 
  ["DIME", 3.1], 
  ["QUARTER", 4.25], 
  ["ONE", 90], 
  ["FIVE", 55], 
  ["TEN", 20], 
  ["TWENTY", 60], 
  ["ONE HUNDRED", 100]
]));  // {status: "OPEN", change: [["QUARTER", 0.5]]}
console.log(checkCashRegister(3.26, 100, [
  ["PENNY", 1.01], 
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]));  // {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}
console.log(checkCashRegister(19.5, 20, [
  ["PENNY", 0.01],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0]
]));  // {status: "INSUFFICIENT_FUNDS", change: []}
console.log(checkCashRegister(19.5, 20, [
  ["PENNY", 0.01],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 1],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0]
]));  // {status: "INSUFFICIENT_FUNDS", change: []}
console.log(checkCashRegister(19.5, 20, [
  ["PENNY", 0.5],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0]
]));  // {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}