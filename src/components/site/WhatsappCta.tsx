import { cn } from "@/lib/utils";
import { track, WHATSAPP_URL } from "@/lib/analytics";

type Props = {
  children?: React.ReactNode;
  location: string;
  variant?: "solid" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-sm font-medium tracking-tight transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const variants = {
  solid: "bg-primary text-primary-foreground hover:bg-primary/90",
  outline: "border border-border text-foreground hover:bg-secondary",
  ghost: "text-primary hover:text-primary/80",
} as const;

const sizes = {
  sm: "px-4 py-2 text-[0.8125rem]",
  md: "px-6 py-3.5 text-sm",
  lg: "px-8 py-4.5 text-base",
} as const;

export function WhatsappCta({
  children = "Quero conversar sobre meu negócio",
  location,
  variant = "solid",
  size = "md",
  className,
}: Props) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track("whatsapp_click", { location })}
      className={cn(base, variants[variant], sizes[size], className)}
    >
      {children}
    </a>
  );
}
