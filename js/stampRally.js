// スタンプラリーデータ（緯度・経度・名称・画像）
const STAMP_SPOTS = [
  {
    name: "正門",
    lat: 35.6572625066728,
    lng: 139.68382422495296,
    image: "image/stamp1.png"
  },
  {
    name: "100周年記念ﾎｰﾙ",
    lat: 35.6569297333858,
    lng: 139.6844358019007,
    image: "image/stamp2.png"
  },
  {
    name: "アリーナまたは屋上",
    lat: 35.657290,
    lng: 139.684317,
    image: "image/stamp3.png"
  },
  {
    name: "ストックヤード",
    lat: 35.657566,
    lng: 139.684354,
    image: "image/stamp4.png"
  },
  {
    name: "同窓会喫茶",
    lat: 35.6890,
    lng: 139.6922,
    image: "image/stamp5.png"
  },
  {
    name: "ｽﾁｭｰﾃﾞﾝﾄﾎｰﾙ",
    lat: 35.65674851586914,
    lng: 139.68448340758303,
    image: "image/stamp6.png"
  },
  {
    name: "ｽﾁｭｰﾃﾞﾝﾄﾎｰﾙ",
    lat: 35.65674851586914,
    lng: 139.68448340758303,
    image: "image/stamp7.png"
  },
  {
    name: "ｽﾁｭｰﾃﾞﾝﾄﾎｰﾙ",
    lat: 35.65674851586914,
    lng: 139.68448340758303,
    image: "image/stamp8.png"
  },
  {
    name: "ｽﾁｭｰﾃﾞﾝﾄﾎｰﾙ",
    lat: 35.65674851586914,
    lng: 139.68448340758303,
    image: "image/stamp9.png"
  },
  {
    name: "ｽﾁｭｰﾃﾞﾝﾄﾎｰﾙ",
    lat: 35.65674851586914,
    lng: 139.68448340758303,
    image: "image/stamp10.png"
  },
  {
    name: "ｽﾁｭｰﾃﾞﾝﾄﾎｰﾙ",
    lat: 35.65674851586914,
    lng: 139.68448340758303,
    image: "image/stamp11.png"
  },
  {
    name: "ｽﾁｭｰﾃﾞﾝﾄﾎｰﾙ",
    lat: 35.65674851586914,
    lng: 139.68448340758303,
    image: "image/stamp12.png"
  },
  {
    name: "ｽﾁｭｰﾃﾞﾝﾄﾎｰﾙ",
    lat: 35.65674851586914,
    lng: 139.68448340758303,
    image: "image/stamp13.png"
  },
  {
    name: "ｽﾁｭｰﾃﾞﾝﾄﾎｰﾙ",
    lat: 35.65674851586914,
    lng: 139.68448340758303,
    image: "image/stamp14.png"
  },
  {
    name: "ｽﾁｭｰﾃﾞﾝﾄﾎｰﾙ",
    lat: 35.65674851586914,
    lng: 139.68448340758303,
    image: "image/stamp15.png"
  },
  {
    name: "ｽﾁｭｰﾃﾞﾝﾄﾎｰﾙ",
    lat: 35.65674851586914,
    lng: 139.68448340758303,
    image: "image/stamp16.png"
  },
  {
    name: "ｽﾁｭｰﾃﾞﾝﾄﾎｰﾙ",
    lat: 35.65674851586914,
    lng: 139.68448340758303,
    image: "image/stamp17.png"
  },
  {
    name: "ｽﾁｭｰﾃﾞﾝﾄﾎｰﾙ",
    lat: 35.65674851586914,
    lng: 139.68448340758303,
    image: "image/stamp18.png"
  },
  {
    name: "ｽﾁｭｰﾃﾞﾝﾄﾎｰﾙ",
    lat: 35.65674851586914,
    lng: 139.68448340758303,
    image: "image/stamp19.png"
  },
  {
    name: "駒場東大前駅",
    lat: 35.65888763724965,
    lng: 139.68288235643766,
    image: "image/stamp20.png"
  }
];

const STAMP_KEY = "stampRallyResult";

// メニューにボタン追加
const waitStampBtn = setInterval(() => {
  const menu = document.querySelector(".hamburger-menu");
  if (!menu) return;

  if (!menu.innerHTML.includes("スタンプラリー")) {
    const btn = document.createElement("button");
    btn.innerHTML = `<img src="image/StampGift.svg" alt="">スタンプラリー`;
    btn.onclick = openStampModal;
    const target = [...menu.querySelectorAll("button")].find(b => b.innerText.includes("模擬店計算"));
    target.insertAdjacentElement("afterend", btn);
  }

  clearInterval(waitStampBtn);
}, 300);

// モーダル開く
function openStampModal() {
  document.getElementById("hamburgerMenu")?.classList.remove("show");
  document.body.classList.remove("menu-opened");

  if (document.getElementById("stampModal")) return;

  const modal = `
    <div class="modal-overlay" id="stampModal">
      <div class="modal-box" id="stampModalBox">
        <button class="modal-close" onclick="closeStampModal()">
          <img src="image/Close.svg" alt="閉じる" class="modal-close-icon">
        </button>
        <h2>スタンプラリー</h2>
        <div id="stampArea"></div>
        <div class="pagination-wrapper" id="paginationWrapper"></div>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML("beforeend", modal);

  renderStampPage(1); // ← 追加：1ページ目を表示
}


let currentStampPage = 1;
const STAMPS_PER_PAGE = 6;

function renderStampPage(page) {
  const result = getStampResult();
  const stampArea = document.getElementById("stampArea");
  const pagination = document.getElementById("paginationWrapper");
  const totalPages = Math.ceil(STAMP_SPOTS.length / STAMPS_PER_PAGE);
  const start = (page - 1) * STAMPS_PER_PAGE;
  const end = start + STAMPS_PER_PAGE;

  const pageSpots = STAMP_SPOTS.slice(start, end);

  stampArea.innerHTML = pageSpots.map(spot => `
    <div class="stamp-row">
      <p><strong>${spot.name}</strong></p>
      <div class="stamp-display" id="stamp-${spot.name}">
        ${result[spot.name]
          ? `<img src="${spot.image}" alt="スタンプ画像" class="stamp-img" data-spot='${JSON.stringify(spot)}'>`
          : `<button class="checkin-btn" onclick="checkIn('${spot.name}')">チェックイン</button>`
        }
      </div>
    </div>
  `).join("");

  // ページネーション生成
  pagination.innerHTML = `
    <button class="pagination-button" onclick="renderStampPage(${page - 1})" ${page === 1 ? 'disabled' : ''}>← 前へ</button>
    <span class="pagination">${page} / ${totalPages}ページ</span>
    <button class="pagination-button" onclick="renderStampPage(${page + 1})" ${page === totalPages ? 'disabled' : ''}>次へ →</button>
  `;

  currentStampPage = page;
}


// 閉じる処理
function closeStampModal() {
  document.getElementById("stampModal")?.remove();
}

// 結果保存・取得
function getStampResult() {
  return JSON.parse(localStorage.getItem(STAMP_KEY) || "{}");
}
function setStampResult(name) {
  const result = getStampResult();
  result[name] = true;
  localStorage.setItem(STAMP_KEY, JSON.stringify(result));
}

// GPSチェックイン処理
function checkIn(name) {
  if (!navigator.geolocation) return;

  const spot = STAMP_SPOTS.find(s => s.name === name);
  if (!spot) return;

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const d = distance(pos.coords.latitude, pos.coords.longitude, spot.lat, spot.lng);
      const display = document.getElementById(`stamp-${spot.name}`);
      if (d <= 30) {
        setStampResult(spot.name);

// ボタンを緑に変える
const checkinBtn = display.querySelector(".checkin-btn");
if (checkinBtn) {
  checkinBtn.classList.add("checked");
  checkinBtn.textContent = "チェックイン";
  checkinBtn.disabled = true;
}

// 台紙にスタンプを押す演出を追加
showStampPopup(spot);

      } else {
        display.innerHTML = `<p style="color:red;">場所が違います。(現在地との差：約${Math.round(d)}km)</p>`;
      }
    },
    () => {
      alert("位置情報が取得できませんでした");
    },
    { enableHighAccuracy: true, timeout: 10000 }
  );
}

// 距離判定（m単位）
function distance(lat1, lng1, lat2, lng2) {
  const R = 6371000; // m
  const toRad = deg => deg * Math.PI / 180;
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a = Math.sin(dLat / 2) ** 2 +
            Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
            Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function showStampPopup(spot, manual = false) {
  document.querySelectorAll(".stamp-popup").forEach(el => el.remove());

  const popup = document.createElement("div");
  popup.className = "stamp-popup";

  // アニメーション制御用クラス
  if (manual) {
    popup.classList.add("manual-popup");
  }

  popup.innerHTML = `
    <p><strong>${spot.name}</strong>${manual ? 'のスタンプ' : 'にチェックイン！'}</p>
    <img src="${spot.image}" alt="スタンプ画像" />
    <p>${manual ? '' : 'チェックインしました！'}</p>
    ${manual ? `<button class="popup-close-btn" onclick="this.parentElement.remove()">閉じる</button>` : ''}
  `;
  document.body.appendChild(popup);

  if (!manual) {
    setTimeout(() => {
      popup.remove();
      const display = document.getElementById(`stamp-${spot.name}`);
      display.innerHTML = `<img src="${spot.image}" alt="スタンプ画像" class="stamp-img" data-spot='${JSON.stringify(spot)}'>`;
    }, 2000);
  }
}



//  開発用：スタンプ状態をリセットする関数（consoleから呼び出し）
function resetStamp() {
  localStorage.removeItem(STAMP_KEY);
  console.log(" スタンプラリーの状態をリセットしました。ページを再読み込みしてください。");
}

// チェックイン済みスタンプ画像クリック時にポップアップ表示
document.addEventListener('click', (e) => {
  const img = e.target.closest('.stamp-img');
  if (img && img.dataset.spot) {
    const spot = JSON.parse(img.dataset.spot);
    showStampPopup(spot, true);
  }
});



