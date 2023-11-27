import * as i0 from "@angular/core";
export declare class DefaultImageDirective {
    src?: string;
    defaultImg: string;
    onError(): void;
    checkPath(src: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<DefaultImageDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<DefaultImageDirective, "img[src]", never, { "src": { "alias": "src"; "required": false; }; "defaultImg": { "alias": "defaultImg"; "required": false; }; }, {}, never, never, false, never>;
}
