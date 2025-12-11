import { Fragment } from 'react';
import { ChevronRight } from 'lucide-react';

//Navegación de ruta
export default function Breadcrumbs({ currentPath, findNode, setCurrentPath }) {
  return (
    <nav 
      className="flex items-center gap-2 px-6 py-4 text-sm text-gray-500 overflow-x-auto"
      aria-label="Navegación de ruta"
    >
      {currentPath.map((id, idx) => {
        const node = findNode(id);
        return (
          <Fragment key={id}>
            {idx > 0 && <ChevronRight size={14} className="text-[#F2A900]" aria-hidden="true" />}
            <button 
              onClick={() => setCurrentPath(currentPath.slice(0, idx + 1))}
              className={`font-medium whitespace-nowrap transition-colors ${idx === currentPath.length - 1 ? 'text-[#005C35] font-bold' : 'hover:text-[#005C35]'}`}
              aria-current={idx === currentPath.length - 1 ? 'page' : undefined}
            >
              {node?.title}
            </button>
          </Fragment>
        );
      })}
    </nav>
  );
}
