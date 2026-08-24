import { NextResponse } from "next/server";
import { noticias } from "../db";

/* =======================
   GET - listar notícias
======================= */
export async function GET() {
  try {
    return NextResponse.json(noticias, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Erro ao buscar notícias" },
      { status: 500 }
    );
  }
}

/* =======================
   POST - criar notícia
======================= */
export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { title, description, image, category } = body;

    // validação simples
    if (!title || !description || !image || !category) {
      return NextResponse.json(
        { message: "Todos os campos são obrigatórios" },
        { status: 400 }
      );
    }

    const novaNoticia = {
      id: Date.now(), // id simples
      title,
      description,
      image,
      category,
      date: new Date().toDateString(),
    };

    noticias.push(novaNoticia);

    return NextResponse.json(novaNoticia, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Erro ao criar notícia" },
      { status: 500 }
    );
  }
}