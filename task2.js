
let qty = document.getElementById('qty');
let btnAdd = document.getElementById('add');
let btnBuy = document.getElementById('buy');
let error = document.getElementById('error');
let errorText = document.getElementById('error-text');
let listArr = [];
document.getElementById('moneyCount').value = moneyCount +' грн';
document.getElementById('beerCount').value = beerCount + ' шт.';
document.getElementById('wineCount').value = wineCount + ' шт.';
document.getElementById('pepsiCount').value = pepsiCount + ' шт.';

btnAdd.addEventListener('click', function(){
  if(qty.value.length == 0){
    return;
  }
  if(document.getElementById('beer').checked == true){
  sellBeer(qty.value);
  qty.value = ' ';
  if(errorCheck == true){
    error.style.display = 'block';
    errorText.innerHTML = 'Вибачте, але на складі залишилось пива ' + beerCount + ' шт.'
    setErrorCheckToFalse();
  }else{
  document.getElementById('text-area').value = document.getElementById('text-area').value + beerMessage + '\r\n' ;
  listArr.push(beerMessage);
  }
} 

if(document.getElementById('wine').checked == true){
  sellWine(qty.value);
  qty.value = ' ';
  if(errorCheck == true){
    error.style.display = 'block';
    errorText.innerHTML = 'Вибачте, але на складі залишилось вина ' + wineCount + ' шт.'
    setErrorCheckToFalse();
  }else{
  document.getElementById('text-area').value = document.getElementById('text-area').value + wineMessage + '\r\n' ;
  listArr.push(wineMessage);
  }
}

if(document.getElementById('pepsi').checked == true){
  sellPepsi(qty.value);
  qty.value = ' ';
  if(errorCheck == true){
    error.style.display = 'block';
    errorText.innerHTML = 'Вибачте, але на складі залишилось пепсі ' + pepsiCount + ' шт.'
    setErrorCheckToFalse();
  }else{
  document.getElementById('text-area').value = document.getElementById('text-area').value + pepsiMessage + '\r\n' ;
  listArr.push(pepsiMessage);
  }
}
})  

btnBuy.addEventListener('click', function(){
  if(document.getElementById('text-area').value.length == 0){
    return;
  }
  document.getElementById('third').innerHTML = ' ';
  document.getElementById('third').innerHTML = listArr.join('<br>') + '<br>' +'Всього: ' + orderMoney + ' грн'
  document.getElementById('text-area').value = '';
  setOrderMoney();
document.getElementById('moneyCount').value = moneyCount +' грн';
document.getElementById('beerCount').value = beerCount + ' шт.';
document.getElementById('wineCount').value = wineCount + ' шт.';
document.getElementById('pepsiCount').value = pepsiCount + ' шт.';
listArr = [];

})


document.getElementById('btn-error').addEventListener('click',function(){
  error.style.display = 'none';
})
import {sellBeer,sellPepsi,sellWine, errorCheck, orderMoney, moneyCount,pepsiMessage, beerCount,wineMessage,beerMessage, wineCount, pepsiCount,setErrorCheckToFalse, setOrderMoney} from './shopModule.js';