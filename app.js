
const btnTinhTien = document.querySelector(".btn")
const main = document.getElementById('main')

const inputMoney = document.querySelector(".inputMoney")
// const inputTip = document.querySelector(".inputTip")
const inputPerson = document.querySelector(".inputPerson")
const tip = document.querySelector('.tip')
btnTinhTien.addEventListener('click', result)


function result() {
    const para = document.createElement("p")
    para.style = "padding: 20px"

    if(inputMoney.value === "" || tip.value == 0){
        alert('Vui Lòng Nhập Số')
        return;
    }

    
    para.innerHTML = `Mỗi người cần góp ${ ( parseInt(inputMoney.value) + (tip.value*10) )/parseInt(inputPerson.value)}$`
    main.appendChild(para)
}