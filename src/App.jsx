import { useState } from "react";
import Toolbar from "./components/Toolbar";
import CanvasEditor from "./components/CanvasEditor";

function App() {
  const [canvasRef, setCanvasRef] = useState(null);

  return (
    <div className="flex h-screen">
      <Toolbar canvasRef={canvasRef} />
      <CanvasEditor setCanvasRef={setCanvasRef} />
    </div>
  );
}

export default App;

