export interface SiteConfig {
  name: string;
  wordmark: string;
  subline: string;
  tagline: string;
  url: string;
  emails: {
    primary: string;
  };
  phones: {
    primary: {
      raw: string;
      formatted: string;
      tel: string;
    };
    secondary: {
      raw: string;
      formatted: string;
      tel: string;
    };
  };
  whatsapp: {
    number: string;
    url: string;
  };
  address: {
    street: string;
    locality: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    full: string;
    googleMapsUrl: string;
  };
  description: string;
  navLinks: Array<{ label: string; href: string }>;
}

export const siteConfig: SiteConfig = {
  name: "Qelvora Technologies",
  wordmark: "QELVORA",
  subline: "TECHNOLOGIES",
  tagline: "Innovation Today, Advancing Tomorrow",
  url: "https://qelvora.in",
  emails: {
    primary: "qelvora.in@gmail.com",
  },
  phones: {
    primary: {
      raw: "+919916102542",
      formatted: "+91 99161 02542",
      tel: "tel:+919916102542",
    },
    secondary: {
      raw: "+917411091804",
      formatted: "+91 74110 91804",
      tel: "tel:+917411091804",
    },
  },
  whatsapp: {
    number: "919916102542",
    url: "https://wa.me/919916102542?text=Hello%20Qelvora%20Technologies,%20I%20would%20like%20to%20discuss%20a%20project%20or%20software%20requirement.",
  },
  address: {
    street: "10th Cross, Maruthi Saw Mill Road",
    locality: "Thanisandra",
    city: "Bengaluru",
    state: "Karnataka",
    pincode: "560077",
    country: "India",
    full: "10th Cross, Maruthi Saw Mill Road, Thanisandra, Bengaluru - 560077, Karnataka, India",
    googleMapsUrl: "https://maps.google.com/?q=10th+Cross,+Maruthi+Saw+Mill+Road,+Thanisandra,+Bengaluru+-+560077,+Karnataka,+India",
  },
  description:
    "Bangalore-based software studio crafting custom business software, CRM platforms, and School & College ERP systems from scratch with direct developer collaboration.",
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Products", href: "/#products" },
    { label: "Services", href: "/services" },
    { label: "Industries", href: "/industries" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
};
