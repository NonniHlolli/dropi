
document.getElementById("go").addEventListener("click", function(){
  const a = document.getElementById("trace").value;
  console.log(/[0-9]{6}/.test(a));
  if (!(/[0-9]{6}/.test(a))){
    document.getElementById("comm").innerHTML = "Not a valid trace code"
  }
  else if (a=="111117") {
    window.location.href = "addCode.html";
  } else {
    var bla = 0;
    fetch('/user')
             .then(res => res.json())
             .then(events => {
                 events.forEach((event) => {
                   if (event.tracenr == a) {
                     bla = 1;
                     const link = "bottle.html?slug=$"+a;
                     window.location.href = link;
                   }

                 });

             })
      if (bla == 0){
        document.getElementById("comm").innerHTML = "Sorry this trace code does not exist";
      }
    }
});
