// Callbackhell Event

var h1 = document.createElement('h1');
document.body.append(h1);

setTimeout(function() {
    document.querySelector('h1').innerText = `Counter: ${10}`;
    setTimeout(function() {
        document.querySelector('h1').innerText = `Counter: ${9}`;
        setTimeout(function() {
            document.querySelector('h1').innerText = `Counter: ${8}`;
            setTimeout(function() {
                document.querySelector('h1').innerText = `Counter: ${7}`;
                setTimeout(function() {
                    document.querySelector('h1').innerText = `Counter: ${6}`;
                    setTimeout(function() {
                        document.querySelector('h1').innerText = `Counter: ${5}`;
                        setTimeout(function() {
                            document.querySelector('h1').innerText = `Counter: ${4}`;
                            setTimeout(function() {
                                document.querySelector('h1').innerText = `Counter: ${3}`;
                                setTimeout(function() {
                                    document.querySelector('h1').innerText = `Counter: ${2}`;
                                    setTimeout(function() {
                                        document.querySelector('h1').innerText = `Counter: ${1}`;
                                        setTimeout(function() {
                                            document.querySelector('h1').innerText = `Happy Independence Day`;
                                        },500);
                                    },500);
                                },500);
                            },500);
                        },500);
                    },500);
                },500);
            },500);
        },500);
    },500);
},500);
