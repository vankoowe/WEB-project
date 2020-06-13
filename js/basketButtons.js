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
    var textBoxx = document.getElementById("text1");
    
    if(textBoxx.value < 100) {
        textBoxx.value++;
    }
}

function decrease1(){
    var textBoxx = document.getElementById("text1");

    if(textBoxx.value >= 2) {
        textBoxx.value--;
    } else {
        textBoxx.value = 1;
    } 
}

function increase2(){
    var textBoxx = document.getElementById("text2");
    
    if(textBoxx.value < 100) {
        textBoxx.value++;
    }
}

function decrease2(){
    var textBoxx = document.getElementById("text2");

    if(textBoxx.value >= 2) {
        textBoxx.value--;
    } else {
        textBoxx.value = 1;
    } 
}