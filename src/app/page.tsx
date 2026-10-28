"use client";

import { useState } from "react";
import legacyDocument from "./legacy-document";

export default function HomePage() {
  const [ready, setReady] = useState(false);

  return (
    <main className="app-shell">
      {!ready && (
        <div className="loading-screen" aria-live="polite">
          <div className="loader" />
          <p>Loading Harsha Sir Classes…</p>
        </div>
      )}
      <iframe
        title="Harsha Sir Classes"
        srcDoc={legacyDocument}
        className={`school-frame ${ready ? "is-ready" : ""}`}
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals allow-downloads"
        onLoad={() => setReady(true)}
      />
    </main>
  );
}
