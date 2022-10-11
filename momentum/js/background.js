const keyArray = {
    imgObj: 'dailyImgObj'
}
const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg",
    "11.jpg",
]
const bgImageTag = document.querySelector("#main-view .background-item")
let toDay = YYYY_MM_DD();

/* Set Daily_Image */
const oldImgObj = JSON.parse(localStorage.getItem(keyArray.imgObj))
if (oldImgObj !== null) {
    // 매일 새로운 이미지
    if (toDay === oldImgObj.date) {
        bgImageTag.style.backgroundImage = `url(${oldImgObj.imgPath})`;
    } else {
        localStorage.removeItem(keyArray.imgObj);
        const imgObj = createImgObj();
        setLocalStorage(imgObj);
    }
} else {
    // 초기 세팅
    const imgObj = createImgObj();
    setLocalStorage(imgObj);
}

// 이미지 오브젝트 생성
function createImgObj() {
    const chosenImage = images[Math.floor(Math.random() * images.length)];
    const imgPath = `img/${chosenImage}`;
    return {
        date: YYYY_MM_DD(),
        imgPath: imgPath
    };
}

// localStorage에 저장
function setLocalStorage(imgObj) {
    localStorage.setItem(keyArray.imgObj, JSON.stringify(imgObj));
    bgImageTag.style.backgroundImage = `url(${imgObj.imgPath})`;
}

