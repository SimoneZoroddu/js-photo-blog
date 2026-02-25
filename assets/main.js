const endpoint = 'https://lanciweb.github.io/demo/api/pictures/';






fetch(endpoint)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        
    })