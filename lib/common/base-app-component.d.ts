import { Storage } from '@ionic/storage-angular';
import { ThemeService } from "../theme/theme.service";
import * as i0 from "@angular/core";
export declare class BaseAppComponent {
    protected storage: Storage;
    protected themeService: ThemeService;
    constructor(storage: Storage, themeService: ThemeService);
    ngOnInit(): Promise<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<BaseAppComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BaseAppComponent, "ng-component", never, {}, {}, never, never, false, never>;
}
