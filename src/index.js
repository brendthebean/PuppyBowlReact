import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client'
import ShowAllPlayers from './showAllPlayers';

const appElement = document.getElementById("root");

const root = createRoot(appElement);

const App = () => {
    return (
        <>            
            <ShowAllPlayers />
        </>            
    )
}

root.render(<App />);