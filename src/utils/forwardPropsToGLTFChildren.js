const forwardedProps = ['receiveShadow', 'castShadow', 'onClick']

export function forwardPropsToGLTFChildren(ref, props) {
  const group = ref.current

  group?.traverse((node) => {
    forwardedProps.map((prop) => {
      if (props?.[prop] !== null) node[prop] = props[prop]
    })
  })
}
