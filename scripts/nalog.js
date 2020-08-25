function numberWithSpaces(x) {
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return parts.join(".");
}
function result() {
  let summ = document.getElementById("summ").value;
   
if (summ.match(/^[-\+]?\d+/) == null || summ == 0){
  alert('Проверьте корректность ввода данных!');
}else{
  let rezmath=(((summ/120)*100)*0.2).toFixed(3);
  document.getElementById("mainlut").textContent="Ваш налог составил: "+numberWithSpaces(rezmath)+" руб."

}
}
