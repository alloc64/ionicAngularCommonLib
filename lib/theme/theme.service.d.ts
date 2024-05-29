import * as i0 from "@angular/core";
export declare class ThemeService {
    private static THEME;
    get theme(): string | null;
    set theme(value: string | null);
    use(defaultTheme: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThemeService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ThemeService>;
}
