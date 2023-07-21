(() => {
  const form = document.querySelector("form");
  const checkedPrice = form.querySelectorAll("input[name='price']:checked");
  const value = Array.from(checkedPrice).map((check) => check.value);
  console.log(checkedPrice);
  console.log(value);

  const title = document.querySelector('h3');
  const list = document.querySelector('ul');
  const fruit = document.querySelector('li');
  const arrow = document.querySelector('i');
  
  title.addEventListener("click", () => {
    list.hidden = !list.hidden
    arrow.style.transform = list.hidden ? "rotate(0deg)" : "rotate(90deg)";
})
})();