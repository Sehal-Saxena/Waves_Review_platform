"use client"

import { useEffect, useRef } from "react"

export function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75 // Slow down the video slightly for a more calming effect
    }
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-transparent to-blue-900/50 z-10"></div>
      <video ref={videoRef} autoPlay loop muted playsInline className="absolute min-w-full min-h-full object-cover">
        <source src="https://videos.pexels.com/video-files/1828452/1828452-uhd_2560_1440_24fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}
