// document.body.addEventListener("click", (e) => {
//   console.log(e.button);
//   console.log(e.buttons);
// })

const input = document.querySelector('input');
input.addEventListener("keydown", (e) => {
  console.log(e);
  if(e.code.toLocaleLowerCase() === "enter"){
    alert("엔터키는 호환되지 않습니다.")
  }

  if(e.code.toLocaleLowerCase() === "backspace"){
    alert("뒤로가기키는 호환되지 않습니다.")
  }
})