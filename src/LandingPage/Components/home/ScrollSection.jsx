import React, { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useSpring, useTransform, useInView } from 'framer-motion'

const sections = [
  { id: 'section1', title: 'Section 1', content: 'Content for section 1...' },
  { id: 'section2', title: 'Section 2', content: 'Content for section 2...' },
  { id: 'section3', title: 'Section 3', content: 'Content for section 3...' },
  { id: 'section4', title: 'Section 4', content: 'Content for section 4...' },
  { id: 'section5', title: 'Section 5', content: 'Content for section 5...' },
]

export default function ScrollableSection() {
  const containerRef = useRef(null)
  const [activeSection, setActiveSection] = useState('')
  const [isLocked, setIsLocked] = useState(false)
  const isInView = useInView(containerRef, { once: false, amount: 0.1 })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const scale = useTransform(
    scrollYProgress,
    [0, 0.1, 0.9, 1],
    [0.95, 1, 1, 0.95]
  )

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const container = containerRef.current
        const containerTop = container.offsetTop
        const containerBottom = containerTop + container.offsetHeight
        const windowScrollY = window.scrollY
        const windowHeight = window.innerHeight

        if (windowScrollY >= containerTop && windowScrollY < containerBottom - windowHeight) {
          setIsLocked(true)
          document.body.style.overflow = 'hidden'
          container.style.position = 'fixed'
          container.style.top = `${-containerTop}px`
        } else {
          setIsLocked(false)
          document.body.style.overflow = ''
          container.style.position = ''
          container.style.top = ''
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 }
    )

    sections.forEach((section) => {
      const element = document.getElementById(section.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <motion.div 
      className="min-h-screen bg-gray-100 py-12 flex items-center justify-center"
      ref={containerRef}
      style={{ scale }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row">
          {/* Left CTA Section */}
          <div className="md:w-1/3 md:pr-8 mb-8 md:mb-0 sticky top-1/4">
            <h2 className="text-3xl font-bold mb-4">Explore Our Features</h2>
            <p className="mb-4">Discover how our product can transform your workflow.</p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300">
              Get Started
            </button>
          </div>

          {/* Right Scrollable Section */}
          <div className="md:w-2/3 relative">
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-300">
              <motion.div
                className="w-full bg-blue-600"
                style={{ scaleY, originY: 0 }}
              />
            </div>

            {sections.map((section, index) => (
              <div
                key={section.id}
                id={section.id}
                className={`mb-12 pl-8 relative ${
                  activeSection === section.id ? 'opacity-100' : 'opacity-50'
                } transition-opacity duration-300`}
              >
                <motion.div
                  className="absolute left-0 w-7 h-7 rounded-full border-4 border-blue-600 bg-white z-10"
                  style={{
                    top: '0.5rem',
                    translateX: '-50%',
                    translateY: '-50%',
                  }}
                >
                  <motion.div
                    className="w-full h-full rounded-full bg-blue-600"
                    initial={{ scale: 0 }}
                    animate={{ scale: activeSection === section.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
                <p>{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}