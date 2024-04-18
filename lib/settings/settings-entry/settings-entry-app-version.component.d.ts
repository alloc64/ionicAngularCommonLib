import { NgZone, OnInit } from "@angular/core";
import { Localizable } from "../../common/localizable";
import * as i0 from "@angular/core";
export declare class SettingsEntryAppVersionComponent extends Localizable implements OnInit {
    private zone;
    values: string[];
    subtitle: string;
    counter: number;
    constructor(zone: NgZone);
    ngOnInit(): void;
    onClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SettingsEntryAppVersionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SettingsEntryAppVersionComponent, "settings-entry-app-version", never, {}, {}, never, never, false, never>;
}
