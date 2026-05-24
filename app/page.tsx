"use client";

import { useState } from "react";

export default function Home() {
  const [nombre, setNombre] = useState("");
  const [fechaEntrada, setFechaEntrada] = useState("");
  const [fechaSalida, setFechaSalida] = useState("");
  const [habitacion, setHabitacion] = useState("simple");
  const [reserva, setReserva] = useState<string | null>(null);

  const handleReserva = () => {
    if (!nombre || !fechaEntrada || !fechaSalida) {
      alert("Por favor completa todos los campos");
      return;
    }
    setReserva(
      `Reserva confirmada para ${nombre} en habitación ${habitacion} 
       desde ${fechaEntrada} hasta ${fechaSalida}`
    );
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center 
                     bg-gradient-to-r from-blue-500 to-indigo-700 p-6 text-white">
      <h1 className="text-3xl font-bold mb-6">Reserva de Hotel</h1>

      <input
        type="text"
        placeholder="Nombre completo"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        className="border p-2 mb-2 w-64 text-black rounded"
      />

      <input
        type="date"
        value={fechaEntrada}
        onChange={(e) => setFechaEntrada(e.target.value)}
        className="border p-2 mb-2 w-64 text-black rounded"
      />

      <input
        type="date"
        value={fechaSalida}
        onChange={(e) => setFechaSalida(e.target.value)}
        className="border p-2 mb-2 w-64 text-black rounded"
      />

      <select
        value={habitacion}
        onChange={(e) => setHabitacion(e.target.value)}
        className="border p-2 mb-4 w-64 text-black rounded"
      >
        <option value="simple">Simple</option>
        <option value="doble">Doble</option>
        <option value="suite">Suite</option>
      </select>

      <button
        onClick={handleReserva}
        className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded-lg hover:bg-yellow-500 transition"
      >
        Reservar
      </button>

      {reserva && (
        <div className="mt-4 p-4 bg-green-200 border border-green-600 rounded text-black">
          <p>{reserva}</p>
        </div>
      )}
    </main>
  );
}

