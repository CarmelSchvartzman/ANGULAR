/////// CLI : ng g p assets/pipes/employeeFilter --flat true -d

import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

@Pipe({
  name: 'employeeFilterPipe'
})
export class EmployeeFilterPipe implements PipeTransform {

  transform(value: Employee[], args: string): Employee[] {
    if (value == null || !args ) { return value; } else {
       return  value.filter(n => n.name.toLowerCase().indexOf(args.toLowerCase()) >= 0); }
  }

}
