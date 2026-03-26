import React from 'react';
import { Settings, X, Moon, Sun, Monitor, Palette, Type, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useSettingsStore, ThemeMode, ThemeColor, FontFamily } from '../store/settings';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SettingsModal({ isOpen, onClose }: SettingsModalProps) {
  const {
    mode, setMode,
    theme, setTheme,
    customColor, setCustomColor,
    font, setFont,
    customFont, setCustomFont
  } = useSettingsStore();

  const modes: { id: ThemeMode; label: string; icon: React.ReactNode }[] = [
    { id: 'light', label: 'Light', icon: <Sun size={16} /> },
    { id: 'dark', label: 'Dark', icon: <Moon size={16} /> },
    { id: 'system', label: 'System', icon: <Monitor size={16} /> },
  ];

  const themes: { id: ThemeColor; label: string; color: string }[] = [
    { id: 'blue', label: 'Ocean', color: '#64b5f6' },
    { id: 'purple', label: 'Amethyst', color: '#a78bfa' },
    { id: 'emerald', label: 'Emerald', color: '#34d399' },
    { id: 'amber', label: 'Amber', color: '#fbbf24' },
    { id: 'rose', label: 'Rose', color: '#fb7185' },
    { id: 'custom', label: 'Custom', color: customColor },
  ];

  const fonts: { id: FontFamily; label: string }[] = [
    { id: 'Inter', label: 'Inter (Default)' },
    { id: 'Outfit', label: 'Outfit (Modern)' },
    { id: 'Space Grotesk', label: 'Space Grotesk (Tech)' },
    { id: 'Playfair Display', label: 'Playfair (Elegant)' },
    { id: 'JetBrains Mono', label: 'JetBrains (Code)' },
    { id: 'custom', label: 'Custom Font' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 max-w-[480px] mx-auto bg-bg-surface border-t border-border-subtle rounded-t-3xl z-50 max-h-[85vh] overflow-y-auto shadow-2xl"
          >
            <div className="sticky top-0 bg-bg-surface/90 backdrop-blur-md border-b border-border-subtle p-4 flex justify-between items-center z-10">
              <div className="flex items-center gap-2">
                <div className="bg-primary-muted p-2 rounded-full">
                  <Settings size={18} className="text-primary" />
                </div>
                <h2 className="text-lg font-bold text-text-main">Appearance</h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-bg-surface-hover text-text-muted transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-5 space-y-8">
              {/* Mode Section */}
              <section>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-bold text-text-muted uppercase tracking-wider flex items-center gap-2">
                    <Monitor size={14} /> Theme Mode
                  </h3>
                  <span className="text-[9px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-bold uppercase tracking-tighter border border-primary/20">
                    Premium
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {modes.map((m) => (
                    <button
                      key={m.id}
                      onClick={() => setMode(m.id)}
                      className={`flex flex-col items-center gap-2 p-3 rounded-xl border transition-all ${
                        mode === m.id
                          ? 'bg-primary-muted border-primary text-primary'
                          : 'bg-bg-surface-hover border-border-subtle text-text-muted hover:text-text-main'
                      }`}
                    >
                      {m.icon}
                      <span className="text-xs font-medium">{m.label}</span>
                    </button>
                  ))}
                </div>
              </section>

              {/* Color Theme Section */}
              <section>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-bold text-text-muted uppercase tracking-wider flex items-center gap-2">
                    <Palette size={14} /> Accent Color
                  </h3>
                  <span className="text-[9px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-bold uppercase tracking-tighter border border-primary/20">
                    Premium
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {themes.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setTheme(t.id)}
                      className={`flex items-center gap-3 p-3 rounded-xl border transition-all ${
                        theme === t.id
                          ? 'bg-primary-muted border-primary text-primary'
                          : 'bg-bg-surface-hover border-border-subtle text-text-main hover:border-text-muted/30'
                      }`}
                    >
                      <div className="w-6 h-6 rounded-full flex items-center justify-center border border-white/10 shadow-sm" style={{ backgroundColor: t.color }}>
                        {theme === t.id && <Check size={12} className="text-white drop-shadow-md" />}
                      </div>
                      <span className="font-medium text-sm">{t.label}</span>
                    </button>
                  ))}
                </div>
                
                {theme === 'custom' && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-4 p-4 bg-bg-surface-hover rounded-xl border border-border-subtle"
                  >
                    <label className="block text-xs font-medium text-text-muted mb-2">Primary Color (Hex)</label>
                    <div className="flex gap-3">
                      <input
                        type="color"
                        value={customColor}
                        onChange={(e) => setCustomColor(e.target.value)}
                        className="w-10 h-10 rounded cursor-pointer bg-transparent border-0 p-0"
                      />
                      <input
                        type="text"
                        value={customColor}
                        onChange={(e) => setCustomColor(e.target.value)}
                        className="flex-1 bg-bg-surface border border-border-subtle rounded-lg px-3 text-sm text-text-main focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                  </motion.div>
                )}
              </section>

              {/* Font Section */}
              <section>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-bold text-text-muted uppercase tracking-wider flex items-center gap-2">
                    <Type size={14} /> Typography
                  </h3>
                  <span className="text-[9px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-bold uppercase tracking-tighter border border-primary/20">
                    Premium
                  </span>
                </div>
                <div className="space-y-2">
                  {fonts.map((f) => (
                    <button
                      key={f.id}
                      onClick={() => setFont(f.id)}
                      className={`w-full flex items-center justify-between p-3 rounded-xl border transition-all ${
                        font === f.id
                          ? 'bg-primary-muted border-primary text-primary'
                          : 'bg-bg-surface-hover border-border-subtle text-text-main hover:border-text-muted/30'
                      }`}
                      style={{ fontFamily: f.id !== 'custom' ? `"${f.id}", sans-serif` : undefined }}
                    >
                      <span className="font-medium">{f.label}</span>
                      {font === f.id && <Check size={16} />}
                    </button>
                  ))}
                </div>

                {font === 'custom' && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-4 p-4 bg-bg-surface-hover rounded-xl border border-border-subtle"
                  >
                    <label className="block text-xs font-medium text-text-muted mb-2">Custom Font Family</label>
                    <div className="space-y-3">
                      <input
                        type="text"
                        value={customFont}
                        onChange={(e) => setCustomFont(e.target.value)}
                        placeholder="e.g., 'Outfit', sans-serif"
                        className="w-full bg-bg-surface border border-border-subtle rounded-lg px-3 py-2 text-sm text-text-main focus:outline-none focus:border-primary transition-colors"
                      />
                      <p className="text-[10px] text-text-muted leading-relaxed">
                        Enter any system font name or a font family string. 
                        <br />
                        <span className="text-primary/70 font-bold">Tip:</span> You can use fonts like 'Courier New', 'Georgia', etc.
                      </p>
                    </div>
                  </motion.div>
                )}
              </section>
              
              <div className="pb-6"></div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
