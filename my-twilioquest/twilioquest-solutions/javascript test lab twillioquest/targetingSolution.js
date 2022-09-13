class TargetingSolution {
  constructor(coords) {
    // your code here
    const { x, y, z } = coords;
    this.x = x;
    this.y = y;
    this.z = z;
  }

  // your code here
  target() {
    const { x, y, z } = this;
    return `(${x}, ${y}, ${z})`;
  }
}