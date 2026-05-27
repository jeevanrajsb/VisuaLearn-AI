import { Canvas, useFrame } from "@react-three/fiber";

import {
  Suspense,
  useEffect,
  useRef,
  useState,
} from "react";

import sakura from "../assets/sakura.mp3";

import { Loader } from "../components";

import {
  soundoff,
  soundon,
} from "../assets/Icons";

import {
  OrbitControls,
  Float,
  Text,
  Sparkles,
} from "@react-three/drei";

import AIBrain from "../models/AIBrain";



// =======================
// ANIMATED AI RING
// =======================

const RingBubble = ({
  text,
  position,
  color,
}) => {

  const ringRef = useRef();

  useFrame((state) => {

    const t =
      state.clock.getElapsedTime();

    ringRef.current.rotation.x =
      t * 0.5;

    ringRef.current.rotation.y =
      t * 0.8;

    const scale =
      1 + Math.sin(t * 2) * 0.08;

    ringRef.current.scale.set(
      scale,
      scale,
      scale
    );
  });

  return (

    <Float
      speed={4}
      rotationIntensity={2}
      floatIntensity={4}
      floatingRange={[0, 1.2]}
    >

      <group position={position}>

        {/* MAIN RING */}

        <group ref={ringRef}>

          <mesh>

            <torusGeometry
              args={[2.2, 0.25, 32, 100]}
            />

            <meshStandardMaterial
              color={color}
              emissive={color}
              emissiveIntensity={4}
              metalness={1}
              roughness={0}
            />

          </mesh>



          {/* INNER CORE */}

          <mesh>

            <sphereGeometry
              args={[1.1, 64, 64]}
            />

            <meshStandardMaterial
              color={color}
              emissive={color}
              emissiveIntensity={2}
              transparent
              opacity={0.35}
            />

          </mesh>

        </group>



        {/* TEXT */}

        <Text
          position={[0, -2, 2.8]}
          fontSize={0.6}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.02}
          outlineColor="#000000"
          maxWidth={5}
        >

          {text}

        </Text>

      </group>

    </Float>
  );
};



// =======================
// MAIN HOME COMPONENT
// =======================

const Home = () => {

  // MUSIC

  const audioRef = useRef(
    new Audio(sakura)
  );

  audioRef.current.volume = 0.4;

  audioRef.current.loop = true;

  const [isPlayingMusic, setIsPlayingMusic] =
    useState(false);

  useEffect(() => {

    if (isPlayingMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    };

  }, [isPlayingMusic]);



  return (

    <section className="w-full min-h-screen relative overflow-hidden bg-gradient-to-b from-white via-cyan-50 to-blue-100">

      {/* ======================= */}
      {/* HERO TITLE */}
      {/* ======================= */}

      <div className="absolute top-10 left-0 right-0 z-10 flex flex-col items-center justify-center text-center px-4">

        <h1 className="font-black lg:text-8xl md:text-7xl sm:text-6xl text-5xl leading-tight text-slate-900">

          VisuaLearn AI

        </h1>

        <p className="mt-6 text-cyan-700 text-lg md:text-xl max-w-4xl leading-8 font-medium">

          Agentic Multi-Modal Intelligent Learning Platform
          with Dynamic Visualization, Simulation Engine,
          Adaptive Learning, Voice Interaction, and
          Retrieval-Augmented Intelligence.

        </p>

      </div>



      {/* ======================= */}
      {/* 3D BRAIN SCENE */}
      {/* ======================= */}

      <div className="w-full h-screen mt-[220px]">

        <Canvas
          className="w-full h-screen"
          camera={{
            position: [0, 0, 48],
            fov: 45,
            near: 0.1,
            far: 1000,
          }}
        >

          <Suspense fallback={<Loader />}>

            {/* LIGHTS */}

            <ambientLight intensity={4} />

            <directionalLight
              position={[5, 5, 5]}
              intensity={5}
              color="#ffffff"
            />

            <pointLight
              position={[10, 10, 10]}
              intensity={6}
              color="#06b6d4"
            />

            <hemisphereLight
              skyColor="#ffffff"
              groundColor="#ffffff"
              intensity={3}
            />



            {/* PARTICLES */}

            <Sparkles
              count={300}
              scale={[60, 60, 60]}
              size={4}
              speed={0.4}
              color="#06b6d4"
            />



            {/* FLOOR */}

            <mesh
              rotation={[-Math.PI / 2, 0, 0]}
              position={[0, -15, 0]}
            >

              <planeGeometry
                args={[200, 200]}
              />

              <meshStandardMaterial
                color="#dff7ff"
                transparent
                opacity={0.45}
              />

            </mesh>



            {/* AI BRAIN */}

            <Float
              speed={2}
              rotationIntensity={1}
              floatIntensity={2}
            >

              <AIBrain />

            </Float>



            {/* AI MODULES */}

            <RingBubble
              text="RAG"
              position={[12, 4, 0]}
              color="#06b6d4"
            />

            <RingBubble
              text="Multi-Agent"
              position={[-12, 4, 0]}
              color="#8b5cf6"
            />

            <RingBubble
              text="Simulation"
              position={[0, 12, 0]}
              color="#10b981"
            />

            <RingBubble
              text="Voice AI"
              position={[10, -10, 0]}
              color="#f59e0b"
            />

            <RingBubble
              text="3D Learning"
              position={[-10, -10, 0]}
              color="#ef4444"
            />



            {/* CAMERA */}

            <OrbitControls
              enableZoom={false}
              autoRotate
              autoRotateSpeed={0.4}
            />

          </Suspense>

        </Canvas>

      </div>



      {/* ======================= */}
      {/* WHY VISUALEARN AI */}
      {/* ======================= */}

      <div className="max-w-7xl mx-auto py-24 px-4">

        {/* TITLE */}

        <div className="text-center">

          <h2 className="text-6xl font-black text-slate-900">

            Why Traditional AI Systems
            Were Not Enough

          </h2>

          <p className="mt-6 text-slate-600 text-xl leading-relaxed max-w-4xl mx-auto">

            Existing AI chatbots mainly provide static
            text-based interaction. Complex engineering
            education requires immersive visualization,
            simulations, adaptive reasoning, and intelligent
            orchestration for meaningful conceptual
            understanding.

          </p>

        </div>



        {/* CARDS */}

        <div className="grid lg:grid-cols-3 gap-10 mt-20">

          {/* OLD CHATBOTS */}

          <div className="group bg-white rounded-[35px] p-10 shadow-2xl border border-red-100 hover:-translate-y-4 transition-all duration-500">

            <div className="w-24 h-24 rounded-full bg-red-100 flex items-center justify-center mx-auto animate-pulse">

              <span className="text-5xl">

                💬

              </span>

            </div>

            <h3 className="mt-8 text-3xl font-black text-red-500 text-center">

              Traditional Chatbots

            </h3>

            <ul className="mt-8 space-y-5 text-slate-600 leading-relaxed text-lg">

              <li>
                ❌ Static text-only responses
              </li>

              <li>
                ❌ No real-time simulations
              </li>

              <li>
                ❌ Limited conceptual interaction
              </li>

              <li>
                ❌ No immersive visualization
              </li>

            </ul>

          </div>



          {/* CENTER AI */}

          <div className="relative overflow-hidden bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-600 rounded-[40px] p-12 shadow-[0_20px_80px_rgba(6,182,212,0.4)] hover:scale-105 transition-all duration-500">

            {/* GLOW */}

            <div className="absolute inset-0 bg-white/10 backdrop-blur-xl" />



            {/* CONTENT */}

            <div className="relative z-10">

              <div className="w-28 h-28 rounded-full bg-white/20 flex items-center justify-center mx-auto animate-spin-slow border border-white/30">

                <span className="text-6xl">

                  🧠

                </span>

              </div>

              <h3 className="mt-8 text-4xl font-black text-white text-center">

                VisuaLearn AI

              </h3>

              <p className="mt-6 text-cyan-50 text-lg leading-relaxed text-center">

                An immersive intelligent learning ecosystem
                integrating adaptive AI, multi-agent
                reasoning, simulations, retrieval systems,
                and real-time 3D visualization.

              </p>



              {/* FEATURES */}

              <div className="grid grid-cols-2 gap-4 mt-10">

                <div className="bg-white/10 rounded-2xl p-4 text-center text-white font-semibold">

                  Multi-Agent AI

                </div>

                <div className="bg-white/10 rounded-2xl p-4 text-center text-white font-semibold">

                  RAG Engine

                </div>

                <div className="bg-white/10 rounded-2xl p-4 text-center text-white font-semibold">

                  Simulations

                </div>

                <div className="bg-white/10 rounded-2xl p-4 text-center text-white font-semibold">

                  3D Learning

                </div>

              </div>

            </div>

          </div>



          {/* INNOVATIVE LEARNING */}

          <div className="group bg-white rounded-[35px] p-10 shadow-2xl border border-cyan-100 hover:-translate-y-4 transition-all duration-500">

            <div className="w-24 h-24 rounded-full bg-cyan-100 flex items-center justify-center mx-auto animate-bounce">

              <span className="text-5xl">

                🚀

              </span>

            </div>

            <h3 className="mt-8 text-3xl font-black text-cyan-600 text-center">

              Intelligent Learning

            </h3>

            <ul className="mt-8 space-y-5 text-slate-600 leading-relaxed text-lg">

              <li>
                ✅ Immersive 3D visualization
              </li>

              <li>
                ✅ Simulation-based understanding
              </li>

              <li>
                ✅ Adaptive personalized learning
              </li>

              <li>
                ✅ Multi-agent orchestration
              </li>

            </ul>

          </div>

        </div>

      </div>



      {/* ======================= */}
      {/* WORKFLOW PIPELINE */}
      {/* ======================= */}

      <div className="max-w-6xl mx-auto py-20 px-4">

        <h2 className="text-5xl font-black text-center text-slate-900">

          Intelligent Workflow Pipeline

        </h2>

        <p className="text-slate-500 text-center mt-6 text-lg leading-relaxed max-w-3xl mx-auto">

          VisuaLearn AI follows an intelligent multi-stage
          learning pipeline integrating retrieval systems,
          adaptive AI reasoning, simulations, and immersive
          visualization for enhanced conceptual
          understanding.

        </p>



        <div className="grid lg:grid-cols-6 gap-6 mt-16">

          {[
            "User Query",
            "Planner Agent",
            "RAG Engine",
            "Simulation",
            "Adaptive AI",
            "3D Visualization",
          ].map((step, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl shadow-xl border border-cyan-100 p-6 text-center hover:-translate-y-2 transition-all duration-300"
            >

              <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white flex items-center justify-center text-xl font-bold">

                {index + 1}

              </div>

              <h3 className="mt-5 font-bold text-slate-800 text-lg">

                {step}

              </h3>

            </div>

          ))}

        </div>

      </div>



      {/* MUSIC BUTTON */}

      <div className="fixed bottom-5 left-5 z-20">

        <img
          src={
            !isPlayingMusic
              ? soundoff
              : soundon
          }

          alt="music"

          onClick={() =>
            setIsPlayingMusic(
              !isPlayingMusic
            )
          }

          className="w-10 h-10 cursor-pointer object-contain hover:scale-110 transition-all duration-300"
        />

      </div>

    </section>
  );
};

export default Home;