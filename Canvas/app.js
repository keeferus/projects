const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');

const topLeft = [0, 0];
const center = [300, 200];
const topRight = [600, 0];
const bottomRight = [600, 400];
/*console.log(canvas);
console.log(ctx);
*/

/*Draw a line*/

ctx.beginPath();
ctx.moveTo(...center);
ctx.lineTo(...bottomRight);
ctx.stroke();
ctx.closePath();

/*Second line*/

ctx.beginPath();
ctx.moveTo(...center);
ctx.lineTo(...topRight);
ctx.lineTo(200, 200);
ctx.stroke();
ctx.closePath();
