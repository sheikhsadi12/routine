import React, { useEffect } from 'react';
import { useSettingsStore } from '../store/settings';

export function useTheme() {
  const { mode, theme, customColor, font, customFont } = useSettingsStore();

  useEffect(() => {
    const root = window.document.documentElement;

    // Handle Mode (Dark/Light/System)
    const applyMode = () => {
      if (mode === 'system') {
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        root.setAttribute('data-theme', systemTheme);
      } else {
        root.setAttribute('data-theme', mode);
      }
    };

    applyMode();

    // Listen for system theme changes if in system mode
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (mode === 'system') applyMode();
    };
    mediaQuery.addEventListener('change', handleChange);

    // Handle Color Theme
    root.setAttribute('data-color', theme);
    
    // Apply Custom Color if selected
    if (theme === 'custom') {
      root.style.setProperty('--primary', customColor);
      // Convert hex to rgba for muted primary
      const hex = customColor.replace('#', '');
      const r = parseInt(hex.substring(0, 2), 16);
      const g = parseInt(hex.substring(2, 4), 16);
      const b = parseInt(hex.substring(4, 6), 16);
      root.style.setProperty('--primary-muted', `rgba(${r}, ${g}, ${b}, 0.1)`);
    } else {
      root.style.removeProperty('--primary');
      root.style.removeProperty('--primary-muted');
    }

    // Handle Font
    if (font === 'custom') {
      root.style.setProperty('--font-family', `"${customFont}", sans-serif`);
    } else {
      root.style.setProperty('--font-family', `"${font}", sans-serif`);
    }

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [mode, theme, customColor, font, customFont]);
}
