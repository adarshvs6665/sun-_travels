import { OrbitControls, Stage, useGLTF } from "@react-three/drei";

import styled from "styled-components";
import { Canvas, useFrame,useThree } from "@react-three/fiber";
import { AdaptiveDpr, AdaptiveEvents, Environment } from "@react-three/drei";
import { Suspense, useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from 'three';
const AeroplaneModel = () => {
  gsap.registerPlugin(ScrollTrigger);
  const group = useRef();
  const helicopter = useGLTF("./plane/scene.gltf");
  const { camera,scene } = useThree();
  useFrame(({ clock }) => {
    group.current.position.y = Math.sin(clock.getElapsedTime()) * 3;
    group.current.rotation.x = Math.sin(clock.getElapsedTime()) * 0.1; // Add swinging motion
  });
  useLayoutEffect(() => {
    helicopter.scene.scale.set(0.1, 0.1, 0.1); // Adjust the scale as needed
    helicopter.scene.position.set(0, 0, 0); // Adjust the position as needed
    // Rotate around the Z-axis by +90 degrees
    // helicopter.scene.rotation.y = Math.PI/2;
    helicopter.scene.rotation.y = Math.PI * 65 / 180;
    helicopter.scene.rotation.x = Math.PI * 15 / 180; 
    camera.position.z = 75;
    camera.position.y = -27;
    camera.position.x = 78;
      // gsap animation to move the airplane upwards and obliquely
      gsap.to(helicopter.scene.position, {
        duration: 5, // Animation duration in seconds
        y: -15, // Move to the center vertically
        x: 50,
        z:18,
        // rotationX: Math.PI * 2 / 4, // Move slightly to the right (adjust as needed)
        ease: "power2.inOut", // Easing function
        onComplete: () => {
          // Animation completed, do any additional setup if needed
          ScrollTrigger.refresh();
        },
      });
      
      const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: "#aeroplane-model",
          start: "top top",
          endTrigger: "#last",
          end: "top-=400 top",
          scrub: true,
          // markers: true,
        },
      });
      t1.to(
        helicopter.scene.position,
        {
          x: 80,
          duration: 5,
          ease: "power1.out",
        },
        // Indicates that this animation should start at the same time as the previous one
      );
      //obeject reality
    // helicopter.scene.traverse((child) => {
    //   if (child.isMesh) {
    //     child.material.metalness = 0.5;
    //     child.material.roughness = 0.8;
    //     // Add texture maps for more realism
    //     // child.material.map = texture;
    //     // child.material.normalMap = normalMap;
    //   }
    // });
  
    // Add realistic lighting
    // const ambientLight = new THREE.AmbientLight(0xffffff, 2);
    // scene.add(ambientLight);
  
    // const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    // directionalLight.position.set(1, 1, 1).normalize();
    // scene.add(directionalLight);
  }, []);


  return (
    <group ref={group}>
      <primitive object={helicopter.scene}  />
    </group>
  );
};
const Airoplane = () => {
  return (
    <Container id="aeroplane-model">
      <Canvas>
        <ambientLight intensity={0.7} position={[0, 0, 0]} />
        <directionalLight intensity={4} position={[0, 5, 1]} />
        <Suspense fallback={null}>
       
        {/* <Stage environment={"sunset"} intensity={0.5}>/ */}
          <AeroplaneModel />
        {/* </Stage>/ */}
            
        </Suspense>

        <AdaptiveDpr pixelated  />
        {/* <AdaptiveEvents /> */}
        {/* <OrbitControls  /> */}
      </Canvas>
    </Container>
  );
};
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 1;
  background-color: transparent;
  transition: all 0.3s ease;
`;
export default Airoplane;
