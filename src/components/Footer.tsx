import React from "react";
import { Mail, Phone, Instagram } from "lucide-react";

export default function Footer() {
  const logoUrl = "https://i.postimg.cc/K8FsPKQ5/logo.png";

  return (
    <footer id="footer" className="bg-surface-high text-text-muted py-20 px-6 md:px-8 border-t border-neutral-300">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-12 text-center">
        
        {/* Centered Footer Logo exactly sized to match requirements */}
        <div id="footer-logo-wrapper" className="inline-block mx-auto">
          <img
            id="footer-logo-img"
            alt="FIKKY WRITE CONSULT"
            className="h-[64px] object-contain transition-transform duration-300 hover:scale-102"
            src={logoUrl}
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Social / contact interactive buttons exactly stylized like html */}
        <div className="flex gap-6 md:gap-8" id="footer-social-links-row">
          <a
            id="footer-mail-link"
            href="mailto:fikkywriteconsult@gmail.com"
            title="Send Email"
            className="w-12 h-12 border border-neutral-300 flex items-center justify-center hover:bg-primary hover:border-primary text-text-dark hover:text-white transition-all duration-300"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            id="footer-phone-link"
            href="tel:+2349028609199"
            title="Call Consult"
            className="w-12 h-12 border border-neutral-300 flex items-center justify-center hover:bg-primary hover:border-primary text-text-dark hover:text-white transition-all duration-300"
          >
            <Phone className="w-5 h-5" />
          </a>
          <a
            id="footer-whatsapp-link"
            href="https://wa.me/2348138298651?text=Hello%20Fikky%20Write%20Consult!%20I%20am%20interested%20in%20your%20writing%20and%20publishing%20services.%20I'd%20love%20to%20learn%20more%20about%20how%20we%20can%20work%20together."
            target="_blank"
            rel="noopener noreferrer"
            title="WhatsApp Consult"
            className="w-12 h-12 border border-neutral-300 flex items-center justify-center hover:bg-primary hover:border-primary text-text-dark hover:text-white transition-all duration-300"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </a>
          <a
            id="footer-instagram-link"
            href="https://www.instagram.com/fikkywriteconsult/"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram Handbook"
            className="w-12 h-12 border border-neutral-300 flex items-center justify-center hover:bg-primary hover:border-primary text-text-dark hover:text-white transition-all duration-300"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            id="footer-tiktok-link"
            href="https://www.tiktok.com/@momentswithfikayomi"
            target="_blank"
            rel="noopener noreferrer"
            title="TikTok Videos Channel"
            className="w-12 h-12 border border-neutral-300 flex items-center justify-center hover:bg-primary hover:border-primary text-text-dark hover:text-white transition-all duration-300"
          >
            {/* Real TikTok SVG Icon styled to match other Lucide icons */}
            <svg
              className="w-5 h-5 fill-none stroke-current"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
            </svg>
          </a>
        </div>

        {/* Copy text matching mockup */}
        <div className="space-y-4 pt-4 border-t border-neutral-300 w-full">
          <p id="footer-copyright" className="font-sans text-[11px] text-neutral-500 uppercase tracking-[0.2em]">
            © 2024 FIKKY WRITE CONSULT. ALL RIGHTS RESERVED.
          </p>
          <div className="flex justify-center gap-8 text-[11px] font-sans text-neutral-500 uppercase tracking-widest" id="footer-legal-links">
            <a href="#" className="hover:text-text-dark transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-text-dark transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
