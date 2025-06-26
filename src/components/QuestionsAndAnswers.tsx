import React, { useState } from "react";
import { Search, Info } from 'lucide-react';

const exampleQA = [
  {
    question: "¿Es sistema operativo Android?",
    answer: "Hola, gracias por escribirnos. Sí, su sistema operativo es android ¡No dejes pasar esta oferta! Seguimos a disposición. Saludos, Tienda Oficial Motorola"
  },
  {
    question: "Hola! Quería saber con que accesorios viene ? Gracias",
    answer: "Hola, muchas gracias por tu consulta. Los accesorios incluidos son: equipo cubierta protectora, herramienta de extracción de SIM, manual de usuario, manual de seguridad, folleto, cable de datos USB-A - USB-C y cargador 33W USB-A. Tenemos stock disponible, podes ofertar sin problemas. ¡Aprovechá el envío gratis! ¡Aguardamos tu compra! Cualquier otra consulta, seguimos a disposición. ¡Saludos! Tienda Oficial Motorola"
  }
];

const chips = [
  "Costo y tiempo de envío",
  "Devoluciones gratis",
  "Medios de pago y promociones",
  "Garantía"
];

const QuestionsAndAnswers = () => {
  const [search, setSearch] = useState("");
  const [qaList] = useState(exampleQA);

  return (
    <div className="bg-white p-8 rounded-lg mt-8 w-full" style={{ width: '850px' }}>
      {/* Separador */}
      <hr className="my-4 border-gray-200" />
      <h2 className="text-2xl font-semibold mb-6">Preguntas y respuestas</h2>
      <div className="mb-6">
        <div className="font-semibold text-lg mb-2">¿Qué querés saber?</div>
        <div className="flex flex-wrap gap-2 mb-6">
          {chips.map((chip, idx) => (
            <button
              key={idx}
              className="bg-blue-50 text-blue-600 font-medium rounded px-4 py-2 text-sm hover:bg-blue-100 border border-blue-100"
              type="button"
            >
              {chip}
            </button>
          ))}
        </div>
        <div className="font-medium mb-2">Buscá lo que querés saber</div>
        <form className="flex w-full mb-8">
          <input
            type="text"
            className="flex-1 border border-gray-300 rounded-l px-4 py-3 text-gray-800 focus:outline-blue-500 bg-gray-50"
            placeholder="Escribí una pregunta o palabra clave..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-600 rounded-r px-5 flex items-center justify-center hover:bg-blue-700 transition"
            style={{ height: '48px' }}
          >
            <Search className="text-white w-5 h-5" />
          </button>
        </form>
      </div>
      <div className="mb-4 font-semibold text-lg">Últimas realizadas</div>
      <div className="space-y-6 mb-4">
        {qaList.map((qa, idx) => (
          <div key={idx}>
            <div className="font-medium text-gray-800 mb-1">{qa.question}</div>
            <div className="text-gray-600 text-[15px] pl-4 border-l-2 border-gray-200">{qa.answer}</div>
          </div>
        ))}
      </div>
      <a href="#" className="text-blue-600 text-base font-medium hover:underline mb-6 inline-block">Buscar entre 166 preguntas de esta publicación</a>
      <div className="mt-6">
        <button className="flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-3 rounded-lg font-medium text-base hover:bg-blue-100">
          <Info className="w-5 h-5" />
          ¿Cómo le pregunto al vendedor?
        </button>
      </div>
    </div>
  );
};

export default QuestionsAndAnswers; 