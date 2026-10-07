export interface NavigationItem {
  label: string;
  href: string;
}

export interface SiteContent {
  brandName: string;
  homeHref: string;
  accessibility: {
    navigationLabel: string;
    skipLinkLabel: string;
  };
  hero: {
    eyebrow: string;
    title: readonly [string, string];
    description: string;
    ctaLabel: string;
    ctaHref: string;
    visualLabel: string;
  };
  services: {
    eyebrow: string;
    title: string;
    description: string;
    items: readonly {
      index: string;
      title: string;
      description: string;
    }[];
  };
  approach: {
    eyebrow: string;
    title: string;
    description: string;
    steps: readonly {
      index: string;
      title: string;
      description: string;
    }[];
  };
  work: {
    title: string;
    servicesLabel: string;
    projectLinkLabel: string;
  };
  contact?: {
    navigationLabel: string;
    eyebrow: string;
    title: string;
    description: string;
    ctaLabel: string;
    ctaHref: string;
  };
  footer: {
    copyright: string;
  };
}

const baseNavigation: readonly NavigationItem[] = [
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#approach" },
];

const workNavigationItem: NavigationItem = { label: "Work", href: "#work" };

export function buildNavigation(
  hasPublishedProjects: boolean,
  hasContact = false,
): readonly NavigationItem[] {
  const navigation = hasPublishedProjects
    ? [...baseNavigation, workNavigationItem]
    : [...baseNavigation];

  return hasContact
    ? [...navigation, { label: "Contact", href: "#contact" }]
    : navigation;
}

export const siteContent: SiteContent = {
  brandName: "Deirtech",
  homeHref: "/",
  accessibility: {
    navigationLabel: "Primary navigation",
    skipLinkLabel: "Skip to content",
  },
  hero: {
    eyebrow: "Product Engineering & AI",
    title: ["Complex systems. Clear execution.", "Built to ship."],
    description: "From architecture to production.",
    ctaLabel: "Start a project",
    ctaHref: "mailto:contact@deirtech.com",
    visualLabel: "Architecture / Product / Production",
  },
  services: {
    eyebrow: "What we do",
    title: "Engineering that closes the distance between idea and production.",
    description:
      "We design and engineer products, intelligent systems, and the architecture beneath them.",
    items: [
      {
        index: "01",
        title: "Product Engineering",
        description:
          "Web and mobile products shaped, built, and hardened for production.",
      },
      {
        index: "02",
        title: "AI & Automation",
        description:
          "Useful AI systems and workflows designed around real operating constraints.",
      },
      {
        index: "03",
        title: "Architecture & Modernization",
        description:
          "Practical architecture for systems that need to evolve without stalling delivery.",
      },
    ],
  },
  approach: {
    eyebrow: "How the work moves",
    title: "From architecture to production.",
    description:
      "One engineering line from the decisions that shape the system to the release that reaches users.",
    steps: [
      {
        index: "01",
        title: "Architecture",
        description:
          "Technical direction aligned to the product, the team, and the constraints.",
      },
      {
        index: "02",
        title: "Engineering",
        description:
          "Focused implementation with quality built into the path, not added at the end.",
      },
      {
        index: "03",
        title: "Production",
        description:
          "Release-ready systems with the operational detail needed to keep moving.",
      },
    ],
  },
  work: {
    title: "Selected work",
    servicesLabel: "Services",
    projectLinkLabel: "View project",
  },
  contact: {
    navigationLabel: "Contact",
    eyebrow: "Start a project",
    title: "Bring the hard part.",
    description:
      "For products that need senior engineering judgment, focused execution, or a clearer path to production.",
    ctaLabel: "Start a project",
    ctaHref: "mailto:contact@deirtech.com",
  },
  footer: {
    copyright: "Deirtech",
  },
};
