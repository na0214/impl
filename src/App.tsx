import React, { useState } from 'react'
import { Header } from './components/Header'

import { KrivineMachine } from './components/KrivineMachine/KrivineMachine'

enum Mode {
  KrivineMachine = "Krivine Machine",
}

const initialMode: Mode = Mode.KrivineMachine

const App: React.FC = () => {
  const [mode, setMode] = useState(initialMode)

  return (
    <>
      <Header mode={mode} />
      <KrivineMachine />
    </>
  )
}

export default App;
