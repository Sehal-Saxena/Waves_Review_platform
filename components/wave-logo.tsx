export function WaveLogo({ className = "text-blue-300", size = 32 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="3" />
      <path
        d="M10 28C14 22 16 26 20 22C24 18 26 24 30 20C34 16 38 20 38 20"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 34C14 28 16 32 20 28C24 24 26 30 30 26C34 22 38 26 38 26"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
