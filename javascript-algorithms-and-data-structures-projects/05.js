function checkCashRegister(price, cash, cid) {
  function financial(x) {
    return Number.parseFloat(x).toFixed(2);
  }

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

  let difference = cash - price;
  let store = cid.reverse();
  let change = [];
  let status;

  for (let i = 0; i < store.length; i++) {
    let [name, value] = store[i];
    while (difference / currency[name] >= 1 && value > 0) {
      change.push([name, currency[name]]);
      difference -= currency[name];
      difference = financial(difference);
      value = value - currency[name];
      store[i] = [name, value];
    }
  }

  console.log(change);

  let newArr = [];

  for (let i of change) {
    if (!newArr.some((item) => item.includes(i[0]))) {
      newArr.push(
        change
          .filter((item) => item[0] === i[0])
          .reduce((a, b) => [a[0], a[1] + b[1]])
      );
    }
  }

  console.log(newArr);
}

// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

checkCashRegister(3.26, 100, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);
