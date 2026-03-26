import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'

interface RevealProps {
    children: ReactNode
    className?: string
    delayIndex?: number
    threshold?: number
}

export function Reveal({ children, className = '', delayIndex = 0, threshold = 0.2 }: RevealProps) {
    const ref = useRef<HTMLDivElement | null>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const element = ref.current
        if (!element) return

        const observer = new IntersectionObserver(
            entries => {
                const [entry] = entries
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.unobserve(entry.target)
                }
            },
            { threshold }
        )

        observer.observe(element)

        return () => observer.disconnect()
    }, [threshold])

    return (
        <div
            ref={ref}
            className={`reveal reveal-delay-${delayIndex} ${isVisible ? 'is-visible' : ''} ${className}`.trim()}
        >
            {children}
        </div>
    )
}