import { useState, useEffect, useRef } from 'react'

export default function useNearScreen({ distance = '100px', disconnect = true } = {}) {
    const [isNearScreen, setIsNearScreen] = useState(false)
    const elementRef = useRef(null)

    useEffect(() => {
        let observer

        const onChange = (entries) => {
            const el = entries[0]
            if (el.isIntersecting) {
                setIsNearScreen(true)
                if (disconnect && observer) {
                    observer.disconnect()
                }
            } else {
                setIsNearScreen(false)
            }
        }

        const initializeObserver = () => {
            if (elementRef.current) {
                observer = new IntersectionObserver(onChange, {
                    rootMargin: distance
                })
                observer.observe(elementRef.current)
            }
        }

        if (typeof IntersectionObserver !== 'undefined') {
            initializeObserver()
        } else {
            import('intersection-observer').then(() => {
                initializeObserver()
            })
        }

        return () => observer && observer.disconnect()
    }, [elementRef.current, disconnect, distance])

    return { isNearScreen, elementRef }
}
