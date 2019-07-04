/// share data and functionality across multiple components :

//  "UserPreferencesService" :


import { Injectable } from '@angular/core';

@Injectable()
export class UserPreferencesService {

    constructor() {        console.log('New Instance of Service Created');    }    <<<<<<<<<<<  SINGLETON

    colourPreference: string = 'orange';
}


//  in Component :

@Component({
    template: `
            <h1>This is the home page</h1>
            <div>
                Colour Preference :
                <input type='text' [(ngModel)]='colour' [style.background]="colour"/>
            </div>`
})
export class HomeComponent {
   
    constructor(private _userPreferencesService: UserPreferencesService) {    }
   
    get colour(): string {
        return this._userPreferencesService.colourPreference;
    }
    
    set colour(value: string) {
        this._userPreferencesService.colourPreference = value;   <<<<<<<<<<<<<<  this changes Service's value
    }
}



http://csharp-video-tutorials.blogspot.com/2017/08/angular-singleton-service.html
