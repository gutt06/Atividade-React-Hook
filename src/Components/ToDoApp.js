// Atividade 3 ToDo App com CRUD

import { useState } from "react";

export default function ToDoApp() {

    const [tarefas, setTarefas] = useState([]);
    const [texto, setTexto] = useState("");

    function criarTarefa() {
        if (texto.trim() === "") return;

        const novaTarefa = {
            id: Date.now(),
            texto: texto,
            concluida: false
        };

        setTarefas([...tarefas, novaTarefa]);
        setTexto("");
    }

    function atualizarTarefa(id) {
        const tarefasAtualizadas = tarefas.map((tarefa) =>
            tarefa.id === id
                ? { ...tarefa, concluida: !tarefa.concluida }
                : tarefa
        );

        setTarefas(tarefasAtualizadas);
    }

    function deletarTarefa(id) {
        const tarefasFiltradas = tarefas.filter(
            (tarefa) => tarefa.id !== id
        );

        setTarefas(tarefasFiltradas);
    }

    return (
        <div className="bg-white p-8 rounded-xl shadow-md w-96">
            <h1 className="text-2xl font-bold mb-4 text-center">
                Lista de Tarefas
            </h1>

            <div className="flex gap-2 mb-4">
                <input
                    type="text"
                    value={texto}
                    onChange={(e) => setTexto(e.target.value)}
                    placeholder="Digite uma tarefa"
                    className="border p-2 rounded w-full"
                />

                <button
                    onClick={criarTarefa}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                >
                    Criar
                </button>
            </div>

            <ul>
                {tarefas.map((tarefa) => (
                    <li
                        key={tarefa.id}
                        className="flex justify-between items-center mb-2"
                    >
                        <span
                            onClick={() => atualizarTarefa(tarefa.id)}
                            className={`cursor-pointer ${
                                tarefa.concluida
                                    ? "line-through text-gray-400"
                                    : ""
                            }`}
                        >
                            {tarefa.texto}
                        </span>

                        <button
                            onClick={() => deletarTarefa(tarefa.id)}
                            className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
                        >
                            Deletar
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}