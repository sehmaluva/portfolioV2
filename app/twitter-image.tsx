import { ImageResponse } from "next/og";

export const alt = "Malvin T. Machingura -Software Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "64px",
        background:
          "linear-gradient(135deg, #0a0a0a 0%, #111827 50%, #0f172a 100%)",
        color: "#f8fafc",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          fontSize: 28,
          color: "#94a3b8",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
      >
        sehmaluva.me
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.05 }}>
          Malvin T. Machingura
        </div>
        <div style={{ fontSize: 36, color: "#38bdf8", fontWeight: 600 }}>
          Software Engineering Student
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#cbd5e1",
            maxWidth: 900,
            lineHeight: 1.35,
          }}
        >
          Part-time Software Engineer · AI · Full-Stack · Machine Learning
        </div>
      </div>

      <div style={{ display: "flex", gap: 16, fontSize: 22, color: "#94a3b8" }}>
        <span>Python</span>
        <span>·</span>
        <span>Django</span>
        <span>·</span>
        <span>React</span>
        <span>·</span>
        <span>Next.js</span>
        <span>·</span>
        <span>TypeScript</span>
      </div>
    </div>,
    { ...size },
  );
}
