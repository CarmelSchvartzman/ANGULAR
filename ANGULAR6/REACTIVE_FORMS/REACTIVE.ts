////////  CLI : ng g c angular6/reactiveForm/createEmployee -s -m app --flat=true --spec=false -d

/////// .HTML :

<form [formGroup]='employeeForm' class="form-horizontal" (ngSubmit)='Submit()' >
  <div class="panel panel-primary">
    <div class="panel-heading">
      <h3 class="panel-title">Create Employee</h3>
    </div>
    <div class="panel-body">
      <div class="form-group">
        <label class="col-sm-2 control-label" for="fullName">Full Name</label>
        <div class="col-sm-8">
          <input formControlName='fullName'   id="fullName" type="text" class="form-control">
        </div>
      </div>

      <div class="form-group">
        <label class="col-sm-2 control-label" for="email">Email</label>
        <div class="col-sm-8">
          <input formControlName='email'  id="email" type="text" class="form-control">
        </div>
      </div>

    </div>
    <div class="panel-footer">
      <button class="btn btn-primary" type="submit">Save</button>
    </div>
  </div>
</form>


/////// .TS :

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styles: []
})
export class CreateEmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.employeeForm = new FormGroup({ fullName: new FormControl(), email: new FormControl() });

  }

  Submit(): void {
    console.warn(this.employeeForm.value);
    console.warn(this.employeeForm.controls.email.value);
    console.warn(this.employeeForm.get('email').value);
    console.warn(this.employeeForm.pristine);
    console.warn(this.employeeForm.valid);
    console.warn(this.employeeForm.touched);

  }

}


/////////// APP.MODULE :

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
imports:[ReactiveFormsModule]


