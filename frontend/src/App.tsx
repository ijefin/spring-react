import Header from "./components/Header/Header";
import SalesCard from "./components/Cards/SalesCard";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer />
      <Header />
      <main className="dsmeta-container">
        <section id="sales">
          <SalesCard />
        </section>
      </main>
    </>
  );
}

export default App;
