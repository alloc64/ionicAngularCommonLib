import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export declare class DefaultImagePipe implements PipeTransform {
    transform(url: string | undefined, fallback?: string): string | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<DefaultImagePipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<DefaultImagePipe, "defaultImage", false>;
}
