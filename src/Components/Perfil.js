// Atividade 2 Editando Perfil

import { useState } from "react";

export default function Perfil() {

    const [usuario, setUsuario] = useState({
        nome: "João Silva",
        idade: 25,
        cargo: "Desenvolvedor Júnior"
    });

    function aumentarIdade() {
        setUsuario({
            ...usuario,
            idade: usuario.idade + 1
        });
    }

    function mudarCargo() {
        setUsuario({
            ...usuario,
            cargo: "Desenvolvedor Pleno"
        });
    }

    return (
        <div className="bg-white p-8 rounded-xl shadow-md w-96 text-center">
            <h1 className="text-2xl font-bold mb-4">
                Perfil do Usuário
            </h1>

            <p className="mb-2"><strong>Nome:</strong> {usuario.nome}</p>
            <p className="mb-2"><strong>Idade:</strong> {usuario.idade}</p>
            <p className="mb-4"><strong>Cargo:</strong> {usuario.cargo}</p>

            <div className="flex justify-center gap-4">
                <button
                    onClick={aumentarIdade}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
                >
                    Aumentar Idade
                </button>

                <button
                    onClick={mudarCargo}
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition"
                >
                    Mudar Cargo
                </button>
            </div>
        </div>
    );
}