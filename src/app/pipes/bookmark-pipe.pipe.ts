import { BookMarkInterface } from '../interfaces/interfaces';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bookmarkPipe',
})
export class BookmarkPipePipe implements PipeTransform {
  async transform(word: string): Promise<string> {
    let finalWord;
    let size = 7;
    if (word.length > size) {
      finalWord = await word.slice(0, size - 1)+ '...';
    }
    else {
      finalWord =word
    }
    return finalWord
  }
  //pipe para porner tres puentos en caso de que sea mayor a 7 el titulo
}
