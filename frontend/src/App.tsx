import NotificationButton from "./components/Buttons/NotificationButton/notificationButton";
import Header from "./components/Header/Header";
import SalesCard from "./components/cards/SalesCard/SalesCard";

function App() {
  return (
    <>
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
