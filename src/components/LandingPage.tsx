import { Link } from "react-router-dom"
import { Smartphone, Monitor, Zap } from "lucide-react"
import FaultyTerminal from "./FaultyTerminal"
import nullPointerLogo from "../assets/null_pointer_logo.png"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Faulty Terminal Background */}
      <div className="fixed inset-0 z-0">
        <FaultyTerminal
          scale={1.5}
          gridMul={[2, 1]}
          digitSize={1.2}
          timeScale={1}
          pause={false}
          scanlineIntensity={1}
          glitchAmount={1}
          flickerAmount={1}
          noiseAmp={1}
          chromaticAberration={0}
          dither={0}
          curvature={0.2}
          tint="#2a4a2a"
          mouseReact={true}
          mouseStrength={0.5}
          pageLoadAnimation={false}
          brightness={1}
        />
      </div>
      
      {/* Scan lines overlay */}
      <div className="scan-lines fixed inset-0 pointer-events-none z-60"></div>
      
      {/* Floating Wide Pill Header */}
      <header className="fixed top-6 left-8 right-8 z-70 frosted-glass rounded-lg px-12 py-4 border-[0.25px] border-gray-600">
        <nav className="flex items-center justify-between w-full">
          <div>
            <img 
              src={nullPointerLogo} 
              alt="Null Pointer" 
              className="h-12 w-auto pixelated"
            />
          </div>
          <div className="text-xs tracking-wider text-white font-bold ml-18">
            HACKCMU 2025
          </div>
          <div className="flex items-center space-x-4">
            <button className="retro-button bg-black text-white px-4 py-2 text-xs tracking-wider hover:bg-white hover:text-black rounded-lg">
              DEVPOST
            </button>
            <button className="retro-button bg-white text-black px-4 py-2 text-xs tracking-wider hover:bg-black hover:text-white rounded-lg">
              GITHUB
            </button>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-24 relative z-30">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="retro-border bg-black p-6 mb-8 inline-block">
              <div className="text-xs tracking-widest text-white mb-2">
                &gt; NEXT-GEN RETRO GAMING &lt;
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight tracking-widest font-mono" style={{ letterSpacing: '0.15em' }}>
              CATHODE RAY GAMES
              <br />
              <span className="text-white">REIMAGINED</span>
            </h1>
            
            <div className="retro-border bg-black p-6 mb-12 max-w-3xl mx-auto">
              <p className="text-sm leading-relaxed text-white">
                EXPERIENCE CLASSIC LIGHT GUN GAMES LIKE DUCK HUNT USING YOUR 
                SMARTPHONE AND COMPUTER VISION TECHNOLOGY. POINT, SHOOT, AND 
                RELIVE THE MAGIC OF ARCADE GAMING ON MODERN DEVICES.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/games">
                <button className="retro-button bg-white text-black px-8 py-4 text-sm tracking-wider hover:bg-black hover:text-white">
                  &gt; PLAY GAMES &lt;
                </button>
              </Link>
              <button className="retro-button bg-black text-white px-8 py-4 text-sm tracking-wider hover:bg-white hover:text-black">
                &gt; LEARN MORE &lt;
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <div className="retro-border bg-black p-4 inline-block mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wider">
                HOW IT WORKS
              </h2>
            </div>
            <div className="retro-border bg-black p-4 max-w-2xl mx-auto">
              <p className="text-sm text-white">
                ADVANCED COMPUTER VISION TECHNOLOGY TRANSFORMS YOUR 
                SMARTPHONE INTO A PRECISE AIMING DEVICE
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="retro-border bg-black p-6">
              <div className="text-center mb-6">
                <div className="retro-border bg-white p-4 inline-block mb-4">
                  <Smartphone className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-lg font-bold text-white mb-4 tracking-wider">
                  PHONE CONTROLLER
                </h3>
                <p className="text-xs text-white leading-relaxed">
                  USE YOUR SMARTPHONE'S CAMERA AND SENSORS AS A PRECISION 
                  AIMING DEVICE FOR RETRO GAMING EXPERIENCE
                </p>
              </div>
            </div>

            <div className="retro-border bg-black p-6">
              <div className="text-center mb-6">
                <div className="retro-border bg-white p-4 inline-block mb-4">
                  <Monitor className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-lg font-bold text-white mb-4 tracking-wider">
                  COMPUTER VISION
                </h3>
                <p className="text-xs text-white leading-relaxed">
                  REAL-TIME TRACKING AND CALIBRATION FOR ACCURATE 
                  TARGETING AND SMOOTH GAMEPLAY EXPERIENCE
                </p>
              </div>
            </div>

            <div className="retro-border bg-black p-6">
              <div className="text-center mb-6">
                <div className="retro-border bg-white p-4 inline-block mb-4">
                  <Zap className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-lg font-bold text-white mb-4 tracking-wider">
                  INSTANT RESPONSE
                </h3>
                <p className="text-xs text-white leading-relaxed">
                  LOW-LATENCY GAMEPLAY THAT FEELS AS RESPONSIVE AS 
                  THE ORIGINAL ARCADE GAMES FROM THE 80S
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <div className="retro-border bg-black p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white tracking-wider">
                  BUILT WITH MODERN TECHNOLOGY
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <div className="retro-border bg-white p-3 mb-6">
                    <h3 className="text-sm font-bold text-black tracking-wider text-center">
                      FRONTEND
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {['REACT 19', 'TYPESCRIPT', 'TAILWIND CSS', 'VITE'].map((tech) => (
                      <div key={tech} className="retro-border bg-black p-2">
                        <span className="text-xs text-white tracking-wider">&gt; {tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="retro-border bg-white p-3 mb-6">
                    <h3 className="text-sm font-bold text-black tracking-wider text-center">
                      COMPUTER VISION
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {['WEBRTC', 'OPENCV', 'MEDIAPIPE', 'TENSORFLOW.JS'].map((tech) => (
                      <div key={tech} className="retro-border bg-black p-2">
                        <span className="text-xs text-white tracking-wider">&gt; {tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="retro-border bg-black p-8 mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-wider">
                READY TO PLAY?
              </h2>
              <p className="text-sm text-white leading-relaxed mb-8">
                EXPERIENCE THE FUTURE OF RETRO GAMING. NO ADDITIONAL HARDWARE 
                REQUIRED - JUST YOUR SMARTPHONE AND A MODERN WEB BROWSER.
              </p>
              <Link to="/games">
                <button className="retro-button bg-white text-black px-12 py-4 text-sm tracking-wider hover:bg-black hover:text-white">
                  &gt; PLAY GAMES &lt;
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-30 border-t border-white/20 bg-black/80">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center space-x-2">
            <span className="text-white/80 text-xs tracking-wider">
              © 2025
            </span>
            <img 
              src={nullPointerLogo} 
              alt="Null Pointer" 
              className="h-12 w-auto pixelated opacity-80"
            />
          </div>
        </div>
      </footer>
    </div>
  )
}