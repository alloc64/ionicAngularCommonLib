import { TranslateService } from "@ngx-translate/core";
import { Storage } from '@ionic/storage-angular';
import { ThemeService } from "../theme/theme.service";
import * as i0 from "@angular/core";
export declare class BaseAppComponent {
    protected storage: Storage;
    protected themeService: ThemeService;
    protected translateService: TranslateService;
    constructor(storage: Storage, themeService: ThemeService, translateService: TranslateService);
    ngOnInit(): Promise<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<BaseAppComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BaseAppComponent, "ng-component", never, {}, {}, never, never, false, never>;
}
