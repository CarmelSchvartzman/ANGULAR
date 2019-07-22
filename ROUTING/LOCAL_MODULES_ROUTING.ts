//////////////////////////////////////////////////////////////////////////////////////////
///   LOCAL MODULE 1 :
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule, Routes } from '@angular/router';   <<<<<<<<<<<<<
import { SimpleComponent } from './simple.component';
import { Container1Component } from './container.component';


const ro: Routes = [  { path: 's', component: Container1Component, pathMatch: 'full' } ];

@NgModule({
  declarations: [SimpleComponent, Container1Component],
  imports: [
    CommonModule, RouterModule.forRoot(ro)      <<<<<<<<<<<<<
  ],
  exports: [RouterModule]                     <<<<<<<<<<<<<
})
export class MyRouteModModule { }



//////////////////////////////////////////////////////////////////////////////////////////
///  ANOTHER LOCAL MODULE 2 :

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';                    <<<<<<<<<<<<<
import { ListEmployeesComponent } from './list-employees.component';
import { CreateEmployeeComponent } from './create-employee.component';
import { BadpageComponent } from './badpage.component';
import { TwoWayBindingComponent } from '../tests/two-way-binding.component';
import { OneWayComponent } from '../tests/one-way.component';
import { ForExampleComponent } from '../tests/for-example/for-example.component';
import { SeeDetailsComponent } from './see-details.component';
import { ContainerComponent } from '../ParentChildTest/container.component';
import { NestComponent } from '../erase/nest.component';
import { ContComponent } from '../erase/cont.component';


const appRoute: Routes = [
  {path: 'list'  , component: ListEmployeesComponent},
  {path: 'create'  , component: CreateEmployeeComponent},
  { path: 'details/:id', component: SeeDetailsComponent  },
  {path: ''  , component: BadpageComponent, pathMatch: 'full'},  // redirectTo: '/list'
  {path: 'twb', component: TwoWayBindingComponent, pathMatch: 'full'},
  {path: 'one/2/3', component: OneWayComponent, pathMatch: 'full'},
  {path: 'f', component: ForExampleComponent, pathMatch: 'full'},
  { path: 'Nested', component: ContainerComponent},
  { path: 'new', component: ContComponent, pathMatch: 'full' }

];
@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(appRoute)      <<<<<<<<<<<<<
  ],
  exports: [RouterModule]                           <<<<<<<<<<<<<
})
export class AppRoutingModule1 { }

//////////////////////////////////////////////////////////////////////////////////////////
//  APP-MODULE :


import { AppRoutingModule1 } from './employees/app-routing.module';   <<<<<<<<<<<<<
import { MyRouteModModule } from './erase/others/my-route-mod.module';   <<<<<<<<<<<<<


@NgModule({
  declarations: [
    AppComponent,  
    GenderPipe,
    ContComponent,
    NestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule1, <<<<<<<<<<<<<
    MyRouteModModule     <<<<<<<<<<<<<
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

