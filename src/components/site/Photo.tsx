import { cn } from "@/lib/utils";

/**
 * Componente de foto do site.
 * Para trocar uma imagem, basta apontar `src` para outro arquivo em src/assets
 * (importe o .asset.json e use `.url`) — nada mais precisa mudar.
 */
export function Photo({
  src,
  alt,
  className,
  imgClassName,
  ratio = "4 / 5",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  ratio?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={cn("relative overflow-hidden bg-surface", className)}
      style={{ aspectRatio: ratio }}
    >
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className={cn("h-full w-full object-cover", imgClassName)}
      />
    </div>
  );
}
