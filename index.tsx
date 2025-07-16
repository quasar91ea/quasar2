/** @jsxRuntime classic */
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.js';
import ErrorBoundary from './components/common/ErrorBoundary.js';
import { NotificationProvider } from './contexts/NotificationContext.js';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <NotificationProvider>
        <App />
      </NotificationProvider>
    </ErrorBoundary>
  </React.StrictMode>
);