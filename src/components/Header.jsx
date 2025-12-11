import { CheckCircle } from 'lucide-react';

// Encabezado con logo SIRO y eslogan
export default function Header() {
  return (
    <header className="m-4 mb-0 p-4 bg-white border-2 border-[#005C35] rounded-tl-3xl rounded-tr-3xl rounded-br-3xl flex justify-between items-center shadow-sm">
      <div className="flex items-center">
        <img 
          src="https://mateoestrada5.github.io/integration-builder-v1/logoSiro.png"
          alt="SIRO Logo" 
          className="h-10 object-contain"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
        <div className="hidden items-center" aria-label="SIRO">
          <span className="text-2xl font-black text-[#005C35] tracking-tighter">SIRO</span>
          <div className="w-4 h-4 rounded-full bg-[#F2A900] ml-1 flex items-center justify-center">
            <CheckCircle size={10} className="text-white" />
          </div>
        </div>
      </div>
      
      <span className="text-xs font-bold text-gray-700 uppercase tracking-wide">
        Constructor de soluciones de pago a medida
      </span>
      
      <div className="w-10"></div>
    </header>
  );
}
