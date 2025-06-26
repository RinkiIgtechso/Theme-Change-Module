type Theme = string;

interface Options{
    themes: Theme[];
    storageKey?: string;
    defaultTheme?: string;
}

let currentThemeIndex = 0;

export function setupThemeSwitcher(options: Options): void{
    const {
        themes,
        storageKey = 'theme',
        defaultTheme = themes[0]
    } = options;

    const storedTheme = localStorage.getItem(storageKey);
    const intialTheme = storedTheme || defaultTheme;

    applyTheme(intialTheme, storageKey);

    currentThemeIndex = themes.indexOf(intialTheme);
    if(currentThemeIndex === -1) {
        currentThemeIndex = 0; // Fallback to the first theme if the stored theme is not found
    }
}

export function toggleTheme(themes: Theme[], storgaeKey = 'theme') {
    currentThemeIndex = ( currentThemeIndex + 1 ) % themes.length;
    applyTheme(themes[currentThemeIndex], storgaeKey);
}

function applyTheme(theme: Theme, storgaeKey: string){
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(storgaeKey, theme);
}