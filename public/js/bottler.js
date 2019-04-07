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

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems,{
      endingTop:	'2%',
      startingTop: '50%'
    });
    var elems = document.querySelectorAll('.scrollspy');
    var instances = M.ScrollSpy.init(elems);
    var elems = document.querySelectorAll('.pushpin');
    var instances = M.Pushpin.init(elems);
  });
