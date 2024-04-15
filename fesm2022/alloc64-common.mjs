import * as i0 from '@angular/core';
import { Injectable, Component, Directive, Input, Pipe, EventEmitter, Output, NgModule } from '@angular/core';
import * as i2 from '@ionic/storage-angular';
import { IonicStorageModule } from '@ionic/storage-angular';
import { Capacitor } from '@capacitor/core';
import { TwobidSDK } from '@twobid/ionic-plugin';
import * as i1 from '@ionic/angular';
import { IonicModule } from '@ionic/angular';
import * as i3 from '@angular/common';
import { CommonModule } from '@angular/common';

class ThemeService {
    static { this.THEME = 'theme'; }
    get theme() {
        return localStorage.getItem(ThemeService.THEME) || "";
    }
    set theme(value) {
        if (!value)
            return;
        try {
            let oldTheme = this.theme;
            if (oldTheme?.length > 0)
                document.body.classList.remove(oldTheme);
        }
        catch (e) {
        }
        document.body.classList.add(value);
        localStorage.setItem(ThemeService.THEME, value);
    }
    use() {
        this.theme = this.theme;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ThemeService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ThemeService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ThemeService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });

class BaseAppComponent {
    constructor(storage, themeService) {
        this.storage = storage;
        this.themeService = themeService;
    }
    async ngOnInit() {
        await this.storage.create();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BaseAppComponent, deps: [{ token: i2.Storage }, { token: ThemeService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: BaseAppComponent, selector: "ng-component", ngImport: i0, template: '', isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BaseAppComponent, decorators: [{
            type: Component,
            args: [{ template: '' }]
        }], ctorParameters: function () { return [{ type: i2.Storage }, { type: ThemeService }]; } });

class Localizable {
    get locale() {
        let n = navigator;
        return n.language || n.userLanguage;
    }
    getString(defaultValue, key, params) {
        if (!translations)
            return defaultValue;
        let value = translations[this.locale]?.[key] || translations["en-US"]?.[key] || translations["en"]?.[key] || defaultValue;
        return value.replace("\\n", "\n");
    }
}

class DefaultImageDirective {
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

class ConvertFileSrcPipe {
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

class DefaultImagePipe {
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

const FILE_SIZE_UNITS = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
class FormatFileSizePipe {
    transform(sizeInBytes) {
        if (!sizeInBytes)
            return "";
        const units = FILE_SIZE_UNITS;
        let power = Math.round(Math.log(sizeInBytes) / Math.log(1024));
        power = Math.min(power, units.length - 1);
        const size = sizeInBytes / Math.pow(1024, power); // size in new units
        const formattedSize = Math.round(size * 100) / 100; // keep up to 2 decimals
        const unit = units[power];
        return `${formattedSize} ${unit}`;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormatFileSizePipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: FormatFileSizePipe, name: "formatFileSize" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FormatFileSizePipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'formatFileSize'
                }]
        }] });

class TranslatePipe extends Localizable {
    constructor() {
        super();
    }
    transform(defaultValue, key, args) {
        return this.getString(defaultValue, key, args);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TranslatePipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: TranslatePipe, name: "translate" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TranslatePipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'translate'
                }]
        }], ctorParameters: function () { return []; } });

class SettingsEntryComponent {
    async getSelectedValue() {
        const val = await this.storage.get(this.id);
        if ((typeof val == "undefined" || val == null)) {
            if (this.defaultValue)
                return Promise.resolve(this.defaultValue);
            if (this.values && this.values.length > 0)
                return Promise.resolve(this.values[0]);
        }
        return val;
    }
    constructor(alertController, zone, storage) {
        this.alertController = alertController;
        this.zone = zone;
        this.storage = storage;
        this.id = "";
        this.onClick = new EventEmitter();
        this.onChange = new EventEmitter();
    }
    async ngOnInit() {
        const selectedValue = this.resolveValue(await this.getSelectedValue());
        this.zone.run(() => this.subtitle = selectedValue);
    }
    async onClickEvent($event) {
        this.onClick.emit($event);
        if (this.values) {
            let selectedValue = await this.getSelectedValue();
            const inputs = this.values.map((value) => {
                return {
                    type: 'radio',
                    label: this.resolveValue(value),
                    value: value,
                    checked: value == selectedValue
                };
            });
            const alert = await this.alertController.create({
                header: this.title,
                inputs: inputs,
                buttons: [{
                        text: 'OK',
                        handler: async (data) => {
                            let canChange = true;
                            if (this.validator)
                                canChange = await this.validator(data);
                            if (canChange) {
                                await this.storage.set(this.id, data);
                                const selectedValue = this.resolveValue(data);
                                this.zone.run(() => this.subtitle = selectedValue);
                                this.change(data);
                            }
                        }
                    }]
            });
            await alert.present();
        }
    }
    resolveValue(value) {
        if (this.valueResolver)
            return this.valueResolver(value);
        return value;
    }
    change(value) {
        this.onChange.emit(value);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SettingsEntryComponent, deps: [{ token: i1.AlertController }, { token: i0.NgZone }, { token: i2.Storage }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: SettingsEntryComponent, selector: "settings-entry", inputs: { id: "id", title: "title", subtitle: "subtitle", values: "values", defaultValue: "defaultValue", validator: "validator", valueResolver: "valueResolver" }, outputs: { onClick: "onClick", onChange: "onChange" }, ngImport: i0, template: `
    <ion-item button (click)="onClickEvent($event)">
      <ion-label>
        <h2>{{ title }}</h2>
        <h3 *ngIf="subtitle">{{ subtitle }}</h3>
      </ion-label>
    </ion-item>
  `, isInline: true, dependencies: [{ kind: "component", type: i1.IonItem, selector: "ion-item", inputs: ["button", "color", "counter", "counterFormatter", "detail", "detailIcon", "disabled", "download", "fill", "href", "lines", "mode", "rel", "routerAnimation", "routerDirection", "shape", "target", "type"] }, { kind: "component", type: i1.IonLabel, selector: "ion-label", inputs: ["color", "mode", "position"] }, { kind: "directive", type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SettingsEntryComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'settings-entry',
                    template: `
    <ion-item button (click)="onClickEvent($event)">
      <ion-label>
        <h2>{{ title }}</h2>
        <h3 *ngIf="subtitle">{{ subtitle }}</h3>
      </ion-label>
    </ion-item>
  `
                }]
        }], ctorParameters: function () { return [{ type: i1.AlertController }, { type: i0.NgZone }, { type: i2.Storage }]; }, propDecorators: { id: [{
                type: Input
            }], title: [{
                type: Input
            }], subtitle: [{
                type: Input
            }], values: [{
                type: Input
            }], defaultValue: [{
                type: Input
            }], validator: [{
                type: Input
            }], valueResolver: [{
                type: Input
            }], onClick: [{
                type: Output
            }], onChange: [{
                type: Output
            }] } });

class SettingsEntryAppVersionComponent extends Localizable {
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
  `, isInline: true, dependencies: [{ kind: "component", type: SettingsEntryComponent, selector: "settings-entry", inputs: ["id", "title", "subtitle", "values", "defaultValue", "validator", "valueResolver"], outputs: ["onClick", "onChange"] }, { kind: "pipe", type: TranslatePipe, name: "translate" }] }); }
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

class Alloc64CommonModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: Alloc64CommonModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: Alloc64CommonModule, bootstrap: [Alloc64CommonModule], declarations: [BaseAppComponent,
            DefaultImagePipe,
            FormatFileSizePipe,
            ConvertFileSrcPipe,
            TranslatePipe,
            DefaultImageDirective,
            SettingsEntryComponent,
            SettingsEntryAppVersionComponent], imports: [IonicModule,
            CommonModule, i1.IonicModule, i2.IonicStorageModule], exports: [BaseAppComponent,
            DefaultImagePipe,
            FormatFileSizePipe,
            ConvertFileSrcPipe,
            TranslatePipe,
            DefaultImageDirective,
            SettingsEntryComponent,
            SettingsEntryAppVersionComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: Alloc64CommonModule, imports: [IonicModule,
            CommonModule,
            IonicModule.forRoot(),
            IonicStorageModule.forRoot()] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: Alloc64CommonModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        BaseAppComponent,
                        DefaultImagePipe,
                        FormatFileSizePipe,
                        ConvertFileSrcPipe,
                        TranslatePipe,
                        DefaultImageDirective,
                        SettingsEntryComponent,
                        SettingsEntryAppVersionComponent,
                    ],
                    imports: [
                        IonicModule,
                        CommonModule,
                        IonicModule.forRoot(),
                        IonicStorageModule.forRoot(),
                    ],
                    exports: [
                        BaseAppComponent,
                        DefaultImagePipe,
                        FormatFileSizePipe,
                        ConvertFileSrcPipe,
                        TranslatePipe,
                        DefaultImageDirective,
                        SettingsEntryComponent,
                        SettingsEntryAppVersionComponent
                    ],
                    bootstrap: [
                        Alloc64CommonModule
                    ],
                }]
        }] });

/*
 * Public API Surface of common
 */

/**
 * Generated bundle index. Do not edit.
 */

export { Alloc64CommonModule, BaseAppComponent, ConvertFileSrcPipe, DefaultImageDirective, DefaultImagePipe, FormatFileSizePipe, Localizable, SettingsEntryAppVersionComponent, SettingsEntryComponent, ThemeService, TranslatePipe };
