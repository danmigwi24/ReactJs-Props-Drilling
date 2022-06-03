
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

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
    <div className="">
      <NavBar Menus={Menus} />
      {/* <SideBar Menus={Menus} /> */}
    </div>

  )
}

export default App;