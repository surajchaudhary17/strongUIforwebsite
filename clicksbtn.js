
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
function FbotonOn() { 
  var yy=document.getElementById('texto');
  var xm=document.getElementsByClassName("grid-item");
      yy.innerHTML = "Thank you men!";
}
