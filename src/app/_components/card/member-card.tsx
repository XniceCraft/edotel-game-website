import type { Member } from '@/types/landing/team-section'

export function MemberCard({
  member,
  className,
  style,
}: {
  member: Member
  className?: string
  style?: React.CSSProperties
}) {
  return (
    <div
      className={`relative w-40 h-52 rounded-sm shadow-md group ${className}`}
      style={{
        ...style,
        backgroundColor: member.backgroundColor,
      }}
    >
      <img
        alt={member.name}
        src={member.avatar}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full object-contain scale-105 group-hover:scale-110 transition-transform duration-300 origin-bottom drop-shadow-md z-20"
      />
      <div className="absolute w-full h-full inset-0 rounded-sm overflow-hidden">
        <svg
          className="absolute w-full h-full inset-0 opacity-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="dots"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="2" fill="black" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
        <div className="absolute bottom-0 left-0 w-full h-full bg-linear-to-t from-black/50 to-transparent to-50% z-25" />
        <div className="absolute bottom-3 w-full px-4 text-center text-white text-sm text-pretty leading-4 z-30">
          <p className="font-extralight mb-2">{member.name}</p>
          <p className="font-medium tracking-wide">{member.role}</p>
        </div>
      </div>
    </div>
  )
}
