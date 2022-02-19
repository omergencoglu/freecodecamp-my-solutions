/** Cash Register
 * Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
 *
 * cid is a 2D array listing available currency.
 *
 * The checkCashRegister() function should always return an object with a status key and a change key.
 *
 * Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.
 *
 * Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.
 *
 * Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
 *
 * Currency Unit,	Amount
 * Penny,	$0.01 (PENNY)
 * Nickel,	$0.05 (NICKEL)
 * Dime,	$0.1 (DIME)
 * Quarter,	$0.25 (QUARTER)
 * Dollar,	$1 (ONE)
 * Five Dollars,	$5 (FIVE)
 * Ten Dollars,	$10 (TEN)
 * Twenty Dollars,	$20 (TWENTY)
 * One-hundred Dollars,	$100 (ONE HUNDRED)
 */

function checkCashRegister(price, cash, cid) {
  const currency = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    "ONE HUNDRED": 100,
  };
  const reference = [...cid];
  const tempStore = cid.reverse();
  const initialChange = [];
  let difference = cash - price;
  let result;

  for (let i = 0; i < tempStore.length; i++) {
    let [name, value] = tempStore[i];
    while (difference / currency[name] >= 1 && value > 0) {
      initialChange.push([name, currency[name]]);
      difference -= currency[name];
      difference = difference.toFixed(2);
      value = value - currency[name];
      tempStore[i] = [name, value];
    }
  }

  const finalChange = [];
  for (let i of initialChange) {
    if (!finalChange.some((item) => item.includes(i[0]))) {
      const filteredItem = initialChange.filter((item) => item[0] === i[0]);
      finalChange.push([
        filteredItem[0][0],
        filteredItem[0][1] * filteredItem.length,
      ]);
    }
  }

  let changeTotal = 0;
  for (let i of finalChange) {
    changeTotal += i[1];
  }

  let referenceTotal = 0;
  for (let i of reference) {
    referenceTotal += i[1];
  }

  if (changeTotal < difference) {
    result = { status: "INSUFFICIENT_FUNDS", change: [] };
    return result;
  } else if (changeTotal === referenceTotal) {
    result = { status: "CLOSED", change: reference };
    return result;
  } else {
    result = { status: "OPEN", change: finalChange };
    return result;
  }
}

checkCashRegister(19.5, 20, [
  ["PENNY", 0.5],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
]);
