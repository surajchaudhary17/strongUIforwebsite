// function changeColor(newColor) {
//     const elem = document.getElementById("para");
//     elem.style.color = newColor;
//   }
//   function showname() {
//     const val = document. querySelector('input'). value;
//     alert(val);
//     // elem.style.color = newColor;
//   }
function hello(idss){
  const xx=document.getElementById(idss);
  if(idss=='home')
   xx.style.color='red';
  else if(idss=='setting')
   xx.style.color='green';
  else if(idss=='search')
   xx.style.color='white';
  else
  xx.style.color='blue';

  var x="YOU ARE SO LUCKY GUY";
  alert(x);
}