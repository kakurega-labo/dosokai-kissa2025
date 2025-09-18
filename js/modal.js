// js/modal.js

document.addEventListener("DOMContentLoaded", () => {
  const menuItems = document.querySelectorAll(".menu li");

  const menuDetails = {
    "コーヒー（ホットのみ）": {
      img: "image/menu_coffee.jpg",
      text: "香ばしい香りと深い味わいのホットコーヒーです。"
    },
    "紅茶（HOT・ICE）": {
      img: "image/menu_tea.jpeg",
      text: "紅茶です。ホットとアイスを選べます。"
    },
    "レモネード": {
      img: "image/menu_lemon.png",
      text: "レモンと蜂蜜の甘さに茶葉を加えた爽快感と深みのあるレモネードです・"
    },
    "コーラ": {
      img: "image/menu_cola.jpg",
      text: "キリッとした炭酸の効いた定番のコーラです。"
    },
    "リンゴジュース": {
      img: "image/menu_apple.png",
      text: "切り立てのりんご果実のような、やさしい味わいとすっきりとした後味が特長です。"
    }
  };

  menuItems.forEach(item => {
    item.style.cursor = "pointer";
    item.addEventListener("click", () => {
      const text = item.textContent.trim();
      const detail = menuDetails[text];

      if (!detail) return;

      const modal = document.createElement("div");
      modal.className = "modal-overlay";
      modal.innerHTML = `
        <div class="modal-box"id="menuModal">
          <button class="modal-close" aria-label="閉じる">
          <img src="image/Close.svg" alt="閉じる" class="modal-close-icon">
          </button>
          <img src="${detail.img}" alt="${text}" class="menu-img">
          <p class="status-note">※画像はイメージです。</p>
          <p class="menu-title">${text}</p>
          <p class="menu-desc">${detail.text}</p>
        </div>
      `;
      document.body.appendChild(modal);

      modal.querySelector(".modal-close").addEventListener("click", () => {
        modal.remove();
      });

      modal.addEventListener("click", e => {
        if (e.target === modal) {
          modal.remove();
        }
      });
    });
  });
});
