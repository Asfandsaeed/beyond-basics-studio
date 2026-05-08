import React from "react";

export default function Footer() {
  return (
    <footer className="bg-background text-foreground px-6 md:px-10 py-12 border-t border-border">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        
        <div className="flex flex-col gap-4">
          <span className="font-display text-3xl font-bold uppercase tracking-tight">REJOUICE®</span>
          <span className="font-sans text-sm font-medium">Tomorrow's Brands, Today.™</span>
        </div>

        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="flex flex-col gap-2">
            <span className="font-sans text-xs uppercase tracking-widest opacity-50 mb-2">Menu</span>
            <a href="#" className="font-sans text-sm font-medium hover:opacity-70 transition-opacity">Work</a>
            <a href="#" className="font-sans text-sm font-medium hover:opacity-70 transition-opacity">About</a>
            <a href="#" className="font-sans text-sm font-medium hover:opacity-70 transition-opacity">Services</a>
            <a href="#" className="font-sans text-sm font-medium hover:opacity-70 transition-opacity">Contact</a>
          </div>
          
          <div className="flex flex-col gap-2">
            <span className="font-sans text-xs uppercase tracking-widest opacity-50 mb-2">Socials</span>
            <a href="#" className="font-sans text-sm font-medium hover:opacity-70 transition-opacity">LinkedIn</a>
            <a href="#" className="font-sans text-sm font-medium hover:opacity-70 transition-opacity">Twitter / X</a>
            <a href="#" className="font-sans text-sm font-medium hover:opacity-70 transition-opacity">Instagram</a>
          </div>
        </div>
        
      </div>
      
      <div className="max-w-[1400px] mx-auto mt-24 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-sans opacity-50 uppercase tracking-wider">
        <span>© 2024 REJOUICE®. All rights reserved.</span>
        <span>San Francisco · London · Tokyo</span>
      </div>
    </footer>
  );
}
