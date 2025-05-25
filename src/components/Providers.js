// src/components/Providers.js
'use client'; // PENTING: Komponen ini harus Client Component

import { ThemeProvider } from '../context/ThemeContext';
// import { ReduxProvider } from './ReduxProvider'; // Jika Anda akan menggunakan Redux juga, import di sini

export default function Providers({ children }) {
  return (
    // <ReduxProvider> // Jika Anda punya ReduxProvider, bungkus di sini
      <ThemeProvider>
        {children}
      </ThemeProvider>
    // </ReduxProvider>
  );
}