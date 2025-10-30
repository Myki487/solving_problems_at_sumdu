'use client'
import React from 'react'
import { A, B, X_Gauss, X_Iter, X_Seidel } from './utils'

export default function Solution() {
  return (
    <div className="p-6 bg-gray-900 text-gray-100 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-blue-400">
        Лабораторна робота №2 — Розв’язування систем лінійних рівнянь
      </h2>

      <p className="mb-4">
        Завдання: порівняти методи <b>Гауса</b>, <b>простих ітерацій</b> та <b>Зейделя</b> на одній системі рівнянь.
      </p>

      <h3 className="text-lg font-semibold mb-2 text-green-400">Матриця коефіцієнтів A:</h3>
      <pre className="bg-gray-800 p-3 rounded mb-4">
        {A.map(row => row.join('\t')).join('\n')}
      </pre>

      <h3 className="text-lg font-semibold mb-2 text-green-400">Вектор правих частин B:</h3>
      <pre className="bg-gray-800 p-3 rounded mb-4">{B.join('\t')}</pre>

      <h3 className="text-lg font-semibold mb-2 text-yellow-400">Розв’язки системи:</h3>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h4 className="font-semibold text-blue-400 mb-1">Метод Гауса:</h4>
          <pre className="bg-gray-800 p-3 rounded">{X_Gauss.join('\n')}</pre>
        </div>
        <div>
          <h4 className="font-semibold text-blue-400 mb-1">Метод простих ітерацій:</h4>
          <pre className="bg-gray-800 p-3 rounded">{X_Iter.join('\n')}</pre>
        </div>
        <div>
          <h4 className="font-semibold text-blue-400 mb-1">Метод Зейделя:</h4>
          <pre className="bg-gray-800 p-3 rounded">{X_Seidel.join('\n')}</pre>
        </div>
      </div>

      <h3 className="text-lg font-semibold mt-6 mb-2 text-green-400">Висновок:</h3>
      <p className="text-gray-300">
        Метод Гауса дає точний результат без ітерацій, але вимагає більше обчислень.  
        Метод простих ітерацій сходиться повільно, тоді як метод Зейделя забезпечив швидку збіжність 
        і стабільні результати при менших витратах.  
        Таким чином, для даної системи <b>метод Зейделя</b> є найефективнішим.
      </p>
    </div>
  )
}
