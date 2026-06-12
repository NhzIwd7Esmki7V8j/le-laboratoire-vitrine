/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // génère un site 100% statique (dossier `out/`) → hébergeable sur Cloudflare Pages
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // requis par l'export statique (pas d'optimisation d'images serveur)
  },
}

export default nextConfig
