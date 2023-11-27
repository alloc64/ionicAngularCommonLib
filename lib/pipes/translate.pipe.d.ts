import { ChangeDetectorRef, PipeTransform } from '@angular/core';
import { Localizable } from "../common/localizable";
import { TranslateService } from "@ngx-translate/core";
import { DomSanitizer } from "@angular/platform-browser";
import * as i0 from "@angular/core";
export declare class TranslatePipe extends Localizable implements PipeTransform {
    private changeDetectorRef;
    private domSanitizer;
    value: string;
    constructor(changeDetectorRef: ChangeDetectorRef, domSanitizer: DomSanitizer, translateService: TranslateService);
    transform(defaultValue: string, key: string, args?: string[]): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<TranslatePipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<TranslatePipe, "translate", false>;
}
