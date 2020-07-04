import React from 'react'
import { TokenAnnotator } from 'react-text-annotate'

export const EvaluationHighlight: React.FC = () => (
  <div style={{ backgroundColor: "#e0e0e0" }}>
    <TokenAnnotator
      onChange={() => ""}
      tokens={['(', 'λx', '.', 'x', ')', '(', 'λx', '.', 'x', ')']}
      value={[{ start: 6, end: 9, tag: 'Evaluating', color: '#ffd700' }]}
    />
  </div>
)