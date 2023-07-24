let contacts = [];

function addContact() {
  let contactName = document.getElementById(
    "contactName"
  ).value;
  let contactPhone = document.getElementById( // input ID 불러오기 123
    "contactPhone"
  ).value;
  let contactEmail = document.getElementById(
    "contactEmail"
  ).value;

  if (
    contactName !== "" &&
    contactPhone !== "" &&  // if input값이 모두 들어가 있다면
    contactEmail !== ""
  ) {
    contacts.push({
      name: contactName,
      phone: contactPhone,  // push 입력값123
      email: contactEmail,
    });

    document.getElementById("contactName").value =
      "";
    document.getElementById(  // 입력값초기화123
      "contactPhone"
    ).value = "";
    document.getElementById(
      "contactEmail"
    ).value = "";

    displayContacts(); // 출력 input
  }
}

function removeContact() {
  let removeContactName = document.getElementById(
    "removeContactName"
  ).value;
  contacts = contacts.filter(
    (contact) =>
      contact.name !== removeContactName
  );
  document.getElementById(
    "removeContactName"
  ).value = "";
  displayContacts();
}

function displayContacts() { // 입력값 출력 output
  let contactList = document.getElementById(
    "contactList"
  );
  contactList.innerHTML = "";
  for (let i = 0; i < contacts.length; i++) {
    contactList.innerHTML += `<li>${contacts[i].name} | ${contacts[i].phone} | ${contacts[i].email}</li>`;
  }
}