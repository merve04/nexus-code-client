function Navbar({ setIsModalOpen }) {
  return (
    <nav className="bg-[#08090a] sticky top-0 z-50 grid grid-cols-3 items-center px-10 text-[#edecec] font-serif py-2 text-xl font-bold">
      <div className="flex justify-start">
        <p className="text-[#edecec] inline-block">NEXUS CODE</p>
      </div>
      <div className="flex justify-center gap-8 text-[#edecec]">
        <button id="ozellikler">Özellikler</button>
        <button id="hakkimizda">Hakkımızda</button>
      </div>
      <div className="flex justify-end">
        <button onClick={() => setIsModalOpen(true)}
          id="giris"
          className="w-fit bg-[#edecec] rounded-2xl p-1 text-black"
        >
          Giriş Yap
        </button>
      </div>
    </nav>
  );
}
export default Navbar;