
document.getElementById("go").addEventListener("click", function(){
  const a = document.getElementById("trace").value;
  console.log(/[0-9]{6}/.test(a));
  if (!/[0-9]{6}/.test(a)){
    document.getElementById("comm").innerHTML = "Not a valid trace code"
  }
  else if (a=="111117") {
    window.location.href = "addCode.html";
  } else {
    console.log('bla')
    fetch('/user')
             .then(res => res.json())
             .then(events => {
                 console.log(events);
                 events.forEach((event) => {
                   if (event.tracenr == a) {
                     link = "bottle.html?slug=$"+event.tracenr;
                     window.location.href = link;
                   }

                 });

             })
      document.getElementById("comm").innerHTML = "Sorry this trace code does not exist"
    }
});
