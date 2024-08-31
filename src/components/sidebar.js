// $(".menu > ul > li").click(function (e) {
//   $(this).siblings().removeClass("active");
//   $(this).toggleClass("active");
// });


function toggleRutineBar (){
  let rutineBar = document.getElementById("rutine-menu");
  let display = getComputedStyle(rutineBar).display;

  if (display == "none") {
    rutineBar.style.display = "grid";
  } else {
    rutineBar.style.display = "none";
  }
}


function min_sidebar() {
  const toggle_sidebar = document.querySelector(".sidebar");

  if(toggle_sidebar.classList.length == 2) {
    toggle_sidebar.classList.remove("active")
  } else {
    toggle_sidebar.classList.add("active")
  }

}

