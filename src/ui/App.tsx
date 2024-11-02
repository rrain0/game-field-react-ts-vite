import { css, Global } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'
import { EmotionCommon } from 'src/ui-data/styles/EmotionCommon'
import FieldLand from 'src/ui/FieldLand'
import FieldPort from 'src/ui/FieldPort'
import FieldSquared from 'src/ui/FieldSquared'
import GameInfo from 'src/ui/GameInfo'
import BottomInfo from 'src/ui/BottomInfo'
import TopInfo from 'src/ui/TopInfo'
import rowWrap = EmotionCommon.rowWrap

const App = React.memo(() => {

  return (
    <>
      
      <Global
        styles={css`
          #root {
            display: flex;
            flex-flow: column nowrap;
            padding: 16px 16px 64px;
            gap: 16px;
          }
        `}
      />
      
      
      
      <div css={css`${rowWrap}; gap: 16px;`}>
        Каждое мини-окошко можно ресайзить мышкой
      </div>
      
      
      
      <div css={css`${rowWrap}; gap: 16px;`}>
        
        <WindowPort>
          <Frame>
            <GameInfo
              top={<TopInfo />}
              field={<FieldSquared />}
              bottom={<BottomInfo />}
            />
          </Frame>
        </WindowPort>
        
        <WindowPortSm>
          <Frame>
            <GameInfo
              top={<TopInfo />}
              field={<FieldSquared />}
              bottom={<BottomInfo />}
            />
          </Frame>
        </WindowPortSm>
        
      </div>
      
      
      
      <div css={css`${rowWrap}; gap: 16px;`}>
        
        <WindowPort>
          <Frame>
            <GameInfo
              top={<TopInfo />}
              field={<FieldPort />}
              bottom={<BottomInfo />}
            />
          </Frame>
        </WindowPort>
        
        <WindowPortSm>
          <Frame>
            <GameInfo
              top={<TopInfo />}
              field={<FieldPort />}
              bottom={<BottomInfo />}
            />
          </Frame>
        </WindowPortSm>
        
      </div>
      
      
      
      <div css={css`${rowWrap}; gap: 16px;`}>
        
        <WindowPort>
          <Frame>
            <GameInfo
              top={<TopInfo />}
              field={<FieldLand />}
              bottom={<BottomInfo />}
            />
          </Frame>
        </WindowPort>
        
        <WindowPortSm>
          <Frame>
            <GameInfo
              top={<TopInfo />}
              field={<FieldLand />}
              bottom={<BottomInfo />}
            />
          </Frame>
        </WindowPortSm>
        
      </div>
      
      
      
    </>
  )
})
export default App



const WindowPort = styled.div`
  width: 360px;
  height: 740px;
  resize: both;
  overflow: scroll;
`
const WindowPortSm = styled.div`
  width: 320px;
  height: 540px;
  resize: both;
  overflow: hidden;
`

const Frame = styled.div`
  width: 100%;
  height: 100%;
  background-color: orange;
  padding: 16px;
`
