import { useBearStore } from '@/app/store/page'
import { shallow } from 'zustand/shallow'

const BearCounter = () => {
  console.log("nuts added, but component didn't rerender")
  const bears = useBearStore((state) => state.bears) // 👈 connect to the store
  return (
    <div>
      <h3>
        There are <span>{bears}</span> bears
      </h3>
    </div>
  )

  // const state = useBearStore() // causes the component to rerender on each state change
  // console.log('component rerendered, even though {bears} was never changed')
  // return (
  //   <h1>
  //     There are <span>{state.bears}</span> bears
  //   </h1>
  // )

  // // Transient updates - no re-renders!
  // const { bears, nuts } = useBearStore(
  //   (state) => ({
  //     bears: state.bears,
  //     nuts: state.nuts,
  //   }),
  //   shallow,
  // )

  // return (
  //   <div>
  //     <h3>
  //       There are <span>{bears}</span> bears
  //     </h3>
  //     <h3>
  //       There are <span>{nuts.length}</span> nuts
  //     </h3>
  //   </div>
  // )
}

export default BearCounter
