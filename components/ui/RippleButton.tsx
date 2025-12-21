'use client'

import { useState, useRef, MouseEvent } from 'react'

interface RippleButtonProps {
  children: React.ReactNode
  onClick?: () => void
  href?: string
  className?: string
  variant?: 'primary' | 'secondary'
}

export default function RippleButton({
  children,
  onClick,
  href,
  className = '',
  variant = 'primary',
}: RippleButtonProps) {
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([])
  const [isHovered, setIsHovered] = useState(false)
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null)
  const rippleIdRef = useRef(0)

  const handleMouseEnter = (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    if (!buttonRef.current) return

    const rect = buttonRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const newRipple = { x, y, id: rippleIdRef.current++ }
    setRipples([newRipple])
    setIsHovered(true)

    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== newRipple.id))
    }, 800)
  }

  const handleMouseLeave = () => {
    setRipples([])
    setIsHovered(false)
  }

  // Color variants based on button type
  const hoverBgColor = variant === 'primary' ? 'bg-dark/20' : 'bg-dark'
  const rippleColor = variant === 'primary' ? 'bg-white/40' : 'bg-white/30'

  const baseClasses = variant === 'primary'
    ? 'bg-dark text-white'
    : 'bg-transparent text-dark border-2 border-dark'

  const Component = href ? 'a' : 'button'
  const componentProps = href ? { href } : { onClick }

  return (
    <>
      <Component
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ref={buttonRef as any}
        {...componentProps}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`relative overflow-hidden rounded-sm font-body text-base font-medium transition-all duration-300 hover:shadow-lg ${baseClasses} ${className}`}
        style={{ isolation: 'isolate' }}
      >
        <span 
          className="relative z-10 flex items-center gap-2 transition-colors duration-300"
          style={variant === 'secondary' ? {
            color: isHovered ? '#FFFFFF' : '#1A1A1A'
          } : {}}
        >
          {children}
        </span>
        
        {/* Permanent hover background */}
        <span
          className={`absolute inset-0 ${hoverBgColor} pointer-events-none transition-opacity duration-300`}
          style={{
            opacity: isHovered ? 1 : 0
          }}
        />
        
        {/* Ripple effect */}
        {ripples.map(ripple => (
          <span
            key={ripple.id}
            className={`absolute rounded-full ${rippleColor} pointer-events-none`}
            style={{
              left: ripple.x,
              top: ripple.y,
              width: '0px',
              height: '0px',
              transform: 'translate(-50%, -50%)',
              animation: 'ripple 0.8s ease-out forwards'
            }}
          />
        ))}
      </Component>
      <style jsx global>{`
        @keyframes ripple {
          to {
            width: 600px;
            height: 600px;
            opacity: 0;
          }
        }
      `}</style>
    </>
  )
}

