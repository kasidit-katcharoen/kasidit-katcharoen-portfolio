const dataTheme = [
  {
    themeName: "light",
    colorMain: "#FFFFFF",
    colorOpposite: "#000000",
    colorParticles: ["#07b2ce", "#304ee3", "#6f22e9"],
  },
  {
    themeName: "dark",
    colorMain: "#000000",
    colorOpposite: "#FFFFFF",
    colorParticles: ["#FFFFFF"],
  },
];
export default function useThemeData() {
  return dataTheme;
}

export function getTheme(nameTheme = "light") {
  return dataTheme.filter((v) => v.themeName === nameTheme)?.[0] || {};
}
