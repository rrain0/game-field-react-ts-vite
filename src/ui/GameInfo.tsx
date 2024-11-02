import styled from '@emotion/styled'
import React, { useCallback } from 'react'
import { useResize } from 'src/util/view/useResize'
import { getViewProps } from 'src/util/view/ViewProps'


const topInfoH = 70
const bottomInfoH = 160


export type GameInfoProps = {
  top: React.ReactNode
  field: React.ReactNode
  bottom: React.ReactNode
}

const GameInfo = React.memo((props: GameInfoProps) => {
  const { top, field, bottom } = props
  
  console.log('rerender GameInfo')
  
  const gameInfoRef = useResize<HTMLDivElement>(useCallback((elem) => {
    if (elem) {
      const elemProps = getViewProps(elem)
      elem.style.setProperty('--field-max-w', `${elemProps.w}px`)
      elem.style.setProperty('--field-max-h', `${elemProps.h - topInfoH - bottomInfoH}px`)
    }
  }, []))
  
  return (
    <GameInfoFrame ref={gameInfoRef}>
      
      <TopInfoFrame>
        {top}
      </TopInfoFrame>
      
      <GameFieldFrame>
        {field}
      </GameFieldFrame>
      
      <BottomInfoFrame>
        {bottom}
      </BottomInfoFrame>
      
    </GameInfoFrame>
  )
})
export default GameInfo




const GameInfoFrame = styled.div`
  height: 100%;
  width: 100%;
  background-color: #bcc3ff;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`

const TopInfoFrame = styled.div`
  width: 100%;
  flex-grow: 1;
  background-color: #529a9e;
  display: flex;
  flex-flow: column nowrap;
  justify-content: end;
`

const BottomInfoFrame = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  background-color: #a872a8;
  flex-flow: column nowrap;
  justify-content: start;
`

const GameFieldFrame = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
`
