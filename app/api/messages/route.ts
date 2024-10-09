import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { sender, receiver, message } = await req.json();

    console.log(sender, receiver, message);

    // Uncomment and configure your database actions here
    // const client = await clientPromise;
    // const db = client.db();
    // await db.collection('messages').insertOne({
    //   sender,
    //   receiver,
    //   message,
    //   timestamp: new Date(),
    // });

    return NextResponse.json({ status: 'Message sent!' }, { status: 200 });
  } catch (error) {
    console.error("Error occurred while processing POST request:", error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ message: 'This endpoint supports POST requests only.' }, { status: 405 });
}
