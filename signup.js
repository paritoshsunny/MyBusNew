$(function() {
    var $buses = $('#buses');
    var $username = $('#username');
    var $useremail = $('#useremail');
    var $userpassword = $('#userpassword');

    $.ajax({
        type: 'GET',
        url: 'https://us-central1-my-bus-286122.cloudfunctions.net/app/api/read',
        success: function(buses) {
            $.each(buses, function(i, bus) {
                $buses.append('<li>my buses</li>')
            });
        }
    });

    $('#signupbtn').on('click', function() {
        function randomNumber(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        var $id = randomNumber(10, 10000000);
        var user = {
            id: $id,
            name: $username.val(),
            email: $useremail.val(),
            password: $userpassword.val()
        };

        $.ajax({
            type: 'POST',
            url: 'https://us-central1-my-bus-286122.cloudfunctions.net/app/api/create',
            data: user,
            success: function(newuser) {
                console.log('success', user)
            },
            error: function() {
                alert('Something wrong happen. Please try again.')
            }
        })
    });
});