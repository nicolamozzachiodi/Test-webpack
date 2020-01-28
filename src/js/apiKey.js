var contentful = require('contentful');

import printData from './printData';

var client = contentful.createClient({
    space: 'f0manxfuw9zp',
    accessToken: '_DDuZYhCD2gBapTIdwPPTkVEqP3vmb_H-8hMg7XpAPI'
});

function getApiKey () {
    
    client.getEntries()
    .then(function (entries) {
        printData(entries.items);
    });
}

export default getApiKey;