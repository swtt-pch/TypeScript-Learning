import React, { ChangeEvent, useState } from 'react'

type Props = {}

const State = (props: Props) => {
    const [text, setText] = useState<string | null>(null)
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }
  return (
    <div>
      <p>Texto alterado: {text}</p>
      <input type="text" onChange={handleChange} />
    </div>
  )
}

export default State
