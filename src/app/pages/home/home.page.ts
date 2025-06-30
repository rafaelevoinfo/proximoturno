import { Component } from "@angular/core";
import { GameService } from "../../services/games.services";
import { Game } from "../../DTOs/Game";
import { Subject, Subscription } from "rxjs";
import { takeUntil } from "rxjs/operators";

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
  // Create a Subject that will emit when the component is destroyed
  private destroy$ = new Subject<void>();
  mostPopularGames: Game[] = [];

  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.loadGames();
  }

  loadGames() {
    this.gameService.getMostPopularGames()
    .pipe(
      takeUntil(this.destroy$) // Unsubscribe when the component is destroyed
    )
    .subscribe({
      next: (games) => {
        this.mostPopularGames = games;
      },
      error: (error) => {
        console.error("Error refreshing games:", error);
      },
    });
  }

  ngOnDestroy() {
    this.destroy$.next(); // Emit a value to unsubscribe from all subscriptions
    this.destroy$.complete(); // Complete the Subject to free up resources
  }

  doRefresh(event: any) {
    this.loadGames();
    event.target.complete();
  }
}


