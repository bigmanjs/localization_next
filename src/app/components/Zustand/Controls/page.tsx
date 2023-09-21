import { useBearStore } from '@/app/store/page'
import { useEffect, useRef } from 'react'

const Controls = () => {
  const increasePopulation = useBearStore((state) => state.increasePopulation) // 👈 connect to the store
  const addNuts = useBearStore((state) => state.addNuts)

  // Transient updates
  // const increasePopulationRef = useRef(useBearStore.getState().bears)
  // console.log('component rendered')
  // useEffect(
  //   () =>
  //     useBearStore.subscribe(
  //       (state) => (increasePopulationRef.current = state.bears),
  //     ),
  //   [],
  // )
  return (
    <div>
      <button onClick={() => increasePopulation()}>increase</button>
      <button onClick={() => addNuts('walnut')}>add nuts</button>
    </div>
  )
}

export default Controls
