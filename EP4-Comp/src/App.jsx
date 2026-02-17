import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";

function App() {
  let user = "Aomine";
  return (
    <div className="App">
      <Header user={user} />
      <Content />
      <Footer user="Daiki" />
    </div>
  );
}

export default App;
