import { Component } from '@angular/core';
import { CharactersService } from './services/clothes.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'characters';
  public characters: Array<any> = [];
  maleCharacters: any[] = [];
  femaleCharacters: any[] = [];

  constructor(private characterService: CharactersService) {
    this.characterService.getCharacters().subscribe((resp: any) => {
      console.log(resp);
      this.characters = resp.results;
      //this.characters = this.characters.slice(0, 15); // Cantidad de personajes que manda la api
      
          // Filtrar los personajes por género y asignarlos a las nuevas propiedades
      this.maleCharacters = this.characters.filter(character => character.gender != 'Female');
      this.femaleCharacters = this.characters.filter(character => character.gender === 'Female');

    });
  }

  

  limitString(text: string, limit: number): string {
    if (text.length > limit) {
      return text.slice(0, limit) + '...';
    } else {
      return text;
    }
  }

}