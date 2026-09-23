import React, { useState, useEffect } from "react";
import Logo from "../components/Logo";
import { mockStore } from "../data/mockStore";

const Admin = ({ onNavigate }) => {
  const [metrics, setMetrics] = useState(mockStore.getAdminMetrics());

  useEffect(() => {
    const unsubscribe = mockStore.subscribe(() => {
      setMetrics(mockStore.getAdminMetrics());
    });
    return unsubscribe;
  }, []);

  return (
    <div className="w-full bg-[#FAF7F2] font-serif text-[#1f1b13] min-h-screen">

      {/* Admin Nav */}
      <header className="bg-[#2B1D14] text-white py-4 px-6 flex justify-between items-center border-b border-white/10">
        <div className="flex items-center gap-3">
          <Logo onNavigate={onNavigate} />
          <span className="font-sans text-xs font-bold text-[#D9B49D]">🔒 EXECUTIVE ADMIN & AI INTELLIGENCE</span>
        </div>

        <div className="flex items-center gap-3 font-sans text-xs">
          <span className="px-3 py-1 rounded-full bg-[#81C784]/20 text-[#81C784] font-bold">🟢 3 AI Agents Online (99.98% Uptime)</span>
          <button onClick={() => onNavigate && onNavigate("home")} className="hover:underline text-[#D9B49D]">Exit Admin</button>
        </div>
      </header>

      <main className="max-w-[1440px] mx-auto px-4 md:px-8 py-10 space-y-8">
        <div>
          <h1 className="font-serif text-3xl font-bold text-[#421b0f]">Marketplace & AI Intelligence Overview</h1>
          <p className="font-serif text-sm text-[#524440]">
            Aggregated metrics across {metrics.totalArtisans} Indian artisans and 3 AI autonomous agents.
            {metrics.sessionProductsCount > 0 && (
              <span className="ml-2 font-bold text-[#2E7D32]">({metrics.sessionProductsCount} crafts published in active session)</span>
            )}
          </p>
        </div>

        {/* 5 KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-[#d7c2bd] shadow-sm">
            <span className="font-sans text-[10px] text-[#84736f] font-bold uppercase">GROSS MERCHANDISE VALUE</span>
            <div className="font-serif text-2xl font-bold text-[#421b0f] mt-1">{metrics.gmvFormatted}</div>
            <span className="font-sans text-xs text-[#2E7D32]">↑ 32% YoY growth</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#d7c2bd] shadow-sm">
            <span className="font-sans text-[10px] text-[#84736f] font-bold uppercase">ONBOARDED ARTISANS</span>
            <div className="font-serif text-2xl font-bold text-[#421b0f] mt-1">{metrics.totalArtisans}</div>
            <span className="font-sans text-xs text-[#524440]">Across 18 States</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#d7c2bd] shadow-sm">
            <span className="font-sans text-[10px] text-[#84736f] font-bold uppercase">ACTIVE LISTINGS</span>
            <div className="font-serif text-2xl font-bold text-[#845333] mt-1">{metrics.totalListings}</div>
            <span className="font-sans text-xs text-[#2E7D32]">100% AI Cataloged</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#d7c2bd] shadow-sm">
            <span className="font-sans text-[10px] text-[#84736f] font-bold uppercase">BUYER CONVERSATIONS</span>
            <div className="font-serif text-2xl font-bold text-[#421b0f] mt-1">{metrics.buyerConversations}</div>
            <span className="font-sans text-xs text-[#524440]">Direct WhatsApp Leads</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#d7c2bd] shadow-sm">
            <span className="font-sans text-[10px] text-[#84736f] font-bold uppercase">AI EXECUTIONS</span>
            <div className="font-serif text-2xl font-bold text-[#845333] mt-1">{metrics.aiExecutions}</div>
            <span className="font-sans text-xs text-[#2E7D32]">Zero Manual Edits</span>
          </div>
        </div>

        {/* AI Agent Operational Health */}
        <div className="bg-white p-8 rounded-3xl border border-[#d7c2bd] space-y-6">
          <h3 className="font-serif text-2xl font-bold text-[#421b0f]">🤖 3 AI Autonomous Agents Operations</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 rounded-2xl bg-[#f6ede0] border border-[#d7c2bd]">
              <span className="font-sans text-xs font-bold text-[#845333]">PRODUCT AGENT</span>
              <h4 className="font-serif text-xl font-bold text-[#421b0f] mt-1">12,400 Photo Listings</h4>
              <p className="font-serif text-xs text-[#524440] mt-1">Synthesized titles & story provenance in 4 languages.</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#f6ede0] border border-[#d7c2bd]">
              <span className="font-sans text-xs font-bold text-[#845333]">PRICE AGENT</span>
              <h4 className="font-serif text-xl font-bold text-[#421b0f] mt-1">8,640 Fair Price Guides</h4>
              <p className="font-serif text-xs text-[#524440] mt-1">Zero non-compliant terminology ("worth" eliminated).</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#f6ede0] border border-[#d7c2bd]">
              <span className="font-sans text-xs font-bold text-[#845333]">MARKET AGENT</span>
              <h4 className="font-serif text-xl font-bold text-[#421b0f] mt-1">13,770 Multi-Channel Posts</h4>
              <p className="font-serif text-xs text-[#524440] mt-1">Syndicated across WhatsApp, Telegram, Instagram & ONDC.</p>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
};

export default Admin;
