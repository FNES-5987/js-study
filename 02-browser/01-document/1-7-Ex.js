let container = document.getElementById('container')
let data = {
  "Fish": {
    "trout": {},
    "salmon": {}
  },

  "Tree": {
    "Huge": {
      "sequoia": {},
      "oak": {}
    },
    "Flowering": {
      "apple tree": {},
      "magnolia": {}
    }
  }
};

// createTree : 객체를 받아서 속성목록으로 li를 만듦
// (ul에 li들을 붙이고 ul을 container에 붙여야함)
// container : 트리(ul > li, li ...)를 만들어 붙여넣을 요소
// data : 객체 속성 목록으로 ul, li, li...를 만들 값
function createTree(container, data) {
  // 재귀호출(recursive call) : 본인함수 다시 호출
  // 재귀호출로 문제를 해결할 때 가장 중료한 포인트 = 탈출구문
  // **어떤 시점에 재귀호출을 할것인가
  // **재귀호출은 가장 나중에 호출된 함수부터 처리된다.
  // 객체에 속성이 있을때만 처리하고 없으면 더이상 호출 X
  if (Object.keys(data).length > 0) {
    // ul을 만들고
    const ul = document.createElement("ul");

    // 속성 개수 만큼 li들을 만듦
    for(let prop in data) {
      const li = document.createElement("li");
      li.textContent = prop; // li 컨텐츠로 속성명을 넣어줘야함
      ul.append(li); // ul에 붙인다
      // 속성 객체에 대한 createTree를 다시 호출
      // 컨테이너를 무엇으로 할 것인가..
      createTree(li, data[prop])
    }

    // ul을 컨테이너에 붙인다
    container.append(ul);
  }

  createTree(container, data);
}