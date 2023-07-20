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

  count++;

count > 5 && clearInterval(id);
}, 1000);

  // -----------------------outerHTML관련
  // outerHTML 본인 태그 포함해서 변경이 일어남
  span.outerHTML = `<strong>${count}</strong>`;

  // textcontent 관련 -------------------------
  // 태그 제외하고 text노드의 data값만 가져올 수 있다.
  console.log(container.innerHTML);
  console.log(container.textContent);

  // hidden 속성 관련 --------------------------
  // css의 display:none;

  // css
  // .container {display: flex; ...}
  // .container.none {display: none}

  // js
  // container.style.display : none;
  // container.style.display : flex;
  // container.classList.add('none');
  // container.classList.remove('none');


  // display: none; -> display: flex(block, inline)
  span.hidden = false;

  // 그 외 속성 관련 ---------------------------------
  console.log(div.id);

  // id나 class로 선택하면 어떤 태그인지 잘 모를 수 있음
  // 태그마다 알맞은 속성에 대한 자동완성이 안됨.
  // 일반적은 모든 HTML Element에 대한 속성만 자동완성
  console.log(document.querySelector("input").value);

