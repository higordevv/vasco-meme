/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from "react";
import html2canvas from "html2canvas";
import { useAppSelector } from "../store/hooks";

const PlayerImage = () => {
  const elementRef = useRef(null) as any;
  const downloadImage = () => {
    html2canvas(elementRef.current).then((canvas) => {
      const link = document.createElement("a");
      link.download = "imagem.png";
      link.href = canvas.toDataURL();
      link.click();
    });
  };
  const image = useAppSelector((state) => state.manageImage.src);
  const position = useAppSelector((state) => state.manageImage.posicao);
  const name = useAppSelector((state) => state.manageImage.nome);

  return (
    <>
      <div
        ref={elementRef}
        className="relative bg-cover bg-center w-full h-full"
        style={{
          backgroundImage: `url("/template.jpg")`,
        }}
      >
        <div className="absolute inset-0  text-white flex justify-center items-center">
          <div className="flex w-[80%] flex-row justify-between items-center  ">
            <img src={image ?? ""} alt="Player" className="w-48 mb-4 object-fill" />
            <div className="text-center mr-24 ">
              <h1 className="text-4xl font-bold">{name}</h1>
              <h1 className="text-2xl font-bold">{position}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full ">
        <button
          className="m-4 px-4 py-2 bg-white text-gray-700 rounded-md shadow-md"
          onClick={downloadImage}
        >
          Baixar
        </button>
      </div>
    </>
  );
};

export default PlayerImage;
