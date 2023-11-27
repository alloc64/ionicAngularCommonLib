import { Component } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "@ionic/storage-angular";
import * as i2 from "../theme/theme.service";
import * as i3 from "@ngx-translate/core";
export class BaseAppComponent {
    constructor(storage, themeService, translateService) {
        this.storage = storage;
        this.themeService = themeService;
        this.translateService = translateService;
        this.translateService.use(this.translateService.getBrowserLang() || "en");
        this.themeService.use();
    }
    async ngOnInit() {
        await this.storage.create();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BaseAppComponent, deps: [{ token: i1.Storage }, { token: i2.ThemeService }, { token: i3.TranslateService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: BaseAppComponent, selector: "ng-component", ngImport: i0, template: '', isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BaseAppComponent, decorators: [{
            type: Component,
            args: [{ template: '' }]
        }], ctorParameters: function () { return [{ type: i1.Storage }, { type: i2.ThemeService }, { type: i3.TranslateService }]; } });
