import { CheckCircle, Circle } from 'lucide-react';


//Indicador de estado visual
export default function StatusIcon({ status, className = '' }) {
  if (status === 'done') {
    return <CheckCircle className={`text-[#005C35] ${className}`} aria-label="Implementado" />;
  }
  if (status === 'pending') {
    return <Circle className={`text-[#F2A900] ${className}`} aria-label="Pendiente" />;
  }
  return <Circle className={`text-gray-300 ${className}`} aria-label="No seleccionado" />;
}
