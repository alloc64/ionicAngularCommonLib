import { Component } from "@angular/core";
import { Localizable } from "../../common/localizable";
import { TwobidSDK } from "@twobid/ionic-plugin";
import * as i0 from "@angular/core";
import * as i1 from "./settings-entry.component";
import * as i2 from "../../pipes/translate.pipe";
export class SettingsEntryAppVersionComponent extends Localizable {
    constructor() {
        super();
        this.values = [];
        this.subtitle = "N/A";
        this.counter = 0;
    }
    async ngOnInit() {
        try {
            if (!TwobidSDK)
                throw "TwobidSDK instance not found";
            let v = await TwobidSDK.version();
            if (!v)
                throw "TwobidSDK.version() returned null";
            this.values = [
                v.versionName + " (" + v.versionCode + ")",
                (v.hdataVersion && v.hdataHash) ? (v.hdataVersion + " (" + v.hdataHash + ")") : "HData N/A",
                "TwobidSDK: " + v.twobidSdkVersion
            ];
            this.subtitle = this.values[0];
        }
        catch (e) {
            console.error(e);
        }
    }
    onClick() {
        this.counter = (this.counter + 1) % this.values.length;
        this.subtitle = this.values[this.counter];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SettingsEntryAppVersionComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: SettingsEntryAppVersionComponent, selector: "settings-entry-app-version", usesInheritance: true, ngImport: i0, template: `
    <settings-entry id="version"
                    [title]="'Version' | translate: 'version'"
                    [subtitle]="subtitle"
                    (onClick)="onClick()"></settings-entry>
  `, isInline: true, dependencies: [{ kind: "component", type: i1.SettingsEntryComponent, selector: "settings-entry", inputs: ["id", "title", "subtitle", "values", "defaultValue", "validator", "valueResolver"], outputs: ["onClick", "onChange"] }, { kind: "pipe", type: i2.TranslatePipe, name: "translate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SettingsEntryAppVersionComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'settings-entry-app-version',
                    template: `
    <settings-entry id="version"
                    [title]="'Version' | translate: 'version'"
                    [subtitle]="subtitle"
                    (onClick)="onClick()"></settings-entry>
  `
                }]
        }], ctorParameters: function () { return []; } });
