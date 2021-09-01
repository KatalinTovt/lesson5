let moneyCount = 1000;
let orderMoney = 0;
let beerCount = 100;
let beerPrice = 30;
let wineCount  = 50;
let winePrice = 120;
let pepsiCount = 80;
let pepsiPrice = 20;
let errorCheck = false;
let beerMessage;
let pepsiMessage;
let wineMessage;
function sellBeer(count){
  if (count <= beerCount) {
    beerCount -= count;
    moneyCount += count * beerPrice;
    orderMoney += count * beerPrice;
    beerMessage = 'Пиво: ' + count + ' шт.';
}else{
 errorCheck = true;
}
}

function sellWine(count){
  if (count <= wineCount) {
    wineCount -= count;
    moneyCount += count * winePrice;
    orderMoney += count * winePrice;
    wineMessage = 'Вино: ' + count + ' шт.';
}else{
 errorCheck = true;
}
}

function sellPepsi(count){
  if (count <= pepsiCount) {
    pepsiCount -= count;
    moneyCount += count * pepsiPrice;
    orderMoney += count * pepsiPrice;
    pepsiMessage = 'Пепсі: ' + count + ' шт.';
}else{
 errorCheck = true;
}
}
function setErrorCheckToFalse(){
  errorCheck = false;
}
function setOrderMoney(){
  orderMoney = 0;
}
export {sellBeer,sellPepsi,sellWine, errorCheck, orderMoney,moneyCount,pepsiMessage, beerCount,wineMessage,beerMessage, wineCount, pepsiCount,setErrorCheckToFalse, setOrderMoney };