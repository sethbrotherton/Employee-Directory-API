
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
    addModal(num);
  }
});


let $cards;
function cardModal () {
  $cards = $('.card');
  $cards.click(function() {
    $(this).css('backgroundColor', 'green');
  });
}


let num;
let arrayNum;
function addModal(num) {
    $cards = $('.card');
    $cards.click(function(event) {
    num = 0;
    num += parseInt(($(this).attr('id')));
    //arrayNum = arrayOfCards.indexOf(event.target.attr('id'));
    arrayNum = parseInt($(this).attr('id'));
    $('body').append(
      `<div class="modal-container" id="${num + 12}">
          <div class="modal">
              <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
              <div class="modal-info-container">
                <img class="modal-img" src="${employees[num].picture.large}" alt="profile picture">
                <h3 id="name" class="modal-name cap">${employees[num].name.first} ${employees[num].name.last}</h3>
                <p class="modal-text">${employees[num].email}</p>
                <p class="modal-text cap">${employees[num].location.city}</p>
                <hr>
                <p class="modal-text">${employees[num].phone}</p>
                <p class="modal-text">${employees[num].location.street}, ${employees[num].location.city}, ${employees[num].location.state} ${employees[num].location.postcode}</p>
                <p class="modal-text">Birthday: ${employees[num].dob.date}</p>
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
  //  let arrayNum = 0;
    arrayNum += 1;
    let $modalContainer = $('.modal-container');
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
                <p class="modal-text">${employees[arrayNum].location.street}, ${employees[arrayNum].location.city}, ${employees[arrayNum].location.state} ${employees[arrayNum].location.postcode}</p>
                <p class="modal-text">Birthday: ${employees[arrayNum].dob.date}</p>
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


  function addPrevButtonEvent() {
    let $prevButton = $('#modal-prev');
    $prevButton.click(function() {
      console.log('you did click it');
    //  let arrayNum = 0;
      arrayNum -= 1;
      let $modalContainer = $('.modal-container');
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
                  <p class="modal-text">${employees[arrayNum].location.street}, ${employees[arrayNum].location.city}, ${employees[arrayNum].location.state} ${employees[arrayNum].location.postcode}</p>
                  <p class="modal-text">Birthday: ${employees[arrayNum].dob.date}</p>
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
            <p class="card-text cap">${person.location.city}, ${person.location.state}</p>
        </div>
    </div>`);
  });
  arrayOfCards.push(employees);
}
