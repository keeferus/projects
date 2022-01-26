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

/* /*Draw a line */

/* ctx.beginPath();
ctx.moveTo(...topLeft);
ctx.lineTo(...center);
ctx.lineTo(...topRight);
ctx.stroke();
ctx.closePath(); */


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
// covert PI to degrees
/* const deg2Rad = (degrees) => {
    return Math.PI / 180 * degrees;
};


const radius = 30;
const start = deg2Rad(0);
const end = deg2Rad(180
);

ctx.beginPath();
//ctx.moveTo(...center);
ctx.arc(...center, radius, start, end);
ctx.stroke();
ctx.closePath();

//


ctx.beginPath();
ctx.arc(...topLeft, radius, 0, end);
ctx.stroke();
ctx.closePath(); */

//triangle

/* ctx.beginPath();
ctx.moveTo(...topLeft);
ctx.lineTo(...center);
ctx.lineTo(...midLeft);
ctx.stroke();
ctx.closePath(); */

/* const fillTriangle = (context, point1, point2, point3) => {
    context.beginPath();
    context.moveTo(...point1);
    context.lineTo(...point2);
    context.lineTo(...point3);
    context.closePath();
    context.fill();
}

fillTriangle (ctx, topLeft, center, midLeft);
fillTriangle (ctx, topRight, center, midRight); */

//stroke triangle 
/* 
const strokeTriangle = (context, point1, point2, point3) => {
    context.beginPath();
    context.moveTo(...point1);
    context.lineTo(...point2);
    context.lineTo(...point3);
    context.closePath();
    context.stroke();
}

strokeTriangle (ctx, topLeft, center, midLeft);
strokeTriangle (ctx, topRight, center, midRight); */

//triangle as one function

const triangle = method => (context, point1, point2, point3) => {
    context.beginPath();
    context.moveTo(...point1);
    context.lineTo(...point2);
    context.lineTo(...point3);
    context.closePath();
    context[method]();
}

const fillTriangle = triangle('fill');
const strokeTriangle = triangle('stroke');

strokeTriangle (ctx, topLeft, center, midLeft);
fillTriangle (ctx, topRight, center, midRight);

 

/* const hexagon = method => (context, center, radius) => {
    const SIDES = 6;
    const ANGLE_STEP = 360 / SIDES;
    context.beginPath();
    const [cx, cy] = center;
    const edgeStart = [
        cx + radius * Math.cos(0),
        cy + radius * Math.sin(0)
    ];
    context.moveTo(...edgeStart);
    context.closePath();
    context[method]();
}

const strokeHexagon = hexagon('stroke');
const fillHexagon = hexagon('fill');

strokeHexagon (ctx, center, 10); */

//colors

