import { TranslateLoader } from "@ngx-translate/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
export declare class AndroidStringsTranslateLoader implements TranslateLoader {
    private http;
    constructor(http: HttpClient);
    getTranslation(lang: string): Observable<any>;
}
