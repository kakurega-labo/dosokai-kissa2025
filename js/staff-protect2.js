// js/staff-protect2.js

function updateStatus() {
  const status = document.getElementById('statusSelect').value;
  database.ref('status').set(status)
    .then(() => alert('混雑状況を反映しました'))
    .catch((error) => alert('送信エラー:' + error));
}