import React from "react";

const clients = [
  { name: "Stripe", domain: "stripe.com" },
  { name: "Notion", domain: "notion.so" },
  { name: "Linear", domain: "linear.app" },
  { name: "Vercel", domain: "vercel.com" },
  { name: "Figma", domain: "figma.com" },
  { name: "Shopify", domain: "shopify.com" },
  { name: "Airbnb", domain: "airbnb.com" },
  { name: "Spotify", domain: "spotify.com" },
  { name: "HubSpot", domain: "hubspot.com" },
  { name: "Slack", domain: "slack.com" },
  { name: "Loom", domain: "loom.com" },
  { name: "Intercom", domain: "intercom.com" },
];

export default function ClientLogos() {
  return (
    <section
      className="py-5 border-t border-b border-border/40 bg-background overflow-hidden"
      data-testid="client-logos"
    >
      <div className="relative flex overflow-x-hidden">
        <div className="flex items-center gap-12 md:gap-16 animate-marquee whitespace-nowrap">
          {[...clients, ...clients].map((client, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center shrink-0 h-7"
              data-testid={`logo-${client.domain.replace(".", "-")}`}
              title={client.name}
            >
              <img
                src={`https://logo.clearbit.com/${client.domain}`}
                alt={client.name}
                className="h-5 w-auto object-contain grayscale opacity-50 hover:opacity-80 hover:grayscale-0 transition-all duration-300"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  target.style.display = "none";
                  const span = document.createElement("span");
                  span.textContent = client.name;
                  span.className = "font-sans text-sm text-foreground/40";
                  target.parentElement?.appendChild(span);
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
