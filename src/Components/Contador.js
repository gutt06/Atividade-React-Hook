// Atividade 1 Contador

import { useState } from "react";

export default function Contador() {
    const [contagem, setContagem] = useState(0);

    function clicksom() {
        setContagem((valorAtual) => valorAtual + 1);
    }

    function clickmen() {
        setContagem((valorAtual) =>
            valorAtual > 0 ? valorAtual - 1 : 0
        );
    }

    return (
        <div className="bg-white shadow-lg rounded-2xl p-8 text-center w-80">
            <h1 className="text-2xl font-bold mb-6">
                Contador
            </h1>

            <p className="text-4xl font-semibold text-blue-600 mb-6">
                {contagem}
            </p>

            <div className="flex justify-center gap-4">
                <button
                    onClick={clicksom}
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition"
                >
                    Aumentar
                </button>

                <button
                    onClick={clickmen}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
                >
                    Diminuir
                </button>
            </div>
        </div>
    );
}