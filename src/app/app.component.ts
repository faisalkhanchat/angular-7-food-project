import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // showSecret = false;
  // showSecret2 = false;
  // log = [];
  // title = 'first-app';
  // onToggleDetails() {
  //   this.showSecret = !this.showSecret;
  //   this.log.push(new Date());
  // }

  loadedFeature = 'recipe';
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

}
