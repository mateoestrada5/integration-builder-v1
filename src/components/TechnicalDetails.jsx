import { Code } from 'lucide-react';


// Documentación técnica y snippets
export default function TechnicalDetails({ currentNode }) {
  if (!currentNode.techDetails) return null;

  return (
    <div className="mb-8 bg-white border border-[#005C35]/20 rounded-xl p-5 shadow-[0_2px_10px_-4px_rgba(0,92,53,0.1)]">
      <div className="flex items-center gap-2 text-[#005C35] font-black mb-3 uppercase text-xs tracking-wider">
        <Code size={16} aria-hidden="true" /> Documentación Técnica
      </div>
      <p className="text-sm text-gray-700 mb-4 font-medium">{currentNode.techDetails}</p>
      {currentNode.snippet && (
        <div className="relative group">
          <pre className="bg-[#1e1e1e] text-gray-300 p-4 rounded-lg text-xs font-mono overflow-x-auto shadow-inner border-l-4 border-[#F2A900]">
            <code>{currentNode.snippet}</code>
          </pre>
        </div>
      )}
    </div>
  );
}
