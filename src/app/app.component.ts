import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  checkRoute = true;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    public router: Router) {
    this.getRouteInfo();
  };




  ngOnInit() {
    console.log('papa', this.router.url);

  };

  getRouteInfo() {
    if (this.router) {
      this.router.events.subscribe((event: any) => {
        // console.log(event);
        if (event) {
          if (event.url) { 
            let checkDash = event.url.split('/');
            let papa = checkDash[1]; 
            if (event.url.indexOf('/dashboard') > -1 && papa === 'dashboard') {
              console.log(event.url);
              this.checkRoute = false;
            }
            else {
              this.checkRoute = true;
            } 
          }

        }
      })
  } // End Subscribe Dunction
  }
}
