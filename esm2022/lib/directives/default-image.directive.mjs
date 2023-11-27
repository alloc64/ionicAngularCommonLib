import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class DefaultImageDirective {
    constructor() {
        this.defaultImg = './assets/default-icon.jpg';
    }
    onError() {
        this.src = this.defaultImg;
    }
    checkPath(src) {
        return src ? src : this.defaultImg;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DefaultImageDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: DefaultImageDirective, selector: "img[src]", inputs: { src: "src", defaultImg: "defaultImg" }, host: { listeners: { "error": "onError()" }, properties: { "src": "checkPath(src)" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DefaultImageDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'img[src]',
                    host: {
                        '[src]': 'checkPath(src)',
                        '(error)': 'onError()'
                    }
                }]
        }], propDecorators: { src: [{
                type: Input
            }], defaultImg: [{
                type: Input
            }] } });
