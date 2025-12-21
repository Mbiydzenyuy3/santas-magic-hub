export type Filters = {
  glow: boolean;
  contrast: number;
  // TODO: Future 3D effects
  // rotation3d: number;
  // perspective: number;
  // depth: boolean;
  // TODO: Future background removal
  // backgroundRemover: boolean;
  // removeColor: string;
  // edgeThreshold: number;
};

export const defaultFilters: Filters = {
  glow: false,
  contrast: 100
  // TODO: Future 3D effects
  // rotation3d: 0,
  // perspective: 500,
  // depth: false,
  // TODO: Future background removal
  // backgroundRemover: false,
  // removeColor: "#ffffff",
  // edgeThreshold: 50
};
