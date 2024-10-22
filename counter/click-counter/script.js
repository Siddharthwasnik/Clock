
const decrearseBtn = document.getElementById("decreasebtn");
const resetbtnBtn = document.getElementById("resetbtn");
const increarseBtn = document.getElementById("increasebtn");
const counterlebel = document.getElementById("counter-label")

let count = 0 ;

increarseBtn.onclick = function(){
  count++;
  counterlebel.textContent  = count;
}
decrearseBtn.onclick = function(){
  count--;
  counterlebel.textContent  = count;
}
resetbtnBtn.onclick =function (){
  count = 0;
  counterlebel.textContent  = count;
}