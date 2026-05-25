export default function Impressum() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-24">
      <h1 className="text-3xl font-bold text-text-main mb-6">Impressum</h1>
      <div className="text-text-muted space-y-3 leading-relaxed">
        <p className="border-2 border-dashed border-primary bg-primary/10 p-4 rounded-xl text-center text-primary font-medium">
          [IMPRESSUM_INHALT]
        </p>
      </div>
      <a href="/" className="mt-10 inline-block text-primary hover:text-primary-dark font-medium">
        ← Zurück zur Startseite
      </a>
    </main>
  );
}
