//js/adInsert.js

document.addEventListener('DOMContentLoaded', () => {
  // 差し込み位置（例：「開催場所」セクションの後）
  const targetSection = document.querySelector('.basyo');

  // 広告テンプレート
  const adHTML = `
    <div class="popup-ad">
    <div class="ad-mark-wrapper">
       <p class="ad-name">広告</p>
        <div>
        <svg style="fill: #00aecd;" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" height="16" width="16"><path d="M7.5 1.5a6 6 0 100 12 6 6 0 100-12m0 1a5 5 0 110 10 5 5 0 110-10zM6.625 11h1.75V6.5h-1.75zM7.5 3.75a1 1 0 100 2 1 1 0 100-2z"></path></svg>

    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" fill="none"><g><path fill="#fff" d="M15 0v15H0V0z"></path><circle cx="7.5" cy="11.5" r="1.5" transform="rotate(-180 7.5 11.5)" fill="#00aecd"></circle><circle cx="7.5" cy="7.5" r="1.5" transform="rotate(-180 7.5 7.5)" fill="#00aecd"></circle><circle cx="7.5" cy="3.5" r="1.5" transform="rotate(-180 7.5 3.5)" fill="#00aecd"></circle></g></svg>
     </div>
    </div>
      <div class="ad-content">
        <p><strong>一階エレベーターホールにて</strong></p>
        <p>焼き鳥一本(全三種)がなんと80円！</p>
        <div class="ad-btn-wrapper">
        <button class="close-ad" aria-label="広告を閉じる">閉じる</button>
        <button class="open-ad" aria-label="広告を開く">開く</button>
        </div>
      </div>
    </div>
  `;

  // HTML → DOMノード化して差し込む
  const adElement = document.createElement('div');
  adElement.classList.add('ad-wrapper');
  adElement.innerHTML = adHTML;

  if (targetSection && targetSection.parentNode) {
    targetSection.parentNode.insertBefore(adElement, targetSection.nextSibling);
  }

  // 閉じる処理
  adElement.querySelector('.close-ad').addEventListener('click', () => {
    adElement.remove();
  });
});
