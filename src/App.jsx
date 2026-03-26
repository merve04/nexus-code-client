import { useState } from "react";
import Navbar from "./Navbar";
import Main from "./MainContent";
import Footer from "./Footer";
import LoginModal from "./LoginModal";
function App() {
  const [isModalOpen,setIsModalOpen] = useState(false);
  return (
    <div className="bg-[#08090a] min-h-screen">
      <Navbar setIsModalOpen={setIsModalOpen} />
      <Main />
      <Footer />
      {isModalOpen && <LoginModal setIsModalOpen={setIsModalOpen} />}    </div>
  );
}

export default App;
