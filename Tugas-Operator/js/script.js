let inputLabel = document.getElementById('inputLabel');

function pushBtn(obj) {

    let pushed = obj.innerHTML;

    if (pushed == '=') {
        // Calculate
        inputLabel.innerHTML = eval(inputLabel.innerHTML);
    } else if (pushed == 'AC') {
        // All Clear
        inputLabel.innerHTML = '0';
    // } else if (pushed == '<=') {
    //     // Back
    //     inputLabel.innerHTML = value.length.replace('0')
    } 
    else {
        if (inputLabel.innerHTML == '0') {
            inputLabel.innerHTML = pushed;
        } else {
            inputLabel.innerHTML += pushed;
        }
    }
}

// function back() {
//     var value = document.getElementById('inputLabel').value;
//     document.getElementById(('inputLabel').value = value.substr(0, value.length - 1);
// }