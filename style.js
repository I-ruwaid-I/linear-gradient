function changeColor() {
    var hex_numbers = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];

    var hexcode = '';
    var hexcode2 = '';
    for(var i=0;i < 6;i++){
        var random_index = Math.floor(Math.random()*hex_numbers.length);
        hexcode += hex_numbers[random_index];

        var random_index = Math.floor(Math.random() * hex_numbers.length);
        hexcode2 += hex_numbers[random_index];

    }
    document.getElementById("copy_text").value = ['linear-gradient(to bottom right,'+"#"+hexcode+","+"#"+hexcode2+")"];
    document.getElementById('gradient').style.background = 'linear-gradient(to bottom right,'+"#"+hexcode+","+"#"+hexcode2+")";
    document.querySelector("#hexcode1").textContent = hexcode1;
    document.querySelector("#hexcode2").textContent = hexcode2;
    
}

function myFunction() {
    var copyText = document.getElementById("copy_text");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    document.execCommand("copy");

    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
  }