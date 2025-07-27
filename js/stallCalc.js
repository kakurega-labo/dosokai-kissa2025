// js/stallCalc.js

const STALL_MENU = [
  { name: "焼きそば", price: 300 },
  { name: "カレーライス", price: 350 },
  { name: "トッピング天ぷら", price: 50 },
  { name: "かけそば・うどん", price: 250 },
  { name: "フランクフルト", price: 150 },
  { name: "いそべ焼き(3個入り)", price: 120 },
  { name: "焼き鳥(ﾂｸﾈ･ﾓﾓ･ｶﾜ)", price: 80 },
  { name: "飲み物(ｵﾚﾝｼﾞ･ﾘﾝｺﾞ･ﾌｧﾝﾀ･緑茶)", price: 100 },
  { name: "ｻｰﾃｨﾜﾝｱｲｽ全７種", price: 300 }
];

const stallModalHTML = `
  <div class="modal-overlay" id="stallCalcModal">
    <div class="modal-box" id="stall-calc-box">
      <button class="modal-close" onclick="closeStallCalc()">
       <img src="image/Close.svg" alt="閉じる" class="modal-close-icon">
      </button>
      <h2>模擬店計算</h2>
      <div class="stall-row">
        <div class="stall-name">メニュー名</div>
        <div class="stall-price">価格</div>
        <div style="width: 105px;text-align: center;">数量（＋/－）</div>
      </div>
      <div id="stallCalcList"></div>
      <div class="total-price">合計金額：<span id="totalPrice">0</span>円</div>
    </div>
  </div>
`;

function openStallCalc() {

  const menu = document.getElementById("hamburgerMenu");
  if (menu && menu.classList.contains("show")) {
    menu.classList.remove("show");
    document.body.classList.remove("menu-opened");
  }

  if (document.getElementById("stallCalcModal")) return;
  document.body.insertAdjacentHTML("beforeend", stallModalHTML);
  renderStallCalc();
}

function closeStallCalc() {
  const modal = document.getElementById("stallCalcModal");
  if (modal) modal.remove();
}

function renderStallCalc() {
  const list = document.getElementById("stallCalcList");
  list.innerHTML = STALL_MENU.map((item, i) => `
    <div class="stall-row">
      <div class="stall-name">${item.name}</div>
      <div class="stall-price">￥${item.price}</div>
      <div class="stall-counter">
        <button onclick="updateCount(${i}, -1)">−</button>
        <span id="count-${i}" class="counter-space">0</span>
        <button onclick="updateCount(${i}, 1)">＋</button>
      </div>
    </div>
  `).join("");
}

const stallCounts = Array(STALL_MENU.length).fill(0);

function updateCount(index, diff) {
  stallCounts[index] = Math.max(0, stallCounts[index] + diff);
  document.getElementById(`count-${index}`).textContent = stallCounts[index];
  calcTotal();
}

function calcTotal() {
  let total = 0;
  stallCounts.forEach((count, i) => {
    total += count * STALL_MENU[i].price;
  });
  document.getElementById("totalPrice").textContent = total;
}

const waitForMenu = setInterval(() => {
  const menu = document.querySelector(".hamburger-menu");
  if (!menu) return;

  if (!menu.innerHTML.includes("模擬店計算")) {
    const btn = document.createElement("button");
    btn.innerHTML = `<img src="image/Calc.svg" alt="">模擬店計算`;
    btn.onclick = openStallCalc;
    const favBtn = [...menu.querySelectorAll("button")].find(btn =>
      btn.innerText.includes("お気に入り")
    );
    (favBtn || menu.lastElementChild).insertAdjacentElement("afterend", btn);
  }

  clearInterval(waitForMenu);
}, 300);
