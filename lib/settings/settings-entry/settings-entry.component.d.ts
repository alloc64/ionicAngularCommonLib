import { EventEmitter, NgZone, OnInit } from '@angular/core';
import { AlertController } from "@ionic/angular";
import { Storage } from '@ionic/storage-angular';
import * as i0 from "@angular/core";
export declare class SettingsEntryComponent implements OnInit {
    private alertController;
    private zone;
    private storage;
    id: string;
    title?: string;
    subtitle?: string;
    values?: any[];
    defaultValue?: any;
    validator?: (value: any) => Promise<boolean>;
    valueResolver?: (value: any) => string;
    onClick: EventEmitter<MouseEvent>;
    onChange: EventEmitter<any>;
    getSelectedValue(): Promise<any>;
    constructor(alertController: AlertController, zone: NgZone, storage: Storage);
    ngOnInit(): Promise<void>;
    onClickEvent($event: MouseEvent): Promise<void>;
    private resolveValue;
    private change;
    static ɵfac: i0.ɵɵFactoryDeclaration<SettingsEntryComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SettingsEntryComponent, "settings-entry", never, { "id": { "alias": "id"; "required": false; }; "title": { "alias": "title"; "required": false; }; "subtitle": { "alias": "subtitle"; "required": false; }; "values": { "alias": "values"; "required": false; }; "defaultValue": { "alias": "defaultValue"; "required": false; }; "validator": { "alias": "validator"; "required": false; }; "valueResolver": { "alias": "valueResolver"; "required": false; }; }, { "onClick": "onClick"; "onChange": "onChange"; }, never, never, false, never>;
}
