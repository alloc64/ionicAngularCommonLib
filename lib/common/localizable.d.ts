import { TranslateService } from "@ngx-translate/core";
import { Observable } from "rxjs";
export declare abstract class Localizable {
    protected translateService: TranslateService;
    protected constructor(translateService: TranslateService);
    protected getString(defaultValue: string, key: string, params?: any): string;
    protected getStringAsync(key: string, params?: any): Observable<any>;
}
