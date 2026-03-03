import Contador from "@/Components/Contador";
import Perfil from "@/Components/Perfil";
import ToDoApp from "@/Components/ToDoApp";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-black flex items-center justify-center">
      <div className="flex gap-8 flex-wrap">
        <Contador />
        <Perfil />
        <ToDoApp />
      </div>
    </div>
  );
}