
import { FiType, FiSquare, FiCircle, FiTrash, FiUpload } from "react-icons/fi";
import * as fabric from "fabric";
const Toolbar = ({ canvasRef }) => {
  const addText = () => {
    if (canvasRef) {
      const text = new fabric.IText("New Text", {
      left: 100,
      top: 50,
      fontSize: 20,
      fill: "black",
      editable: true,
    });
    canvasRef.add(text);
    canvasRef.setActiveObject(text); // Set focus to the new text
    canvasRef.renderAll();
  }
  };

  const addRectangle = () => {
    if (canvasRef) {
      const rect = new fabric.Rect({
        left: 150,
        top: 50,
        fill: "#3b82f6",
        width: 100,
        height: 60,
      });
      canvasRef.add(rect);
    }
  };

  const addCircle = () => {
    if (canvasRef) {
      const circle = new fabric.Circle({
        left: 200,
        top: 50,
        radius: 40,
        fill: "#ef4444",
      });
      canvasRef.add(circle);
    }
  };

  const deleteElement = () => {
    if (canvasRef) {
      const activeObject = canvasRef.getActiveObject();
      if (activeObject) {
        canvasRef.remove(activeObject);
      }
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (!file || !canvasRef) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const base64Image= e.target.result;
      const imgElement= document.createElement("img");
      imgElement.src = base64Image;
      imgElement.onload =() =>{
        const fabricImg= new fabric.Image(imgElement,{
          left:0,
          top:0
        })
        const canvasWidth =canvasRef.width;
        const canvasHeight = canvasRef.height;
        const scaleX = canvasWidth /imgElement.width;
        const scaleY = canvasHeight / imgElement.height;
        const scaleFactor = Math.min(scaleX,scaleY);
        fabricImg.scale(scaleFactor);

          fabricImg.set({
            left: (canvasWidth - fabricImg.getScaledWidth()/2),
            top: (canvasHeight - fabricImg.getScaledHeight()/2)
          })
          canvasRef.add(fabricImg);
          canvasRef.renderAll();

        
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="h-screen w-24 bg-gray-100 border-r shadow-lg flex flex-col items-center py-4 space-y-6">
      <button className="p-3 hover:bg-gray-200 rounded-lg" onClick={addText}>
        <FiType size={24} className="text-gray-700" />
      </button>
      <button className="p-3 hover:bg-gray-200 rounded-lg" onClick={addRectangle}>
        <FiSquare size={24} className="text-gray-700" />
      </button>
      <button className="p-3 hover:bg-gray-200 rounded-lg" onClick={addCircle}>
        <FiCircle size={24} className="text-gray-700" />
      </button>
      <button className="p-3 hover:bg-gray-200 rounded-lg" onClick={deleteElement}>
        <FiTrash size={24} className="text-gray-700" />
      </button>
      <label className="p-3 hover:bg-gray-200 rounded-lg cursor-pointer">
        <FiUpload size={24} className="text-gray-700" />
        <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
      </label>
    </div>
  );
};

export default Toolbar;

