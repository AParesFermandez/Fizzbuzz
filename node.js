
function fizzBuzz() {
    var output = document.getElementById('output');
    console.log(output);

    for (var i = 1; i <= 100; i++) {
        var result = '';

        if (i % 3 === 0) {
            result += 'Fizz';
        }

        if (i % 5 === 0) {
            result += 'Buzz';
        }

        if (result === '') {
            result = i;
        }

        var div = document.createElement('div');
        div.textContent = result;
        output.appendChild(div);
        console.log(result);
    }
}
fizzBuzz();