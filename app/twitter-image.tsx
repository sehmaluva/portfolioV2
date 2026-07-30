import { ImageResponse } from "next/og"

export const alt = "Malvin T. Machingura — Software Engineering Student"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background: "linear-gradient(145deg, #f3f6f8 0%, #e4ebf0 50%, #d5e8e4 100%)",
          color: "#14202b",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ fontSize: 24, color: "#0f766e", fontFamily: "sans-serif", letterSpacing: 2 }}>
          SEHMALUVA
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 64, fontWeight: 600, lineHeight: 1.05 }}>
            Malvin T. Machingura
          </div>
          <div style={{ fontSize: 28, color: "#5a6d7a", fontFamily: "sans-serif" }}>
            Software Engineering Student · AI & Full-Stack
          </div>
        </div>
        <div style={{ fontSize: 20, color: "#0f766e", fontFamily: "sans-serif" }}>
          sehmaluva.me
        </div>
      </div>
    ),
    { ...size },
  )
}
