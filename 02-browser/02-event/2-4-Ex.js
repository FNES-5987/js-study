const a1 = document.querySelector('a:nth-of-type(1)');
const a2 = document.querySelector('a:nth-of-type(2)');

a1.addEventListener("click", (e) => {
  if(a1) {
    confirm("사이트로 이동하시겠습니까?") ? a1 : false
  }
})

a2.addEventListener("click", (e) => {
  if(a2) {
    confirm("사이트로 이동하시겠습니까?") ? a1 : false;
  }
})
