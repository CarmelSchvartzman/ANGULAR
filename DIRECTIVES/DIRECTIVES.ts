/////////   A DIRECTIVE DEFINES BEHAVIOUR TO A DOM ELEMENT:

import {Directive, Input} from "@angular/core";

@Directive({
    selector: 'hero',
})
export class Hero {

    @Input()
    id: number;

    @Input()
    name:string;
}


/////////////  USE :

<heroes>
    <hero id="1" name="Superman"></hero>
    <hero id="2" name="Batman"></hero>
    <hero id="3" name="Batgirl"></hero>
    <hero id="3" name="Robin"></hero>
    <hero id="4" name="Flash"></hero>
    <hero id="5" name="Green Lantern"></hero>
</heroes>
