$('#searchbtn').click(function() {
    var $buses = $('#buses');


    $('.home1').hide();
    $('.home2').hide();
    $('.home3').hide();
    $("#mysearch").css("diplay", "block");


    $.ajax({
        type: 'GET',
        url: 'https://us-central1-my-bus-286122.cloudfunctions.net/app/api/read',
        success: function(buses) {
            $buses.before(
                '<tr><th scope="col">Form</th><th scope="col">TO</th><th scope="col">Departure Time</th><th scope="col">Arrival Time</th><th scope="col">Duration</th><th scope="col">Traveller</th><th scope="col">Price</th></tr>'
            )
            $.each(buses, function(i, bus) {
                $buses.after('<tr><td>' + bus.from + '</td>' +
                    '<td>' + bus.to + '</td>' +
                    '<td>' + bus.departuretime + '</td>' +
                    '<td>' + bus.arrivaltime + '</td>' +
                    '<td>' + bus.duration + '</td>' +
                    '<td>' + bus.traveller + '</td>' +
                    '<td>' + bus.price + '</td></tr>');
            });
        }
    });


});