import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#241c14",
        }}
      >
        <svg width="120" height="120" viewBox="0 0 64 64">
          <g stroke="#f4ecd8" strokeWidth="2.6" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M26 10h12l-2 10 8 14a9 9 0 1 1-24 0l8-14-2-10z" />
            <path d="M23 34h18" />
            <path d="M32 10v10" />
          </g>
          <circle cx="32" cy="42" r="3.4" fill="#b8873a" />
          <path d="M20 50c4 3 20 3 24 0" stroke="#9c6f2a" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
