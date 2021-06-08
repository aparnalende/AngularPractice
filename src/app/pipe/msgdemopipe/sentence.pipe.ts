import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sentence'
})
export class SentencePipe implements PipeTransform {

  transform(str:string):string{
    let firstChar=str.charAt(0);
    let restChars=str.substring(1);
    let sentence=firstChar.toUpperCase()+restChars.toLowerCase()
    return sentence;
  }

}
