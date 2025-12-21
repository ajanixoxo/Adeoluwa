export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] bg-white flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="font-brand text-5xl md:text-6xl font-bold text-dark">
            ADÉ
          </h1>
        </div>
        <div className="flex items-center justify-center gap-2">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className="w-3 h-3 bg-accent rounded-full animate-bounce"
              style={{
                animationDelay: `${index * 0.2}s`,
                animationDuration: '0.6s',
              }}
            />
          ))}
        </div>
        <p className="mt-6 font-body text-sm text-dark/60">Loading...</p>
      </div>
    </div>
  )
}

