"use client";

import { ParallaxProvider } from 'react-scroll-parallax'

export default function PreParallaxProvider({children}) {
  return (
    <ParallaxProvider>{children}</ParallaxProvider>
  )
}
