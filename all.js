//  https://hexschool-tutorial.herokuapp.com/api/signup
// https://raw.githubusercontent.com/hexschool/js-training/main/travelAPI-lv1.json

// let obj = {
//     email: 'lo12315f2e@hexschool.com',
//     password: '12345678'
// }


const list = document.querySelector(".ticketCard-area");

const name = document.querySelector("#ticketName");
const imgUrl = document.querySelector("#ticketImgUrl");
const area = document.querySelector("#ticketRegion");
const price = document.querySelector("#ticketPrice");
const group = document.querySelector("#ticketNum");
const rate = document.querySelector("#ticketRate");
const description = document.querySelector("#ticketDescription");

const addBtn = document.querySelector(".addTicket-btn");

const form = document.querySelector(".addTicket-form");

const regionSearch = document.querySelector(".regionSearch");

const searchResult = document.querySelector("#searchResult-text");

let data = [];


function init() {
    axios.get('https://raw.githubusercontent.com/hexschool/js-training/main/travelAPI-lv1.json')
        .then(function (response) {
        console.log(response);
        data = response.data;
        addStr();
    })
        .catch(function (error) {
        console.log(error);

    })
}

init();


function addStr(){
    let str = "";
    data.forEach(function(item){
        str += `<li class="ticketCard">
        <div class="ticketCard-img">
            <a href="#">
                <img src="${item.imgUrl}" alt="">
            </a>
            <div class="ticketCard-region">${item.area}</div>
            <div class="ticketCard-rank">${item.rate}</div>
        </div>
        <div class="ticketCard-content">
            <div>
                <h3>
                    <a href="#" class="ticketCard-name">${item.name}</a>
                </h3>
                <p class="ticketCard-description">
                ${item.description}
                </p>
            </div>
            <div class="ticketCard-info">
                <p class="ticketCard-num">
                    <span><i class="fas fa-exclamation-circle"></i></span>
                    剩下最後 <span id="ticketCard-num"> ${item.group} </span> 組
                    </p>
                    <p class="ticketCard-price">
                    TWD <span id="ticketCard-price">${item.price}</span>
                </p>
            </div>
        </div>
    </li>`;
    })

    innerHTML = str;
}

