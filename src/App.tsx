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
    </>
  );
}

export default App;
