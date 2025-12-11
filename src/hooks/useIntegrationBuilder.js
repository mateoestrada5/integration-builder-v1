import { useState, useCallback, useMemo } from 'react';
import { SIRO_DATA } from '../data/siroData';


// Lógica de negocio centralizada
export default function useIntegrationBuilder() {
  const [currentPath, setCurrentPath] = useState(['root']);
  const [selections, setSelections] = useState({});
  const [roadmapName, setRoadmapName] = useState('Nueva Integración SIRO');
  const [showReport, setShowReport] = useState(false);
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [hasEditedTitle, setHasEditedTitle] = useState(false);

  // Buscar nodo por ID (recursivo) - memoizado
  const findNode = useCallback((id, nodes = [SIRO_DATA]) => {
    for (const node of nodes) {
      if (node.id === id) return node;
      if (node.children) {
        const found = findNode(id, node.children);
        if (found) return found;
      }
    }
    return null;
  }, []);

  const currentNodeId = currentPath[currentPath.length - 1];
  const currentNode = useMemo(() => findNode(currentNodeId), [currentNodeId, findNode]);

  // Toggle selección
  const toggleSelection = useCallback((nodeId) => {
    setSelections(prev => {
      const next = { ...prev };
      if (next[nodeId]) {
        delete next[nodeId];
      } else {
        next[nodeId] = { status: 'pending', notes: '' };
      }
      return next;
    });
  }, []);

  // Cambiar estado (Pending -> Done)
  const updateStatus = useCallback((nodeId, newStatus) => {
    setSelections(prev => ({
      ...prev,
      [nodeId]: { ...prev[nodeId], status: newStatus }
    }));
  }, []);

  // Generar nodos seleccionados para el reporte
  const selectedNodes = useMemo(() => {
    const nodes = [];
    
    const traverse = (nodeList, depth = 0) => {
      nodeList.forEach(node => {
        if (selections[node.id]) {
          nodes.push({ ...node, ...selections[node.id], depth });
        }
        if (node.children) traverse(node.children, depth + 1);
      });
    };
    traverse([SIRO_DATA]);

    return nodes;
  }, [selections]);

  return {
    currentPath,
    setCurrentPath,
    selections,
    toggleSelection,
    updateStatus,
    roadmapName,
    setRoadmapName,
    showReport,
    setShowReport,
    isEditingTitle,
    setIsEditingTitle,
    hasEditedTitle,
    setHasEditedTitle,
    currentNode,
    currentNodeId,
    findNode,
    selectedNodes,
  };
}
