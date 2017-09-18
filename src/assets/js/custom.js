var flagDropDown = false;

var flagChangeHeightLoginPage = false;

//Navbar setting
$(document).ready(function () {
  $(".button-collapse").sideNav();
  $(".dropdown-button1").dropdown();
  $(".dropdown-button2").dropdown();

  //set hide for dropdown list
  $(".dropdown-button1").click(function (e) {
    if (flagDropDown) {
      e.preventDefault();
    }
    flagDropDown = !flagDropDown;
  });
});

