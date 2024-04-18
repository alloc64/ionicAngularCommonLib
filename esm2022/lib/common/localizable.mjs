export class Localizable {
    static registerTranslations(translations) {
        for (let locale of Object.keys(translations)) {
            let splits = locale.split("-");
            if (splits.length == 2) {
                const language = splits[0];
                if (!translations[language])
                    translations[language] = translations[locale];
            }
        }
        return translations;
    }
    getString(defaultValue, key, params) {
        if (!translations)
            return defaultValue;
        let n = navigator;
        const locale = n.language || n.userLanguage;
        let value = Localizable.getStringByLocaleFallback(locale, key);
        if (!value)
            value = Localizable.getStringByLocaleFallback("en-US", key) || defaultValue;
        return value.replace("\\n", "\n");
    }
    /**
     * all the methods in Localizable must be static or inlined, because somehow the prototype chain is not working
     * and the methods are not found if used as (super.getString() and so on.)
     */
    static getStringByLocaleFallback(locale, key) {
        if (translations[locale])
            return translations[locale][key];
        const splits = locale.split("-");
        if (splits.length == 2) {
            const language = splits[0];
            return translations[language][key];
        }
        return undefined;
    }
}
