import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import TextStack from "./pages/Textstack/TextStack";
import Contact from "./pages/Contact/Contact";
function App() {
  return (
    <>
      <Layout />
      <div className="container">
        <About />
        <TextStack />
        <Contact />
      </div>
    </>
  );
}

export default App;
