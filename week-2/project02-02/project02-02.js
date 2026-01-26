/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form
      Author: Jennifer Snyder
      Date:   01-25-2026

      Filename: project02-02.js
 */
function verifyForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;

  name && email && phone
  ? window.alert("Thank You!")
  : window.alert("Please fill in all fields");
}

document.getElementById("submit").addEventListener("click", function (event){
  event.preventDefault();

  verifyForm();
});