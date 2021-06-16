import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrado2'
})
export class Filtrado2Pipe implements PipeTransform {

  transform(value:any,arg:any):any {
    if (arg === '') return value;
        const resultPosts = [];
        for (const clients of value) {
          if (clients.status.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
            resultPosts.push(clients);
          };
        }
          return resultPosts;
      }

}