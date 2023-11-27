export class Localizable {
    constructor(translateService) {
        this.translateService = translateService;
    }
    getString(defaultValue, key, params) {
        if (!this.translateService)
            return defaultValue;
        return this.translateService.instant(key, params) || defaultValue;
    }
    getStringAsync(key, params) {
        return this.translateService.get(key, params);
    }
}
