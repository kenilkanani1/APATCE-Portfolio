import { NextResponse } from 'next/server';

export async function POST(request) {
  const { threat = 0, sensitivity = 0 } = await request.json();
  const score = Math.round((Number(threat) * 0.6) + (Number(sensitivity) * 0.4));
  const state = score >= 70 ? 'high' : score >= 40 ? 'medium' : 'low';

  return NextResponse.json({ score, state, input: { threat, sensitivity } });
}
