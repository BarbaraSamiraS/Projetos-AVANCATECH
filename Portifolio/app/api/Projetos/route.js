import { NextResponse } from "next/server";
import sqlite3 from "sqlite3";
import { open } from "sqlite";
import path from "path";

async function abrirBanco() {
  const db = await open({
    filename: path.join(process.cwd(), "portifolio.db"),
    driver: sqlite3.Database,
  });

  await db.exec(`
    CREATE TABLE IF NOT EXISTS Projeto (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL,
      imagem TEXT NOT NULL,
      descricao TEXT NOT NULL,
      linkGit TEXT NOT NULL
    )
  `);

  return db;
}

export async function GET() {
  try {
    const db = await abrirBanco();

    const projetos = await db.all(
      "SELECT * FROM Projeto ORDER BY id DESC"
    );

    return NextResponse.json(projetos);
  } catch (error) {
    console.error("Erro ao buscar projetos:", error);

    return NextResponse.json(
      { erro: "Erro ao buscar projetos" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const dados = await request.json();

    const { nome, imagem, descricao, linkGit } = dados;

    if (!nome || !imagem || !descricao || !linkGit) {
      return NextResponse.json(
        { erro: "Todos os campos são obrigatórios" },
        { status: 400 }
      );
    }

    const db = await abrirBanco();

    const resultado = await db.run(
      `
      INSERT INTO Projeto
      (nome, imagem, descricao, linkGit)
      VALUES (?, ?, ?, ?)
      `,
      [nome, imagem, descricao, linkGit]
    );

    const projetoCriado = await db.get(
      "SELECT * FROM Projeto WHERE id = ?",
      [resultado.lastID]
    );

    return NextResponse.json(projetoCriado, { status: 201 });
  } catch (error) {
    console.error("Erro ao cadastrar projeto:", error);

    return NextResponse.json(
      { erro: "Erro ao cadastrar projeto" },
      { status: 500 }
    );
  }
}