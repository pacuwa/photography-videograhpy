interface FrameProps {
  tint: [string, string]
  className?: string
  angle?: number
  children?: React.ReactNode
}

export function Frame({ tint, className = '', angle = 135, children }: FrameProps) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        background: `linear-gradient(${angle}deg, ${tint[0]} 0%, ${tint[1]} 100%)`,
      }}
    >
      <div
        className="absolute inset-0 opacity-30 mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          boxShadow: 'inset 0 0 90px 20px rgba(0,0,0,0.45)',
        }}
      />
      {children}
    </div>
  )
}
