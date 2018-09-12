
const $gallery = $('#gallery');
let person;
let employeeCard;
let employees;
$.ajax({
  url: 'https://randomuser.me/api/?results=12&nat=us',
  dataType: 'json',
  success: function(data) {
    employees = data.results;
    appendCardsToPage();
    addModal();
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
function addModal(num) {
$cards.click(function() {
  //num = 0;
  num = parseInt(($(this).attr('id')));
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
  });
  // addCloseModalEvent();
  // addNextButtonEvent();
  // addModal(num);
}

function addCloseModalEvent() {
  let $modalContainer = $('.modal-container');
  const $modalCloseButton = $('#modal-close-btn');
  $modalCloseButton.click(function () {
    $modalContainer.remove();
  });
}


function addNextButtonEvent() {
  let $nextButton = $('#modal-next');
  $nextButton.click(function() {
    console.log('you did click it');
    num += 1;
  //  currentModalId = parseInt(($(this).parentNode.parentNode.attr('id')));
    $('body').append(
      `<div class="modal-container">
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
              <div class="modal-btn-container">
                  <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
                  <button type="button" id="modal-next" class="modal-next btn">Next</button>
              </div>
          </div>`
       );
        addCloseModalEvent();
        addNextButtonEvent();
    });
  }

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
    cardModal();
  });
}
