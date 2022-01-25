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

fillTriangle(ctx, topLeft, center, bottomLeft);
fillTriangle(ctx, bottomRight, center, topRight);

// covert PI to degrees
const deg2Rad = (degrees) => {
    return Math.PI / 180 * degrees;
};

const radius = 50;
const start = deg2Rad(0);
const end = deg2Rad(360);

ctx.beginPath();
ctx.arc(...center, radius, start, end);
ctx.fill();
ctx.closePath();