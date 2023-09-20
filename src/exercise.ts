function padLeft(input: string, padding: number | string) {
  if (typeof padding === "number") {
    return " ".repeat(padding) + input
  }
  return padding + input;
}

console.log(padLeft("Hello", 5));
console.log(padLeft("Hello", "World"))

interface Circle {
  kind: "circle";
  radius: number
}

interface Square {
  kind: "square",
  length: number
}

type Shape = Square | Circle;

function getArea(shape: Shape): number | null {
  switch (shape.kind) {
    case "circle":
      return Math.PI * (shape.radius ** 2)
    case "square":
      return shape.length ** 2
  }
}

console.log(getArea({
  kind: "square",
  length: 5
}))