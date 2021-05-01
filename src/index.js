import { headerDropdown } from "./js/header";
import { writeIn } from "./js/modal";

document.querySelector('#dropdownButton').addEventListener('click', headerDropdown);

window.addEventListener('click', function(event) {
  if (!event.target.matches('#dropdownButton')) {
    var dropdown = document.getElementById('headerNavDropdown');
    if (dropdown.classList.contains('is-visible')) {
      dropdown.classList.remove('is-visible');
    }
  }
})