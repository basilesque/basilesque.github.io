function changeBackground() {
    let redValue = (Math.floor(Math.random() * 256));
    let greenValue = (Math.floor(Math.random() * 256));
    let blueValue = (Math.floor(Math.random() * 256));
    let alphaValue = (Math.random() * 0.5 + 0.3).toFixed(2);
    document.body.style.background = `rgba(${redValue}, ${greenValue}, ${blueValue}, ${alphaValue})`;
    // document.getElementById("randomise-btn").style.color = `rgb(${redValue}, ${greenValue}, ${blueValue})`;

    let oppositeRed = 255 - redValue;
    let oppositeGreen = 255 - greenValue;
    let oppositeBlue = 255 - blueValue;
    document.getElementById("randomise-btn").style.background = `rgba(${oppositeRed}, ${oppositeGreen}, ${oppositeBlue}, ${alphaValue})`;
};