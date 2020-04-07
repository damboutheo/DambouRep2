const stringSplitter = (str="How are you") => {
  return str.split(" ");
  
}

console.log(stringSplitter())



const bankAccount = {
  canSpendMoney: true,
  balance: 100
}

function purchaseItem(price,acct=bankAccount) {
  if(acct.canSpendMoney){
    acct.balance-=price;
    if(acct.balance<=0){
      acct.canSpendMoney= false;
    }
      return true;
  } else {
    return false;
  }
}
console.log(purchaseItem(150))
console.log(bankAccount)
console.log(purchaseItem(5))