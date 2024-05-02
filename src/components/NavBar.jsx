import "./NavBar.css";
import CartWidget from './CartWidget'

export default function NavBar() {
  return (
    <>
      <nav className="flex justify-between px-20 py-2 bg-gray-800 text-slate-50">
        <div className=" cursor-pointer">
          <img
            src="src/assets/images/logo-pc-parts.png"
            alt="Logo"
            className="h-[65px]"
          />
        </div>
        <div className="text-lg flex justify-center space-x-8 my-auto font-light">
          <div className="cursor-pointer hover-naranja">
            <i class="bi bi-house"></i> INICIO
          </div>
          <div className="cursor-pointer hover-naranja">
            <i class="bi bi-mouse"></i> PERIFERICOS
          </div>
          <div className="cursor-pointer hover-naranja">
            <i class="bi bi-cpu"></i> PROCESADORES
          </div>
          <div className="cursor-pointer hover-naranja">
            <i class="bi bi-hdd"></i> ALMACENAMIENTO
          </div>
          <div className="cursor-pointer hover-naranja">
            <i class="bi bi-memory"></i> MEMORIAS
          </div>
          <div className="cursor-pointer hover-naranja">
            <i class="bi bi-controller"></i> GRÁFICAS
          </div>
        </div>
        <div>
          <CartWidget />
        </div>
      </nav>
    </>
  );
}
