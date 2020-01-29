$(document).ready(function () {
    //step 1 - //add button for step 1 that alerts a nice msg when clicked
    $('#btn1').append('<button>Click Here</button>')
    $('#btn1').click(function () {
        alert('Noice!')
        $('body').append()
    });

    //step 2 - button 2 (defined in HTML) alerts what's typed in text field when clicked
    $('#btn2').click(function () {
        alert($('#msg').val())
    });

    //step 3 - create a div without using CSS that changes bground color when moused over
    $('#div3').css({ 'height': '50px', 'width': '150px' })
    $('#div3').mouseover(function () {
        $('#div3').css('background-color', 'red')
    });
    $('#div3').mouseout(function () {
        $('#div3').css('background-color', 'transparent')
    });

    //step 4 - create text in a paragraph that when clicked switches to a random color. Using HEX random genterator and not rgb or array
    $('#btn6').before('<p>Some text in a paragraph</p>')
    $('p').click(function () {
        $(this).css('color', getRandomColor());
    });

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    //step 5 - create a button that when clicked adds a span containing my name
    count = 0
    $('#btn6').before('<button class=btn5>My Name</button>')
    $('#btn6').before('<div id="div5"></div>')
    $('#div5').css({ 'height': '50px', 'width': '150px', 'background-color': 'yellow' })

    $('.btn5').click(function () {
        if (count == 0) {
            $('#div5').append('<span>Cheyenne Mangum</span>')
            count++
        }
    
    });

    //step 6 - button 6 (defined in HTML) adds a list of friend's names to a ul. Created a div6 to keep the ul and the button together
    count = 0
    friendsArray = ['Jamie', 'Tayler', 'Emily', 'Chayla', 'Taryn', 'Rachel', 'Emma', 'Anna', 'Ross', 'Colby']
    $('#btn6').click(function() {
        if (count < 10) {
        list = '<li>' + friendsArray[count] + '</li>'
        $('#friendsList').append(list)
        count++
        }
    })

});
