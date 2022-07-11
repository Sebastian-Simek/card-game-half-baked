import React from 'react';
import Card from './Card';
import { useCardContext } from './ContextProvider';

export default function ExecutePassButton({ passCard, selectedCard }) {
  const { from, to } = useCardContext;
  return (
    <div className="execute-button" onClick={() => passCard(selectedCard)}>
      Pass <Card card={selectedCard} /> from {from} to {to}
    </div>
  );
}
