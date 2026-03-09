"use client"

import dynamic from "next/dynamic"

const MatrixBackground = dynamic(() => import("./matrix"), {
  ssr: false,
})

export default function MatrixWrapper() {
  return <MatrixBackground />
}
