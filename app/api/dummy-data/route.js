export async function GET(request) {
  const url = new URL(request.url);
  const timeWindow = url.searchParams.get('timeWindow') || '1d'; // Default to 1 day

  // Dummy data based on timeWindow
  const data = {
    '1d': {
      stats: { sales: 1200, leads: 850, customers: 500 },
      lineData: [100, 200, 300, 400, 500],
    },
    '1w': {
      stats: { sales: 8000, leads: 6000, customers: 3500 },
      lineData: [500, 1000, 1500, 2000, 2500, 3000, 3500],
    },
    '1m': {
      stats: { sales: 32000, leads: 24000, customers: 14000 },
      lineData: [2000, 4000, 6000, 8000, 10000, 12000, 14000, 16000, 18000, 20000, 22000, 24000],
    },
  };

  const response = data[timeWindow] || data['1d'];

  return new Response(JSON.stringify(response), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
