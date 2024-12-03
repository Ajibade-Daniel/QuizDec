const colors = [];
const textColours = [];
function randomColor(){
    let rgb = [];
    for(let i = 0; i<10; i++){
    // Randomly update colours
    rgb[0] = Math.round(Math.random() * 255);
    rgb[1] = Math.round(Math.random() * 255);
    rgb[2] = Math.round(Math.random() * 255);

    //Gets the brightness of the color
    const brightness = Math.round(((parseInt(rgb[0]) * 299) +
                      (parseInt(rgb[1]) * 587) +
                      (parseInt(rgb[2]) * 114)) / 1000);
    let textColour = (brightness > 125) ? 'black' : 'white';
    textColours.push(textColour)
    colors.push('rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')')
    }
}
function assignColor(){
    console.log(colors)
    let allH1 = document.querySelectorAll("h1");
    let allP = document.getElementsByClassName("begin");

    for(let i = 0; i < allH1.length; i++){
        allH1[i].style.backgroundColor = colors[i];
        allH1[i].style.color = textColours[i];
        allP[i].style.backgroundColor = colors[i];
        allP[i].style.color = textColours[i];
    }
}
randomColor();
assignColor();