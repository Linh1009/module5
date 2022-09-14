import { Injectable } from '@angular/core';
import {IWord} from "../model/IWord";
import {DictionaryD} from "../data/DictionaryD";

@Injectable({
  providedIn: 'root'
})
export class DictionaryserviceService {
  dictionary: IWord[] = DictionaryD.getAllDict();
  constructor() { }
  translate(word: string) {
    return this.dictionary.find((dict) => dict.word === word);
  }
}
