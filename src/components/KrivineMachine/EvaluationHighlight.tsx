import React from 'react'
import { TokenAnnotator } from 'react-text-annotate'

type EvaluationHighlightProps = {
  tokenList: string[],
  highlightStart: number,
  highlightEnd: number
}

export const EvaluationHighlight: React.FC<EvaluationHighlightProps> = (props) => (
  <div style={{ backgroundColor: "#e0e0e0" }}>
    <TokenAnnotator
      onChange={() => ""}
      tokens={props.tokenList}
      value={[{ start: props.highlightStart, end: props.highlightEnd, tag: 'Evaluating', color: '#ffd700' }]}
    />
  </div>
)