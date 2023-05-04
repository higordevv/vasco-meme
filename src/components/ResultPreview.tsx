import PlayerImage from "./ImageBefore";

function ResultPreview() {

  return (
    <div className="mt-4 h-screen sm:w-full md:max-w-2xl sm:max-w-md  md:mt-12 flex flex-col text-center">
    <h1 className="text-white text-2xl md:text-4xl bg-black rounded-l-lg p-2">
      Preview
    </h1>
    <PlayerImage />
  </div>

  );
}

export default ResultPreview;
