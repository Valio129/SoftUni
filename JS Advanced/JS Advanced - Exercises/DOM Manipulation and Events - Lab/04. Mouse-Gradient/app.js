function attachGradientEvents() {
    let boxEl = document.getElementById('gradient');
    boxEl.addEventListener('mousemove', showDistance);
    boxEl.addEventListener('mouseout', gradientOut);
     function showDistance (e) {
        let power = e.offsetX / (e.target.clientWidth - 1);
        power = Math.trunc(power * 100);
        document.getElementById('result').textContent = power + "%";
    };
    function gradientOut(event) {
        document.getElementById('result').textContent = "";
    }// offsetWidth

}