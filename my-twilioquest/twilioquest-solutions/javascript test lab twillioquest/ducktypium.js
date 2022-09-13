class Ducktypium {
  constructor(color) {
    this.color = color;
    this.colorTypes = ['red', 'blue', 'yellow'];
    this.error = new Error('Things happen o_O');
    this.calibrationSequence = [];

    if (!this.colorTypes.find((i) => i === color)) {
      throw this.error;
    }
  }

  refract(newColor) {
    if (
      !this.colorTypes.find((i) => i.toLowerCase() === newColor.toLowerCase())
    ) {
      throw this.error;
    }

    const { color } = this;
    const colorMap = {
      red: { blue: 'purple', yellow: 'orange' },
      yellow: { red: 'orange', blue: 'green' },
      blue: { red: 'purple', yellow: 'green' },
    };

    return color.toLowerCase() === newColor ? color : colorMap[newColor][color];
  }

  calibrate(numbers) {
    const numbers2 = numbers.sort();
    this.calibrationSequence = numbers2.reduce((carry, i) => {
      carry.push(i * 3);
      return carry;
    }, []);
    console.log(this.calibrationSequence);
  }
}