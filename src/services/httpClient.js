const baseUrl = (process.env.REACT_APP_API_URL || '').replace(/\/$/, '');

async function parseBody(res) {
  const text = await res.text();
  if (!text) return null;
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}

export async function httpJson(path, options = {}) {
  const url = `${baseUrl}${path.startsWith('/') ? path : `/${path}`}`;
  const { headers: optHeaders, ...rest } = options;
  const res = await fetch(url, {
    ...rest,
    headers: {
      Accept: 'application/json',
      ...(rest.body && typeof rest.body === 'string' ? { 'Content-Type': 'application/json' } : {}),
      ...optHeaders,
    },
  });
  const body = await parseBody(res);
  if (!res.ok) {
    const err = new Error(body?.error?.message || res.statusText || 'Request failed');
    err.status = res.status;
    err.payload = body;
    throw err;
  }
  return body;
}
