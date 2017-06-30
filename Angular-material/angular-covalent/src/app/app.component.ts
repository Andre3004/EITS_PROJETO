import { AuthService } from './authentication/auth.service';

import { TdMediaService } from '@covalent/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'app works!';
  constructor(public media: TdMediaService, public authService: AuthService){}
  ngAfterViewInit(): void {
    // broadcast to all listener observables when loading the page
    this.media.broadcast();
  }
}
