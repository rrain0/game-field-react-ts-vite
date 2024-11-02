import styled from '@emotion/styled'
import React, { useCallback } from 'react'
import { useResize } from 'src/util/view/useResize'
import { getViewProps } from 'src/util/view/ViewProps'


const leftInfoW = 36


export type GameInfoProps = {
  left: React.ReactNode
  field: React.ReactNode
  right: React.ReactNode
}

const GameInfoLand = React.memo((props: GameInfoProps) => {
  const { left, field, right } = props
  
  console.log('rerender GameInfo')
  
  const gameInfoRef = useResize<HTMLDivElement>(useCallback((elem) => {
    if (elem) {
      const { w, h } = getViewProps(elem)
      elem.style.setProperty('--right-info-w', '360px')
      if (w <= 750) elem.style.setProperty('--right-info-w', '240px')
      elem.style.setProperty('--field-max-w', `calc( ${w - leftInfoW}px - var(--right-info-w) )`)
      elem.style.setProperty('--field-max-h', `${h}px`)
    }
  }, []))
  
  return (
    <GameInfoFrame ref={gameInfoRef}>
      
      <LeftInfoFrame>
        {left}
      </LeftInfoFrame>
      
      <GameFieldFrame>
        {field}
      </GameFieldFrame>
      
      <RightInfoFrame>
        {right}
      </RightInfoFrame>
      
    </GameInfoFrame>
  )
})
export default GameInfoLand




const GameInfoFrame = styled.div`
  height: 100%;
  width: 100%;
  background-color: #bcc3ff;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`

const LeftInfoFrame = styled.div`
  height: 100%;
  flex-grow: 1;
  background-color: #529a9e;
  display: flex;
  flex-flow: column nowrap;
  justify-content: start;
`

const RightInfoFrame = styled.div`
  height: 100%;
  flex-grow: 1;
  display: flex;
  background-color: #a872a8;
  flex-flow: column nowrap;
  justify-content: start;
`

const GameFieldFrame = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
`
