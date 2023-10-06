import { BrowserRouter, Route, Routes } from "react-router-dom";
import Decoration from "./components/Decoration";
import Dresses from "./components/Dresses";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import InnerSmartphone from "./components/InnerSmartphone";
import Smartphones from "./components/Smartphones";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/smartphones" element={<Smartphones />}>
            <Route path="inner/:id" element={<InnerSmartphone />} />
          </Route>
          <Route path="/decoration" element={<Decoration />} />
          <Route path="/dresses" element={<Dresses />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
