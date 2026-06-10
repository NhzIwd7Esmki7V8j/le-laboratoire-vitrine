"use client"

import { HeroSection } from "@/components/hero-section"
import { CommunitySection } from "@/components/community-section"
import { PeptidesSection } from "@/components/peptides-section"
import { ContactSection } from "@/components/contact-section"
import { ContactModal } from "@/components/contact-modal"
import { Send, Users, MessageCircle, Menu, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header - Sticky avec backdrop blur */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dgQoszYy7rINAHw29yFn4Bg1R7SBDN.png" 
                alt="Le Laboratoire Logo" 
                className="h-10 w-auto"
              />
              <span className="font-bold text-lg text-slate-900">LE LABORATOIRE</span>
            </div>
            
            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6">
              <a href="#communaute" className="text-sm text-slate-600 hover:text-violet-600 transition-all duration-300 flex items-center gap-1.5">
                <Users className="h-4 w-4" />
                Communaute
              </a>
              <a href="#peptides" className="text-sm text-slate-600 hover:text-violet-600 transition-all duration-300 flex items-center gap-1.5">
                <Sparkles className="h-4 w-4" />
                Peptides
              </a>
              <a href="#contact" className="text-sm text-slate-600 hover:text-violet-600 transition-all duration-300 flex items-center gap-1.5">
                <MessageCircle className="h-4 w-4" />
                Contact
              </a>
              <ContactModal>
                <Button 
                  size="sm" 
                  className="gap-2 bg-sky-500 hover:bg-sky-600 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-sky-500/25"
                >
                  <Send className="h-4 w-4" />
                  Telegram
                </Button>
              </ContactModal>
            </nav>

            {/* Mobile Nav */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72">
                <div className="flex flex-col gap-6 mt-8">
                  <a href="#communaute" className="text-lg text-slate-700 hover:text-violet-600 transition-all duration-300 flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Communaute
                  </a>
                  <a href="#peptides" className="text-lg text-slate-700 hover:text-violet-600 transition-all duration-300 flex items-center gap-2">
                    <Sparkles className="h-5 w-5" />
                    Peptides
                  </a>
                  <a href="#contact" className="text-lg text-slate-700 hover:text-violet-600 transition-all duration-300 flex items-center gap-2">
                    <MessageCircle className="h-5 w-5" />
                    Contact
                  </a>
                  <ContactModal>
                    <Button 
                      className="gap-2 bg-sky-500 hover:bg-sky-600 text-white transition-all duration-300 mt-4"
                    >
                      <Send className="h-4 w-4" />
                      Rejoindre Telegram
                    </Button>
                  </ContactModal>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <HeroSection />

      {/* Community Section */}
      <CommunitySection />

      {/* Peptides Section */}
      <PeptidesSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dgQoszYy7rINAHw29yFn4Bg1R7SBDN.png" 
                alt="Le Laboratoire Logo" 
                className="h-10 w-auto"
              />
              <div>
                <span className="font-bold text-lg">LE LABORATOIRE</span>
                <p className="text-sm text-slate-400">Peptides de recherche</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5">
              <span className="text-sm text-slate-400">Nos admins :</span>
              <a 
                href="https://t.me/Lelabonbz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-slate-300 hover:text-sky-400 transition-colors font-mono"
              >
                @Lelabonbz
              </a>
              <a 
                href="https://t.me/lelabo09" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-slate-300 hover:text-sky-400 transition-colors font-mono"
              >
                @lelabo09
              </a>
              <a 
                href="https://t.me/moderateur1labo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-slate-300 hover:text-sky-400 transition-colors font-mono"
              >
                @moderateur1labo
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-slate-800">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-xs text-slate-500">
                © {new Date().getFullYear()} Le Laboratoire. Tous droits reserves.
              </p>
              <p className="text-[10px] text-slate-600 text-center md:text-right max-w-lg leading-relaxed">
                Produits destines uniquement a la recherche en laboratoire. Non destine a l&apos;usage humain ou animal direct. 
                Toute utilisation doit etre conforme aux reglementations locales en vigueur.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
