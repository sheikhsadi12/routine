import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type ThemeMode = 'light' | 'dark' | 'system';
export type ThemeColor = 'blue' | 'purple' | 'emerald' | 'amber' | 'rose' | 'custom';
export type FontFamily = 'Inter' | 'Outfit' | 'Space Grotesk' | 'Playfair Display' | 'JetBrains Mono' | 'custom';

interface SettingsState {
  mode: ThemeMode;
  theme: ThemeColor;
  customColor: string;
  font: FontFamily;
  customFont: string;
  setMode: (mode: ThemeMode) => void;
  setTheme: (theme: ThemeColor) => void;
  setCustomColor: (color: string) => void;
  setFont: (font: FontFamily) => void;
  setCustomFont: (font: string) => void;
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      mode: 'system',
      theme: 'blue',
      customColor: '#64b5f6',
      font: 'Inter',
      customFont: 'Arial',
      setMode: (mode) => set({ mode }),
      setTheme: (theme) => set({ theme }),
      setCustomColor: (customColor) => set({ customColor }),
      setFont: (font) => set({ font }),
      setCustomFont: (customFont) => set({ customFont }),
    }),
    {
      name: 'hsc-routine-settings',
    }
  )
);
