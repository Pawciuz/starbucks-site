let restaurants=document.getElementById("hoverRestaurants");
restaurants.addEventListener('mouseover', function handleMouseOver() {
    restaurants.style.color = '#182631';
    document.getElementById("location_pin").src="assets/location_pin_hovered.png";
  });
restaurants.addEventListener('mouseout', function handleMouseOut() {
  restaurants.style.color = 'black';
  document.getElementById("location_pin").src="assets/location_pin.png";
  });
document.getElementsByClassName("listButton")[0].onclick=function(){
  document.getElementsByClassName("dropdownlist")[0].classList.toggle("togglelist");
}
document.getElementsByClassName("listButton")[1].onclick=function(){
  document.getElementsByClassName("dropdownlist")[1].classList.toggle("togglelist");
}
document.getElementsByClassName("listButton")[2].onclick=function(){
  document.getElementsByClassName("dropdownlist")[2].classList.toggle("togglelist");
}
   