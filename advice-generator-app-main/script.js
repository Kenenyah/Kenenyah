async function main() {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    
    // console.log(data.slip);
    // console.log(data.slip.id);
    // console.log(data.slip.advice);

    const id = document.getElementById('advice-num');
    id.innerHTML = `ADVICE #${data.slip.id}`

    const advice = document.getElementById('advice');
    advice.innerHTML = `"${data.slip.advice}"`;



    const button = document.getElementById('button');
button.addEventListener('click',async function refresh(){
const response = await fetch('https://api.adviceslip.com/advice');
const data = await response.json();

const id = document.getElementById('advice-num');
id.innerHTML = `ADVICE #${data.slip.id}`

const advice = document.getElementById('advice');
advice.innerHTML = `"${data.slip.advice}"`;

});
}



window.onload = main();



// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//        // Typical action to be performed when the document is ready:
       
//        console.log(xhttp.response);
//     }
// };
// xhttp.open("GET", "https://api.adviceslip.com/advice", true);
// xhttp.send();