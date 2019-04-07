document.getElementById("go").addEventListener("click", function(){
  const a = document.getElementById("trace").value;
  console.log(a);
  if (a=="111117") {
    window.location.href = "addTrips.html";
  }
});
