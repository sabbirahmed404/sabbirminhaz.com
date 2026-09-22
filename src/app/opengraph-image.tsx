import { ImageResponse } from "next/og";

export const alt = "Sabbir Ahmed Minhaz (SAM) - Co-Founder, CTO & AI Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0a0a0a",
          color: "#ededed",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            color: "#d4a847",
            fontFamily: "monospace",
            marginBottom: 24,
          }}
        >
          hello, i am
        </div>
        <div
          style={{
            fontSize: 84,
            fontWeight: 700,
            letterSpacing: -2,
            lineHeight: 1.05,
          }}
        >
          Sabbir Ahmed Minhaz
        </div>
        <div
          style={{
            fontSize: 36,
            color: "#a3a3a3",
            marginTop: 20,
          }}
        >
          Co-Founder, CTO &amp; AI Engineer
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#6b6b6b",
            fontFamily: "monospace",
            marginTop: 32,
          }}
        >
          sabbirminhaz.com
        </div>
      </div>
    ),
    { ...size }
  );
}
