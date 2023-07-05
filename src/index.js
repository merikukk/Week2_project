import "./styles.css";

document.getElementById("app").innerHTML = `
<h1></h1>
<div>

</div>
`;

let button = document.getElementById("submit-data");

button.addEventListener("click", function () {
  addedForm;
});

function addedForm() {
  let username = document.getElementById("input-username").value;
  let email = document.getElementById("input-email").value;
  let address = document.getElementById("input-address").value;
  let admin = document.getElementById("input-admin").value;

  let table = document.getElementById("users");

  let row = table.insertRow(0);

  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  let cell4 = row.insertCell(3);

  cell1.innerHTML = username;
  cell2.innerHTML = email;
  cell3.innerHTML = address;
  cell4.innerHTML = admin;
}
