export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function LuxoraLogo({ variant = "default" }: { variant?: "default" | "white" }) {
  const isWhite = variant === "white";
  return (
    <div className="flex items-center gap-3">
      {/* Professional steam/sparkle cleaning logo */}
      <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center relative overflow-hidden shadow-sm">
        <svg viewBox="0 0 44 44" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {/* Water droplet shape */}
          <path d="M22 8C22 8 14 18 14 24C14 28.4183 17.5817 32 22 32C26.4183 32 30 28.4183 30 24C30 18 22 8 22 8Z" fill="white" fillOpacity="0.9" />
          {/* Steam lines */}
          <path d="M16 12C16 12 17.5 10 16 7" stroke="white" strokeOpacity="0.5" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M22 6C22 6 23.5 4 22 1" stroke="white" strokeOpacity="0.6" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M28 12C28 12 29.5 10 28 7" stroke="white" strokeOpacity="0.5" strokeWidth="1.5" strokeLinecap="round" />
          {/* Sparkle */}
          <path d="M35 10L36 13L39 14L36 15L35 18L34 15L31 14L34 13Z" fill="white" fillOpacity="0.7" />
          <path d="M9 26L10 28L12 29L10 30L9 32L8 30L6 29L8 28Z" fill="white" fillOpacity="0.5" />
          {/* Inner droplet highlight */}
          <ellipse cx="20" cy="23" rx="3" ry="4" fill="white" fillOpacity="0.2" />
        </svg>
      </div>
      <div className="leading-tight">
        <span className={`font-extrabold text-lg tracking-tight ${isWhite ? "text-white" : "text-primary"}`}>
          LUXORA
        </span>
        <span className={`block text-[9px] tracking-[0.18em] uppercase font-medium ${isWhite ? "text-white/50" : "text-muted-foreground"}`}>
          Steam Cleaning Ltd
        </span>
      </div>
    </div>
  );
}
