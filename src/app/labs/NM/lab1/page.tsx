import { FUNCTIONS_CONFIG_MANIFEST } from "next/dist/shared/lib/constants";
import Solution from "./Solution";

export default function Lab1Page(){
	return (
		<div>
			<h1 className="text-2xl font-bold mb-4">
				Чисельні методи: Лабораторна робота №1
			</h1>
			<p className="mb-4">
				Розвʼязання нелінійного рівняння <b>sin(x+π/3) - 0.5x = 0</b> методами простої ітерації та Ньютона.
			</p>
			<Solution/>
		</div>
	)
}