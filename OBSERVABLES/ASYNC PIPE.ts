/////  Don’t forget to import the “CommonModule” into your module, as the async pipe will be exposed from that :

import { Component } from "@angular/core"
import { Observable } from "rxjs/Rx"

// client
import { HttpClient } from "../services/client"

// interface
import { IUser } from "../services/interfaces"

@Component({
    selector: "user-list",
    templateUrl:  "./template.html",
})
export class UserList {

    public users$: Observable<IUser[]>;                   <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

    constructor(
        public client: HttpClient,
    ) {}

    // do a call to fetch the users on init of component
    // the fetchUsers method returns an observable
    // which we assign to the users$ property of our class
    public ngOnInit() {
        this.users$ = this.client.fetchUsers()                   <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    }
}

---------------------------------------------------------------------------------------------------------
  
  <!--  ///////////   automatically subscribe/unsubscribe to our observable :       -->
<ul class="user__list" *ngIf="(users$ | async).length">
    <li class="user" *ngFor="let user of users$ | async">
        {{ user.name }} - {{ user.birth_date }}
    </li>
</ul>


//////  https://medium.com/@luukgruijs/understanding-creating-and-subscribing-to-observables-in-angular-426dbf0b04a3
