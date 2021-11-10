import "./App.scss";
import Header from "./components/Header/Header";
import ProductPage from "./components/ProductPage/ProductPage";
import Attribution from "./components/Attribution/Attribution";

function App() {
  return (
    <div className="container">
      <Header />
      <ProductPage />
      <Attribution />
    </div>
  );
}

export default App;
