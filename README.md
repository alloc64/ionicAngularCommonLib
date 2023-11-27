# Ionic Angular Common Library

This library contains common components, directives, and services used across Ionic Angular projects.
Most of the components is used by importing the `Alloc64CommonModule` into your module.

## Pre-requisites
Extend your AppComponent with BaseAppComponent, to enable localizations and theme changes.

```typescript
export class AppComponent extends BaseAppComponent {
  constructor(storage: Storage,
  themeService: ThemeService,
  translateService: TranslateService) {
  super(storage, themeService, translateService);
  
  }
}
```

## Translation
Custom AndroidStringsTranslateLoader for ngx-translate that loads strings from Android XML files.
Supports Android XML localization files loaded from the `assets/res/values` folder.

### Usage
```angular2html
<ion-title> {{'Settings' | translate: 'settings' }}</ion-title>
```
or extend Localizable class and use
```typescript
protected getString(defaultValue: string, key: string, params?: any): string;
protected getStringAsync(key: string, params?: any): Observable<any>;
```

To force application to change user language, call the following to set target language:

```typescript
constructor(protected translateService: TranslateService) {
  this.translateService.use(this.translateService.getBrowserLang() || "en");
}
```

## Pipes and Directives
`DefaultImageDirective` - Directive that sets a default image if the image fails to load. 
See the inputs for configuration.

`ConvertFileSrcPipe` - Pipe that converts a file path to a safe url using `Capacitor.convertFileSrc(url)`.
DefaultImagePipe - Pipe that sets a default image if the image fails to load, example: 

```angular2html
      <ion-thumbnail slot="start" class="icon">
        <img [src]="iconUri | convertFileSrc | defaultImage"/>
      </ion-thumbnail>
```

`FormatFileSizePipe` - Pipe that formats a file size in bytes to a human-readable format.

## Settings
Library provides default implementation of settings page, that can be used in your application.
See `settings-entry` and `settings-entry-app-version` components and it's inputs.

```angular2html

<ion-header class="ion-no-border">
  <ion-toolbar>
    <ion-title>
      {{'Settings' | translate: 'settings' }}
    </ion-title>
    <ion-buttons slot="start">
      <ion-back-button default-href="#"></ion-back-button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>
<ion-content [fullscreen]="true">
  <ion-list lines="none">
    <settings-entry id="consent"
                    [title]="'Change user consent' | translate: 'change_user_consent'"
                    (onClick)="changeConsent($event)">
    </settings-entry>
    <settings-entry-app-version></settings-entry-app-version>
  </ion-list>
</ion-content>
```

## Theme
Library provides simple theme changes, that can be used in your application.
Theming is based on CSS classes added to body tag.

Use the https://ionicframework.com/docs/theming/color-generator to generate your own theme.

Then create your theme file in `src/theme/variables.red.scss`:
  
```scss
body.red { 
  // values from https://ionicframework.com/docs/theming/color-generator
  // --ion-color-primary: #ff0000;
  // ...
}
```

Then import your theme in `src/theme/variables.scss`, where variables.scss is file provided from ionic project:

```scss
@import "variables.red"; // add your theme here

/** Ionic CSS Variables **/
:root {
  // ... rest of the default variables 
}
```

If you use custom AppComponent, dont forget to call `this.themeService.use()` where themeService is type of ThemeService in constructor.

Theme change can be triggered by calling `this.themeService.use('red')` where themeService is type of ThemeService.
