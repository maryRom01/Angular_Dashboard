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
    switch(power) {
      case 0: return (shorthand)? 'B' : 'bytes';
      case 1: return (shorthand)? 'KB' : 'kilobytes';
      case 2: return (shorthand)? 'MB' : 'megabytes';
      case 3: return (shorthand)? 'GB' : 'gigabytes';
      case 4: return (shorthand)? 'TB' : 'terabytes';
      case 5: return (shorthand)? 'PB' : 'petabytes';
      case 6: return (shorthand)? 'ZB' : 'zettabytes';
      case 7: return (shorthand)? 'YB' : 'yottabytes';
      case 8: return (shorthand)? 'RB' : 'ronnabytes';
      case 9: return (shorthand)? 'QB' : 'quettabytes';
      default: return '';
    }
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

