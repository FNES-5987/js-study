const container = document.querySelector(
  "#counter-container"
  );

const span = container.querySelector("span");

let count = 1;
const id = setInterval(() => {

  // 요소 내부의 HTML을 변경
  // span.innerHTML = `<strong>${count}</strong>`;

  // 요소 내부HTML을 뒤에 추가
  // span.innerHTML += `<strong>${count}</strong>`;
  // 요소 내부HTML을 앞에 추가
  // span.innerHTML = `<strong>${count}</strong>` + span.innerHTML;

  // 요소.insertAdjacentHTML
  // 요소의 인접한 위치에 html을 추가해라
  // (위치, 추가할HTML)
  // 위치 : 
  // afterBegin - 시작 태그 바로 뒤(첫번째자식)
  // beforeend - 끝태그 바로 앞(마지막자식)
  // span.insertAdjacentHTML(
  //   "",
  //   `<strong>${count}</strong>`
  // );

  count++;

count > 5 && clearInterval(id);
}, 1000);

  // -----------------------outerHTML관련
  // outerHTML 본인 태그 포함해서 변경이 일어남
  span.outerHTML = `<strong>${count}</strong>`;


// tagName 관련 ---------------------------------
// const div = document.querySelector("div");

// // 태그명이 대문자로 나옵니다.
// console.log(div.tagName);

// for (let elem of div.children) {
//   console.log(elem.tagName);
//   if(elem.tagName === "P") {
//     elem.style.backgroundColor = "red";
//   }
// }