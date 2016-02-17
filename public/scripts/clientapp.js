$(document).ready(function() {

    $('#submit-button').on('click', postData);

});

function postData() {
    event.preventDefault();

    var values = {};
    $.each($('#sql-form').serializeArray(), function(i, field) {
        values[field.name] = field.value;
    });

    console.log(values);

    $.ajax({
        type: 'POST',
        url: '/people',
        data: values,
        success: function(data) {
            if(data) {
                // everything went ok
                console.log('from server:', data);
                getData();
            } else {
                console.log('error');
            }
        }
    });

}

function getData() {
    $.ajax({
        type: 'GET',
        url: '/people',
        success: function(data) {
            // loop through each person
            data.forEach(function(person, i) {
                $('.domShow').append('<p>' +
                    person.name + ', ' +
                    person.address + ', ' +
                    person.city + ', ' +
                    person.state + ', ' +
                    person.zip_code +
                    '</p>');
            });

            //$('.domShow').append('<span>' + data[0].name + '</span>');

            //console.log(data);
        }
    });
}