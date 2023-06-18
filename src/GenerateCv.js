export function AddAcadField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("acadField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter Here");
  let weOb = document.getElementById("ac");
  let weAddButtonOb = document.getElementById("aqAddButton");
  weOb.insertBefore(newNode, weAddButtonOb);
}

export function addNewEField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("workField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter Here");
  let weOb = document.getElementById("we");
  let weAddButtonOb = document.getElementById("weAddButton");
  weOb.insertBefore(newNode, weAddButtonOb);
}

export function generateCV() {
  // NAme Fields
  const nameField = document.getElementById("nameField").value;
  const nameT1 = document.getElementById("nameT1");
  nameT1.innerHTML = nameField;
  document.getElementById("nameT2").innerHTML = nameField;

  //   Email Fields

  document.getElementById("emailT").innerHTML =
    document.getElementById("emailField").value;

  // Phone Fields

  document.getElementById("phoneT").innerHTML =
    document.getElementById("phoneField").value;

  // Address Fields

  document.getElementById("addressT").innerHTML =
    document.getElementById("contactField").value;

  // Links Fields

  document.getElementById("LinkT").innerHTML =
    document.getElementById("linkedField").value;

  document.getElementById("GitT").innerHTML =
    document.getElementById("gitHubField").value;

  // EDucation 10 and 12

  document.getElementById("tenthT").innerHTML =
    document.getElementById("sscField").value;

  document.getElementById("twelveT").innerHTML =
    document.getElementById("hscField").value;

  // Work Experiences

  let wes = document.getElementsByClassName("workField");
  let str = "";

  for (let e of wes) {
    str = str + `<li>${e.value}</li>`;
  }

  document.getElementById("weT").innerHTML = str;

  //   Academic Qualification

  let aes = document.getElementsByClassName("acadField");
  let atr = "";

  for (let e of aes) {
    atr = atr + `<li>${e.value}</li>`;
  }

  document.getElementById("aqT").innerHTML = atr;

  //   SHOW TEMPLATE AND HIDE FORM

  document.getElementById("cv-form").style.display = "none";
  document.getElementById("cv-template").style.display = "block";
}
