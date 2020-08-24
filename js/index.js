var sideBar = document.querySelector(".sidebar");

var openSidebarButton = document.querySelector("#open-sidebar");
openSidebarButton.addEventListener("click", function(){
  sideBar.classList.add("open");
})

var closeSidebarButton = document.querySelector("#close-sidebar");
closeSidebarButton.addEventListener("click", function(){
  sideBar.classList.remove("open");
})