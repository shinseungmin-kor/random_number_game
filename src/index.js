const endNum = document.querySelector("#end-num");
const setRange = document.querySelector("#set-range");
const inputNum = document.querySelector("#input-num");
const inputBtn = document.querySelector("#input-btn");
const inputResult = document.querySelector("#input-result");
const inputResultTxt = document.querySelector("#input-result-txt");

function handleRange(e) {
    endNum.innerText = `숫자의 범위를 정하세요, 범위는 0부터 ${setRange.value} 까지입니다.`;
}

function handleInputValue(e) {
    const machine = Math.floor(Math.random() * setRange.value) + 1; 
    inputResult.innerText = `당신의 선택: ${inputNum.value}, 나의 선택: ${machine}`;

    if (parseInt(inputNum.value) === machine) {
        inputResultTxt.innerText = "당신이 이겼습니다!!";
        inputResultTxt.style.color = `#72CC50`
    } else {
        inputResultTxt.innerText = "당신이 졌습니다!!";
        inputResultTxt.style.color = `black`
    }
}


function init() {
    endNum.innerText = `숫자의 범위를 정하세요, 범위는 0부터 ${setRange.value} 까지입니다.`;
    setRange.addEventListener("input", handleRange);
    setRange.addEventListener("change", handleRange);
    inputBtn.addEventListener("click", handleInputValue);
}

init();