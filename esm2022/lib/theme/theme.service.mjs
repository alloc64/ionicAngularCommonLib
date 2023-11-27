import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class ThemeService {
    static { this.THEME = 'theme'; }
    get theme() {
        return localStorage.getItem(ThemeService.THEME) || "";
    }
    set theme(value) {
        if (!value)
            return;
        try {
            let oldTheme = this.theme;
            if (oldTheme?.length > 0)
                document.body.classList.remove(oldTheme);
        }
        catch (e) {
        }
        document.body.classList.add(value);
        localStorage.setItem(ThemeService.THEME, value);
    }
    use() {
        this.theme = this.theme;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ThemeService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ThemeService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ThemeService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });
