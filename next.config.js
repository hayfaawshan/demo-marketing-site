/** @type {import('next').NextConfig} */
const config = {
 eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
};

export default config;

export async function middleware(req, functions) {
  // Handle REST interface by proxying to custom server
  const { next } = functions;
  if (req.page.name !== '/api' || !req.url.pathname.startsWith('/api/')) {
    return next();
  }

  switch (req.method.toUpperCase()) {
    case 'OPTIONS': {
      const res = new Response(null, { status: 200 });
      addCORSHeaders(res.headers);
      return res;
    }

    case 'GET':
    case 'POST':
    case 'PUT':
    case 'PATCH':
    case 'DELETE': {
      const target = 'http://127.0.0.1:8000',
        proxyReq = req.trustless.proxy(target);
      try {
        const proxyRes = await next(proxyReq);
        addCORSHeaders(proxyRes.headers);
        return proxyRes;
      } catch (err) {
        let respText, respHeaders, respStatus;
        if (err instanceof TypeError) {
          // likely a network error, redraw it as 502
          respText = `Unable to reach ${target}`;
          respHeaders = { 'content-type': 'text/plain' };
          respStatus = 502;
        } else if (err.status !== undefined) {
          // known HTTP error, inherited from whatever `fetch` throws
          respText = err.statusText ?? null;
          respHeaders = err.headers ?? {};
          respStatus = err.status;
        } else {
          // unknown error... throw a 500 with some text
          // to let the proxy req/response finish their lifecycle
          respText = 'Error while trying to proxy request';
          respHeaders = { 'content-type': 'text/plain' };
          respStatus = 500;
        }
        return new Response(respText, {
          headers: respHeaders,
          status: respStatus,
        });
      }
    }
    default: {
      return next();
    }
  }
}

function addCORSHeaders(headers) {
  headers.set(
    'Access-Control-Allow-Headers',
    'content-type, authorization, session-id'
  );
  headers.set('Access-Control-Allow-Methods', '*');
  headers.set('Access-Control-Allow-Origin', '*'); // Requires ares.cors_type to be set, otherwise this will be overwritten
}