import { useState } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const SideBar = ({Menus}) => {

  const [open, setOpen] = useState(true)

  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal=()=> {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }


  return (
    <div className={`flex h-screen sticky`}>
      <div className={`${open ? "w-70" : "w-20"}  p-5 pt-10 duration-300 h-screen bg-green-500 relative`}>

        <img 
        src="./arrow.png" 
        alt="navigate" 
        className={`rounded-full w-12 h-12 border-green-500 border-2 cursor-pointer top-2 absolute -right-5 hover:animate-bounce ${open && "rotate-180"} `} onClick={() => setOpen(!open)} />
        <div 
        className={`flex gap-x-5 p-1 hover:bg-green-400 hover:animate-bounce hover:rounded-md`}>
          <img src="./ecl.jpeg"
            alt="logo"
            className={`  rounded-full cursor-pointer w-12 h-12 hover:animate-spin`} />
          <span className={`font-bold text-white text-3xl origin-left ${!open && "scale-0"}`}>Dan Home</span>
        </div>
        <ul className={`pt-5 `}>
          {Menus.map((menu, index) => (
            <li
              key={index}
              className={`text-white text-sm flex items-center gap-x-4 cursor-pointer hover:animate-bounce p-2 hover:bg-green-400 hover:rounded-md ${menu.gap ? "mt-8" : "mt-2"}`} 
              
              >
              <img
                src={`./ecl.jpeg`}
                alt="menu logo"
                className={`w-8 h-8 rounded-full border-2 border-white`}
              />
              <span className={`${!open && "hidden"} origin-left duration-300`}>{menu.name}</span>
            
            </li>
          ))}
        </ul>
      </div>
      <div className={`bg-white h-screen`}>

        <h1 className="p-10 text-3xl font-bold flex-1 ">Home </h1>
        <button className="ml-10 border-2 border-blue-500 p-5 text-blue-700" onClick={openModal}>Open Modal</button>
        <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
       style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button className="p-5 bg-blue-500 items-center ">tab navigation</button>
          <button className="p-5 bg-blue-500 items-center ">stays</button>
          <button className="p-5 bg-blue-500 items-center ">inside</button>
          <button className="p-5 bg-blue-500 items-center ">the modal</button>
        </form>
      </Modal>
       
      </div>
    </div>
  );
}

export default SideBar;
