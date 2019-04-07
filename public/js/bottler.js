


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
  setBoat(event.boat1);
}

function setBoat(boat){
  fetch('/boats')
    .then(res => res.json())
    .then(boats => {
        boats.forEach((boaty) => {
          if (boaty.boatid == boat) {
             createCard(boaty)
          }
        });
    })
}

function createCard(boat){
  const container = document.querySelector('#boatRow');
  const {
    boatid, image1, image2, img3, img4, img5, longdesc, name, shortdesc
  } = boat;
  console.log(boat);
  const imgElement = el('img', ['cardImg','responsive-img'], '');
  if (image1) {
    imgElement.src = image1;
  }
  const titleElement = el('h4', 'cardTitle', name);
  const shortElement = el('p', 'shortDesc', shortdesc);
  const btn = el('a',["waves-effect", "waves-light", "btn", "modal-trigger", "orange","cardBtn"],"See more")
  btn.href = "#modal2"
  const colElement = el('div', ['col', 's4', 'offset-s4', 'card'], [imgElement, titleElement, shortElement,btn]);
  container.appendChild(colElement);

  const imgElement2 = el('img', ['cardImg','responsive-img'], '');
  if (image1) {
    imgElement2.src = image1;
  }
  const titleElement2 = el('h4', 'cardTitle', name);
  const longElement = el('p', 'longDesc', longdesc);
  const modalElement = el('div', 'modal-content',[imgElement2, titleElement2, longElement])

  const linkel = el('a',["waves-effect", "waves-light", "btn-flat", "modal-close", "orange"],"Close")
  linkel.href = "#!"
  const modalFoot = el('div','modal-footer',linkel)

  const modal2El = el('div','modal',[modalElement,modalFoot])
  modal2El.id = "modal2";
  container.appendChild(modal2El);

  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems);
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





  /**
   * Hreinsa börn úr elementi
   *
   * @param {object} element Element sem á að hreinsa börn úr
   */
  function empty(element) {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }

  /**
   * Búa til element og aukalega setja börn ef send með
   *
   * @param {string} name Nafn á element
   @param {string} classes Nafn á classfyrir element
   * @param  {...any} children Börn fyrir element
   */
function el(name, classes, ...childrens) {
    const element = document.createElement(name);
    if (Array.isArray(classes)) {
      classes.forEach((classChild) => {
        element.classList.add(classChild);
      });
    } else if (classes) {
      element.classList.add(classes);
    }
    let children;
    if (Array.isArray(childrens[0])) {
      [children] = childrens;
    } else {
      children = childrens;
    }
    if (Array.isArray(children)) {
      children.forEach((child) => {
        if (typeof child === 'string') {
          element.appendChild(document.createTextNode(child));
        } else if (child) {
          element.appendChild(child);
        }
      });
    }
    return element;
  }
