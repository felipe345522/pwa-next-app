"use client";

import { useState } from "react";

export default function ReservaPage() {
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
                     bg-gradient-to-br from-amber-50 to-yellow-100 p-6 text-gray-900">
      <div className="bg-white shadow-lg rounded-lg p-8 w-[350px]">
        <h1 className="text-2xl font-bold mb-6 text-center text-amber-700">
          Reserva de Hotel
        </h1>

        <input
          type="text"
          placeholder="Nombre completo"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="border p-2 mb-2 w-full rounded"
        />

        <input
          type="date"
          value={fechaEntrada}
          onChange={(e) => setFechaEntrada(e.target.value)}
          className="border p-2 mb-2 w-full rounded"
        />

        <input
          type="date"
          value={fechaSalida}
          onChange={(e) => setFechaSalida(e.target.value)}
          className="border p-2 mb-2 w-full rounded"
        />

        <select
          value={habitacion}
          onChange={(e) => setHabitacion(e.target.value)}
          className="border p-2 mb-4 w-full rounded"
        >
          <option value="simple">Simple</option>
          <option value="doble">Doble</option>
          <option value="suite">Suite</option>
        </select>

        <button
          onClick={handleReserva}
          className="bg-amber-500 text-white font-semibold px-4 py-2 rounded-lg w-full hover:bg-amber-600 transition"
        >
          Reservar
        </button>

        {reserva && (
          <div className="mt-4 p-4 bg-green-100 border border-green-400 rounded text-gray-900">
            <p>{reserva}</p>
          </div>
        )}
      </div>
    </main>
  );
}
