let range = n => Array.from(Array(n).keys())

class Vector {

    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    reflect() {
        return new Vector(-this.x, -this.y);
    }

    add(vector) {
        return new Vector(this.x + vector.x, this.y + vector.y);
    }

    subtract(vector) {
        return new Vector(this.x - vector.x, this.y - vector.y);
    }

    scale(scalar = 1) {
        return new Vector(this.x * scalar, this.y * scalar);
    }

    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    distance(vector) {
        let dx = this.x - vector.x;
        let dy = this.y - vector.y;

        return Math.sqrt(dx * dx + dy * dy);
    }

}

class IO {

    constructor() {
        this.mouse = new Vector();
        this.bindMouse();
    }

    bindMouse() {
        window.addEventListener('mousemove', ({ x , y }) => {
            this.mouse.x = x;
            this.mouse.y = y;
        });
    }

}

class Point {

    constructor({ position = new Vector(), color = '#f00', size = 3 }) {
        this.position = position;
        this.color = color;
        this.size = size;
    }

    render(ctx) {
        ctx.beginPath();

        ctx.fillStyle = this.color;
        ctx.arc(this.position.x, this.position.y, this.size, 0, 2 * Math.PI);
        ctx.fill();

        ctx.closePath();
    }

}

class SpringPoint extends Point {

    constructor({ target = new Vector(), elasticity = 1e-1, color = 'rgba(255, 0, 0, .6)', size = 3, damping = 1e-1 }) {
        super({ position: target, color, size });
        this.velocity = new Vector();
        this.target = target;
        this.elasticity = elasticity;
        this.damping = damping;
    }

    updateVelocity() {
        let damping = this.velocity.scale(this.damping);
        let force = this.target
            .subtract(this.position)
            .scale(this.elasticity)
            .subtract(damping);

        this.velocity = this.velocity.add(force);
    }

    updatePosition() {
        this.position = this.position.add(this.velocity);
    }

    update() {
        this.updatePosition();
        this.updateVelocity();
    }

}

class SpringTrail extends SpringPoint {

    constructor(config) {
        super(config);
        this.trail = range(config.trailSize || 10).map(index => {
            config.target = this.position;
            config.elasticity = 1 / (index * 8);
            config.damping = 8 / (index * 10 + 5);
            return new SpringPoint(config);
        });
    }

    update() {
        super.update();
        this.trail.forEach(point => point.update());
    }

    render(ctx) {
        super.render(ctx);
        this.trail.forEach(point => point.render(ctx));
    }

}


class Physics {

    update(objects) {
        objects.forEach(object => object.update());
    }

}

class Renderer {

    constructor(ctx, size = { width: 100, height: 100 }) {
        this.ctx = ctx;
        this.size = size;
    }

    render(objects) {
        objects.forEach(object => object.render(ctx));
    }

    clear() {
        this.ctx.fillStyle = 'rgba(0, 0, 0, .2)';
        this.ctx.fillRect(0, 0, this.size.width, this.size.height);
    }

}

class Engine {

    constructor(physics, renderer, objects = []) {
        this.physics = physics;
        this.renderer = renderer;
        this.objects = objects;
    }

    add(...objects) {
        this.objects = this.objects.concat(objects);
    }

    tick() {
        this.physics.update(this.objects);
    }

    render() {
        this.renderer.render(this.objects);
    }

    clear() {
        this.renderer.clear();
    }

}


let canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let ctx = canvas.getContext('2d');

let io = new IO();
let engine = new Engine(
    new Physics(),
    new Renderer(ctx, { width: canvas.width, height: canvas.height })
);

let origin = new Vector(canvas.width / 2, canvas.height / 2);

// This  is what generates the shape
let polar = (rad, time) => {
    rad += Math.sin(time / 100);
    let x = 16 * Math.sin(rad) ** 3;
    let y = 13 * Math.cos(rad) - 5 * Math.cos(2 * rad) - 2 * Math.cos(3 * rad) - Math.cos(4 * rad);
    let scale = (Math.sin(time / 10) + 3) * 4;
    return new Vector(x * scale, -y * scale)
        .add(origin.add(io.mouse.subtract(origin).scale(0.5)));
};

let random = (min = 0, max = 1) => Math.random() * (max - min) + min;

let targetsSize = 60;

// Creating the points for the shape
let targets = [];
for (let i = 0;i < targetsSize; i++) {
    let target = new Vector(random(0, canvas.width), random(0, canvas.height));
    engine.add(new SpringTrail({ target: target, size: 1.3, trailSize: 10, color: "rgba(230, 10, 40, 0.8)" }));
    targets.push(target);
}

let time = 0;
(function animate(){
    time++;
    engine.clear();
    engine.tick();
    engine.render();

    updateTargets();

    window.requestAnimationFrame(animate);
})();

// Applying the shape to the target points
function updateTargets() {
    for (let i = 0;i < targetsSize; i++) {
        let lerp = i / (targetsSize - 1) * Math.PI * 2 + random() / 10;
        let result = polar(lerp, time);
        targets[i].x = result.x;
        targets[i].y = result.y;

        // Randomly swap two points
        if (random() < 0.004) {
            let rnd1 = Math.floor(random(0, targets.length));
            let rnd2 = Math.floor(random(0, targets.length));
            [targets[rnd1], targets[rnd2]] = [targets[rnd2], targets[rnd1]];
        }
    }
}