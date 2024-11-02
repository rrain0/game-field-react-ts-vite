import { useCallback } from 'react'
import { TypeU } from 'src/util/common/TypeU'
import { useRefGetSet } from 'src/util/react-state/useRefGetSet'
import { useEvent } from 'src/util/react/useEvent'
import Callback1 = TypeU.Callback1



// Does not trigger rerender (if you do not set state inside callback)
export const useResize = <T extends HTMLElement = HTMLElement>(onResize: Callback1<T | null>) => {
  const [getResizeObserver, setResizeObserver] = useRefGetSet(undefined as undefined | ResizeObserver)
  
  useEvent(() => {
    return () => {
      getResizeObserver()?.disconnect()
      setResizeObserver(undefined)
    }
  }, [], true)
  
  const elementFunctionalRef = useCallback<Callback1<T | null>>(elem => {
    getResizeObserver()?.disconnect()
    setResizeObserver(undefined)
    
    onResize(elem)
    if (elem) {
      const update = () => onResize(elem)
      const resizeObserver = new ResizeObserver(update)
      setResizeObserver(resizeObserver)
      resizeObserver.observe(elem)
    }
  }, [onResize])
  
  return elementFunctionalRef
}

