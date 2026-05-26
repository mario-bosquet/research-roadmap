import {
  forwardRef,
  useRef,
  useState,
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type CSSProperties,
  type MouseEvent,
  type ReactNode,
} from "react";

type SpotlightTone = "sky" | "gold";

const TONE_RGB: Record<SpotlightTone, string> = {
  sky: "147, 173, 255",
  gold: "220, 200, 248",
};

function useSpotlight() {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [active, setActive] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return {
    ref,
    pos,
    active,
    onMouseMove: handleMouseMove,
    onMouseEnter: () => setActive(true),
    onMouseLeave: () => setActive(false),
  };
}

type SpotlightCardProps = {
  children: ReactNode;
  tone?: SpotlightTone;
  innerClassName?: string;
  className?: string;
  radius?: number;
};

export function SpotlightCard({
  children,
  tone = "sky",
  innerClassName = "",
  className = "",
  radius = 500,
}: SpotlightCardProps) {
  const { ref, pos, active, onMouseMove, onMouseEnter, onMouseLeave } = useSpotlight();
  const rgb = TONE_RGB[tone];

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`group relative overflow-hidden rounded-[15px] p-[2px] ${className}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[15px] transition-opacity duration-500"
        style={{
          background: `radial-gradient(${radius}px circle at ${pos.x}px ${pos.y}px, rgba(${rgb}, 0.55), transparent 50%)`,
          opacity: active ? 1 : 0.35,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[15px] border border-slate-800/80"
      />
      <div
        className={`relative h-full w-full rounded-[15px] bg-[#111426] ${innerClassName}`}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[15px] transition-opacity duration-500"
          style={{
            background: `radial-gradient(${radius}px circle at ${pos.x}px ${pos.y}px, rgba(${rgb}, 0.10), transparent 50%)`,
            opacity: active ? 1 : 0,
          }}
        />
        <div className="relative h-full w-full">{children}</div>
      </div>
    </div>
  );
}

type SpotlightButtonBaseProps = {
  children: ReactNode;
  tone?: SpotlightTone;
  className?: string;
  innerClassName?: string;
};

type SpotlightButtonProps =
  | (SpotlightButtonBaseProps & { as?: "button" } & ButtonHTMLAttributes<HTMLButtonElement>)
  | (SpotlightButtonBaseProps & { as: "a" } & AnchorHTMLAttributes<HTMLAnchorElement>);

export const SpotlightButton = forwardRef<HTMLElement, SpotlightButtonProps>(
  function SpotlightButton(props, _ref) {
    const {
      children,
      tone = "gold",
      className = "",
      innerClassName = "",
      ...rest
    } = props as SpotlightButtonBaseProps & { as?: "button" | "a" } & Record<string, unknown>;
    const as = (props as { as?: "button" | "a" }).as ?? "button";
    const { ref, pos, active, onMouseMove, onMouseEnter, onMouseLeave } = useSpotlight();
    const rgb = TONE_RGB[tone];

    const baseInner =
      "relative flex w-full items-center justify-center gap-2 rounded-[50px] px-6 py-3.5 text-sm font-bold uppercase tracking-wider tracking-[0.04em] transition-all duration-300 bg-gradient-to-r from-[#93ADFF] to-[#778bca] group-hover:from-[#0d1a40] group-hover:via-[#07102a] group-hover:to-[#04091c] text-[#0a0c18] group-hover:text-[#93ADFF]";

    const wrapperStyle: CSSProperties = active
      ? {
          boxShadow:
            "0 0 55px 22px rgba(147,173,255,0.45), 0 0 110px 50px rgba(147,173,255,0.2), 0 0 180px 90px rgba(147,173,255,0.08)",
        }
      : {};

    const Inner = (
      <div className={`${baseInner} ${innerClassName}`}>{children}</div>
    );

    const wrapperClass = `group relative inline-flex overflow-hidden rounded-[50px] transition-transform duration-300 hover:scale-105 ${className}`;

    if (as === "a") {
      const anchorRest = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
      return (
        <a
          {...anchorRest}
          ref={ref as unknown as React.Ref<HTMLAnchorElement>}
          onMouseMove={onMouseMove}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          style={{ ...wrapperStyle, ...(anchorRest.style ?? {}) }}
          className={wrapperClass}
        >
          {Inner}
        </a>
      );
    }
    const buttonRest = rest as ButtonHTMLAttributes<HTMLButtonElement>;
    return (
      <button
        type="button"
        {...buttonRest}
        ref={ref as unknown as React.Ref<HTMLButtonElement>}
        onMouseMove={onMouseMove}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={{ ...wrapperStyle, ...(buttonRest.style ?? {}) }}
        className={wrapperClass}
      >
        {Inner}
      </button>
    );
  }
);
