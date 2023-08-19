import { prisma } from "../../../../globals/db";
import { NextResponse } from "next/server";

// このAPIを使用するpagesやlayoutsで動的レンダリングを強制する
export const dynamic = "force-dynamic";

// ノート一覧を取得するAPI
export async function GET() {
  // DBからノート一覧を取得
  const notes = await prisma.note.findMany();
  return NextResponse.json(notes);
}
