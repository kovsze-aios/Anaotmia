"use client";

import { useState } from "react";
import { Topbar } from "./Topbar";
import { Sidebar } from "./Sidebar";
import { Footer } from "./Footer";

export function LayoutShell({ children }: { children: React.ReactNode }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="app-layout">
      <Topbar onMenuToggle={() => setDrawerOpen(!drawerOpen)} />
      <Sidebar open={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <main className="app-main">
        {children}
        <Footer />
      </main>
    </div>
  );
}
