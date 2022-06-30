import React from 'react';
import { createRoot } from 'react-dom/client';
import { GifApp } from './GifApp';
import './style.css'

createRoot(document.querySelector('#root')).render(
    <React.StrictMode> 
        <GifApp />
    </React.StrictMode>
);