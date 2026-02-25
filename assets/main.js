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
                    <img src="${url}" class="card-img-top img-fluid" alt="">
                    <div class="card-body">
                        <h2 class="fonts_edu">${title}</h2>
                        <p class="card-text fonts_Sometype_Mono">${date}</p>
                    </div>
                </div>
            </div>
            `
            rowEl.insertAdjacentHTML('beforeend', markup)
        })
    })