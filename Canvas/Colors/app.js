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

const line = (ctx, firstPoint, secondPoint) => {
    ctx.beginPath();
    ctx.moveTo(...firstPoint);
    ctx.lineTo(...secondPoint);
    ctx.closePath();
    ctx.stroke();

};

const figure = (ctx, ...points) => {
    ctx.beginPath();
    const [first, ...otherPoints] = points;
    ctx.moveTo(...first);
    otherPoints.forEach(point => ctx.lineTo(...point));
    ctx.lineTo(...first);
    /* ctx.stroke(); */
    ctx.fill();
    ctx.closePath();
};

const outline = (ctx, ...points) => {
    ctx.beginPath();
    const [first, ...otherPoints] = points;
    ctx.moveTo(...first);
    otherPoints.forEach(point => ctx.lineTo(...point));
    ctx.lineTo(...first);
    ctx.stroke();
    ctx.closePath();
};

const getRectCenter = (center, width, height) => {
    const [x, y] = center;
    const cx = x - width / 2;
    const cy = y - width / 2;
    return [cx, cy];
};
const outlinedSquare = (ctx, center, size, color) => {
    ctx.save();
    ctx.strokeStyle = color;
    ctx.strokeRect(...center, size, size);
    ctx.resotre();
};

const filledSquare = (ctx, center, size, color) => {
    ctx.save();
    ctx.fillStyle = color;
    ctx.fillRect(...center, size, size);
    ctx.resotre();
};

//line Style LineDash

/* ctx.setLineDash([10, 20, 5, 10]);
line(ctx, midLeft, midRight);
ctx.setLineDash([]); */

//transparent colors

/* ctx.lineWidth = 10;
ctx.fillStyle = 'rgba(0, 255, 0, 0.3)';
figure(ctx, topLeft, center, topRight);
ctx.fillStyle = 'rgba(255, 0, 255, 0.3)';
figure(ctx, topLeft, midTop, center);
 */

//text

//setup text center *helper

const point = (ctx, x, y) => {
    ctx.save();
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(x, y, 2, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
}
const message = 'welcome to my canvas project';
ctx.font = '40px Comic Sans MS'
ctx.fillStyle = 'rgba(100, 0, 200, 0.6';
ctx.strokeStyle = 'rgba(0, 0, 0, 1';

/* point(ctx, ...center); */

ctx.strokeText(message, 20, 200);
ctx.fillText(message, 20, 200);

const linear = ctx.createLinearGradient(...midLeft, ...midRight);
//console.log(linear);
linear.addColorStop(.3, 'red');
linear.addColorStop(.2, 'green');
ctx.fillStyle = linear;
ctx.fillRect(...topLeft, canvas.width, canvas.height);




/* ctx.fillStyle = 'pink';
figure(ctx, bottomLeft, center, bottomRight); */

/* ctx.fillStyle = 'purple';
figure(ctx, bottomRight, center, midRight);
figure(ctx, bottomLeft, center, midLeft);


filledSquare(ctx, [200, 0], 200, 'maroon');
 */







