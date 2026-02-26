const endpoint = 'https://lanciweb.github.io/demo/api/pictures/';
const rowEl = document.querySelector('.row')
console.log(rowEl);

const overlayOffEl = document.querySelector('#overlayOff')
//console.log(overlayOffEl, overlayOnEl);
const overlayEl = document.querySelector('#overlay')
const imagCardEl = document.querySelector('#imagCard')
overlayOffEl.addEventListener('click', function(){
    overlayEl.style.display = "none"
})


fetch(endpoint)
.then(res => res.json())
.then(datas => {
    // console.log(datas);
    
    datas.forEach(data => {
        // console.log(data.url);
        const { title, date, url } = data
        // console.log(title, date, url);
        const markup = `
        <div class="col">
        <div class="card p-2">
        <img src="./assets/img/pin.svg" alt="" class="pin">
        <img src="${url}" class="card-img-top img-fluid p-2 pb-0 pt-3" alt="">
        <div class="card-body">
        <p class="card-text mb-0 fonts_Sometype_Mono">${date}</p>
        <h2 class="fonts_edu fw-bold">${title}</h2>
        </div>
        </div>
        </div>
        `
        rowEl.insertAdjacentHTML('beforeend', markup)

        const cardImgsTopEl = document.querySelectorAll('.card-img-top')
        console.log(cardImgsTopEl);
    
        for (let i = 0; i < cardImgsTopEl.length; i++) {
            const cardimg = cardImgsTopEl[i];
            cardimg.addEventListener('click', function(){
             overlayEl.style.display = "block"
             imagCardEl.src = cardimg.src
            })
        } 
    })
})