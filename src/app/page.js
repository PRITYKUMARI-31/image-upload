'use client'
import { useState, useEffect } from "react";
import { addItem, getAllItems } from './api/indexedDB';

export default function Home() {
  const [image, setImage] = useState(null);
  const [imageList, setImageList] = useState([]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (image) {
      const { name, size } = image;
      const timestamp = new Date().toISOString();

      const reader = new FileReader();
      reader.onload = () => {
        const imageData = reader.result;
        const imageItem = {
          name,
          size,
          timestamp,
          image: imageData,
        };
        addItem('imagesDB', 'imagesStore', imageItem).then(() => {
          alert("Image uploaded");
          loadImages();
        });
      };
      reader.readAsDataURL(image);
    }
  };

  const loadImages = () => {
    getAllItems('imagesDB', 'imagesStore').then((items) => {
      setImageList(items);
    });
  };

  useEffect(() => {
    loadImages();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form onSubmit={onSubmitHandler} className="w-1/2 mx-auto flex flex-col gap-5">
        <input onChange={(e) => setImage(e.target.files[0])} type="file" name="" id="" />
        <div className="flex justify-center items-center mb-4">
          <button type="submit" className="px-12 py-3 mt-4 rounded text-black bg-blue-500">Upload</button>
        </div>
      </form>
      <div className="w-full flex flex-wrap">
        {imageList.map((cur, i) => (
          <div key={i} className="w-1/3 mx-auto p-4 border border-purple-500 ring-2">
            <img src={cur.image} alt={`image${i}`} />
            <div>Name: {cur.name}</div>
            <div>Size: {(cur.size / 1024).toFixed(2)} KB</div>
            <div>Uploaded At: {new Date(cur.timestamp).toLocaleString()}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
