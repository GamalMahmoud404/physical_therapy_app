export function SkeletonLoader({
  variant = "card",
  count = 1,
}: {
  variant?: "card" | "text" | "image" | "heading";
  count?: number;
}) {
  const skeletons = Array.from({ length: count });

  if (variant === "card") {
    return (
      <div className="space-y-4">
        {skeletons.map((_, i) => (
          <div
            key={i}
            className="
              rounded-2xl
              border
              border-gray-200
              bg-white
              p-4
              dark:border-neutral-800
              dark:bg-neutral-900
              animate-pulse
            "
          >
            <div className="h-48 rounded-xl bg-gray-200 dark:bg-neutral-800 mb-4" />
            <div className="h-4 bg-gray-200 dark:bg-neutral-800 rounded w-3/4 mb-2" />
            <div className="h-4 bg-gray-200 dark:bg-neutral-800 rounded w-1/2" />
          </div>
        ))}
      </div>
    );
  }

  if (variant === "text") {
    return (
      <div className="space-y-3">
        {skeletons.map((_, i) => (
          <div
            key={i}
            className="h-4 bg-gray-200 dark:bg-neutral-800 rounded animate-pulse"
          />
        ))}
      </div>
    );
  }

  if (variant === "image") {
    return (
      <div className="space-y-4">
        {skeletons.map((_, i) => (
          <div
            key={i}
            className="
              aspect-video
              rounded-xl
              bg-gray-200
              dark:bg-neutral-800
              animate-pulse
            "
          />
        ))}
      </div>
    );
  }

  if (variant === "heading") {
    return (
      <div className="space-y-3">
        {skeletons.map((_, i) => (
          <div
            key={i}
            className="h-8 bg-gray-300 dark:bg-neutral-700 rounded animate-pulse"
          />
        ))}
      </div>
    );
  }

  return null;
}
