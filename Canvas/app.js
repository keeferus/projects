const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');

const topLeft = [0, 0];
const topRight = [600, 0];
const midTop = [300, 0];
const midBottom = [300, 400];
const midLeft = [0, 200];
const midRight = [600, 200];
const bottomLeft = [0, 400];
const bottomRight = [600, 400];
const center = [300, 200];

/*console.log(canvas);
console.log(ctx);
*/

/*Draw a line

ctx.beginPath();
ctx.moveTo(...topLeft);
ctx.lineTo(...center);
ctx.lineTo(...topRight);
ctx.stroke();
ctx.closePath();
*/

//Second line//
/*
ctx.beginPath();
ctx.moveTo(...center);
ctx.lineTo(...topRight);
ctx.lineTo(200, 200);
ctx.stroke();
ctx.closePath();
*/
//Rectangle setup //

//Get Center of Rect//
/*
const getRectCenter = (x, y, w, h) => {
    const cx = x - w / 2;
    const cy = y - h / 2;
    return [cx, cy];
}
const dimensions = [200, 100];
const newCenter = getRectCenter(...center, ...dimensions);

*/


// Rectangle//
/*
ctx.strokeRect(...topLeft, ...dimensions);
ctx.fillRect(...newCenter, ...dimensions);
ctx.clearRect(...topLeft, 100, 50);

*/

//bezierCurveTo//
/*
ctx.beginPath();
ctx.moveTo(...midLeft);
ctx.bezierCurveTo(...topLeft, ...topRight, ...midRight);

ctx.stroke();
ctx.closePath();

*/

/* ctx.beginPath();
ctx.moveTo(...midLeft);
ctx.bezierCurveTo(...midTop, ...midTop, ...midRight);
ctx.bezierCurveTo(...center, ...midBottom, ...midLeft);

ctx.fill();
ctx.closePath(); */

// quadratic curve

/* ctx.beginPath();
/* ctx.moveTo(...midLeft); */
/* ctx.quadraticCurveTo(...topLeft, ...midRight);
ctx.quadraticCurveTo(...bottomLeft, ...midLeft);
ctx.moveTo(...bottomLeft);
ctx.quadraticCurveTo(...topLeft, ...topRight)
ctx.stroke();
ctx.closePath(); */

//arcs

const radius = 30;
const start = 0;
const end = Math.PI / 2;

ctx.beginPath();
ctx.moveTo(...center);
ctx.arc(...center, radius, start, end);

ctx.stroke();
ctx.closePath();


