// js/staff-protect.js

(function() {
  const body = document.body;
  const isLoggedIn = localStorage.getItem('staff_logged_in') === 'true';

  if (!isLoggedIn) {
    // 未ログイン時：DOM削除・title変更
    const admin = document.querySelector('.admin');
    const header = document.querySelector('header');
    if (admin) admin.remove();
    if (header) header.remove();
    document.title = 'お探しのページが見つかりません。';

    // エラーデザイン挿入（スタイルはCSSへ移動済）
    const ghost = document.createElement('div');
    ghost.innerHTML = `
   <style>
  .errorContainer {
    margin: 50px auto 40px auto;
    width: 600px;
    text-align: center;
  }

  .errorContainer h1 {
    width: 800px;
    position: relative;
    left: -100px;
    letter-spacing: -1px;
    line-height: 60px;
    font-size: 60px;
    font-weight: 200;
    margin: 0px 0 50px 0;
  }

  .errorContainer p {
    color: rgba(0, 0, 0, 0.5);
    margin: 20px 0;
    line-height: 1.6;
  }

  </style>
        <div class="errorContainer">
            <h1>NOT 404</h1>
            <p><strong>お探しのページが見つかりません。</strong></p>
            <p>URLが正しく入力されていないか、このページが削除された可能性があります。</p>
            <img src="image/cafe-logo.PNG" alt="ロゴ" class="logoimg">

        <div id="ghost-secret"></div>
      </div>
    `;
    body.prepend(ghost);

    document.getElementById('ghost-secret').addEventListener('click', () => {
      showLoginForm();
    });
  } else {
    if (!document.querySelector('header')) {
      const header = document.createElement('header');
      header.innerHTML = '<h1>スタッフ管理画面</h1>';
      body.insertBefore(header, body.firstChild);
    }

    if (!document.querySelector('.admin')) {
      const section = document.createElement('section');
      section.className = 'admin';
      section.innerHTML = `
        <label for="statusSelect">混雑状況を選択：</label>
        <select id="statusSelect">
          <option value="green">空いてる</option>
          <option value="yellow">やや混雑</option>
          <option value="red">混雑中</option>
        </select>
        <button onclick="updateStatus()">混雑状況を反映</button>
      `;
      body.appendChild(section);
    }
  }

  function showLoginForm() {
    const loginForm = document.createElement('div');
    loginForm.id = 'staff-login';
    loginForm.innerHTML = `
      <form onsubmit="return false;">
        <h2>スタッフログイン</h2>
        <input type="password" id="login-pass" placeholder="パスワード">
        <button id="login-btn">ログイン</button>
      </form>
    `;
    body.appendChild(loginForm);

    document.getElementById('login-btn').addEventListener('click', () => {
      const pass = document.getElementById('login-pass').value;
      const secret = 'sushi2025';
      if (pass === secret) {
        localStorage.setItem('staff_logged_in', 'true');
        location.reload();
      } else {
        alert('パスワードが違います');
      }
    });
  }
})();

