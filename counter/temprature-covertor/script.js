// dom Elements

const inputBox = document.getElementById("inputBox");

const Toferenheit = document.getElementById("Toferenheit");
const Tocelsius = document.getElementById("Tocelsius");
const result = document.getElementById("result");
let temp ;

const convert=()=>{
  if (Toferenheit.checked) {
    temp = Number(inputBox.value);
    temp = temp * 9 / 5 +32 ;
    result.textContent = temp.toFixed(1)+ "F"
    
  }
else if (Tocelsius.checked) {
  temp = Number(inputBox.value);
    temp = (temp-32) * (5/9)  ;
    result.textContent = temp.toFixed(1) + "F"
}
else{
  result.textContent = "Select a unit" ;
}
}