# react-theme-toggle-rinki

Easily toggle between light/dark/custom themes using `data-theme`.

## 📦 Install

```bash 
npm install react-theme-toggle-rinki
```

## How to use it?
``` 
// App.tsx
import { useEffect } from 'react';
import { setupThemeSwitcher, toggleTheme } from 'react-theme-toggle-rinki';

const themes = ['light', 'dark'];

function App() {
  useEffect(() => {
    setupThemeSwitcher({ themes });
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Theme Toggle Test</h1>
      <button onClick={() => toggleTheme(themes)}>Toggle Theme</button>
    </div>
  );
}

export default App;
```