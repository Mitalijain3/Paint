window.addEventListener('load', () => {
    const canva = document.querySelector("#canva");
    //ctx =context
    const ctx = canva.getContext('2d');
    //Resizing
    canva.height = window.innerHeight;
    canva.width = window.innerWidth;



    // //fillRect=willfill the color in rect and  strokeRect will show only border

    // ctx.strokeStyle = "red";
    // ctx.strokeRect(200, 200, 200, 200);
    // ctx.strokeStyle = "yellow";
    // ctx.lineWidth = 10;
    // ctx.strokeRect(100, 100, 200, 200);
    // ctx.strokeStyle = "red";
    // ctx.lineWidth = 1;
    // ctx.strokeRect(0, 0, 200, 200);


    // //drawing figure and lines

    // ctx.beginPath();
    // ctx.moveTo(100, 100);
    // ctx.lineTo(200, 100);
    // ctx.lineTo(200, 150);
    // ctx.closePath();
    // ctx.stroke();

    //variables
    let painting = false;

    function startPosition(e) {
        painting = true;
        draw(e);
    }

    function endPosition() {
        painting = false;
        ctx.beginPath();
    }

    function draw(e) {
        if (!painting) return;
        ctx.lineWidth = 10;
        ctx.lineCap = "round";
        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        // ctx.beginPath();
        // ctx.moveTo(e.clientX, e.clientY);
    }
    //Eventlisteners
    canva.addEventListener('mousedown', startPosition);
    canva.addEventListener('mouseup', endPosition);
    canva.addEventListener('mousemove', draw);
})
window.addEventListener('resize', () => {
    canva.height = window.innerHeight;
    canva.width = window.innerWidth;
})