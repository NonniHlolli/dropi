var theBottle = {};

document.addEventListener('DOMContentLoaded', () => {
      fetchBottle()
});

function fetchBottle(){
  const hostqs = window.location.search;
  [slug] = hostqs.split('=').splice(-1);
  slug = slug.substring(1);
  console.log(slug)
    fetch('/user')
      .then(res => res.json())
      .then(events => {
          console.log(events);
          events.forEach((event) => {
            if (event.tracenr == slug) {
               setUp(event)
            }
          });
      })
}

function setUp(event){
  console.log(event)
}
