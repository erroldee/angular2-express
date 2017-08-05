import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SampleVendorDirective} from "./sample-vendor.directive";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        SampleVendorDirective
    ],
    exports: [
        SampleVendorDirective
    ]
})
export class SampleVendorModule {}