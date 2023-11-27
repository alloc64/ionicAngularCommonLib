import { HttpHeaders } from "@angular/common/http";
import { map } from "rxjs";
import * as txml from "txml/dist/txml";
export class AndroidStringsTranslateLoader {
    constructor(http) {
        this.http = http;
    }
    getTranslation(lang) {
        let valuesFolder = lang == 'en' ? 'values' : `values-${lang}`;
        return this.http.get(`/assets/res/${valuesFolder}/strings.xml`, {
            headers: new HttpHeaders().set('Content-Type', 'text/xml'),
            responseType: 'text'
        }).pipe(map((response) => {
            let result = txml.parse(response);
            let resources = result?.length > 0 ? result[0] : null;
            const res = {};
            if (resources?.children?.length > 0) {
                resources?.children.forEach((e) => {
                    if (e.tagName == "string") {
                        let name = e.attributes["name"];
                        if (name && e.children?.length > 0) {
                            let val = e.children[0];
                            if (val.indexOf("\\n") >= 0)
                                val = val.replace("\\n", "\n");
                            res[name] = val;
                        }
                    }
                });
            }
            return res;
        }));
    }
}
