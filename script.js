function toggleMenu() {
   const menu = document.getElementById("ul-mobile");
   const nav = document.getElementById("nav-mobile");
   const close = document.getElementById("nav-close");

   if(menu.style.display === "none"){
    menu.style.display = "block";
   }
   else {
    menu.style.display = "none";
   }
   if(nav.style.display === "none"){
    nav.style.display = "block";
   }
   else {
    nav.style.display = "none";
   }
   if(close.style.display === "none"){
    close.style.display = "block";
   }
   else {
    close.style.display = "none";
   }
}


function menuHandle() {
    toggleMenu();
}
