// 1.要素を取得
const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

// 2.ドラッグを開始した時
fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);


function dragStart() {
    console.log("start");
    fill.className += " hold";
    setTimeout(() => {
        fill.className = "invisible";
    },0);
}

function dragEnd() {
    console.log("end");
    fill.className = "fill";
}