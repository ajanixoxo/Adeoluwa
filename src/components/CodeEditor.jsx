"use client"

import { useEffect, useState } from 'react'

function CodeEditor() {
    const [displayedText, setDisplayedText] = useState('')
    const fullText = `<div class="hero">
  <h1>ADEOLUWA</h1>
  <h2>Web & App Developer</h2>
  <p>
    Crafting dynamic and responsive digital experiences 
    with a passion for innovation and clean code.
  </p>
  <div class="cta">
    <button>Explore My Work</button>
    <button>Get in Touch</button>
  </div>
</div>`

    useEffect(() => {
        let currentIndex = 0
        const intervalId = setInterval(() => {
            if (currentIndex <= fullText.length) {
                setDisplayedText(fullText.slice(0, currentIndex))
                currentIndex++
            } else {
                clearInterval(intervalId)
            }
        }, 50)

        return () => clearInterval(intervalId)
    }, [])

    return (
        <div className="w-[90%] lg:w-[80%]  rounded-lg bg-background/90 backdrop-blur-sm p-4 font-mono text-base border-white border shadow-3xl">
            <div className="mb-4 flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
            </div>
            <pre className="whitespace-pre-wrap">
                <code className="text-white">
                    {displayedText.split('').map((char, index) => {
                        if (char === '<') return <span key={index} className="text-pink-500">{'<'}</span>
                        if (char === '>') return <span key={index} className="text-pink-500">{'>'}</span>
                        if (char === '/') return <span key={index} className="text-pink-500">{'/'}</span>
                        if (char.match(/div|h1|h2|p|button/)) return <span key={index} className="text-pink-500 text-base">{char}</span>
                        if (char === 'class') return <span key={index} className="text-green-400 text-base">{char}</span>
                        if (char.match(/"hero"|"cta"/)) return <span key={index} className="text-yellow-300 text-base">{char}</span>
                        return <span key={index}>{char}</span>
                    })}
                </code>
            </pre>
        </div>
    )
}

export default CodeEditor