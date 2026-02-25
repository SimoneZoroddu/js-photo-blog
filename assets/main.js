const endpoint = 'https://lanciweb.github.io/demo/api/pictures/';
const rowEl = document.querySelector('.row')
console.log(rowEl);



fetch(endpoint)
    .then(res => res.json())
    .then(datas => {
        console.log(datas);
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
        })
    })