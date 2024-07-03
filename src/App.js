import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import MarketPage from "./pages/MarketPage";
import ItemDescriptionPage from "./pages/ItemDescriptionPage";
import CheckoutPage from "./pages/CheckoutPage";
import CartDetailsPage from "./pages/CartDetailsPage";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/marketpage":
        title = "";
        metaDescription = "";
        break;
      case "/itemdescriptionpage":
        title = "";
        metaDescription = "";
        break;
      case "/checkoutpage":
        title = "";
        metaDescription = "";
        break;
      case "/cartdetailspage":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/marketpage" element={<MarketPage />} />
      <Route path="/itemdescriptionpage" element={<ItemDescriptionPage />} />
      <Route path="/checkoutpage" element={<CheckoutPage />} />
      <Route path="/cartdetailspage" element={<CartDetailsPage />} />
    </Routes>
  );
}
export default App;
