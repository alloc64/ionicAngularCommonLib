import { PipeTransform } from '@angular/core';
import { Localizable } from "../common/localizable";
import * as i0 from "@angular/core";
export declare class TranslatePipe extends Localizable implements PipeTransform {
    constructor();
    transform(key: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<TranslatePipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<TranslatePipe, "translate", false>;
}
