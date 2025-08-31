import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Suspense
      fallback={
        <div className="app-fallback">
          <div className="spinner" />
        </div>
      }
    >
      <Outlet />
    </Suspense>
  );
}

export default App;