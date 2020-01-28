import slick from 'slick-carousel';
import $ from 'jquery';

function changePages () {   
    $(document).on('click', '.post', function (e) {
        popolatePage($(e.currentTarget))
    });
}

function popolatePage(element) {
    let elementId = $(element).data('position');
    console.log(elementId);

    client.getEntry('4v3oe3YMVDF7A96ha7Fc6I')
        .then(function (entry) {
        // logs the entry metadata
        console.log(entry.sys)

        // logs the field with ID title
        console.log(entry.fields.productName)
    })
}

export default changePages;