let counter=0;

document.getElementById("event").onclick = function () { myFunction() };
document.getElementById("event2").onclick = function () { myFunction() };
document.getElementById("event3").onclick = function () { myFunction() };
document.getElementById("event4").onclick = function () { myFunction() };
document.getElementById("event5").onclick = function () { myFunction() };
document.getElementById("event6").onclick = function () { myFunction() };
document.getElementById("event").addEventListener('click', function () {
  alert('Nice, you have added this item to your cart! Please check your shopping cart', 'success')
});
document.getElementById("event2").addEventListener('click', function () {
  alert2('Nice, you have added this item to your cart! Please check your shopping cart', 'success')
});
document.getElementById("event3").addEventListener('click', function () {
  alert3('Nice, you have added this item to your cart! Please check your shopping cart', 'success')
});
document.getElementById("event4").addEventListener('click', function () {
  alert4('Nice, you have added this item to your cart! Please check your shopping cart', 'success')
});
document.getElementById("event5").addEventListener('click', function () {
  alert5('Nice, you have added this item to your cart! Please check your shopping cart', 'success')
});
document.getElementById("event6").addEventListener('click', function () {
  alert6('Nice, you have added this item to your cart! Please check your shopping cart', 'success')
});

var alertPlaceholder = document.getElementById('liveAlertPlaceholder');
var alertPlaceholder2 = document.getElementById('liveAlertPlaceholder2');
var alertPlaceholder3 = document.getElementById('liveAlertPlaceholder3');
var alertPlaceholder4 = document.getElementById('liveAlertPlaceholder4');
var alertPlaceholder5 = document.getElementById('liveAlertPlaceholder5');
var alertPlaceholder6 = document.getElementById('liveAlertPlaceholder6');

function alert(message, type) {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

  alertPlaceholder.append(wrapper)
}
function alert2(message, type) {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

  alertPlaceholder2.append(wrapper)
}
function alert3(message, type) {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

  alertPlaceholder3.append(wrapper)
}
function alert4(message, type) {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

  alertPlaceholder4.append(wrapper)
}
function alert5(message, type) {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

  alertPlaceholder5.append(wrapper)
}
function alert6(message, type) {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

  alertPlaceholder6.append(wrapper)
}

function myFunction() {
  counter+=1;
  document.getElementById("handler").innerHTML = counter;
}

var exampleModal = document.getElementById('exampleModal')
exampleModal.addEventListener('show.bs.modal', function (event) {
  // Button that triggered the modal
  var button = event.relatedTarget
  // Extract info from data-bs-* attributes
  var recipient = button.getAttribute('data-bs-whatever')
  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  //
  // Update the modal's content.
  var modalTitle = exampleModal.querySelector('.modal-title')
  var modalBodyInput = exampleModal.querySelector('.modal-body input')

  modalTitle.textContent = 'New message to ' + recipient
  modalBodyInput.value = recipient
})