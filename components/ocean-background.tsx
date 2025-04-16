export function OceanBackground() {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full -z-10 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=1920&auto=format&fit=crop')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-teal-900/30 via-transparent to-teal-900/40"></div>
    </div>
  )
}
