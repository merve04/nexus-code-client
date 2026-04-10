import { useState } from "react";
function LoginModal({ setIsModalOpen, setLoggedInUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginView, setIsLoginView] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sunucuya Gönderilecek E-Posta:", email);
    console.log("Sunucuya Gönderilecek Şifre:", password);
    setLoggedInUser(email);
    setIsModalOpen(false);
  };
  console.log("Anlık Email State'i:", email);
  console.log("Anlık Şifre State'i:", password);

  return (
    <div id="girisKutusu" className="fixed  z-50 inset-0 bg-black/80">
      <div className="flex justify-center items-center w-full h-full">
        <div className="relative bg-[#bfb7a9] p-10 rounded-3xl flex flex-col items-center w-96">
          <button
            onClick={() => setIsModalOpen(false)}
            id="kapatmaTusu"
            className="absolute top-4 right-5 text-3xl font-bold text-gray-900 hover:text-red-600 transition-colors"
          >
            X
          </button>
          {isLoginView ? (
            <div id="alanGiris" className="w-full flex flex-col items-center">
              <h3 className="text-3xl font-bold mb-6 text-gray-900 font-[monaco]">
                Giriş Yap
              </h3>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 w-full mb-8"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Kullanıcı Adı"
                  className="p-3 rounded-xl outline-none"
                />

                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Şifrenizi Giriniz"
                  className="p-3 rounded-xl outline-none"
                />

                <button
                  id="girisGonder"
                  type="submit"
                  className="bg-[#08090a] text-white p-3 rounded-xl font-bold hover:bg-gray-800"
                >
                  Giriş Yap
                </button>
              </form>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setIsLoginView(false);
                }}
                className="text-sm text-center text-gray-800 hover:underline"
              >
                Hesabınız yoksa oluşturun
              </a>
            </div>
          ) : (
            <div id="alanKayit" className="w-full flex-col items-center">
              <h3 className="text-3xl font-bold mb-6 text-gray-900 font-[monaco]">
                Kayıt Ol
              </h3>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 w-full mb-8"
              >
                <input
                  type="email"
                  id="kullaniciKayit"
                  placeholder="E-posta Adresiniz"
                  className="p-3 rounded-xl outline-none"
                />
                <input
                  type="password"
                  id="sifreKayit"
                  placeholder="Şifre Oluşturun"
                  className="p-3 rounded-xl outline-none"
                />
                <p
                  id="hataMesajSifre"
                  className="hidden border-2 border-amber-950 rounded-3xl p-2"
                ></p>
                <button
                  id="kayitGonder"
                  type="submit"
                  className="bg-[#08090a] text-white p-3 rounded-xl font-bold hover:bg-gray-800"
                >
                  Hesap Oluştur
                </button>
              </form>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setIsLoginView(true);
                }}
                className="text-sm text-center text-gray-800 hover:underline"
              >
                Zaten hesabınız var mı? Giriş yapın
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default LoginModal;
