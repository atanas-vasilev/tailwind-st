document.querySelector("a.ham-icon").addEventListener("click", function(event){
    document.getElementById("sideNavigation").style.width = "95vw";
    document.getElementById("main").style.marginLeft = "95vw";
  });
  
  document.querySelector("a.close-btn").addEventListener("click", function(event){
    document.getElementById("sideNavigation").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  });