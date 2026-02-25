const endpoint = 'https://lanciweb.github.io/demo/api/pictures/';



fetch(endpoint)
    .then(res => res.json())
    .then(datas => {
        console.log(datas);
        datas.forEach(data => {
            // console.log(data.url);
            const {title, date, url} = data
            // console.log(title, date, url);
            
        })
    })