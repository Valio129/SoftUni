function coneCalc(radius, height) {
    let area = Math.PI * radius * (radius + Math.sqrt((Math.pow(radius, 2) + (Math.pow(height, 2)))))
    let volume = Math.PI * Math.pow(radius, 2) * parseFloat(height / 3)
    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);
}
coneCalc(3, 5)
coneCalc(3.3, 7.8)