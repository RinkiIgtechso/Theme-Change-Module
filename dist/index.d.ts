type Theme = string;
interface Options {
    themes: Theme[];
    storageKey?: string;
    defaultTheme?: string;
}
export declare function setupThemeSwitcher(options: Options): void;
export declare function toggleTheme(themes: Theme[], storgaeKey?: string): void;
export {};
