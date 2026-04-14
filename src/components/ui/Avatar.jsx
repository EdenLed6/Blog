const SIZE_CLASSES = {
  xs: "w-7 h-7 text-xs",
  sm: "w-8 h-8 text-sm",
  md: "w-10 h-10 text-sm",
  lg: "w-12 h-12 text-base",
  xl: "w-16 h-16 text-lg",
};

export default function Avatar({ user, size = "md" }) {
  if (!user) return null;
  return (
    <div
      className={`${SIZE_CLASSES[size]} ${user.avatarColor} rounded-full flex items-center justify-center font-bold text-white flex-shrink-0 select-none`}
    >
      {user.initials}
    </div>
  );
}
