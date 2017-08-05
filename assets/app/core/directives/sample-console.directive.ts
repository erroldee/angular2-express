import {Directive, OnInit, Input, ElementRef} from "@angular/core";
import * as $ from "jquery"

@Directive({
    selector: '[sample-console]'
})
export class SampleConsoleDirective implements OnInit {
    @Input('sample-console') sampleConsole: string = '';

    constructor(
        private elementRef: ElementRef
    ) {}

    ngOnInit(): any {
        let self = this;

        console.log(this.sampleConsole);
        console.log($(self.elementRef.nativeElement));
    }
}