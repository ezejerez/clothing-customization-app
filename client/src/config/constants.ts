import { swatch, fileIcon, ai, logoShirt, stylishShirt } from "../assets";

export type Tab = { name: string; icon: string };
type DecalType = { [key: string]: { stateProperty: string; filterTab: string } };

export const EditorTabs: Tab[] = [
  { name: "colorpicker", icon: swatch },
  { name: "filepicker", icon: fileIcon },
  // { name: "aipicker", icon: ai }, // For Dall-E Integration
];

export const FilterTabs: Tab[] = [
  { name: "logoShirt", icon: logoShirt },
  { name: "stylishShirt", icon: stylishShirt },
];

export const DecalTypes: DecalType = {
  logo: { stateProperty: "logoDecal", filterTab: "logoShirt" },
  full: { stateProperty: "fullDecal", filterTab: "stylishShirt" },
};
