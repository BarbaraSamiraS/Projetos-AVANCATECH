export default function Card({
  img,
  titulo,
  descricao,
  linkGit,
}) {
  return (
    <div className="w-[300px] overflow-hidden rounded-lg bg-white shadow-md">
      <img
        src={img}
        alt={titulo}
        className="h-[180px] w-full object-cover"
      />

      <div className="p-4">
        <h2 className="mb-2 text-xl font-bold">
          {titulo}
        </h2>

        <p className="mb-4 text-sm text-gray-600">
          {descricao}
        </p>

        <a
          href={linkGit}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}