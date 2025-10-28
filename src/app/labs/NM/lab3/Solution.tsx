'use client'

import React from 'react'
import { gradientDescentSystem } from './utils'

export default function Solution() {
  const { x, y, z, history } = gradientDescentSystem({
    lambda: 0.001,
    maxIter: 5000
  })

  const displayedHistory = history.slice(0, 50)

  const finalStep = history[history.length - 1]

  return (
    <div className="p-6 bg-gray-900 text-gray-100 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-blue-400">Лабораторна робота №3 — Метод градієнтного спуску</h2>

      <p className="mb-2">
        Система рівнянь: <br />
        1) 2x² - y² + z = -0.5 <br />
        2) x² + 2y² - z = 1.94 <br />
        3) x + 2y + 3z² = 2.23
      </p>

      <div className="my-4 p-4 border border-gray-700 rounded">
        <h3 className="text-lg font-semibold mb-2 text-green-400">Фінальний результат:</h3>
        <p>x ≈ {finalStep.x.toFixed(6)}</p>
        <p>y ≈ {finalStep.y.toFixed(6)}</p>
        <p>z ≈ {finalStep.z.toFixed(6)}</p>
        <p>U(x,y,z) ≈ {finalStep.U.toExponential(4)}</p>
        <p className="mt-2 text-gray-400">Ітерацій виконано: {history.length}</p>
      </div>

      <h3 className="text-lg font-semibold mt-6 mb-2 text-yellow-400">Перші 50 ітерацій процесу:</h3>
      <div className="overflow-x-auto max-h-96 border border-gray-700 rounded">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-800">
            <tr>
              <th className="px-2 py-1 border">Ітерація</th>
              <th className="px-2 py-1 border">x</th>
              <th className="px-2 py-1 border">y</th>
              <th className="px-2 py-1 border">z</th>
              <th className="px-2 py-1 border">U(x,y,z)</th>
            </tr>
          </thead>
          <tbody>
            {displayedHistory.map((step) => (
              <tr key={step.iter} className="text-center border-b border-gray-800">
                <td className="px-2 py-1">{step.iter}</td>
                <td className="px-2 py-1">{step.x.toFixed(4)}</td>
                <td className="px-2 py-1">{step.y.toFixed(4)}</td>
                <td className="px-2 py-1">{step.z.toFixed(4)}</td>
                <td className="px-2 py-1">{step.U.toExponential(3)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
