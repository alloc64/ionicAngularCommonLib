import { Component } from "@angular/core";
import { Localizable } from "../../common/localizable";
import * as i0 from "@angular/core";
import * as i1 from "@awesome-cordova-plugins/app-version/ngx";
import * as i2 from "@ngx-translate/core";
import * as i3 from "./settings-entry.component";
export class SettingsEntryAppVersionComponent extends Localizable {
    constructor(appVersion, translateService) {
        super(translateService);
        this.appVersion = appVersion;
        this.title = "";
    }
    async ngOnInit() {
        let version;
        try {
            version = `${await this.appVersion.getVersionNumber()} (${await this.appVersion.getVersionCode()})`;
        }
        catch (e) {
            version = "N/A";
        }
        this.title = "Version " + version;
        this.getStringAsync("version", { version: version })
            .subscribe((value) => this.title = value);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SettingsEntryAppVersionComponent, deps: [{ token: i1.AppVersion }, { token: i2.TranslateService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: SettingsEntryAppVersionComponent, selector: "settings-entry-app-version", usesInheritance: true, ngImport: i0, template: `
    <settings-entry id="version" [title]="title"></settings-entry>
  `, isInline: true, dependencies: [{ kind: "component", type: i3.SettingsEntryComponent, selector: "settings-entry", inputs: ["id", "title", "subtitle", "values", "defaultValue", "validator", "valueResolver"], outputs: ["onClick", "onChange"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SettingsEntryAppVersionComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'settings-entry-app-version',
                    template: `
    <settings-entry id="version" [title]="title"></settings-entry>
  `
                }]
        }], ctorParameters: function () { return [{ type: i1.AppVersion }, { type: i2.TranslateService }]; } });
