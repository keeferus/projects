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
    ctx.stroke();
    ctx.closePath();
};

const figure =(ctx, ...points) => {
    ctx.beginPath();
    const [first, ...otherPoints] = points;
    ctx.moveTo(...first);
    otherPoints.forEach(point => ctx.lineTo(...point));
    ctx.lineTo(...first);
    ctx.fill();
    ctx.closePath();
};

const outline =(ctx, ...points) => {
    ctx.beginPath();
    const [first, ...otherPoints] = points;
    ctx.moveTo(...first);
    otherPoints.forEach(point => ctx.lineTo(...point));
    ctx.lineTo(...first);
    ctx.stroke();
    ctx.closePath();
};

const getRectCenter = (center, width, height) =>{
    const [x, y] = center;
    const cx = x - width / 2;
    const cy = y - width / 2;
    return [cx, cy];
}
const outlinedSquare = (ctx, center, size, color) =>{
    ctx.save();
    ctx.strokeStyle = color;
    ctx.strokeRect(...center, size, size);
    ctx.resotre();
}

const filledSquare = (ctx, center, size, color) =>{
    ctx.save();
    ctx.fillStyle = color;
    ctx.fillRect(...center, size, size);
    ctx.resotre();
}