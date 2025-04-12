export function FooterSignature() {
    return (
      <div className="w-full border-t border-amber-500 bg-black/60 backdrop-blur-sm py-4 text-center text-gray-400 text-sm z-layer-footer">
        <p>© {new Date().getFullYear()} Tattoo GoldInk. Todos os direitos reservados.</p>
        <p>Desenvolvido por Carlos Eduardo Queiroz</p>
      </div>
    );
  }  