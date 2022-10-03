import Header from "./components/Header/Header";
import "./App.css";
import ImageCarousal from "./components/ImageCarousel/ImageCarousal";
import Service from "./components/Service/Service";
import Product from "./components/Product/Product";
import BottomNav from "./components/BottomNav/BottomNav";

function App() {
  return (
    <div>
      <Header />
      <ImageCarousal />
      <Service />
      <Product />
      <BottomNav />
    </div>
  );
}

export default App;
