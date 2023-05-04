import { useAppSelector } from "../store/hooks";
import { createCanvas, loadImage } from "canvas";
import { useCallback, useState } from "react";
import bg_template from "../assets/template.jpg";
import { drawCanvas } from "../utils/DrawCanvas";

const PlayerImage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [previewSrc, setPreviewSrc] = useState<string>("");

  const image = useAppSelector((state) => state.manageImage.src);
  const position = useAppSelector((state) => state.manageImage.posicao);
  const name = useAppSelector((state) => state.manageImage.nome);

  const downloadImage = useCallback(async () => {
    setLoading(true);

    const canvas = createCanvas(800, 520);
    const ctx = canvas.getContext("2d");

    const background = await loadImage(bg_template);
    const player = await loadImage(image ?? "");

    drawCanvas(canvas, ctx, background, player, name, position);

    const dataURL = canvas.toDataURL();
    setPreviewSrc(dataURL);
    const link = document.createElement("a");
    link.download = "imagem.png";
    link.href = dataURL;
    link.click();
    setLoading(false);
  }, [image, name, position]);

  // Verifica se a imagem foi alterada ou não e usa o template padrão se não houver alterações
  const hasChanged =
    image !== "" && position !== "" && name !== "" && image !== null;
  const defaultPreviewSrc = hasChanged ? "" : bg_template;

  return (
    <>
      {loading ? (
        <div className="text-center">Carregando...</div>
      ) : (
        <div
          className="relative bg-cover bg-center w-full h-full"
          style={{
            backgroundImage: `url(${previewSrc || defaultPreviewSrc})`,
          }}
        ></div>
      )}
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
