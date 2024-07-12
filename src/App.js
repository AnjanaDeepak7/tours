import Loading from "./components/Loading";

const url = "https://course-api.com/react-tours-project";
function App() {
  return (
    <>
      <h1> Our Tours</h1>
      <Loading url={url} />
    </>
  );
}

export default App;
