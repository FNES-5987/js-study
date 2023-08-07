function cardTemplate(item) {
  const template = /*html*/ `
  <div data-no="${item.no}">
    <em>${item.no}</em>
    <hr>
    <h3>${item.title}</h3>
    <p>${item.content}</p>
    <hr>
    <small>${new Date(
      item.createdTime
    ).toLocaleString()}</small>
    <button class="btn-remove">삭제</button>
  </div>
`;
  return template;
}

(async () => {
  const url = "http://localhost:8080/posts";

  // 1. fetch, 서버에서 데이터 가져오기
  const response = await fetch(url);
  const result = await response.json();
  // console.log(result);

  // 배열 메서드를 사용하기 위해서...
  const data = Array.from(result);
  // console.log(data);

  // 2.-- 데이터배열 반복문으로 html문자열 만들고,
  // 컨테이너에 추가
  data
    // 데이터를 다시 순정렬을 한다음에
    .sort((a, b) => a.no - b.no)
    // 반복문으로 form뒤에 div를 추가함
    .forEach((item) => {
      document.forms[2].insertAdjacentHTML(
        "afterend", cardTemplate(item)
      );
    });
})();

// 추가 기능
(() => {
  const form = document.forms[0];
  const post = form.querySelector("button");

  const title = form.querySelector("input");
  const content = form.querySelector("textarea");

  post.addEventListener("click", async (e) => {
    e.preventDefault();

    // 서버에 데이터 전송
    const response = await fetch(
      "http://localhost:8080/posts",
      {
        // HTTP Method
        method: "POST",
        // 보낼 데이터 형식은 json
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          title: title.value,
          content: content.value,
        }),
      }
    );
    console.log(response);

    const result = await response.json();
    console.log(result);

    // UI 생성
    document.forms[2].insertAdjacentHTML(
      "afterend",
      cardTemplate(result.data)
    );
  });
})();

// 삭제
(()=>{

  const form = document.forms[1];

  const input = form.querySelector("input")
  console.log(input);
  const del = form.querySelector("button");

  del.addEventListener("click", async (e) => {
    e.preventDefault();

    await fetch(`http://localhost:8080/posts/${input.value}`,
    {
      method: "DELETE",
    })

    const div = document.querySelector(
      `div[data-no="${input.value}"]`
    );

    if (!div) {
      alert("해당번호가없습니다.")
      return;
    }

    div.remove();

    form.reset();
  })
})();

(() => {
  document.body.addEventListener("click", (e) => { 
    // alert(e.target.className);
    // e.target: 실제 이벤트가 발생한요소
    // 해당 클래스가 있는지 확인
    if (
      e.target.classList.contains("btn-remove")
    ) {
      // jsdoc type 힌트를 넣어줌
      /** @type {HTMLButtonElement} */
      const removeBtn = e.target;
      removeBtn.parentElement.remove();
    }
  });
})();