export const f = (x: number): number => {
	return Math.sin(x + Math.PI / 3) - 0.5 * x;
};

export const df = (x: number): number => {
	return Math.cos(x + Math.PI / 3) - 0.5;
};

//Метод простої ітерації
export function simpleIteration(
	x0: number,
	tol: number = 1e-6,
	maxIter: number = 100,
) {
	const results: { iter: number; x: number; error: number }[] = [];
	let x = x0;

	//ф(х) = 2sin(x + pi / 3)
	const phi = (x: number) => 2 * Math.sin(x + Math.PI / 3);

	for (let i = 1; i <= maxIter; i++) {
		const xNext = phi(x);
		const error = Math.abs(xNext - x);

		results.push({ iter: i, x: xNext, error });

		if (error < tol) break;
		x = xNext;
	}

	return results;
};

//Метод Ньютона
export function newtonMethod(
	x0: number,
	tol: number = 1e-6,
	maxIter: number = 100,
) {
	const results: { iter: number; x: number; error: number }[] = [];
	let x = x0;

	for (let i = 1; i <= maxIter; i++) {
		const xNext = x - f(x) / df(x);
		const error = Math.abs(xNext - x);

		results.push({ iter: i, x: xNext, error });

		if (error < tol) break;
		x = xNext;
	}

	return results;
}