
function rollDice(){
  const numofdice = document.getElementById("numofdice").value
 const  diceresult = document.getElementById("diceresult");
 const  diceimage = document.getElementById("diceimage");
 const images = [];
 const values = [];

 for (let i = 0; i <numofdice; i++) {
  
  const value = Math.floor(Math.random() *6)+1;
values.push(value);
 images.push(`<img src="dice_image/${value}.svg">`)
  
 }
 diceresult.textContent = `dice : ${values.join(',')}`;
 diceimage.innerHTML = images.join('');
 console.log(values);
 
}