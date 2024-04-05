import React, { useLayoutEffect, useMemo, useRef, useEffect } from "react";
import * as THREE from "three";
import vertexShader from "./vertexShader";
import fragmentShader from "./fragmentShader";
import { useFrame } from "@react-three/fiber";
import { MathUtils } from "three";
import { OrbitControls, useScroll } from "@react-three/drei";
import gsap from "gsap";

const Blob = () => {
  const mesh = useRef();
  const hover = useRef(false);
  const scroll = useScroll();
  const tl = useRef();
  const uniforms = useMemo(() => {
    return {
      u_time: { value: 0 },
      u_intensity: { value: 0.3 },
    };
  });
  useEffect(() => {
    const updateMesh = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const deno = width < 600 ? 300 : 500;
      const scaleFactor = Math.min(width, height) / deno;
      const newPosition = [0, 0, 0];

      mesh.current.scale.set(scaleFactor, scaleFactor, scaleFactor);
      mesh.current.position.set(newPosition[0], newPosition[1], newPosition[2]);
    };
    updateMesh();
    window.addEventListener("resize", updateMesh);
    return () => window.removeEventListener("resize", updateMesh);
  }, []);
  useFrame((state, delta) => {
    mesh.current.rotation.y += delta;
    tl.current.seek(scroll.offset * tl.current.duration());
    const { clock } = state;
    if (mesh.current) {
      mesh.current.material.uniforms.u_time.value =
        0.4 * clock.getElapsedTime();

      mesh.current.material.uniforms.u_intensity.value = MathUtils.lerp(
        mesh.current.material.uniforms.u_intensity.value,
        hover.current ? 2 : 0.15,
        0.02
      );
    }
  });
  useLayoutEffect(() => {
    const updateAnimation = () => {
      const width = window.innerWidth;
      const gap = width < 600 ? 3 : 5;
      tl.current = gsap.timeline({
        defaults: { duration: 5, ease: "power1.inOut" },
      });

      tl.current
        .to(mesh.current.position, { x: gap }, 1)
        .to(mesh.current.position, { x: -gap }, 5);
    };

    updateAnimation();
    window.addEventListener("resize", updateAnimation);
    return () => window.removeEventListener("resize", updateAnimation);
  }, []);
  return (
    <>
      <mesh
        ref={mesh}
        scale={1.5}
        position={[0, 0, 0]}
        geometry={new THREE.IcosahedronGeometry(2, 20)}
      >
        <shaderMaterial
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={uniforms}
        />
      </mesh>
    </>
  );
};

export default Blob;
