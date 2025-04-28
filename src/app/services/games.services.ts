import { Injectable } from '@angular/core';
import { Game } from '../DTOs/Game';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GameService {

    getMostPopularGames(): Observable<Game[]> {
        return of([
          {
            Title: "King of Tokyo",
            Description: "Domine Tokyo and become the King!",
            ImageUrl: "assets/images/king-of-tokyo.jpg",
          },
          {
            Title: "King of Tokyo",
            Description: "Domine Tokyo and become the King!",
            ImageUrl: "assets/images/king-of-tokyo.jpg",
          },
          {
            Title: "King of Tokyo",
            Description: "Domine Tokyo and become the King!",
            ImageUrl: "assets/images/king-of-tokyo.jpg",
          },          
          //   {
          //     name: "Game 2",
          //     description: "Description for Game 2",
          //     imageUrl: "assets/images/game2.jpg",
          //   },
          //   {
          //     name: "Game 3",
          //     description: "Description for Game 3",
          //     imageUrl: "assets/images/game3.jpg",
          //   },
        ]);
    }
}