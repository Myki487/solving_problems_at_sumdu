// Система нелінійних рівнянь
// f1 = 2x² - y² + z + 0.5 = 0
// f2 = x² + 2y² - z - 1.94 = 0
// f3 = x + 2y + 3z² - 2.23 = 0

export interface IterationStep {
  iter: number
  x: number
  y: number
  z: number
  U: number
  grad: {
    dUx: number
    dUy: number
    dUz: number
  }
}

export interface GradientDescentResult {
  x: number
  y: number
  z: number
  history: IterationStep[]
}

export function gradientDescentSystem({
  x0 = 0,
  y0 = 0,
  z0 = 0,
  lambda = 0.001,
  maxIter = 100,
  eps = 1e-5
}: {
  x0?: number
  y0?: number
  z0?: number
  lambda?: number
  maxIter?: number
  eps?: number
}): GradientDescentResult {
  let x = x0,
    y = y0,
    z = z0
  const history: IterationStep[] = []

  for (let i = 0; i < maxIter; i++) {
    const f1 = 2 * x ** 2 - y ** 2 + z + 0.5
    const f2 = x ** 2 + 2 * y ** 2 - z - 1.94
    const f3 = x + 2 * y + 3 * z ** 2 - 2.23

    const U = f1 ** 2 + f2 ** 2 + f3 ** 2

    const dUx = 2 * f1 * (4 * x) + 2 * f2 * (2 * x) + 2 * f3 * 1
    const dUy = 2 * f1 * (-2 * y) + 2 * f2 * (4 * y) + 2 * f3 * 2
    const dUz = 2 * f1 * 1 + 2 * f2 * -1 + 2 * f3 * (6 * z)

    const xNext = x - lambda * dUx
    const yNext = y - lambda * dUy
    const zNext = z - lambda * dUz

    history.push({
      iter: i + 1,
      x,
      y,
      z,
      U,
      grad: { dUx, dUy, dUz }
    })

    if (Math.abs(xNext - x) < eps && Math.abs(yNext - y) < eps && Math.abs(zNext - z) < eps) {
      x = xNext
      y = yNext
      z = zNext
      break
    }

    x = xNext
    y = yNext
    z = zNext
  }

  return { x, y, z, history }
}
