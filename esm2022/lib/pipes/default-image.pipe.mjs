import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class DefaultImagePipe {
    transform(url, fallback = "./assets/default-icon.jpg") {
        if (!url || url.length == 0)
            return fallback;
        return url;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DefaultImagePipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: DefaultImagePipe, name: "defaultImage" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DefaultImagePipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'defaultImage'
                }]
        }] });
