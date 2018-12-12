import { Component, OnInit } from '@angular/core';
import { FlagImage } from '../../model';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'WebStation-Header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})

export class HeaderComponent implements OnInit {
  public navTitle: string;
  public season: string;
  public languages: FlagImage[] = [];
  public selectedLanguage: FlagImage;

  constructor(public translate: TranslateService) {
    this.languages.push(new FlagImage('fr', '../../assets/fr.svg'));
    this.languages.push(new FlagImage('en', '../../assets/us.svg'));

    this.selectedLanguage = this.languages[0];
  }

  ngOnInit(): void {
    this.navTitle = 'WebStation';

    this.translate.onLangChange.subscribe(() => {
      this.translate.get('HEADER.SEASON').subscribe((res: string) => {
        console.log(res);
        this.season = res;
      });
    });
  }

  public selectLanguage(language: FlagImage) {
    this.selectedLanguage = language;
    this.translate.use(language.name.toLocaleLowerCase());
  }
}
