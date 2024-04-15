export declare abstract class Localizable {
    get locale(): any;
    protected getString(defaultValue: string, key: string, params?: any): string;
}
