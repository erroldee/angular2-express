import {Directive, OnInit} from "@angular/core";

@Directive({
    selector: '[sample-vendor]'
})
export class SampleVendorDirective implements OnInit {
    ngOnInit(): any {
        console.log('sample vendor here');
    }
}