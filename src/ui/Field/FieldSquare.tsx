import styled from '@emotion/styled'
import React from 'react'


const FieldSquare = React.memo(() => {
  
  console.log('rerender FieldSquare')
  
  return (
    <Field>
      
      <Cell color="w" />
      <Cell color="b" />
      <Cell color="w" />
      <Cell color="b" />
      
      <Cell color="b" />
      <Cell color="w" />
      <Cell color="b" />
      <Cell color="w" />
      
      <Cell color="w" />
      <Cell color="b" />
      <Cell color="w" />
      <Cell color="b" />
      
      <Cell color="b" />
      <Cell color="w" />
      <Cell color="b" />
      <Cell color="w" />
    
    </Field>
  )
})
export default FieldSquare


const Field = styled.div`
  width: min( var(--field-max-w), var(--field-max-h) );
  height: min( var(--field-max-w), var(--field-max-h) );
  background-color: black;
  display: grid;
  grid-template-rows: repeat(4, 25%);
  grid-template-columns: repeat(4, 25%);
`

const Cell = styled.div<{ color: 'w' | 'b' }>`
  background-color: ${p => ({ w: '#f0d9b5', b: '#b58863' }[p.color])};
`

