
// (async () => {
//   const body = document.body;
//   const url = "http://localhost:8080/posts";

//   // 1. fetch, 서버에서 데이터 가져오기
//   const response = await fetch(url);
//   const result = await response.json();

//   // 배열 메서드를 사용하기 위해서...
//   const data = Array.from(result);
//   console.log(data);

//   // 2.-- 데이터배열 반복문으로 html문자열 만들고,
//   // 컨테이너에 추가
//   data.forEach((item) => {
//     const template = /*html*/ `
//       <div style="width:300px; margin-bottom:2rem;" data-no="${
//         item.no
//       }">
//         <em>${item.creatorName}</em>
//         <hr>
//         <h3>${item.title}</h3>
//         <p>${item.content}</p>
//         <hr>
//         <small>${new Date(
//         ).toLocaleString()}</small>
//       </div>
//     `;

//     body.insertAdjacentHTML(
//       "beforeend",
//       template
//     );
//   });
// })();

const tr = document.createElement("tr");
(async ()=>{
  const response = await fetch(
    "http://localhost:8080/posts"
  );
  const result = await response.json();

  const tbody = document.querySelector("tbody");

  for (let item of result) {
    tbody.append(
      `
      <table>
      <tbody>
      <tr>${createrName}</tr>
      <hr>
      <tr>${title}</tr>
      <tr>${content}</tr>
      <tr>${new Date().toLocaleString}</tr>
      </tbody>
      </table>
      `
    )
  }
})();

(() => {
  const form = document.forms[0];
  const lable = document.querySelector("lable");
  const inputs = form.querySelectorAll("input");

  const createrName = inputs[0];
  const title = inputs[1];
  const content = inputs[2];

  const add = form.querySelector("button");

  add.addEventListener("click", async (e) => {
    e.preventDefault();

    if (createrName.value === "") {
      alert("작성자를 입력하세요.");
      return;
    }

    if (title.value === "") {
      alert("글 제목을 입력하세요.");
      return;
    }

    if (content.value === "") {
      alert("내용을 입력하세요.");
      return;
    }

    const response = await fetch(
      "http://localhost:8080/posts", {
        method: "POST",
        headers: {
          "content-type": "application/js",
        },
        body: JSON.stringify({
          createrName: createrName.value,
          title: title.value,
          content: content.value,
        }),
      }
    );

    const result = await response.json();

    const tbody = document.querySelector("tbody");
    tbody.prepend(
      `
      <table>
      <tbody>
      <tr>${createrName}</tr>
      <hr>
      <tr>${title}</tr>
      <tr>${content}</tr>
      <tr>${new Date().toLocaleString}</tr>
      </tbody>
      </table>
      `
    );
    form.reset();
  })
})()