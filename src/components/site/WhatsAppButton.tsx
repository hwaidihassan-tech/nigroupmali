const WHATSAPP_NUMBER = "22300000000"; // replace with real number

export function WhatsAppButton() {
  const msg = encodeURIComponent("Hello NI Group Mali, I'd like a quote.");
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-elegant transition hover:scale-105"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7 fill-current" aria-hidden>
        <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.495-1.318.13-.302.13-.602.13-.876 0-.575-2.32-1.747-2.61-1.815zM16.13 27.7a11.65 11.65 0 0 1-5.96-1.633L3.5 27.5l1.46-6.46A11.7 11.7 0 1 1 27.83 16a11.74 11.74 0 0 1-11.7 11.7z" />
      </svg>
    </a>
  );
}
