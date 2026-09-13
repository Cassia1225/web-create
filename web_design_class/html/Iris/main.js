const list = document.querySelector("#employeeList");
const check = document.querySelector("#agree-check");

document.querySelector("#check-link").addEventListener("click", () => {
    check.disabled = false;
});

// 入力前の行をコピー
const template = list.querySelector(".employee-form").cloneNode(true);
let count = 1;

document.querySelector("#addEmployee").addEventListener("click", () => {
    const row = template.cloneNode(true);

    // 社員ごとに、VPNの選択を分ける
    row.querySelectorAll('input[type="radio"]').forEach((radio) => {
        radio.name = "vpnPeriod" + count;
    });

    list.appendChild(row);
    count++;
});

// 選んだ社員の行だけ、日付の表示を切り替える
list.addEventListener("change", (event) => {
    if (event.target.type !== "radio") return;

    const dateArea = event.target.closest(".employee-form").querySelector(".date-area");
    dateArea.hidden = event.target.value !== "limited";
});

// さんぷる
const employees = [
    { id: "1001", name: "山田 太郎", pc: "PC-001" },
    { id: "1002", name: "佐藤 花子", pc: "PC-002" },
    { id: "1003", name: "鈴木 一郎", pc: "PC-003" }
];

// 社員IDを入力したら、その行の名前とPC番号を入れる（見つからなければ空にする）
list.addEventListener("input", (event) => {
    if (event.target.name !== "employeeID") return;

    const row = event.target.closest(".employee-form");
    const id = event.target.value.trim();
    const employee = employees.find((person) => person.id === id);

    row.querySelector('[name="employeeName"]').value = employee?.name ?? "";
    row.querySelector('[name="PCnumber"]').value = employee?.pc ?? "";
});

// 削除ボタンと日付ボタン
list.addEventListener("click", (event) => {
    if (event.target.matches(".delete-employee")) {
        event.target.closest(".employee-form").remove();
    }
    if (event.target.matches(".date-input")) {
        openDateDialog(event.target);
    }
});

// 日付のドラムは、全社員の開始日・終了日で共用する
const dateDialog = document.querySelector("#dateDialog");
const [yearDrum, monthDrum, dayDrum] = dateDialog.querySelectorAll(".drum");
const ROW = 32;
let dateButton;

// 数字を縦に並べ、選択中の数字を中央に置く
function fillDrum(drum, first, last, selected, unit) {
    drum.replaceChildren();
    for (let number = first; number <= last; number++) {
        const item = document.createElement("div");
        item.textContent = number + unit;
        item.dataset.value = number;
        item.setAttribute("aria-hidden", "true");
        drum.appendChild(item);
    }
    drum.setAttribute("aria-valuemin", first);
    drum.setAttribute("aria-valuemax", last);
    drum.scrollTop = (selected - first) * ROW;
    readDrum(drum);
}

// 中央にある数字を読み取る
function readDrum(drum) {
    const item = drum.children[Math.round(drum.scrollTop / ROW)];
    drum.setAttribute("aria-valuenow", item.dataset.value);
    drum.setAttribute("aria-valuetext", item.textContent);
    return Number(item.dataset.value);
}

function readDate() {
    return [readDrum(yearDrum), readDrum(monthDrum), readDrum(dayDrum)];
}

// 月末とうるう年に合わせて、日のドラムを作り直す
function updateDays() {
    const [year, month, day] = readDate();
    const lastDay = new Date(year, month, 0).getDate();

    if (dayDrum.children.length !== lastDay) {
        fillDrum(dayDrum, 1, lastDay, Math.min(day, lastDay), "日");
    }
}

function openDateDialog(button) {
    dateButton = button;

    const today = new Date();
    const thisYear = today.getFullYear();
    // 保存済みの日付。まだ選んでいなければ今日
    const [year, month, day] = (button.value || `${thisYear}-${today.getMonth() + 1}-${today.getDate()}`)
        .split("-").map(Number);

    document.querySelector("#dateTitle").textContent = button.getAttribute("aria-label") + "を選択";
    dateDialog.showModal(); // 開いてからでないと scrollTop が効かない
    fillDrum(yearDrum, thisYear, thisYear + 5, year, "年");
    fillDrum(monthDrum, 1, 12, month, "月");
    fillDrum(dayDrum, 1, new Date(year, month, 0).getDate(), day, "日");
    yearDrum.focus();
}

// スクロール・数字のクリック・上下キーで選べる
[yearDrum, monthDrum, dayDrum].forEach((drum) => {
    drum.addEventListener("scroll", () => {
        if (!dateDialog.open) return;
        readDrum(drum);
        if (drum !== dayDrum) updateDays();
    });

    drum.addEventListener("click", (event) => {
        if (!event.target.dataset.value) return;
        drum.scrollTop = [...drum.children].indexOf(event.target) * ROW;
    });

    drum.addEventListener("keydown", (event) => {
        if (event.key !== "ArrowUp" && event.key !== "ArrowDown") return;
        event.preventDefault();
        drum.scrollTop += event.key === "ArrowUp" ? -ROW : ROW;
    });
});

document.querySelector("#saveDate").addEventListener("click", () => {
    updateDays();
    const [year, month, day] = readDate();
    dateButton.value = `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    dateButton.textContent = `${year}/${month}/${day}`;
    dateDialog.close();
});

document.querySelector("#cancelDate").addEventListener("click", () => dateDialog.close());
document.querySelector("#clearDate").addEventListener("click", () => {
    dateButton.value = "";
    dateButton.textContent = "年月日";
    dateDialog.close();
});
