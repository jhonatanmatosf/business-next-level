import { WhatsappCta } from "./WhatsappCta";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-hairline bg-background/85 backdrop-blur">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 md:px-8">
        <div className="min-w-0">
          <p className="truncate font-display text-lg leading-none tracking-tight">
            Jhonatan Matos
          </p>
          <p className="mt-1 eyebrow">Business Advisor</p>
        </div>
        <WhatsappCta location="header" variant="outline" size="sm" className="hidden md:inline-flex">
          Falar com Jhonatan
        </WhatsappCta>
      </div>
    </header>
  );
}
