export async function POST(request) {
  const payload = await request.json();
  const report = {
    generatedAt: new Date().toISOString(),
    brand: 'CYVERA',
    ...payload
  };

  return new Response(JSON.stringify(report, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Content-Disposition': 'attachment; filename="cyvera-risk-report.json"'
    }
  });
}
