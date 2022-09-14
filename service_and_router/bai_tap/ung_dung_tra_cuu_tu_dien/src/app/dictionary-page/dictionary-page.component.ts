import { Component, OnInit } from '@angular/core';
import {DictionaryService, ServiceService} from "../service/service.service";
import {IWord} from "../model/IWord";

class DictionaryserviceService {
}

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.css']
})
export class DictionaryPageComponent implements OnInit {

  dict: IWord[] = this.dictService.dictionary;
  constructor(private dictService: DictionaryserviceService) { }
  ngOnInit(): void {
  }
}
