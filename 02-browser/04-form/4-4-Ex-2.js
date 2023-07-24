let arrays = [];
function plusContect() {
  let enterName = document.getElementById("enterName").value;
  let enterPhone = document.getElementById("enterPhone").value;
  let enterEmail = document.getElementById("enterEmail").value;
  
  if (enterName !== "" && enterPhone !== "" && enterEmail !== "") {
    arrays.push({
      name: enterName,
      phone: enterPhone,
      email: enterEmail,
    });

    document.getElementById("enterName").value = "";
    document.getElementById("enterPhone").value = "";
    document.getElementById("enterEmail").value = "";

    showContect();
  }
}
function showContect() {
  let showContect = document.getElementById("showContect")
  showContect.innerHTML = "";
  for(let i = 0; i < arrays.length; i++) {
    showContect.innerHTML += `<li>${i+1}. ${arrays[i].name} | ${arrays[i].phone} | ${arrays[i].email}` 
  }
}
function deleteContect() {
  let deleteContectName = document.getElementById("deleteContectName").value;
  arrays = arrays.filter((array) => array.name !== deleteContectName);
  document.getElementById("deleteContectName").value = "";

  showContect();
}