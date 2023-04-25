import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  year: number = 1800;

  langList = [
    {
      'code': 'pt',
      'label': 'PT'
    },
    {
      'code': 'en',
      'label': 'EN'
    }    
  ];

  constructor(private translateService: TranslateService) { }

  ngOnInit() {
    this.year = new Date().getFullYear();
  }

  useLanguage(language: string): void {
    this.translateService.use(language);
  }

}
