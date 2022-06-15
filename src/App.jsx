
import About from "./components/About";
import AllInOne from "./components/AllInOne";
import Footer from "./components/Footer";
import Home from "./components/Home";
import LoginOne from "./components/login/LoginOne";
import LoginThree from "./components/login/LoginThree";
import LoginTwo from "./components/login/LoginTwo";
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
    <LoginOne/>
    <LoginTwo/>
    <LoginThree/>
      {/* <NavBar Menus={Menus} />
      <Home/>
      <About/>
      <Support/>
      <AllInOne/>
      <Pricing/>
      <Footer/> */}
    </>

  )
}

export default App;