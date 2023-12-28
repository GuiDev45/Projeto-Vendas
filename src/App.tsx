import { BrowserRouter } from "react-router-dom";
import RoutesApp from "./RoutesApp";
import Sidenav from "./components/Sidenav/Sidenav";
import Header from "./components/Header/Header";

export default function App() {
  return (
    <BrowserRouter>
      <>
        <Sidenav />
        <main>
          <Header />
          <RoutesApp />
        </main>
      </>
    </BrowserRouter>
  );
}
