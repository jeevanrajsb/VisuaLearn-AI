import { Canvas } from "@react-three/fiber";
import architecture from "../assets/system-architecture.png";
import {
  Float,
  OrbitControls,
  Sparkles,
} from "@react-three/drei";


import {
  FaBrain,
  FaProjectDiagram,
  FaRobot,
  FaDatabase,
  FaMicrophoneAlt,
  FaCubes,
} from "react-icons/fa";

import AIBrain from "../models/AIBrain";



// =======================
// PROJECT SECTIONS
// =======================

const projectSections = [

  {
    title: "System Design",

    icon: <FaProjectDiagram />,

    theme:
      "bg-gradient-to-r from-cyan-500 to-blue-500",

    description:
      "Designed a scalable multi-agent AI architecture integrating adaptive learning, simulation engine, voice interaction, retrieval-augmented generation, and immersive 3D visualization modules.",

    points: [
      "Modular AI workflow architecture.",
      "Integrated simulation, RAG, and voice systems.",
      "Scalable multi-agent orchestration framework.",
    ],
  },



  {
    title: "Methodology",

    icon: <FaBrain />,

    theme:
      "bg-gradient-to-r from-violet-500 to-purple-500",

    description:
      "Implemented an agentic AI-based methodology combining retrieval systems, adaptive learning workflows, intelligent orchestration, simulation-based teaching, and dynamic visual interaction.",

    points: [
      "Research and literature survey.",
      "Iterative AI development lifecycle.",
      "Immersive 3D visualization workflow.",
    ],
  },



  {
    title: "RAG Engine",

    icon: <FaDatabase />,

    theme:
      "bg-gradient-to-r from-emerald-500 to-green-500",

    description:
      "Developed a Retrieval-Augmented Generation pipeline to improve contextual learning responses using intelligent knowledge retrieval and adaptive AI response generation.",

    points: [
      "Contextual document retrieval pipeline.",
      "Semantic search mechanism.",
      "Enhanced intelligent response generation.",
    ],
  },



  {
    title: "Simulation Engine",

    icon: <FaCubes />,

    theme:
      "bg-gradient-to-r from-orange-400 to-yellow-500",

    description:
      "Designed an interactive simulation engine for dynamic visualization of algorithms, workflows, and engineering concepts.",

    points: [
      "Dynamic algorithm visualization.",
      "Interactive learning simulations.",
      "Animation-based concept learning.",
    ],
  },



  {
    title: "Voice Interaction",

    icon: <FaMicrophoneAlt />,

    theme:
      "bg-gradient-to-r from-pink-500 to-rose-500",

    description:
      "Integrated intelligent voice-based interaction for conversational learning and immersive AI assistance.",

    points: [
      "Speech-based AI interaction.",
      "Conversational learning assistance.",
      "Improved accessibility and immersion.",
    ],
  },



  {
    title: "Multi-Agent AI",

    icon: <FaRobot />,

    theme:
      "bg-gradient-to-r from-red-500 to-orange-500",

    description:
      "Implemented a multi-agent orchestration framework where specialized AI agents collaborate intelligently.",

    points: [
      "Planner and retriever agents.",
      "Validation and orchestration workflows.",
      "Adaptive intelligent learning pipeline.",
    ],
  },

];



// =======================
// PROJECTS COMPONENT
// =======================

const Projects = () => {

  return (

    <section className='max-container'>

      {/* ======================= */}
      {/* TITLE */}
      {/* ======================= */}

      <h1 className='head-text'>

        Project{" "}

        <span className='blue-gradient_text drop-shadow font-semibold'>

          Modules

        </span>

      </h1>



      {/* ======================= */}
      {/* INTRO */}
      {/* ======================= */}

      <p className='text-slate-500 mt-2 leading-relaxed'>

        The following sections represent the intelligent
        modules and architecture implemented in the project{" "}

        <span className='font-semibold text-slate-700'>

          “VisuaLearn AI”

        </span>

        , an immersive AI-powered learning ecosystem
        integrating adaptive learning, simulations,
        retrieval-augmented intelligence, multi-agent
        orchestration, and 3D visualization technologies.

      </p>



      {/* ======================= */}
      {/* 3D MODEL SECTION */}
      {/* ======================= */}

      <div className='w-full h-[500px] mt-16 rounded-3xl overflow-hidden bg-gradient-to-b from-cyan-50 to-blue-100 shadow-xl'>

        <Canvas
          camera={{
            position: [0, 0, 25],
            fov: 45,
          }}
        >

          {/* LIGHTS */}

          <ambientLight intensity={3} />

          <directionalLight
            position={[5, 5, 5]}
            intensity={4}
          />

          <pointLight
            position={[10, 10, 10]}
            intensity={5}
            color='#06b6d4'
          />



          {/* PARTICLES */}

          <Sparkles
            count={250}
            scale={[30, 30, 30]}
            size={3}
            speed={0.4}
            color='#06b6d4'
          />



          {/* AI MODEL */}

          <Float
            speed={2}
            rotationIntensity={1}
            floatIntensity={2}
          >

            <AIBrain />

          </Float>



          {/* CONTROLS */}

          <OrbitControls
            autoRotate
            autoRotateSpeed={0.5}
            enableZoom={false}
          />

        </Canvas>

      </div>



      {/* ======================= */}
      {/* MODULE CARDS */}
      {/* ======================= */}

      <div className='flex flex-wrap my-20 gap-16'>

        {projectSections.map((section) => (

          <div
            className='lg:w-[400px] w-full'
            key={section.title}
          >

            {/* ICON */}

            <div className='block-container w-14 h-14'>

              <div
                className={`btn-back rounded-xl ${section.theme}`}
              />

              <div className='btn-front rounded-xl flex justify-center items-center text-white text-2xl'>

                {section.icon}

              </div>

            </div>



            {/* CONTENT */}

            <div className='mt-5 flex flex-col'>

              <h4 className='text-2xl font-poppins font-semibold text-slate-900'>

                {section.title}

              </h4>

              <p className='mt-2 text-slate-500 leading-relaxed'>

                {section.description}

              </p>



              {/* POINTS */}

              <ul className='mt-5 list-disc ml-5 space-y-2'>

                {section.points.map((point, index) => (

                  <li
                    key={index}
                    className='text-slate-600 text-sm leading-relaxed'
                  >

                    {point}

                  </li>

                ))}

              </ul>

            </div>

          </div>

        ))}

      </div>

        {/* ======================= */}
{/* SYSTEM ARCHITECTURE */}
{/* ======================= */}

<div className='mt-20'>

  <h2 className='text-4xl font-bold text-slate-900 text-center'>

    System Architecture

  </h2>

  <p className='text-slate-500 text-center mt-4 max-w-3xl mx-auto leading-relaxed'>

    The following architecture represents the intelligent
    workflow of VisuaLearn AI integrating multi-agent
    orchestration, retrieval-augmented generation,
    simulation engine, adaptive learning, and immersive
    3D interaction modules.

  </p>



  {/* IMAGE CONTAINER */}

  <div className='mt-12 rounded-3xl overflow-hidden shadow-2xl border border-cyan-100 bg-white p-6'>

    <img
      src={architecture}

      alt='System Architecture'

      className='w-full h-full object-contain rounded-2xl'
    />

  </div>

</div>

      {/* ======================= */}
      {/* DIVIDER */}
      {/* ======================= */}

      <hr className='border-slate-200' />

    </section>
  );
};

export default Projects;