import { revalidateTag, revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { secret, tag } = body;

    console.log("SECRET ENV:", JSON.stringify(process.env.REVALIDATE_SECRET));
    console.log("SECRET REQ:", JSON.stringify(secret));

    if (!secret || secret !== process.env.REVALIDATE_SECRET) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    if (!tag) {
      return NextResponse.json({ message: "Tag is required" }, { status: 400 });
    }

    if (tag === "all") {
      revalidateTag("imovel");
      revalidateTag("filters");
      revalidatePath("/", "layout");
    } else if (tag === "homepage") {
      revalidateTag("imovel");
      revalidatePath("/", "page");
    } else {
      revalidateTag(tag);
      revalidateTag("imovel");
    }

    return NextResponse.json({ revalidated: true, tag }, { status: 200 });
  } catch {
    return NextResponse.json({ message: "Error revalidating" }, { status: 500 });
  }
}
