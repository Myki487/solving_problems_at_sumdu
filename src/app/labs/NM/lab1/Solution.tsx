"use client"

import { useState } from "react"
import { simpleIteration, newtonMethod } from "./utils"

export default function Solution() {
  const [method, setMethod] = useState<"iteration" | "newton">("iteration")
  const [result, setResult] = useState<
    { iter: number; x: number; error: number }[]
>([])

  const handleSolve = () => {
    const res =
      method === "iteration"
        ? simpleIteration(1.3)
        : newtonMethod(1.3)

    setResult(res)
  }

  return (
    <div className="p-6 border rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Розвʼязання рівняння</h2>

      <div className="flex gap-4 mb-4">
        <button
          className={`px-4 py-2 rounded ${
            method === "iteration" ? "bg-blue-600 text-white" : "bg-gray-600"
          }`}
          onClick={() => setMethod("iteration")}
        >
          Метод простої ітерації
        </button>
        <button
          className={`px-4 py-2 rounded ${
            method === "newton" ? "bg-blue-600 text-white" : "bg-gray-600"
          }`}
          onClick={() => setMethod("newton")}
        >
          Метод Ньютона
        </button>
      </div>

      <button
        onClick={handleSolve}
        className="px-4 py-2 bg-green-600 text-white rounded mb-4"
      >
        Розвʼязати
      </button>

      {result.length > 0 && (
        <table className="table-auto border-collapse border border-gray-400">
          <thead>
            <tr>
              <th className="border px-2 py-1">Ітерація</th>
              <th className="border px-2 py-1">x</th>
              <th className="border px-2 py-1">Похибка</th>
            </tr>
          </thead>
          <tbody>
            {result.map((r) => (
              <tr key={r.iter}>
                <td className="border px-2 py-1">{r.iter}</td>
                <td className="border px-2 py-1">{r.x.toFixed(6)}</td>
                <td className="border px-2 py-1">{r.error.toExponential(3)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
