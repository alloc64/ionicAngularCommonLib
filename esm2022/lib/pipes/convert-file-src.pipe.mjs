import { Pipe } from "@angular/core";
import { Capacitor } from '@capacitor/core';
import * as i0 from "@angular/core";
export class ConvertFileSrcPipe {
    transform(url) {
        if (url)
            return Capacitor.convertFileSrc(url);
        return undefined;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ConvertFileSrcPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: ConvertFileSrcPipe, name: "convertFileSrc" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ConvertFileSrcPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'convertFileSrc'
                }]
        }] });
