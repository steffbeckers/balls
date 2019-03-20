var sketch = function (p) {
    p.preload = function () {
    };
    p.setup = function () {
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.noStroke();
    };
    p.windowResized = function () {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
    };
    p.draw = function () {
        p.background(0, 122, 34);
        p.noStroke();
        p.fill(237, 28, 36);
        p.ellipse(500, 200, 200, 200);
        p.fill(255);
        p.ellipse(500, 700, 200, 200);
        p.fill(255, 100);
        p.ellipse(p.mouseX, p.mouseY, 200, 200);
        p.stroke(0);
        p.line(500, 1000, 500, 0);
        p.line(0, 200, 1000, 200);
        p.line(500, 700, 642, 0);
        p.line(500, 700, 571, 0);
        p.line(500, 700, p.mouseX, p.mouseY);
        p.line(500, 200, p.mouseX, p.mouseY);
    };
};
var sketchP = new p5(sketch);
//# sourceMappingURL=build.js.map