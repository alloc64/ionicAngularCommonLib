import { Pipe } from '@angular/core';
import { Localizable } from "../common/localizable";
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "@ngx-translate/core";
export class TranslatePipe extends Localizable {
    constructor(changeDetectorRef, domSanitizer, translateService) {
        super(translateService);
        this.changeDetectorRef = changeDetectorRef;
        this.domSanitizer = domSanitizer;
        this.value = "";
    }
    transform(defaultValue, key, args) {
        if (!this.value) {
            if (defaultValue && defaultValue.indexOf("\\n") >= 0)
                defaultValue = defaultValue.replace("\\n", "\n");
            this.value = defaultValue;
            this.getStringAsync(key, args).subscribe((value) => {
                this.value = value;
                this.changeDetectorRef.markForCheck();
            });
        }
        return this.value;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TranslatePipe, deps: [{ token: i0.ChangeDetectorRef }, { token: i1.DomSanitizer }, { token: i2.TranslateService }], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: TranslatePipe, name: "translate" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TranslatePipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'translate'
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.DomSanitizer }, { type: i2.TranslateService }]; } });
