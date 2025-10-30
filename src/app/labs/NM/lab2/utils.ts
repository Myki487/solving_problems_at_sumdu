// Типізація матриць і векторів
export type Matrix = number[][];
export type Vector = number[];

// Дані з MathCAD (твоя система)
export const A: Matrix = [
  [0.22, -0.34, -0.41, 0.15],
  [0.11, -1.27, 0.45, 0.32],
  [0.05, 0.18, -0.66, -1.16],
  [0.12, 0.08, 0.06, -1.0],
];

export const B: Vector = [1.32, 1.0, -0.57, 0.13];

// Результати методів (з MathCAD)
export const X_Gauss: Vector = [-0.877, 1.053, 0.339, 0.389];
export const X_Iter: Vector = [-1.672, 0.484, -1.639, 0.339];
export const X_Seidel: Vector = [-2.220, 0.523, -0.997, 1.367];
