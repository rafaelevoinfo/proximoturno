import { Component } from "@angular/core";
import { GameService } from "../services/games.services";
import { Game } from "../DTOs/Game";
import { Subscription } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    autoplay: {
      delay: 3000,
    },
  };
  private gameSubscription: Subscription;
  mostPopularGames: Game[] = [];

  constructor(gameService: GameService) {
    this.gameSubscription = gameService
      .getMostPopularGames()
      .subscribe((games) => {
        console.log(games);
        this.mostPopularGames = games;
      });
  }

  ngOnDestroy() {
    if (this.gameSubscription) {
      this.gameSubscription.unsubscribe();
    }
  }

  doRefresh(event: any) {
    event.target.complete();
    window.location.reload();
    
  }
}
