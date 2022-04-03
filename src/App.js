import './App.css';
import Header from './Components/Header'
import React from 'react';
import Body from './Components/Body';
import { HTML5Backend } from "react-dnd-html5-backend"
import { DndProvider } from 'react-dnd';


function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <Header />
        <Body />
      </div>
    </DndProvider>
  );
}

export default App;
