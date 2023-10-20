import { Grid } from '@react-three/drei'
import useStore from '@/store/index.jsx'
import { useShallow } from 'zustand/react/shallow'

export default function Misc() {
  const [isGridOpen, isAxesHelperOpen] = useStore(
    useShallow((state) => [state.isGridOpen, state.isAxesHelperOpen]),
  )

  return (
    <>
      {isAxesHelperOpen && <axesHelper scale={3} />}

      {isGridOpen && (
        <Grid
          position={[0, -0.001, 0]}
          args={[10.5, 10.5]}
          cellColor='#91A3B0'
          cellSize={0.2}
          fadeDistance={40}
          fadeStrength={1}
          sectionColor='#91A3B0'
          sectionSize={2}
          infiniteGrid={true}
        />
      )}
    </>
  )
}
