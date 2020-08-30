$('#searchbtn').click(function() {
    var $buses = $('#buses');


    $('.home1').hide();
    $('.home2').hide();
    $('.home3').hide();
    $('.tablehead').css('diplay', 'block');


    $.ajax({
        type: 'GET',
        url: 'https://us-central1-my-bus-286122.cloudfunctions.net/app/api/read',
        success: function(buses) {

            $.each(buses, function(i, bus) {
                $buses.after('<tr><td>' + bus.from + '</td>' +
                    '<td>' + bus.to + '</td>' +
                    '<td>' + bus.departuretime + '</td>' +
                    '<td>' + bus.arrivaltime + '</td>' +
                    '<td>' + bus.duration + '</td>' +
                    '<td>' + bus.traveller + '</td>' +
                    '<td>' + bus.price + '</td>' +
                    '<td>  <button type="button" class="btn btn-light" style="margin-top: -2px; background-color: #008cff; padding-top: 4px; padding-bottom: 4px;">Book</button></td></tr>');
            });
        },
    });


});