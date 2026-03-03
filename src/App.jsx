import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import TextStack from "./pages/Textstack/TextStack";

function App() {
  return (
    <>
      <Layout />
      <div className="container">
        <About />
        <TextStack />
      </div>
    </>
  );
}

export default App;
