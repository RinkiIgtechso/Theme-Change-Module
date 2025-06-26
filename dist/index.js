var currentThemeIndex = 0;
export function setupThemeSwitcher(options) {
    var themes = options.themes, _a = options.storageKey, storageKey = _a === void 0 ? 'theme' : _a, _b = options.defaultTheme, defaultTheme = _b === void 0 ? themes[0] : _b;
    var storedTheme = localStorage.getItem(storageKey);
    var intialTheme = storedTheme || defaultTheme;
    applyTheme(intialTheme, storageKey);
    currentThemeIndex = themes.indexOf(intialTheme);
    if (currentThemeIndex === -1) {
        currentThemeIndex = 0; // Fallback to the first theme if the stored theme is not found
    }
}
export function toggleTheme(themes, storgaeKey) {
    if (storgaeKey === void 0) { storgaeKey = 'theme'; }
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    applyTheme(themes[currentThemeIndex], storgaeKey);
}
function applyTheme(theme, storgaeKey) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(storgaeKey, theme);
}
