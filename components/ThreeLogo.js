'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeLogo() {
  const mountRef = useRef(null);

  useEffect(() => {
    const current = mountRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, current.clientWidth / current.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(current.clientWidth, current.clientHeight);
    current.appendChild(renderer.domElement);

    const geometry = new THREE.ConeGeometry(1.3, 1.8, 3);
    const material = new THREE.MeshPhysicalMaterial({
      color: '#3BA3FA',
      emissive: '#5AF3E6',
      emissiveIntensity: 0.2,
      metalness: 0.75,
      roughness: 0.15
    });

    const cone = new THREE.Mesh(geometry, material);
    cone.rotation.x = Math.PI;
    scene.add(cone);

    const light = new THREE.PointLight('#5AF3E6', 20, 20);
    light.position.set(2, 2, 2);
    const ambient = new THREE.AmbientLight('#ffffff', 2);
    scene.add(light, ambient);
    camera.position.z = 4;

    let raf;
    const animate = () => {
      cone.rotation.y += 0.01;
      cone.rotation.z += 0.003;
      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };
    animate();

    const onResize = () => {
      camera.aspect = current.clientWidth / current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(current.clientWidth, current.clientHeight);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      current.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="h-72 w-full max-w-md" />;
}
