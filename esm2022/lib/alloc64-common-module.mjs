import { NgModule } from '@angular/core';
import { DefaultImagePipe } from "./pipes/default-image.pipe";
import { FormatFileSizePipe } from "./pipes/format-file-size.pipe";
import { ConvertFileSrcPipe } from "./pipes/convert-file-src.pipe";
import { TranslatePipe } from "./pipes/translate.pipe";
import { DefaultImageDirective } from "./directives/default-image.directive";
import { AndroidStringsTranslateLoader } from "./common/android-strings-translate-loader";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { HttpClient } from "@angular/common/http";
import { SettingsEntryComponent } from "./settings/settings-entry/settings-entry.component";
import { SettingsEntryAppVersionComponent } from "./settings/settings-entry/settings-entry-app-version.component";
import { IonicModule } from "@ionic/angular";
import { IonicStorageModule } from "@ionic/storage-angular";
import { CommonModule } from "@angular/common";
import { BaseAppComponent } from "./common/base-app-component";
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
import * as i2 from "@ionic/angular";
import * as i3 from "@ionic/storage-angular";
export function createTranslateLoader(http) {
    return new AndroidStringsTranslateLoader(http);
}
export class Alloc64CommonModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: Alloc64CommonModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: Alloc64CommonModule, bootstrap: [Alloc64CommonModule], declarations: [BaseAppComponent,
            DefaultImagePipe,
            FormatFileSizePipe,
            ConvertFileSrcPipe,
            TranslatePipe,
            DefaultImageDirective,
            SettingsEntryComponent,
            SettingsEntryAppVersionComponent], imports: [TranslateModule, i1.TranslateModule, IonicModule,
            CommonModule, i2.IonicModule, i3.IonicStorageModule], exports: [BaseAppComponent,
            DefaultImagePipe,
            FormatFileSizePipe,
            ConvertFileSrcPipe,
            TranslatePipe,
            DefaultImageDirective,
            SettingsEntryComponent,
            SettingsEntryAppVersionComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: Alloc64CommonModule, imports: [TranslateModule,
            TranslateModule.forRoot({
                loader: {
                    provide: TranslateLoader,
                    useFactory: (createTranslateLoader),
                    useClass: AndroidStringsTranslateLoader,
                    deps: [HttpClient]
                },
                defaultLanguage: 'en'
            }),
            IonicModule,
            CommonModule,
            IonicModule.forRoot(),
            IonicStorageModule.forRoot()] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: Alloc64CommonModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        BaseAppComponent,
                        DefaultImagePipe,
                        FormatFileSizePipe,
                        ConvertFileSrcPipe,
                        TranslatePipe,
                        DefaultImageDirective,
                        SettingsEntryComponent,
                        SettingsEntryAppVersionComponent,
                    ],
                    imports: [
                        TranslateModule,
                        TranslateModule.forRoot({
                            loader: {
                                provide: TranslateLoader,
                                useFactory: (createTranslateLoader),
                                useClass: AndroidStringsTranslateLoader,
                                deps: [HttpClient]
                            },
                            defaultLanguage: 'en'
                        }),
                        IonicModule,
                        CommonModule,
                        IonicModule.forRoot(),
                        IonicStorageModule.forRoot(),
                    ],
                    exports: [
                        BaseAppComponent,
                        DefaultImagePipe,
                        FormatFileSizePipe,
                        ConvertFileSrcPipe,
                        TranslatePipe,
                        DefaultImageDirective,
                        SettingsEntryComponent,
                        SettingsEntryAppVersionComponent
                    ],
                    bootstrap: [
                        Alloc64CommonModule
                    ],
                }]
        }] });
