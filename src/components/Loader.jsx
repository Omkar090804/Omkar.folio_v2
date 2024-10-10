import { Html, useProgress} from '@react-three/drei';

const Loader = () => {                             //to show how much the comp has loaded
  const {progress} = useProgress();                
  return (
    <Html>
      <span className="canvas-load"></span>
      <p
      style={{                                    //to style the loading percentage
        fontSize:14,
        color:'#f1f1f1',
        fontWeight: 800,
        marginTop: 40
      }}
      >{progress.toFixed(2)}%</p>
    </Html>
  )
}

export default Loader