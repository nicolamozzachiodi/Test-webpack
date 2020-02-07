var contentful = require('contentful');

import printData from './printData';

var client = contentful.createClient({
    space: 'f0manxfuw9zp',
    accessToken: '_DDuZYhCD2gBapTIdwPPTkVEqP3vmb_H-8hMg7XpAPI'
});

function getAllPost(getAllEntries) {

    client.getEntries()
        .then(function (entries) {
            printData(entries.items);
        });
}

function getPost(id) {
    
    client.getEntry(id + '')
        .then(function (entry) {
            let post = {
                isNew: entry.fields.isNew,
                title: entry.fields.title,
                description: entry.fields.description,
                image: entry.fields.image.fields.file.url,
                altImage: entry.fields.image.fields.file.fileName
            }
            document.cookie = 'post=; Path=/; Expires=xThu, 01 Jan 1970 00:00:01 GMT;';

            document.cookie = "post=" + JSON.stringify(post);

            
        location.replace(window.location + "pages/post");
        });
}

export default { getPost, getAllPost };