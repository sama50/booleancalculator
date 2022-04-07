import './App.css';
import DregDraw from './Components/DregDraw';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";


function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <DregDraw />
      </div>
    </DndProvider>
      );
}

export default App;
