import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'convertBytes'
})

export class ConvertBytes implements PipeTransform {
  number1000 = 1000;
  defaultFractionalPart = 2;

  returnPow(power: number) {
    return Math.pow(this.number1000, power);
  }

  returnMaxInInterval(power: number) {
    return this.returnPow(power) * this.number1000 - 1;
  }

  returnResultFixed(value: number, power: number, fractionalPart?: number) {
    return (value / this.returnPow(power)).toFixed(fractionalPart || this.defaultFractionalPart);
  }

  returnMetric(power: number, shorthand?: boolean) {
    let mapUppercase = new Map<number, string>([
      [0, 'B'],
      [1, 'KB'],
      [2, 'MB'],
      [3, 'GB'],
      [4, 'TB'],
      [5, 'PB'],
      [6, 'ZB'],
      [7, 'YB'],
      [8, 'RB'],
      [9, 'QB'],
    ]);
    let mapLowcase = new Map<number, string>([
      [0, 'bytes'],
      [1, 'kilobytes'],
      [2, 'megabytes'],
      [3, 'gigabytes'],
      [4, 'terabytes'],
      [5, 'petabytes'],
      [6, 'zettabytes'],
      [7, 'yottabytes'],
      [8, 'ronnabytes'],
      [9, 'quettabytes'],
    ]);
    return (shorthand)? mapUppercase.get(power) : mapLowcase.get(power);
  }

  transform(value: number, fractionalPart?: number, shorthand?: boolean) {
    if (value <= this.number1000) {
      return `${this.returnResultFixed(value, 0, fractionalPart)} ${this.returnMetric(0, shorthand)}`;
    } else if (value <= this.returnMaxInInterval(1)) {
      return `${this.returnResultFixed(value, 1, fractionalPart)} ${this.returnMetric(1, shorthand)}`;
    } else if ( value <= this.returnMaxInInterval(2)) {
      return `${this.returnResultFixed(value, 2, fractionalPart)} ${this.returnMetric(2, shorthand)}`;
    } else if (value <= this.returnMaxInInterval(3)) {
      return`${this.returnResultFixed(value, 3, fractionalPart)} ${this.returnMetric(3, shorthand)}`;
    } else if (value <= this.returnMaxInInterval(4)) {
      return `${this.returnResultFixed(value, 4, fractionalPart)} ${this.returnMetric(4, shorthand)}`;
    } else if(value <= this.returnMaxInInterval(5)) {
      return `${this.returnResultFixed(value, 5, fractionalPart)} ${this.returnMetric(5, shorthand)}`;
    } else if (value <= this.returnMaxInInterval(6)) {
      return `${this.returnResultFixed(value, 6, fractionalPart)} ${this.returnMetric(6, shorthand)}`;
    } else if (value <= this.returnMaxInInterval(7)) {
      return `${this.returnResultFixed(value, 7, fractionalPart)} ${this.returnMetric(7, shorthand)}`;
    } else if (value <= this.returnMaxInInterval(8)) {
      return `${this.returnResultFixed(value, 8, fractionalPart)} ${this.returnMetric(8, shorthand)}`;
    } else if (value <= this.returnMaxInInterval(9)) {
      return `${this.returnResultFixed(value, 9, fractionalPart)} ${this.returnMetric(9, shorthand)}`;
    } else if (value <= this.returnMaxInInterval(10)) {
      return `${this.returnResultFixed(value, 10, fractionalPart)} ${this.returnMetric(10, shorthand)}`;
    } else {
      return `${value} ${this.returnMetric(11, shorthand)}`;
    }
  }
}

