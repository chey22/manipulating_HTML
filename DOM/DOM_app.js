document.addEventListener('DOMContentLoaded', function () {
    //step 1 - //add button for step 1 that alerts a nice msg when clicked
    let btn1 = document.createElement('button');
    let btn1Text = document.createTextNode('Click Here');
    let section = document.getElementById('btn1');

    btn1.appendChild(btn1Text);
    section.appendChild(btn1);
    btn1.addEventListener('click', function () {
        alert('Noice!')
    });

    //step 2 - button 2 (defined in HTML) alerts what's typed in text field when clicked
    document.getElementById('btn2').addEventListener('click', function () {
        let msg = $(`#msg`).val();
        alert(`${msg}`);
        event.preventDefault();
    })

    //step 3 - create a div without using CSS that changes bground color when moused over
    let div3 = document.getElementById('div3');
    div3.style.height = '50px';
    div3.style.width = '150px';
    div3.addEventListener('mouseover', function () {
        div3.style.backgroundColor = 'red'
    });

    div3.addEventListener('mouseout', function () {
        div3.style.backgroundColor = 'transparent'

    })

    //step 4 - create text in a paragraph that when clicked switches to a random color. Using HEX random genterator and not rgb or array
    let para4 = document.createElement('p');
    let para4Text = document.createTextNode('Some text in a paragraph');
    para4.appendChild(para4Text);
    document.body.appendChild(para4);

    para4.addEventListener('click', function () {
        para4.style.color = getRandomColor();

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
    let btn5 = document.createElement('button')
    let btn5Text = document.createTextNode('My Name')
    btn5.appendChild(btn5Text);
    document.body.appendChild(btn5);

    let div5 = document.createElement('div')
    document.body.appendChild(div5)
    div5.style.height = '50px'
    div5.style.width = '150px'
    div5.style.backgroundColor = 'yellow'

    btn5.addEventListener('click', function () {
        if (count == 0) {
        let span = document.createElement('span')
        spanText = document.createTextNode('Cheyenne Mangum')
        span.appendChild(spanText)
        div5.appendChild(span)
        count ++
        }
    
    })

    //step 6 - button 6 (defined in HTML) adds a list of friend's names to a ul. Created a div6 to keep the ul and the button together
    let div6 = document.createElement('div')
    let btn6 = document.getElementById('btn6')
    let list = document.getElementById('friendsList')
    friendsArray = ['Jamie', 'Tayler', 'Emily', 'Chayla', 'Taryn', 'Rachel', 'Emma', 'Anna', 'Ross', 'Colby']
    count = 0
    btn6.addEventListener('click', function () {
        if (count < 10) {
            li = document.createElement('li')
            liText = document.createTextNode(friendsArray[count])
            count++
            li.appendChild(liText)
            list.appendChild(li)

        }
    })
    div6.appendChild(btn6)
    div6.appendChild(list)
    document.body.appendChild(div6)

});
