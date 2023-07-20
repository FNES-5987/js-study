   function showNotification({top = 0, right = 0, className, html}) {

      let notification = document.createElement('div'); // div 불러오기
      notification.className = "notification"; // 클래스 네임 할당
      if (className) {
        notification.classList.add(className); // 할당시킨 클래스네임이 아니라면 클래슨네임 추가
      }

      notification.style.top = top + 'px'; // 입력받을 값들에 px 추가
      notification.style.right = right + 'px';

      notification.innerHTML = html;
      document.body.append(notification); 

      setTimeout(() => notification.remove(), 1500);
    }

    let i = 1;
    setInterval(() => {
      showNotification({
        top: 10,
        right: 10,
        className: "welcome",
        html: 'Hello ' + i++,

      });
    }, 2000);