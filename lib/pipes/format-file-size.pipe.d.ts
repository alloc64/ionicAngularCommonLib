import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export declare class FormatFileSizePipe implements PipeTransform {
    transform(sizeInBytes: number | undefined): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormatFileSizePipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<FormatFileSizePipe, "formatFileSize", false>;
}
