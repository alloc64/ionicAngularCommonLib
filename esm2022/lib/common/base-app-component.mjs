import { Component } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "@ionic/storage-angular";
import * as i2 from "../theme/theme.service";
export class BaseAppComponent {
    constructor(storage, themeService) {
        this.storage = storage;
        this.themeService = themeService;
    }
    async ngOnInit() {
        await this.storage.create();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BaseAppComponent, deps: [{ token: i1.Storage }, { token: i2.ThemeService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: BaseAppComponent, selector: "ng-component", ngImport: i0, template: '', isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BaseAppComponent, decorators: [{
            type: Component,
            args: [{ template: '' }]
        }], ctorParameters: function () { return [{ type: i1.Storage }, { type: i2.ThemeService }]; } });
