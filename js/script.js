document.getElementById("showMenu").addEventListener("click", function () {
  var sidebar = document.getElementById("sidemenu");
  if (sidebar.style.display === "flex") {
    sidebar.style.display = "none   ";
  } else {
    sidebar.style.display = "flex";
  }
});

document.getElementById("moreDetails").addEventListener("click", function () {
  var details = document.getElementById("details");
  if (details.style.display === "flex") {
    details.style.display = "none";
  } else {
    details.style.display = "flex";
  }
});
