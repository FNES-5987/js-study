let table = document.body.firstElementChild;
const tbody = document.querySelector("tbody");

for (let tr of tbody.children) {
  let i = Array.from(tbody.children).indexOf(tr);
  tr.children[i].className = "bg-red"
  // console.log(tr);
}