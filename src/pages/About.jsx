import { motion } from "framer-motion";

import {
  Canvas,
  useFrame,
} from "@react-three/fiber";

import {
  Float,
  OrbitControls,
  Sparkles,
  Text,
} from "@react-three/drei";

import {
  useRef,
} from "react";



// =======================
// RESEARCH PAPERS
// =======================

const papers = [

  {
    title:
      "ChatGPT and Large Language Models in Education",

    year: "2024",

    color: "#06b6d4",

    description:
      "Existing educational chatbots primarily provide static text-based responses with limited immersive interaction.",

    gap:
      "Lacks adaptive visualization, immersive simulations, and multi-agent educational orchestration.",
  },



  {
    title:
      "AI-Based Adaptive Learning Systems",

    year: "2023",

    color: "#8b5cf6",

    description:
      "Adaptive learning systems improve personalization but lack immersive interaction and dynamic simulations.",

    gap:
      "Fails to integrate intelligent 3D visualization and real-time conceptual simulation workflows.",
  },



  {
    title:
      "Simulation-Based Engineering Education",

    year: "2022",

    color: "#10b981",

    description:
      "Simulation tools improve engineering concept understanding using visual interaction.",

    gap:
      "Most systems are standalone and do not integrate AI reasoning or adaptive learning capabilities.",
  },



  {
    title:
      "Retrieval-Augmented Generation for Intelligent Systems",

    year: "2024",

    color: "#f59e0b",

    description:
      "RAG improves contextual response generation using external knowledge retrieval.",

    gap:
      "Existing implementations lack immersive educational visualization and intelligent multi-agent orchestration.",
  },

];



// =======================
// AI RESEARCH CORE
// =======================

const ResearchCore = () => {

  const coreRef = useRef();

  useFrame((state) => {

    const t =
      state.clock.getElapsedTime();

    coreRef.current.rotation.y =
      t * 0.3;

  });

  return (

    <group ref={coreRef}>

      {/* OUTER RING */}

      <mesh rotation={[Math.PI / 2, 0, 0]}>

        <torusGeometry
          args={[8, 0.15, 32, 200]}
        />

        <meshStandardMaterial
          color="#06b6d4"
          emissive="#06b6d4"
          emissiveIntensity={6}
        />

      </mesh>



      {/* SECOND RING */}

      <mesh rotation={[0, Math.PI / 2, 0]}>

        <torusGeometry
          args={[5.5, 0.12, 32, 200]}
        />

        <meshStandardMaterial
          color="#8b5cf6"
          emissive="#8b5cf6"
          emissiveIntensity={5}
        />

      </mesh>



      {/* THIRD RING */}

      <mesh rotation={[0.7, 0.3, 0]}>

        <torusGeometry
          args={[11, 0.08, 32, 200]}
        />

        <meshStandardMaterial
          color="#10b981"
          emissive="#10b981"
          emissiveIntensity={5}
        />

      </mesh>



      {/* GLOW SPHERE */}

      <mesh>

        <sphereGeometry
          args={[3, 64, 64]}
        />

        <meshStandardMaterial
          color="#67e8f9"
          emissive="#06b6d4"
          emissiveIntensity={3}
          transparent
          opacity={0.15}
        />

      </mesh>



      {/* FLOATING NODE 1 */}

      <Float speed={4}>

        <mesh position={[12, 0, 0]}>

          <sphereGeometry
            args={[0.7, 32, 32]}
          />

          <meshStandardMaterial
            color="#06b6d4"
            emissive="#06b6d4"
            emissiveIntensity={6}
          />

        </mesh>

      </Float>



      {/* FLOATING NODE 2 */}

      <Float speed={5}>

        <mesh position={[-12, 0, 0]}>

          <sphereGeometry
            args={[0.7, 32, 32]}
          />

          <meshStandardMaterial
            color="#8b5cf6"
            emissive="#8b5cf6"
            emissiveIntensity={6}
          />

        </mesh>

      </Float>



      {/* FLOATING NODE 3 */}

      <Float speed={6}>

        <mesh position={[0, 12, 0]}>

          <sphereGeometry
            args={[0.7, 32, 32]}
          />

          <meshStandardMaterial
            color="#10b981"
            emissive="#10b981"
            emissiveIntensity={6}
          />

        </mesh>

      </Float>



      {/* TEXT */}

      <Text
        position={[0, -10, 0]}
        fontSize={0.8}
        color="#06b6d4"
      >

        AI Research Ecosystem

      </Text>

    </group>

  );
};



// =======================
// ABOUT COMPONENT
// =======================

const About = () => {

  return (

    <section className='w-full min-h-screen overflow-hidden bg-gradient-to-b from-white via-cyan-50 to-blue-100 px-6 py-16'>

      {/* ======================= */}
      {/* HERO SECTION */}
      {/* ======================= */}

      <motion.div

        initial={{
          opacity: 0,
          y: -100,
        }}

        animate={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          duration: 1,
        }}

        className='text-center'
      >

        <h1 className='text-7xl font-black text-slate-900'>

          Research{" "}

          <span className='text-cyan-500'>

            Gap Analysis

          </span>

        </h1>

        <p className='mt-8 text-slate-600 text-xl leading-relaxed max-w-5xl mx-auto'>

          This section analyzes existing research papers,
          educational AI systems, and intelligent learning
          technologies to identify the major research gaps
          addressed by{" "}

          <span className='font-semibold text-slate-800'>

            VisuaLearn AI

          </span>

          .

        </p>

      </motion.div>



      {/* ======================= */}
      {/* 3D RESEARCH CORE */}
      {/* ======================= */}

      <motion.div

        initial={{
          opacity: 0,
          scale: 0.7,
        }}

        whileInView={{
          opacity: 1,
          scale: 1,
        }}

        transition={{
          duration: 1,
        }}

        className='w-full h-[650px] mt-20 rounded-[40px] overflow-hidden bg-gradient-to-br from-cyan-50 via-white to-blue-100 shadow-[0_20px_80px_rgba(6,182,212,0.25)]'
      >

        <Canvas
          camera={{
            position: [0, 0, 22],
            fov: 45,
          }}
        >

          {/* LIGHTS */}

          <ambientLight intensity={4} />

          <directionalLight
            position={[5, 5, 5]}
            intensity={5}
          />

          <pointLight
            position={[10, 10, 10]}
            intensity={7}
            color='#06b6d4'
          />

          <spotLight
            position={[0, 30, 20]}
            angle={0.3}
            penumbra={1}
            intensity={8}
          />



          {/* FOG */}

          <fog
            attach='fog'
            args={["#dff7ff", 20, 60]}
          />



          {/* PARTICLES */}

          <Sparkles
            count={500}
            scale={[40, 40, 40]}
            size={5}
            speed={0.5}
            color='#06b6d4'
          />



          {/* FLOOR */}

          <mesh
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -12, 0]}
          >

            <planeGeometry
              args={[200, 200]}
            />

            <meshStandardMaterial
              color='#dff7ff'
              transparent
              opacity={0.35}
            />

          </mesh>



          {/* CORE */}

          <ResearchCore />



          {/* CAMERA */}

          <OrbitControls
            autoRotate
            autoRotateSpeed={0.5}
            enableZoom={false}
          />

        </Canvas>

      </motion.div>



      {/* ======================= */}
      {/* RESEARCH PAPERS */}
      {/* ======================= */}

      <div className='max-w-7xl mx-auto mt-28'>

        <motion.h2

          initial={{
            opacity: 0,
            y: 50,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 1,
          }}

          className='text-5xl font-black text-center text-slate-900'
        >

          Existing Research Papers

        </motion.h2>



        <motion.p

          initial={{
            opacity: 0,
          }}

          whileInView={{
            opacity: 1,
          }}

          transition={{
            duration: 1,
          }}

          className='mt-6 text-center text-slate-600 text-lg leading-relaxed max-w-4xl mx-auto'
        >

          The following research papers and educational AI
          systems were analyzed to identify technological
          limitations and existing research gaps in
          intelligent immersive learning systems.

        </motion.p>



        {/* PAPER CARDS */}

        <div className='grid lg:grid-cols-2 gap-10 mt-20'>

          {papers.map((paper, index) => (

            <motion.div

              key={index}

              initial={{
                opacity: 0,
                y: 100,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.8,
                delay: index * 0.2,
              }}

              whileHover={{
                y: -15,
                scale: 1.02,
              }}

              className='relative overflow-hidden bg-white/80 backdrop-blur-xl rounded-[35px] p-10 shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-white'
            >

              {/* GLOW */}

              <div
                className='absolute top-0 left-0 w-full h-2'
                style={{
                  background: paper.color,
                }}
              />



              {/* YEAR */}

              <div
                className='inline-flex px-4 py-2 rounded-full text-white text-sm font-bold'
                style={{
                  background: paper.color,
                }}
              >

                {paper.year}

              </div>



              {/* TITLE */}

              <h3 className='mt-6 text-3xl font-black text-slate-900 leading-snug'>

                {paper.title}

              </h3>



              {/* DESCRIPTION */}

              <p className='mt-6 text-slate-600 text-lg leading-relaxed'>

                {paper.description}

              </p>



              {/* RESEARCH GAP */}

              <div className='mt-8 bg-slate-50 rounded-3xl p-6 border border-slate-100'>

                <h4 className='text-xl font-bold text-slate-900'>

                  Research Gap

                </h4>

                <p className='mt-3 text-slate-600 leading-relaxed'>

                  {paper.gap}

                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>



      {/* ======================= */}
      {/* FINAL RESEARCH GAP */}
      {/* ======================= */}

      <motion.div

        initial={{
          opacity: 0,
          y: 100,
        }}

        whileInView={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          duration: 1,
        }}

        className='max-w-6xl mx-auto mt-32'
      >

        <div className='relative overflow-hidden rounded-[45px] bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 p-16 shadow-[0_30px_100px_rgba(6,182,212,0.35)]'>

          {/* OVERLAY */}

          <div className='absolute inset-0 bg-white/5 backdrop-blur-xl' />



          {/* CONTENT */}

          <div className='relative z-10'>

            <h2 className='text-5xl font-black text-white text-center'>

              Identified Research Gap

            </h2>

            <p className='mt-10 text-cyan-50 text-xl leading-relaxed text-center max-w-5xl mx-auto'>

              Existing intelligent educational systems fail
              to integrate adaptive AI learning,
              retrieval-augmented intelligence,
              simulation-based conceptual understanding,
              multi-agent orchestration, and immersive 3D
              visualization into a unified intelligent
              educational ecosystem.

            </p>



            {/* FEATURES */}

            <div className='grid lg:grid-cols-4 gap-6 mt-14'>

              {[
                "Adaptive AI",
                "3D Learning",
                "Multi-Agent AI",
                "Simulations",
              ].map((feature, index) => (

                <motion.div

                  key={index}

                  whileHover={{
                    scale: 1.08,
                  }}

                  className='bg-white/10 rounded-3xl p-6 text-center text-white font-bold text-lg backdrop-blur-xl border border-white/10'
                >

                  {feature}

                </motion.div>

              ))}

            </div>

          </div>

        </div>

      </motion.div>

    </section>

  );
};

export default About;