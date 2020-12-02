import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatar'
})
export class FormatarPipe implements PipeTransform {

  transform(value: String, ...args: String[]): String {
    value = this.applyLetter(value, args[0]);
    value = this.applyCase(value, args[1]);

    return value;
  }

  private applyLetter(value: String, option: String): String {
    switch (option) {
      case 'removeFirstLetter': return value.substr(1);
      case 'removeLastLetter': return value.substr(0, value.length - 1);
      default: return value;
    }
  }

  private applyCase(value: String, type: String): String {
    switch (type) {
      case 'lowercase': return value.toLowerCase();
      case 'uppercase': return value.toUpperCase();
      default: return value;
    }
  }
}
