/**
 * Marcas atendidas. Hoje apresentadas como wordmarks tipográficos.
 * Para usar os logos reais, troque `label` por <img src={...} /> em cada item.
 */
export const COMPANIES = [
  "AYUS",
  "DelBeef",
  "CrossFit Serra",
  "Soft Skin",
  "The Gusto",
  "La Villette",
  "Cerva Grill",
  "Gracie Barra Itaipava",
  "Papel que Transforma",
  "Indica AI",
  "Octus Creative",
];

export function LogoGrid({ items = COMPANIES }: { items?: string[] }) {
  return (
    <ul className="grid grid-cols-2 gap-px overflow-hidden border border-hairline bg-hairline sm:grid-cols-3 lg:grid-cols-4">
      {items.map((name) => (
        <li
          key={name}
          className="flex min-h-[88px] items-center justify-center bg-background px-4 py-6 text-center"
        >
          <span className="text-sm tracking-[0.14em] text-muted-foreground uppercase">
            {name}
          </span>
        </li>
      ))}
    </ul>
  );
}
