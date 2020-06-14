function increase(){
    var textBox = document.getElementById("text");
    
    if(textBox.value < 100) {
        textBox.value++;
    }
}

function decrease(){
    var textBox = document.getElementById("text");

    if(textBox.value >= 2) {
        textBox.value--;
    } else {
        textBox.value = 1;
    } 
}

function increase1(){
    var textBox = document.getElementById("text1");
    
    if(textBox.value < 100) {
        textBox.value++;
    }
}

function decrease1(){
    var textBox = document.getElementById("text1");

    if(textBox.value >= 2) {
        textBox.value--;
    } else {
        textBox.value = 1;
    }
}

function increase2(){
    var textBox = document.getElementById("text2");
    
    if(textBox.value < 100) {
        textBox.value++;
    }
}

function decrease2(){
    var textBox = document.getElementById("text2");

    if(textBox.value >= 2) {
        textBox.value--;
    } else {
        textBox.value = 1;
    } 
}
