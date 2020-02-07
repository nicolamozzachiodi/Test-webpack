import $ from 'jquery';

function test() {
    if (document.cookie.indexOf('post') != -1) {
        let arrayCookie = document.cookie.split("=");
        
        for (let i = 0; i < arrayCookie.length; i++) {
            let el = arrayCookie[i];
            
            if (el.indexOf("isNew") != -1) {
                let data = JSON.parse(el);
                console.log('nornre');
                $("#app_post").append(`
                    <div class="post-container">
                        <div class="title">${data.title}</div>
                        <img src="${data.image}" class="image" />
                        <div class="description">${data.description}</div>
                    </div>
                `);
            }
        }
    }
}

export default test;