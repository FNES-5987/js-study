function cardTemplate(item) {
  const template = /*html*/ `
  <div data-no="${
    item.no
  }">
    <em>${item.creatorName}</em>
    <hr>
    <h3>${item.title}</h3>
    <p>${item.content}</p>
    <hr>
    <small>${new Date(
      item.createdTime
    ).toLocaleString()}</small>
    <button>삭제</button>
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
      document.forms[1].insertAdjacentHTML(
        "afterbegin", cardTemplate(item)
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
    document.forms[1].insertAdjacentHTML(
      "afterbegin",
      cardTemplate(result.data)
    );
  });
})();

(()=>{

  const form = document.forms[1];
  console.log(form);
  // div 불러내기

  // const button = div.querySelector("button")

  // button.addEventListener("click", async (e) => {
  //   e.preventDefault();

  //   await fetch(`http://localhost:8080/contacts/${}`,
  //   {
  //     method: "DELETE",
  //   })

  //   .remove();

  //   form.reset();
  // })
})()