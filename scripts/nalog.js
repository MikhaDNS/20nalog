
function discharge(){
  $('input').val(String($('input').val().replace(/[^0-9.]/g,'')).replace(/\B(?=(\d{3})+(?!\d))/g, " "));
}
discharge();
$('input').keyup(function(){
  discharge();
});
function result() {
  let summ = document.getElementById("summ").value;
   
if (summ.match(/^[-\+]?\d+/) == null || summ == 0){
  alert('Проверьте корректность ввода данных!');
}else{
  let rezmath=(((summ/120)*100)*0.2).toFixed(3);
  document.getElementById("mainlut").textContent="Ваш налог составил: "+rezmath.toLocaleString()+" руб.";

}
}
