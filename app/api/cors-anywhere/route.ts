import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch(
      'https://cors-anywhere.herokuapp.com/corsdemo'
    );
    const data = await response.text();
    return NextResponse.json({ data });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: 'Không thể kết nối đến CORS Anywhere' },
      { status: 500 }
    );
  }
}
