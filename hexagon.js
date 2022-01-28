const hexagon = method => (context, center, radius) => {
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

strokeHexagon(ctx, center, 10);