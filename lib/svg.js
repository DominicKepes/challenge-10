class SVG {
  constructor() {
    this.textElement = "";
    this.shapeElement = "";
  }

  render() {
    return `<svg version="1.1" width="350" height="225" xmlns="http://www.w3.org/2000/svg">${this.shapeElement}${this.textElement}</svg>`;
  }

  setText(message, color) {
    if (message.length > 5) {
      throw new Error("Text must not exceed 5 characters.");
    }
    this.textElement = `<text x="200" y="150" font-size="75" text-anchor="middle" fill="${color}">${message}</text>`;
  }

  setShape(shape) {
    this.shapeElement = shape.render();
  }
}

module.exports = SVG;
