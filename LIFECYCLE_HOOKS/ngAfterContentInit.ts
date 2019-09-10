/////////////   https://www.c-sharpcorner.com/article/angular-5-lifecycle-hooks-part-two/

/////////////   https://www.stackchief.com/blog/ngAfterContentInit%20Example%20%7C%20Angular

////////////  Use ngAfterContentInit to call something once after all of the content has been initialized.
////////////       ngAfterContentInit will run once after the first ngDoCheck().
/////////////////////////////////////////////////////////////////////////////////////////////////////
//////////// CHILD (PROJECTION) : 

import { Component, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-projection',
  template: `
  <div class='centered'>
  <div class='panel panel-info ' >
    <div class='panel-heading clickable'  >
      <strong>
                 <ng-content></ng-content>
      </strong>
    </div>   
  </div>
</div>
  `,
  styles: []
})
export class ProjectionComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit {
  constructor() { console.warn('ProjectionComponent.constructor'); }

  ngOnInit() {
    console.warn('ProjectionComponent.ngOnInit');
  }

  ngDoCheck(): void {
    console.warn('ProjectionComponent.ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.warn('ProjectionComponent.ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.warn('ProjectionComponent.ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.warn('ProjectionComponent.ngAfterViewInit');
  }


}


///////////////  CONTAINER :

import { Component, OnInit, AfterContentInit, OnChanges, SimpleChanges, DoCheck, AfterContentChecked, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-container',
  template: `
    <p>
      container works!
    </p>
    <div>
    <app-projection>
        Container Contents
    </app-projection>
    </div>
  `,
  styles: []
})
export class ContainerComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit {
  constructor() { console.warn('ContainerComponent.constructor'); }

  ngOnChanges(changes: SimpleChanges): void {
    console.warn('ContainerComponent.ngOnChanges');
  }

  ngOnInit() {
    console.warn('ContainerComponent.ngOnInit');
  }

  ngDoCheck(): void {
    console.warn('ContainerComponent.ngDoCheck');
  }

  ngAfterContentInit() {
    console.warn('ContainerComponent.ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.warn('ContainerComponent.ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.warn('ContainerComponent.ngAfterViewInit');
  }

}


