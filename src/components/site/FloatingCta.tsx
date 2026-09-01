import { WhatsappCta } from "./WhatsappCta";

export function FloatingCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-hairline bg-background/95 p-3 backdrop-blur md:hidden">
      <WhatsappCta location="floating_mobile" size="md" className="w-full" />
    </div>
  );
}
