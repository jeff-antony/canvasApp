
import { useEffect, useRef } from "react";
import * as fabric from "fabric";

const CanvasEditor = ({ setCanvasRef }) => {
  const canvasEl = useRef(null);

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasEl.current, {
      width: 800,
      height: 500,
      backgroundColor: "white",
    });

    setCanvasRef(canvas);
    return () => canvas.dispose();
  }, [setCanvasRef]);

  return (
    <div className="flex-grow border-2 border-gray-300 shadow-md p-4">
      <canvas ref={canvasEl}></canvas>
    </div>
  );
};

export default CanvasEditor;
