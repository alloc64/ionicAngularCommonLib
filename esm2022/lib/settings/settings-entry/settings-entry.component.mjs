import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@ionic/angular";
import * as i2 from "@ionic/storage-angular";
import * as i3 from "@angular/common";
export class SettingsEntryComponent {
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
