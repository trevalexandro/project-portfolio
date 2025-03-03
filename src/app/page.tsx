'use client'

import { Button } from "@/components/ui/button";
import { Canvas } from "@react-three/fiber";
import { MoveDownIcon } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";
import * as THREE from 'three';
import Sphere from "./components/sphere";
import CoreCompetenciesSection from "./components/core-competencies";
import Link from "next/link";

const MIN_SPHERE_POSITION:number = -25;
const MAX_SPHERE_POSITION:number = 25;
const SPHERE_X_AXIS:number = 1;
const SPHERE_Y_AXIS:number = 1;
const SPHERE_MIN_Z_AXIS:number = -1;
const SPHERE_MAX_Z_AXIS:number = 1;
const TEXT_SIZE_CLASS_NAMES = 'text-xl md:text-4xl lg:text-6xl';
const BANNER_TEXT_CLASS_NAMES: string = `${TEXT_SIZE_CLASS_NAMES} text-white`;
const CORE_COMPETENCIES_ID = '#coreCompetencies';

const getBackdrop = (): React.JSX.Element[] => {
  const backdropElements: React.JSX.Element[] = [];
  for(let i = MIN_SPHERE_POSITION; i < MAX_SPHERE_POSITION; i += SPHERE_X_AXIS) {
    for (let j = MIN_SPHERE_POSITION; j < MAX_SPHERE_POSITION; j += SPHERE_Y_AXIS) {
      backdropElements.push(<Sphere key={`x${i} y${j}`} position={[i, j, THREE.MathUtils.randInt(SPHERE_MIN_Z_AXIS, SPHERE_MAX_Z_AXIS)]} />);
    }
  }
  return backdropElements;
};

const getGradientBottomColor = (theme: string | undefined): string => {
  let gradientCss = `linear-gradient(to bottom, blue`;
  if (theme === 'dark') {
    gradientCss = `${gradientCss}, black)`;
    return gradientCss;
  }

  gradientCss = `${gradientCss}, white)`;
  return gradientCss;
};

const Home = ():React.JSX.Element => {
  const { theme } = useTheme();
  return (
    <div>
      <div className="h-screen">
        <Canvas style={{ backgroundImage: getGradientBottomColor(theme), zIndex: -1 }}>
          {getBackdrop()}
          <directionalLight color="blue" position={[0, 0, 5]} />
        </Canvas>
        <div className="flex flex-col items-center justify-center w-full h-full absolute top-0">
          <p className={BANNER_TEXT_CLASS_NAMES}>Hello, I'm Trevor</p>
          <p className={BANNER_TEXT_CLASS_NAMES}>I'm a full-stack engineer & leader</p>
          <Button className="mt-10 animate-bounce bg-white text-black hover:bg-gray-300 asChild">
            <Link href={CORE_COMPETENCIES_ID}>
              View my work
            </Link>
            <MoveDownIcon />
          </Button>
        </div>
      </div>
      <CoreCompetenciesSection />
    </div>
  );
};

export default Home;
