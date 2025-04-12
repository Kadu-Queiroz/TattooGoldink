import { FooterContent } from './FooterContent';
import { FooterSignature } from './FooterSignature';

export function Footer() {
  return (
    <footer className="relative z-layer-footer">
      <FooterContent />
      <FooterSignature />
    </footer>
  );
}