import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})

export class SearchPipe implements PipeTransform {
  transform(value: any, arg: any): any {

    const resultPosts = [];
      //let post = 1;
      if(value){
      for (let post of value) {
          console.log(post);

        if (post.name.indexOf(arg) > -1) {

          console.log(post.name.indexOf(arg));

          resultPosts.push(post);
          console.log('HOLA',resultPosts);

        }

      }
      return resultPosts;
    }
   }
  }


