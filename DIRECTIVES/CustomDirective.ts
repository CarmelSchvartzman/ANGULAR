//////////////////////////  BLOGGER : https://angularjsclub.blogspot.com/2019/08/how-to-code-custom-directive-to-use-as.html
////////////// (remember to include the directive in 'declarations' part of app.module)
//////////////  DIRECTIVE 

import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: `[appColored], appColored`
})
export class ColorDirective {

  constructor(private elem: ElementRef) {  }

  @Input() set appColored(color: string) {

    this.elem.nativeElement.style.background = color;
  }

}




///////////// USAGE :

 <div class="form-group">

          Using a custom Directive as attribute of a DOM element :
        <label appColored='lightgreen'  for="city">                           <<<<<<<<<<<<<<<<<<<<<<<
          City
        </label>
        <select  appColored='lightgray'   class="form-control" name="city" id="city" [(ngModel)]='city'>
          <option value="0">Athens</option>
          <option value="1">Volos</option>
          <option value="2">Thesaloniki</option>
          <option value="3">Santorini</option>
        </select>

      </div>
 <b><appColored appColored='lightblue'>Using a custom Directive as DOM element!</appColored></b>   <<<<<<<<<<<<<<<<<<<<<<<
   
   
   
   
