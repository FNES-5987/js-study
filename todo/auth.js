function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

(()=>{
  const token = getCookie("token")
  console.log(token);
  if(!token) {
    // 페이지를 이동시키는 window.location 객체의 속성
    window.location.href = "/login.html";
  }
})();