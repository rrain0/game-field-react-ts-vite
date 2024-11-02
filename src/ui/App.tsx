import { css, Global } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'
import { EmotionCommon } from 'src/ui-data/styles/EmotionCommon'
import FieldLand from 'src/ui/Field/FieldLand'
import FieldPort from 'src/ui/Field/FieldPort'
import FieldSquared from 'src/ui/Field/FieldSquared'
import GameInfoLand from 'src/ui/GameInfoLand/GameInfoLand'
import LeftInfoLand from 'src/ui/GameInfoLand/LeftInfoLand'
import RightInfoLand from 'src/ui/GameInfoLand/RightInfoLand'
import GameInfoPort from 'src/ui/GameInfoPort/GameInfoPort'
import BottomInfoPort from 'src/ui/GameInfoPort/BottomInfoPort'
import TopInfoPort from 'src/ui/GameInfoPort/TopInfoPort'
import rowWrap = EmotionCommon.rowWrap

const App = React.memo(() => {

  return (
    <>
      
      <Global
        styles={css`
          #root {
            display: flex;
            flex-flow: column nowrap;
            padding: 16px 16px 512px;
            gap: 16px;
          }
        `}
      />
      
      
      
      <div css={css`${rowWrap}; gap: 16px;`}>
        Каждое мини-окошко можно ресайзить мышкой
      </div>
      
      
      
      
      {/* PORT */}
      
      <div css={css`${rowWrap}; gap: 16px;`}>
        
        <WindowPort>
          <Frame>
            <GameInfoPort
              top={<TopInfoPort />}
              field={<FieldSquared />}
              bottom={<BottomInfoPort />}
            />
          </Frame>
        </WindowPort>
        
        <WindowPortSm>
          <Frame>
            <GameInfoPort
              top={<TopInfoPort />}
              field={<FieldSquared />}
              bottom={<BottomInfoPort />}
            />
          </Frame>
        </WindowPortSm>
        
      </div>
      
      
      
      <div css={css`${rowWrap}; gap: 16px;`}>
        
        <WindowPort>
          <Frame>
            <GameInfoPort
              top={<TopInfoPort />}
              field={<FieldPort />}
              bottom={<BottomInfoPort />}
            />
          </Frame>
        </WindowPort>
        
        <WindowPortSm>
          <Frame>
            <GameInfoPort
              top={<TopInfoPort />}
              field={<FieldPort />}
              bottom={<BottomInfoPort />}
            />
          </Frame>
        </WindowPortSm>
        
      </div>
      
      
      
      <div css={css`${rowWrap}; gap: 16px;`}>
        
        <WindowPort>
          <Frame>
            <GameInfoPort
              top={<TopInfoPort />}
              field={<FieldLand />}
              bottom={<BottomInfoPort />}
            />
          </Frame>
        </WindowPort>
        
        <WindowPortSm>
          <Frame>
            <GameInfoPort
              top={<TopInfoPort />}
              field={<FieldLand />}
              bottom={<BottomInfoPort />}
            />
          </Frame>
        </WindowPortSm>
        
      </div>
      
      
      
      
      {/* LAND */}
      
      
      <WindowLand>
        <Frame>
          <GameInfoLand
            left={<LeftInfoLand />}
            field={<FieldSquared />}
            right={<RightInfoLand />}
          />
        </Frame>
      </WindowLand>
      
      <WindowLandSm>
        <Frame>
          <GameInfoLand
            left={<LeftInfoLand />}
            field={<FieldSquared />}
            right={<RightInfoLand />}
          />
        </Frame>
      </WindowLandSm>
      
      
      
      
      
      <WindowLand>
        <Frame>
          <GameInfoLand
            left={<LeftInfoLand />}
            field={<FieldPort />}
            right={<RightInfoLand />}
          />
        </Frame>
      </WindowLand>
      
      <WindowLandSm>
        <Frame>
          <GameInfoLand
            left={<LeftInfoLand />}
            field={<FieldPort />}
            right={<RightInfoLand />}
          />
        </Frame>
      </WindowLandSm>
      
      
      
      
        
      <WindowLand>
        <Frame>
          <GameInfoLand
            left={<LeftInfoLand />}
            field={<FieldLand />}
            right={<RightInfoLand />}
          />
        </Frame>
      </WindowLand>
      
      <WindowLandSm>
        <Frame>
          <GameInfoLand
            left={<LeftInfoLand />}
            field={<FieldLand />}
            right={<RightInfoLand />}
          />
        </Frame>
      </WindowLandSm>
      
      
      
    </>
  )
})
export default App



const WindowPort = styled.div`
  width: 360px;
  height: 740px;
  resize: both;
  overflow: hidden;
`
const WindowPortSm = styled(WindowPort)`
  width: 320px;
  height: 540px;
`
const WindowLand = styled.div`
  width: 1920px;
  height: 1080px;
  resize: both;
  overflow: hidden;
`
const WindowLandSm = styled(WindowLand)`
  width: 922px;
  height: 487px;
`

const Frame = styled.div`
  width: 100%;
  height: 100%;
  background-color: orange;
  padding: 16px;
`
