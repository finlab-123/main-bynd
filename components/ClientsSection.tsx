import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { useState, useEffect } from 'react'
// Correct imports if ClientsSection.tsx is in prj3/components/
import emiiigirlimage from '../src/assets/girlimage.jpg';
import image444 from '../src/assets/image44.jpg';
import imageboy from '../src/assets/imageboy.jpg';

const clients = [
  { name: 'Rajesh Mehta', role: 'CEO, Mehta Industries', image: 'https://via.placeholder.com/220x340' },
  { name: 'Priya Sharma', role: 'Founder, GreenLeaf Exports', image: 'https://via.placeholder.com/220x340' },
  { name: 'Anand Reddy', role: 'Partner', image: image444 }, // Correct local import
  { name: 'Amit Verma', role: 'Director', image: 'https://via.placeholder.com/220x340' },
  { name: 'Sneha Kapoor', role: 'Co-founder', image: emiiigirlimage },
  { name: 'Vikram Joshi', role: 'MD', image: imageboy }
];
const ClientsSection = () => {
  const { ref, isVisible } = useScrollReveal()
  const [elapsedSeconds, setElapsedSeconds] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedSeconds(prev => prev + 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const doubled = [...clients, ...clients]

  return (
    <>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .marquee-scroll {
          display: flex;
          width: max-content;
          animation: marquee 35s linear infinite;
        }

        @media (max-width: 768px) {
          .marquee-scroll {
            animation: marquee 18s linear infinite;
          }
        }
      `}</style>

      <section
        ref={ref}
        className='py-10 md:py-16 overflow-hidden'
        style={{ backgroundColor: '#f8fafc' }}   
      >
        <div className='px-4 md:px-8 max-w-[1200px] mx-auto'>

          {}
          <div
            className='flex flex-col md:flex-row md:items-end md:justify-between gap-4'
            style={{
              opacity: isVisible ? 1 : 0,
              animation: isVisible ? 'reveal-up 0.7s forwards' : 'none'
            }}
          >
            <div>
              <span className='text-lg sm:text-2xl md:text-3xl font-black uppercase text-green-600 tracking-wider'>
                Our Clients
              </span>

              <h2 className='font-bold text-xl sm:text-3xl md:text-5xl mt-2 text-gray-900'>
                Bynd grows with you!
              </h2>
            </div>
          </div>

          {}
          <div className='flex justify-center mt-4 mb-6 text-white text-sm font-medium'>
            {String(Math.floor(elapsedSeconds / 60)).padStart(2, '0')}:
            {String(elapsedSeconds % 60).padStart(2, '0')}
          </div>

          {}
          <div
            className='relative'
            style={{
              opacity: isVisible ? 1 : 0,
              animation: isVisible ? 'reveal-up 0.7s 0.2s forwards' : 'none'
            }}
          >
            <div className='marquee-scroll gap-4 md:gap-6'>

              {doubled.map((client, i) => {
                const isOdd = i % 2 !== 0

                return (
                  <div
                    key={i}
                    className='shrink-0'
                    style={{
                      transform: window.innerWidth < 768
                        ? 'translateY(0px)'   
                        : isOdd
                        ? 'translateY(-16px)'
                        : 'translateY(16px)'
                    }}
                  >
                    <div
                      className='relative 
                      w-[140px] h-[220px] 
                      sm:w-[180px] sm:h-[280px] 
                      md:w-[220px] md:h-[340px]
                      rounded-xl md:rounded-2xl overflow-hidden shadow-md'
                    >
                      {}
                      <img
                        src={client.image}
                        alt={client.name}
                        className='w-full h-full object-cover'
                        loading="lazy"
                      />

                      {}
                      <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent' />

                      {}
                      <div className='absolute bottom-0 p-2 md:p-4'>
                        <p className='text-white text-xs sm:text-sm md:text-base font-semibold'>
                          {client.name}
                        </p>
                        <p className='text-white/80 text-[10px] sm:text-xs'>
                          {client.role}
                        </p>
                      </div>

                    </div>
                  </div>
                )
              })}

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ClientsSection
