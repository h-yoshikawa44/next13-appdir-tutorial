import { NextRequest, NextResponse } from "next/server";
import { zUpsertNote } from "@/app/notes/type";
import { prisma } from "../../../../globals/db";

// この API を使用する pages や layouts で動的レンダリングを強制する
export const dynamic = "force-dynamic";

// ノート一覧を取得する API
export async function GET() {
  // DB からノート一覧を取得
  const notes = await prisma.note.findMany();
  return NextResponse.json(notes);
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  const parcedData = zUpsertNote.parse(data);
  const note = await prisma.note.create({
    data: { title: parcedData.title, body: parcedData.body },
  });
  return new NextResponse(`${note.id}`, { status: 201 });
}
