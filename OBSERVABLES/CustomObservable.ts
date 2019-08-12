ng serve -o
/////  app.module :
import { CMyObsCComponent } from './MyObservable/c-my-obs-c.component';

 declarations: [   
    CMyObsCComponent
  ]

///// Routes + nav :
import { CMyObsCComponent } from '../MyObservable/c-my-obs-c.component';

 { path: 'obs', component: CMyObsCComponent, pathMatch: 'full' }



///// Service :   ng g s MyObservable/sObs --flat -m app.module -d
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class SObsService {

  GetData(res: string): Observable<string> {

    return new Observable((observer) => {                  <<<<<<<<<<<<<<<<<<

      observer.next('Value from Observable : ' + res);     <<<<<<<<<<<<<<<<<<

      observer.complete();     <<<<<<<<<<<<<<<<<<

    });
  }

  constructor() { }
}

///// Component :   ng g c MyObservable/cMyObsC --flat -m app.module -s -t -d
import { Component, OnInit } from '@angular/core';
import { SObsService } from './s-obs.service';

@Component({
  selector: 'app-c-my-obs-c',
  template: `    <p>      {{ret}}    </p>  `,
  styles: [],
  providers: [SObsService]                <<<<<<<<<<<<<<<<<<
})
export class CMyObsCComponent implements OnInit {
  ret: string;
  
  constructor(private _svc: SObsService) { }     <<<<<<<<<<<<<<<<<<

  ngOnInit() {
    this._svc.GetData('Original value').subscribe((res) => { this.ret = res; }, (e) => { alert(e); });      <<<<<<<<<<<<<<<<<<
  }
}










