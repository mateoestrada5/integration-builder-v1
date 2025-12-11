import { Plus, Trash2 } from 'lucide-react';

//Botones de agregar/remover soluciones y estado
export default function NodeActions({ currentNode, selections, toggleSelection, updateStatus }) {
  if (currentNode.id === 'root') return null;

  return (
    <div className="flex flex-col gap-3 mb-8 p-5 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm">
      <div className="flex items-center gap-4">
        <button
          onClick={() => toggleSelection(currentNode.id)}
          className={`
            flex-1 py-3 px-6 rounded-full font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md transform active:scale-95
            ${selections[currentNode.id] 
              ? 'bg-white text-red-500 border border-red-200 hover:bg-red-50' 
              : 'bg-[#005C35] text-white hover:bg-[#004d2c] hover:shadow-lg'}
          `}
          aria-label={selections[currentNode.id] ? 'Remover solución' : 'Agregar solución'}
        >
          {selections[currentNode.id] ? (
            <> <Trash2 size={18} /> Remover </>
          ) : (
            <> <Plus size={18} /> Agregar Solución </>
          )}
        </button>
      </div>

      {selections[currentNode.id] && (
        <div className="flex bg-white rounded-xl border border-gray-200 p-1.5 shadow-inner" role="group" aria-label="Estado de implementación">
          <button 
            onClick={() => updateStatus(currentNode.id, 'pending')}
            className={`flex-1 py-2 text-sm rounded-lg font-bold transition-colors flex items-center justify-center gap-2
              ${selections[currentNode.id].status === 'pending' ? 'bg-[#F2A900] text-white shadow-sm' : 'text-gray-400 hover:bg-gray-50'}`}
            aria-pressed={selections[currentNode.id].status === 'pending'}
          >
            Pendiente
          </button>
          <button 
            onClick={() => updateStatus(currentNode.id, 'done')}
            className={`flex-1 py-2 text-sm rounded-lg font-bold transition-colors flex items-center justify-center gap-2
              ${selections[currentNode.id].status === 'done' ? 'bg-[#005C35] text-white shadow-sm' : 'text-gray-400 hover:bg-gray-50'}`}
            aria-pressed={selections[currentNode.id].status === 'done'}
          >
            Implementado
          </button>
        </div>
      )}
    </div>
  );
}
