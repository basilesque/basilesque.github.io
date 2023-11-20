function changeBackground() {
    let redValue = (Math.floor(Math.random() * 256));
    let greenValue = (Math.floor(Math.random() * 256));
    let blueValue = (Math.floor(Math.random() * 256));
    document.body.style.background = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
    // document.getElementById("randomise-btn").style.color = `rgb(${redValue}, ${greenValue}, ${blueValue})`;

    let oppositeRed = 255 - redValue;
    let oppositeGreen = 255 - greenValue;
    let oppositeBlue = 255 - blueValue;
    document.getElementById("randomise-btn").style.background = `rgb(${oppositeRed}, ${oppositeGreen}, ${oppositeBlue})`;
};