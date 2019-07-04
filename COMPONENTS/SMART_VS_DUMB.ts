

////// SMART (impure) : side effects + retrieve data + modify input

class DateTimePickerComponent {
  timeZone: string = "Europe/Warsaw";

  constructor(private account: AccountService) {
    if (this.account.currentUser) {
      this.timeZone = this.account.currentUser.timeZone;
    }
  }

  changeTimeZone(timeZone: string) {
    this.timeZone = timeZone;
    this.account.updateCurrentUser({
      timeZone
    });
  }
}

////// DUMB (pure) : get input + emit output 

class DateTimePickerComponent {
  @Input() timeZone: string = "Europe/Warsaw";
  @Output() timeZoneChange: EventEmitter<string> = new EventEmitter();

  changeTimeZone(timeZone: string) {
    this.timeZoneChange.emit(timeZone);
  }
}
