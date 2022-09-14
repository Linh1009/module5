import {IWord} from "../model/IWord";

export class DictionaryD {
  static dictionary: IWord[] = [
    {
      word: '1',
      mean: 'one'
    },
    {
      word: 'two',
      mean: '2'
    },
    {
      word: 'three',
      mean: '3'
    }
  ];

  static getAllDict() {
    return this.dictionary;
  }
}
