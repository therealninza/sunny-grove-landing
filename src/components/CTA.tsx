import { Button } from "@/components/ui/button";
import { Twitter, Github, Bitcoin, ArrowRight } from "lucide-react";

const socials = [
  {
    label: "Twitter",
    href: "https://x.com/btcgreenhouse",
    Icon: Twitter,
  },
  {
    label: "Nostr",
    href: "https://njump.me/npub1m32waq4klf2m065xet5kpd4zph7z8g46wlza2f7q4dhmrzvul8qsjwefzq",
    Icon: Bitcoin,
  },
  {
    label: "Telegram",
    href: "https://t.co/jmKnpjcBS2",
    Icon: ArrowRight,
  },
  {
    label: "GitHub",
    href: "https://github.com/therealninza/sunny-grove-landing",
    Icon: Github,
  },
];

export const CTA = () => {
  return (
    <div className="bg-accent py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          Join Our Innovative Project
        </h2>
        <div className="flex items-center justify-center gap-3 flex-wrap">
          {socials.map(({ label, href, Icon }) => (
            <Button
              key={label}
              asChild
              className="bg-white text-accent hover:bg-white/90 px-6 py-6"
            >
              <a href={href} target="_blank" rel="noopener noreferrer">
                <Icon className="mr-2 h-5 w-5" />
                {label}
              </a>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};
