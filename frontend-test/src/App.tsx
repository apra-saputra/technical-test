import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import ContentPage from "./pages/ContentPage";

function App() {
  console.log(import.meta.env.REACT_APP_API_URL);

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path="/content/:menuid" element={<ContentPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
