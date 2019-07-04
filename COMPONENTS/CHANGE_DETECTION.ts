///detect and react to input property changes in Angular:

// 1.  ngOnChanges life cycle hook is invoked when any of the input properties change :

ngOnChanges(changes: SimpleChanges) {
  for (const propName of Object.keys(changes)) {

    const change = changes[propName];
    const from = JSON.stringify(change.previousValue);
    const to = JSON.stringify(change.currentValue);

    console.log(propName + ' changed from ' + from + ' to ' + to);
  }
}



// 2. Property setter is specific to a given property, so we only get changes of that specific property :

A. ONEvariable :

private _employeeId: number;

@Input()
set employeeId(val: number) {
  console.log('employeeId changed from ' + JSON.stringify(this._employeeId)
    + ' to ' + JSON.stringify(val));
  this._employeeId = val;
}
get employeeId(): number {
  return this._employeeId;
}


B. ONE OBJECT :


private _employee: Employee;

@Input()
set employee(val: Employee) {
  console.log('employee changed from ' + JSON.stringify(this._employee)
    + ' to ' + JSON.stringify(val));
  this._employee = val;
}
get employee(): Employee {
  return this._employee;
}


http://csharp-video-tutorials.blogspot.com/2018/03/angular-property-setter-vs-ngonchanges.html
