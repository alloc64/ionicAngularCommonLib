export declare abstract class Localizable {
    static registerTranslations(translations: {
        [key: string]: {
            [key: string]: string;
        };
    }): any;
    getString(key: string, defaultValue?: string): string;
    /**
     * all the methods in Localizable must be static or inlined, because somehow the prototype chain is not working
     * and the methods are not found if used as (super.getString() and so on.)
     */
    static getStringByLocaleFallback(locale: string, key: string): string | undefined;
}
