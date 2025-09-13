import { useState } from 'react'
import { Link } from 'react-router-dom'
import nullPointerLogo from "../assets/null_pointer_logo.png"
import FaultyTerminal from "./FaultyTerminal"

export default function GamesPage() {
  const [isOn, setIsOn] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleTurnOn = () => {
    setIsOn(true)
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden flex items-center justify-center">
      {/* Faulty Terminal Background */}
      <div className="fixed inset-0 z-0">
        <FaultyTerminal
          scale={1.5}
          gridMul={[2, 1]}
          digitSize={1.2}
          timeScale={0.1}
          pause={false}
          scanlineIntensity={0.6}
          glitchAmount={0.4}
          flickerAmount={0.4}
          noiseAmp={0.5}
          chromaticAberration={0}
          dither={0}
          curvature={0.2}
          tint="#1a2e1a"
          mouseReact={true}
          mouseStrength={0.3}
          pageLoadAnimation={false}
          brightness={0.7}
        />
      </div>
      
      {/* Scan lines overlay */}
      <div className="scan-lines fixed inset-0 pointer-events-none z-60"></div>
      {/* Hamburger Menu Button */}
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed top-6 left-6 z-50 w-12 h-12 bg-black/80 border border-gray-400 rounded-lg flex flex-col items-center justify-center space-y-1 hover:bg-white hover:border-black group transition-colors"
      >
        <div className="w-6 h-0.5 bg-gray-400 group-hover:bg-black transition-colors"></div>
        <div className="w-6 h-0.5 bg-gray-400 group-hover:bg-black transition-colors"></div>
        <div className="w-6 h-0.5 bg-gray-400 group-hover:bg-black transition-colors"></div>
      </button>

      {/* Slide-out Menu */}
      <div className={`fixed top-0 left-0 h-full w-80 bg-black/90 border-r border-white/20 z-40 transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6">
          {/* Logo Section */}
          <div className="flex items-center justify-center mb-8 mt-16">
            <img 
              src={nullPointerLogo} 
              alt="Null Pointer" 
              className="h-12 w-auto pixelated"
            />
          </div>

          {/* Home Link */}
          <div className="mb-8">
            <Link 
              to="/" 
              className="retro-button bg-black text-white px-6 py-3 text-sm tracking-wider hover:bg-white hover:text-black border-2 border-white block text-center"
            >
              &lt; RETURN HOME
            </Link>
          </div>

          {/* Library Section */}
          <div>
            <h2 className="text-sm font-bold text-white tracking-wider mb-6">
              LIBRARY
            </h2>
            
            {/* Future game cards will go here */}
            <div className="text-left text-gray-400 text-xs tracking-wider">
              GAMES WILL APPEAR HERE
            </div>
          </div>
        </div>
      </div>

      {/* Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
      {/* CRT TV Container */}
      <div className="relative w-full max-w-7xl mx-auto p-4">
        {/* TV Bezel */}
        <div className="relative bg-transparent p-2 rounded-lg shadow-2xl">
          {/* Screen */}
          <div className="relative bg-black rounded-sm overflow-hidden aspect-[18/9] border-[0.5px] border-gray-400">
            {!isOn ? (
              /* Blank/Off Screen */
              <div className="w-full h-full bg-black relative flex items-center justify-center cursor-pointer" onClick={handleTurnOn}>
                {/* Subtle screen reflection */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-700/20 via-transparent to-gray-600/30"></div>
                
                {/* Power indicator */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-red-500 rounded-full shadow-lg shadow-red-500/50"></div>
                
                {/* Click to turn on hint */}
                <div className="text-gray-600 text-sm tracking-wider opacity-50 hover:opacity-100 transition-opacity">
                  CLICK TO POWER ON
                </div>
              </div>
            ) : (
              /* TV is on - show scan lines and static */
              <div className="w-full h-full bg-black relative crt-screen">
                {/* CRT Scanlines */}
                <div className="absolute inset-0 z-10 pointer-events-none" style={{
                  background: `linear-gradient(transparent 50%, rgba(255, 255, 255, 0.15) 50%)`,
                  backgroundSize: '100% 4px'
                }}></div>
                
                {/* CRT Flicker overlay */}
                <div className="absolute inset-0 z-20 pointer-events-none crt-flicker" style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  opacity: 0
                }}></div>
                
                {/* Center content area for future games */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <img 
                      src={nullPointerLogo} 
                      alt="Null Pointer" 
                      className="h-16 w-auto pixelated mx-auto opacity-80"
                    />
                    <div className="text-green-400 text-sm tracking-widest font-mono">
                      READY FOR GAMES
                    </div>
                    <div className="text-gray-400 text-xs tracking-wider">
                      SELECT A GAME BELOW
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* TV Controls */}
          <div className="relative mt-4 px-2 bg-black rounded-lg p-4 border-[0.5px] border-gray-400">
            {/* Subtle gradient overlay like main screen */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-700/20 via-transparent to-gray-600/30 rounded-lg"></div>
            
            <div className="relative flex justify-between items-center min-h-[4rem]">
              <div></div>
              
              <div className="text-gray-500 text-xs tracking-wider ml-10">
                NULL_POINTER TV
              </div>
              
              <div className="flex flex-col items-center space-y-1">
                <div className="text-gray-500 text-xs tracking-wider">
                  ON/OFF
                </div>
                <button 
                  onClick={() => setIsOn(!isOn)}
                  className="w-12 h-12 bg-gray-600 rounded-full border-2 border-gray-500 flex items-center justify-center hover:bg-gray-500 transition-colors"
                >
                  <div className={`w-3 h-3 rounded-full ${isOn ? 'bg-green-400' : 'bg-red-400'}`}></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}