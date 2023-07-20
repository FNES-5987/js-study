console.log(document.body.className);
console.log(document.body.classList);

// 클래스 추가
document.body.classList.add("article")

// 클래스 존재여부
console.log(document.body.classList.contains("article"));
console.log(document.body.className);

// 클래스 제거
document.body.classList.remove("article")
console.log(document.body.className);

// 클래스 토글
if (document.body.classList.contains("article")) {
  document.body.classList.remove("article")
} else document.body.classList.add("article")
console.log(document.body.className);
//  ===
document.body.classList.toggle("article");
console.log(document.body.className);

// background-color  => elem.style.backgroundColor
// z-index           => elem.style.zIndex
// border-left-width => elem.style.borderLeftWidth

document.body.style.display = "none";
setTimeout(() => document.body.style.display = "", 1000);

document.body.setAttribute(
  "style",
  "color:red; background-color:yellow"
)