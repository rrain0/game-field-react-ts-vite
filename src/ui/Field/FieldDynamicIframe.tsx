import styled from '@emotion/styled'
import React, { useCallback, useState } from 'react'
// @ts-ignore
import gameField from './game-field.html'


const FieldDynamicIframe = React.memo(() => {
  
  console.log('rerender FieldSquareIframe')
  
  const [arenaRatio, setArenaRatio] = useState(1)
  
  console.log('arenaRatio', arenaRatio)
  
  const iframeRefFun = useCallback((el: HTMLIFrameElement | null) => {
    if (el) {
      const w = el.contentWindow!
      // @ts-ignore
      w.setAspectRatio = (aspectRatio: number) => setArenaRatio(aspectRatio)
    }
  }, [])
  
  return (
    <iframe
      ref={iframeRefFun}
      src={gameField}
      title="iframe field square"
      style={{
        width: `min( var(--field-max-w), calc( var(--field-max-h) * ${arenaRatio} ) )`,
        height: `min( calc( var(--field-max-w) / ${arenaRatio} ), var(--field-max-h) )`,
        border: 'none',
      }}
    />
  )
})
export default FieldDynamicIframe

