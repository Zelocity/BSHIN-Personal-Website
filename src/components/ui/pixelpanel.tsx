import type { CSSProperties, ReactNode } from "react";

type PixelPanelProps = {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  variant?: "primary" | "secondary";
  shadowSize?: number;
};

const pixelShape = `
  polygon(
    12px 0,
    calc(100% - 12px) 0,
    calc(100% - 12px) 4px,
    calc(100% - 4px) 4px,
    calc(100% - 4px) 12px,
    100% 12px,

    100% calc(100% - 12px),
    calc(100% - 4px) calc(100% - 12px),
    calc(100% - 4px) calc(100% - 4px),
    calc(100% - 12px) calc(100% - 4px),
    calc(100% - 12px) 100%,

    12px 100%,
    12px calc(100% - 4px),
    4px calc(100% - 4px),
    4px calc(100% - 12px),
    0 calc(100% - 12px),

    0 12px,
    4px 12px,
    4px 4px,
    12px 4px
  )
`;

function PixelPanel({
  children,
  className = "",
  contentClassName = "",
  variant = "primary",
  shadowSize = 8,
}: PixelPanelProps) {
  const backgroundClass =
    variant === "primary" ? "bg-panel" : "bg-panel-secondary";

  const borderStyle = {
    clipPath: pixelShape,
    filter: `drop-shadow(
      ${shadowSize}px
      ${shadowSize}px
      0
      var(--theme-shadow)
    )`,
  } satisfies CSSProperties;

  return (
    <div
      className={`
        relative isolate
        overflow-visible
        text-ink
        ${className}
      `}
    >
      {/* Pixel border and background */}
      <div
        aria-hidden="true"
        style={borderStyle}
        className="
          pointer-events-none
          absolute inset-0 z-0
          bg-frame p-[3px]
        "
      >
        <div
          style={{ clipPath: pixelShape }}
          className={`h-full w-full ${backgroundClass}`}
        />
      </div>

      {/* Top highlight */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute left-5 right-5 top-1 z-10
          h-1 bg-panel-highlight/60
        "
      />

      {/* Bottom shading */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute bottom-1 left-5 right-5 z-10
          h-1 bg-shadow/30
        "
      />

      {/* Content is not clipped */}
      <div
        className={`
          relative z-20
          ${contentClassName}
        `}
      >
        {children}
      </div>
    </div>
  );
}

export default PixelPanel;
