import { NextResponse } from 'next/server';

export async function POST(request) {
  const { name, email, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json({ success: false, error: 'All fields are required.' }, { status: 400 });
  }

  return NextResponse.json({
    success: true,
    message: 'Contact request received.',
    submission: { name, email, message }
  });
}
