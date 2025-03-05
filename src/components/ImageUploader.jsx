import * as fabric from "fabric";


const ImageUploader = ({ canvasRef }) => {
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && canvasRef) {
      const reader = new FileReader();
      reader.onload = function (f) {
        fabric.Image.fromURL(f.target.result, (img) => {
          img.set({ left: 100, top: 100, scaleX: 0.5, scaleY: 0.5 });
          canvasRef.add(img);
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <input type="file" accept="image/*" onChange={handleImageUpload} className="border p-2 rounded" />
  );
};

export default ImageUploader;
