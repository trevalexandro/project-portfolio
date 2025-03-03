import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const SPHERE_RADIUS:number = 0.1;

const Sphere = ({ ...props }: React.ComponentPropsWithRef<'mesh'>):React.JSX.Element => {
  const meshRef = useRef({ rotation: { x: 0, y: 0 } });
  useFrame((_, delta) => {
    meshRef.current.rotation.x += delta;
    meshRef.current.rotation.y += delta;
  });
  props.ref = meshRef;

  return (
    <mesh { ...props }>
      <dodecahedronGeometry args={[SPHERE_RADIUS]} />
      <meshStandardMaterial color="blue" />
    </mesh>
  );
};

export default Sphere;