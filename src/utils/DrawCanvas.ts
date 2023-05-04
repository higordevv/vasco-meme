import {
  CanvasRenderingContext2D,
  Canvas,
  Image,
} from "canvas";

type DrawCanvas = (
  canvas: Canvas,
  ctx: CanvasRenderingContext2D,
  background: Image,
  player: Image | Canvas,
  name: string | null,
  position: string | null
) => void;

const drawCanvas: DrawCanvas = (
  canvas,
  ctx,
  background,
  player,
  name,
  position
) => {
  // Desenha o fundo
  ctx.drawImage(background, -20, 0, canvas.width, canvas.height);

  // Desenha o jogador
  const playerWidth = canvas.width * 0.25;
  const playerHeight = canvas.height * 0.25;
  const playerX = canvas.width * 0.08;
  const playerY = canvas.height * 0.35;
  ctx.drawImage(player, playerX, playerY, playerWidth, playerHeight);

  // Escreve o nome do jogador
  ctx.font = "bold 60px Arial";
  ctx.textAlign = "center";
  ctx.fillStyle = "white";
  ctx.fillText(name ?? "", canvas.width * 0.60, canvas.height * 0.500 );

  // Escreve a posição do jogador
  ctx.font = "bold 27px Arial";
  ctx.fillText(position ?? "", canvas.width * 0.60, canvas.height * 0.600 );
};

export { drawCanvas };  
