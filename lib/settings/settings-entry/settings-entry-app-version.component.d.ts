import { OnInit } from "@angular/core";
import { AppVersion } from '@awesome-cordova-plugins/app-version/ngx';
import { TranslateService } from "@ngx-translate/core";
import { Localizable } from "../../common/localizable";
import * as i0 from "@angular/core";
export declare class SettingsEntryAppVersionComponent extends Localizable implements OnInit {
    private appVersion;
    title: string;
    constructor(appVersion: AppVersion, translateService: TranslateService);
    ngOnInit(): Promise<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SettingsEntryAppVersionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SettingsEntryAppVersionComponent, "settings-entry-app-version", never, {}, {}, never, never, false, never>;
}
