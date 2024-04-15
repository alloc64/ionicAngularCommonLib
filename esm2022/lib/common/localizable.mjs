export class Localizable {
    get locale() {
        let n = navigator;
        return n.language || n.userLanguage;
    }
    getString(defaultValue, key, params) {
        if (!translations)
            return defaultValue;
        let value = translations[this.locale]?.[key] || translations["en-US"]?.[key] || translations["en"]?.[key] || defaultValue;
        return value.replace("\\n", "\n");
    }
}
