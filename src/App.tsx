import { BrowserRouter } from "react-router-dom";
import RoutesApp from "./RoutesApp";
import Sidenav from "./components/Sidenav/Sidenav";
import { DataContextProvider } from "./context/DataContext";
import Header from "./components/Header/Header";

export default function App() {
  return (
    <BrowserRouter>
      <DataContextProvider>
        <>
          <Sidenav />
          <main>
            <Header />
            <RoutesApp />
          </main>
        </>
      </DataContextProvider>
    </BrowserRouter>
  );
}
