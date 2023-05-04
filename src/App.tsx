import Form from "./components/Form";
import ResultPreview from "./components/ResultPreview";
import "./index.css";

function App() {
  return (
    <>
      <div className="min-h-screen bg-zinc-800  flex flex-col-reverse md:flex-row justify-center py-12 sm:px-6 lg:px-8">
        <ResultPreview />
        <div className="sm:mt-2  sm:w-full sm:max-w-md md:mt-12">
          <Form />
        </div>
      </div>
      <footer className="w-full text-center bg-zinc-600">
        <h1 className="font-bold">
          Developed By{" "}
          <a
            href="https://github.com/higordevv"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            Higor
          </a>
        </h1>
      </footer>
    </>
  );
}

export default App;
