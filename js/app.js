
const $gallery = $('#gallery');
let person;
let employeeCard;
let employees;
$.ajax({
  url: 'https://randomuser.me/api/?results=12',
  dataType: 'json',
  success: function(data) {
    employees = data.results;
    appendCardsToPage();
    addModal();
  }
});


function capitalize(str) {
  let capitalizedStr = str.charAt(0).toUpperCase() + str.substr(1);
  return capitalizedStr;
}


function titleCase(str) {
   var splitStr = str.toLowerCase().split(' ');
   for (let i = 0; i < splitStr.length; i++) {
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
   }
   return splitStr.join(' ');
}


function formatDob(str) {
  let month = str.charAt(5) + str.charAt(6);
  let date = str.charAt(8) + str.charAt(9);
  let year = str.charAt(2) + str.charAt(3);
  let formatedDob = `${month}/${date}/${year}`;
  return formatedDob;
}


let arrayNum;
function addModal() {
    $cards = $('.card');
    $cards.click(function(event) {
    arrayNum = parseInt($(this).attr('id'));
    $('body').append(
      `<div class="modal-container">
          <div class="modal">
              <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
              <div class="modal-info-container">
                <img class="modal-img" src="${employees[arrayNum].picture.large}" alt="profile picture">
                <h3 id="name" class="modal-name cap">${employees[arrayNum].name.first} ${employees[arrayNum].name.last}</h3>
                <p class="modal-text">${employees[arrayNum].email}</p>
                <p class="modal-text cap">${employees[arrayNum].location.city}</p>
                <hr>
                <p class="modal-text">${employees[arrayNum].phone}</p>
                <p class="modal-text">${titleCase(employees[arrayNum].location.street)}, ${capitalize(employees[arrayNum].location.city)}, ${capitalize(employees[arrayNum].location.state)} ${employees[arrayNum].location.postcode}</p>
                <p class="modal-text">Birthday: ${formatDob(employees[arrayNum].dob.date)}</p>
            </div>
          </div>
          <div class="modal-btn-container">
              <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
              <button type="button" id="modal-next" class="modal-next btn">Next</button>
          </div>
        </div>`
      );
      addCloseModalEvent();
      addNextButtonEvent();
      addPrevButtonEvent();
  });
}

function addCloseModalEvent() {
  let $modalContainer = $('.modal-container');
  let $modalCloseButton = $('#modal-close-btn');
  $modalCloseButton.click(function () {
    $modalContainer.remove();
  });
}


function addNextButtonEvent() {
  let $nextButton = $('#modal-next');
  $nextButton.click(function() {
    console.log('you did click it');
    arrayNum += 1;
    let $modalContainer = $('.modal-container');
    if (arrayNum < 12) {
      $modalContainer.remove();
      $('body').append(
        `<div class="modal-container">
            <div class="modal">
                <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                <div class="modal-info-container">
                  <img class="modal-img" src="${employees[arrayNum].picture.large}" alt="profile picture">
                  <h3 id="name" class="modal-name cap">${employees[arrayNum].name.first} ${employees[arrayNum].name.last}</h3>
                  <p class="modal-text">${employees[arrayNum].email}</p>
                  <p class="modal-text cap">${employees[arrayNum].location.city}</p>
                  <hr>
                  <p class="modal-text">${employees[arrayNum].phone}</p>
                  <p class="modal-text">${titleCase(employees[arrayNum].location.street)}, ${capitalize(employees[arrayNum].location.city)}, ${capitalize(employees[arrayNum].location.state)} ${employees[arrayNum].location.postcode}</p>
                  <p class="modal-text">Birthday: ${formatDob(employees[arrayNum].dob.date)}</p>
                </div>
              </div>
              <div class="modal-btn-container">
                  <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
                  <button type="button" id="modal-next" class="modal-next btn">Next</button>
              </div>
            </div>`
         );
          addCloseModalEvent();
          addNextButtonEvent();
          addPrevButtonEvent();
      } else if (arrayNum >= 12){
        arrayNum -= 1;
      }
    });
  }


  function addPrevButtonEvent() {
    let $prevButton = $('#modal-prev');
    $prevButton.click(function() {
      console.log('you did click it');
      arrayNum -= 1;
      let $modalContainer = $('.modal-container');
      if (arrayNum >= 0) {
        $modalContainer.remove();
        $('body').append(
          `<div class="modal-container">
              <div class="modal">
                  <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                  <div class="modal-info-container">
                    <img class="modal-img" src="${employees[arrayNum].picture.large}" alt="profile picture">
                    <h3 id="name" class="modal-name cap">${employees[arrayNum].name.first} ${employees[arrayNum].name.last}</h3>
                    <p class="modal-text">${employees[arrayNum].email}</p>
                    <p class="modal-text cap">${employees[arrayNum].location.city}</p>
                    <hr>
                    <p class="modal-text">${employees[arrayNum].phone}</p>
                    <p class="modal-text">${titleCase(employees[arrayNum].location.street)}, ${capitalize(employees[arrayNum].location.city)}, ${capitalize(employees[arrayNum].location.state)} ${employees[arrayNum].location.postcode}</p>
                    <p class="modal-text">Birthday: ${formatDob(employees[arrayNum].dob.date)}</p>
                  </div>
                </div>
                <div class="modal-btn-container">
                    <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
                    <button type="button" id="modal-next" class="modal-next btn">Next</button>
                </div>
              </div>`
           );
            addCloseModalEvent();
            addNextButtonEvent();
            addPrevButtonEvent();
          } else if (arrayNum < 0) {
            arrayNum += 1;
          }
      });
    }

let arrayOfCards = [];
function appendCardsToPage () {
  $.each(employees, function(i, person) {
    $gallery.append(`<div class="card" id="${i}">
        <div class="card-img-container">
            <img class="card-img" src="${person.picture.medium}" alt="profile picture">
        </div>
        <div class="card-info-container">
            <h3 id="name" class="card-name cap">${person.name.first} ${person.name.last}</h3>
            <p class="card-text">${person.email}</p>
            <p class="card-text cap">${person.location.city}</p>
        </div>
    </div>`);
  });
  arrayOfCards.push(employees);
}
