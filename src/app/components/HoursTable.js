'use client';

export default function HoursTable() {
  const horarios = [
    { dia: 'Segunda-feira', horario: 'Fechado' },
    { dia: 'Terça a Sexta', horario: '18:00 - 22:30' },
    { dia: 'Sábado', horario: '12:00 - 15:30 | 18:00 - 22:30' },
    { dia: 'Domingo', horario: '12:00 - 16:00' },
  ];

  return (
    <section id="horarios" className="py-8 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        {/* Título */}
        <h2 className="text-3xl font-bold text-[var(--green-tea)] mb-8">
          Horários de Funcionamento
        </h2>

        {/* Tabela */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-2xl shadow-md overflow-hidden">
            <thead className="bg-[var(--green-tea-light)] text-white">
              <tr>
                <th className="px-6 py-4 text-center text-lg font-semibold">
                  Dia
                </th>
                <th className="px-6 py-4 text-center text-lg font-semibold">
                  Horário
                </th>
              </tr>
            </thead>
            <tbody>
              {horarios.map((item, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                  } hover:bg-gray-100 transition-colors`}
                >
                  <td className="px-6 py-4 font-medium text-[var(--green-tea-dark)]">
                    {item.dia}
                  </td>
                  <td
                    className={`px-6 py-4 font-semibold ${
                      item.horario === 'Fechado'
                        ? 'text-red-500'
                        : 'text-[var(--green-tea-dark)]'
                    }`}
                  >
                    {item.horario}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-[var(--green-tea-light)] text-base italic">
          * Encomendas de barcas de sushi pelo WhatsApp:{' '}
          <span className="font-semibold text-[var(--green-tea)]">
            (11) 99723-6677
          </span>{' '}
          *
        </p>
      </div>
    </section>
  );
}
