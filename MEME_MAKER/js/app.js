// rect() => 선만들기 색이 없어서 실제로 보이지는 않음 x y w h
// fill() => rect로 만들어진 선들을 '바탕 색'을 전부 채움
// fill.style() => 바탕 색 지정
// fill.rect() => 색을 채우면서 선을 그림
// stroke() => rect 만들어진 선들에 '실선 색'을 전부 채움
// stroke.style() => 실선 색 지정
// beginPath() => 선들의 경로를 나눔(이전의 선과 다른 선이라고 봐도 무방)
// moveTo => 좌표 이동
// lineTo => 실제로 선을 그리는 함수
// arc => 원 만들기 x(좌표),y(좌표),r(원의 크기),s(원의 시작 앵글),e(원의 종료 앵글)

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d")// 2D와 3D 인자값이 있음

const lineWidth = document.getElementById("line-width");
const lineWidthText = document.getElementById("line-width-text");
const lineColor = document.getElementById("color");

const colorOptions = Array.from(document.getElementsByClassName("color-option")) // color-option를 class로 가진 태그를 모두 선택하면 HTMLCollection이 만들어짐 해당 컬렉션을 배열로 변환함

const modeBtn = document.getElementById("mode-btn");
const destroyBtn = document.getElementById("destroy-btn");
const eraserBtn = document.getElementById("eraser-btn");
const saveBtn = document.getElementById("save");

const fileInput = document.getElementById("file")
const textInput = document.getElementById("text")

canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = lineWidth.value;
ctx.lineCap = "round"

let isPainting = false;
let isFilling = false;

canvas.addEventListener("mousemove", onMouse)
canvas.addEventListener("mousedown", startPainting)
canvas.addEventListener("mouseup", cancelPainting)
canvas.addEventListener("mouseleave", cancelPainting)
canvas.addEventListener("click", onCanvasClick)
canvas.addEventListener("dblclick", onDoubleClick)
lineWidth.addEventListener("change", onLineWidthChange)
lineColor.addEventListener("change", onLineColorChange)
colorOptions.forEach((color) => color.addEventListener("click", onColorClick))
modeBtn.addEventListener("click", onModeClick)
destroyBtn.addEventListener("click", onDestroyClick)
eraserBtn.addEventListener("click", onEraserClick)
saveBtn.addEventListener("click", onSaveClick)
fileInput.addEventListener("change", onFileChange)


function onMouse(e) {
    if (isPainting) {
        ctx.lineTo(e.offsetX, e.offsetY)
        ctx.stroke()
        xy.x = e.offsetX;
        xy.y = e.offsetY;
        return
    }
    ctx.beginPath()
    ctx.moveTo(e.offsetX, e.offsetY)
}

function startPainting() {
    isPainting = true
}

function cancelPainting() {
    isPainting = false
}

function onCanvasClick() {
    if (isFilling) {
        ctx.fillRect(0, 0, 800, 800);
    }
}

// 굵기
function onLineWidthChange(e) {
    let widthValue = e.target.value
    ctx.lineWidth = widthValue
    lineWidthText.value = widthValue
}

// 색상
function onLineColorChange(e) {
    ctx.strokeStyle = e.target.value
    ctx.fillStyle = e.target.value
}

// 색상 간편 선택
function onColorClick(e) {
    ctx.strokeStyle = e.target.dataset.color
    ctx.fillStyle = e.target.dataset.color
    lineColor.value = e.target.dataset.color
}

// 채우기 or 그리기
function onModeClick() {
    if (isFilling) {
        isFilling = false;
        modeBtn.innerHTML = "Fill"
    } else {
        isFilling = true;
        modeBtn.innerHTML = "Draw"
    }
}

function onDestroyClick() {
    ctx.fillStyle = "white"
    ctx.fillRect(0, 0, 800, 800);
}

function onEraserClick() {
    ctx.strokeStyle = "white"
    isFilling = false
    modeBtn.innerHTML = "Fill"
}

function onSaveClick(){
    const url = canvas.toDataURL();
    const a =document.createElement("a")
    a.href = url;
    a.download = "myDrawing.png"
    a.click();
}

// 뒤로가기
function KeyPress(e) {
    var evtobj = window.event ? event : e
    if (evtobj.keyCode == 26 && evtobj.ctrlKey) {
    }
}

document.onkeypress = KeyPress;

function onFileChange(e) {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file)
    const image = new Image()
    image.src = url;
    image.onload = function () {
        ctx.drawImage(image, 0, 0, 800, 800)
        fileInput.value = null;
    }
}

function onDoubleClick(e) {
    const text = textInput.value
    if(text !== ""){
        ctx.save();
        ctx.lineWidth = 1;
        ctx.font = "68px serif";
        ctx.fillText(text, e.offsetX, e.offsetY)
        ctx.restore()
    }
}


/*
canvas.addEventListener("click", changeXY)
canvas.addEventListener("mousemove", mousemove)
ctx.lineWidth = 2;
const colors = [
    "#f6e58d",
    "#ffbe76",
    "#ff7979",
    "#30336b",
    "#95afc0",
    "#e056fd",
    "#dff9fb",
    "#130f40",
    "#7ed6df",
    "#f9ca24",
    "#535c68",
]
let x = 0;
let y = 0;

function mousemove(e) {
    ctx.beginPath()
    const color = colors[Math.floor(Math.random() * colors.length)]
    ctx.strokeStyle = color
    ctx.moveTo(x,y)
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke()
}

function changeXY(e){
    x = e.offsetX
    y = e.offsetY
}*/

