module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
  pwa: {
    icon: {
      source: "./static/icon.png"
    },
    manifest: {
      short_name: "AEA",
      name: "AEA Manos",
      start_url: "/",
      theme_color: "#202225"
    }
  }
}
