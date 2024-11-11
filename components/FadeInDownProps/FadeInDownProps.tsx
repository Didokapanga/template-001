"use client";

// components/FadeInDown.tsx
import { ReactNode, useEffect, useRef } from "react";

interface FadeInDownProps {
    children: ReactNode;
    delay?: number; // délai facultatif pour la cascade
}

export default function FadeInDown({ children, delay = 0 }: FadeInDownProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (ref.current) {
            ref.current.style.animation = `fadeInDown 0.8s ease ${delay}s forwards`;
        }
    }, [delay]);

    return (
        <div ref={ref} className="opacity-0"> {/* Cache l'élément avant l'animation */}
            {children}
        </div>
    );
}
