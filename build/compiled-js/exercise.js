"use strict";
function padLeft(input, padding) {
    if (typeof padding === "number") {
        return " ".repeat(padding) + input;
    }
    return padding + input;
}
console.log(padLeft("Hello", 5));
console.log(padLeft("Hello", "World"));
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * (shape.radius ** 2);
        case "square":
            return shape.length ** 2;
    }
}
console.log(getArea({
    kind: "square",
    length: 5
}));
