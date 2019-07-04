saveEmployee(): void {
  const newEmployee: Employee = Object.assign({}, this.employee);  <<<<<<<<<<<<<<<<<<<<<<<<<<<
  this._employeeService.save(newEmployee);
  this.createEmployeeForm.reset();             <<<<<<<<<<<<<<<<<<<<<<  RESET() WILL NOT DELETE DATA ON CLONED INSTANCE
  this._router.navigate(['list']);
} 
