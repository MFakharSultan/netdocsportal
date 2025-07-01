// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeRapide from "starlight-theme-rapide";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || "https://netdocsportal.vercel.app",
  integrations: [
    starlight({
      plugins: [starlightThemeRapide()],
      title: "Netco",
      customCss: ["./src/styles/global.css"],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/sultandev/netco",
        },
      ],
      sidebar: [
        {
          label: "Networking Fundamentals",
          items: [
            { label: "Introduction", slug: "guides/basics/introduction" },
            {
              label: "Types of Networks",
              slug: "guides/basics/types-of-computer-networks",
            },
            {
              label: "Specialized Networks",
              slug: "guides/basics/specialized-networks",
            },
            { label: "Topologies", slug: "guides/basics/network-topologies" },
          ],
        },
        {
          label: "Network Devices",
          items: [
            { label: "Cables", slug: "guides/devices/cables" },
            { label: "Repeater", slug: "guides/devices/repeater" },
            { label: "Hub", slug: "guides/devices/hub" },
            { label: "Bridge", slug: "guides/devices/bridge" },
            { label: "Switch", slug: "guides/devices/switch" },
            { label: "Router", slug: "guides/devices/router" },
            { label: "Modem", slug: "guides/devices/modem" },
          ],
        },
        {
          label: "IP Addressing",
          items: [
            { label: "Basics", slug: "guides/ip-addressing/basics" },
            { label: "IPv4 Addressing", slug: "guides/basics" },
            { label: "IPv6 Addressing", slug: "guides/basics" },
            { label: "IP Address Classes (IPv4)", slug: "guides/basics" },
            { label: "Types of IP Addresses", slug: "guides/basics" },
            { label: "Classeless ", slug: "guides/basics" },
          ],
        },
        {
          label: "Network Models",
          items: [
            { label: "OSI Model", slug: "guides/basics" },
            { label: "TCP/IP Model", slug: "guides/basics" },
          ],
        },
        {
          label: "Network Protocols",
          items: [
            { label: "Core Protocols", slug: "guides/basics" },
            { label: "Transport Layer Protocols", slug: "guides/basics" },
            { label: "Routing Protocols", slug: "guides/basics" },
            { label: "Application Layer Protocols", slug: "guides/basics" },
          ],
        },
        {
          label: "Network Services & Technologies",
          items: [
            { label: "Domain Name System (DNS)", slug: "guides/basics" },
            {
              label: "Dynamic Host Configuration Protocol (DHCP)",
              slug: "guides/basics",
            },
            {
              label: "Network Address Translation (NAT)",
              slug: "guides/basics",
            },
            {
              label: "Virtual Local Area Networks (VLANs)",
              slug: "guides/basics",
            },
            { label: "Wireless Networking", slug: "guides/basics" },
            { label: "Network Security", slug: "guides/basics" },
            { label: "Cloud Networking", slug: "guides/basics" },
          ],
          collapsed: true,
        },
        {
          label: "Network Troubleshooting & Tools",
          items: [
            { label: "Troubleshooting Methodologies", slug: "guides/basics" },
            { label: "Common Troubleshooting Commands", slug: "guides/basics" },
            { label: "Networking Monitoring Tools", slug: "guides/basics" },
            { label: "Cabling & Connectivity Issues", slug: "guides/basics" },
          ],
          collapsed: true,
        },
        {
          label: "Advanced Networking Concepts",
          items: [
            {
              label: "Software-Defined Networking (SDN)",
              slug: "guides/basics",
            },
            {
              label: "Networking Function Virtualization (NFV)",
              slug: "guides/basics",
            },
            {
              label: "Content Delivery Networks (CDNs)",
              slug: "guides/basics",
            },
            { label: "Quality of Service (Qos)", slug: "guides/basics" },
            { label: "Network Automation", slug: "guides/basics" },
            { label: "IoT Networking", slug: "guides/basics" },
            {
              label: "Quantum Networking (Emerging Topic)",
              slug: "guides/basics",
            },
          ],
          collapsed: true,
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
