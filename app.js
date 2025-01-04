document.addEventListener('DOMContentLoaded', () => {
    const calendar = document.getElementById('calendar');
    const display = document.getElementById('data-display');
    const fileInput = document.getElementById('file-input');
    let healthData = null;

    // カレンダーの生成
    const today = new Date();
    const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
    for (let i = 1; i <= daysInMonth; i++) {
        const day = document.createElement('div');
        day.className = 'day';
        day.textContent = i;
        day.addEventListener('click', () => displayData(i));
        calendar.appendChild(day);
    }

    // ファイルアップロード
    fileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const parser = new DOMParser();
                healthData = parser.parseFromString(e.target.result, 'text/xml');
                alert('データが読み込まれました！');
            };
            reader.readAsText(file);
        }
    });

    // データ表示
    function displayData(day) {
        if (!healthData) {
            display.textContent = 'データをアップロードしてください。';
            return;
        }

        // サンプルデータの表示
        display.textContent = `選択した日: ${day}`;
    }
});
