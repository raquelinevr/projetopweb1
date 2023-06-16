import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'email'
})
export class EmailPipe implements PipeTransform {

  transform(valor: string): string {
     // 20192370040@academico.com
     if (valor.length == 23) {
      return valor.substring(0, 11)
        + '@' + valor.substring(11, 9)
        + '.' + valor.substring(20, 3)
    }

    return valor;

  }
  }

