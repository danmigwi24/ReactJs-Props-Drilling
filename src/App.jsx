
import About from "./components/About";
import AllInOne from "./components/AllInOne";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Pricing from "./components/Pricing";
import Support from "./components/Support";

const Menus = [
  { name: "Dashboard", src: "ecl", gap: false },
  { name: "Inbox", src: "ecl", gap: false },
  { name: "Accounts", src: "ecl", gap: true },
  { name: "Schedule", src: "ecl", gap: false },
  { name: "Search", src: "ecl", gap: false },
  { name: "Files", src: "ecl", gap: false },

]


const App = () => {

  return (
    <>
      <NavBar Menus={Menus} />
      <Hero/>
      <About/>
      <Support/>
      <AllInOne/>
      <Pricing/>
      <Footer/>
    </>

  )
}

export default App;