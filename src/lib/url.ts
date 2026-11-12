const BASE = import.meta.env.BASE_URL.replace(/\/+$/, '');

/** baseを付与した内部URLを返す。外部URL・アンカーはそのまま返す */
export function url(path = '/'): string {
  if (/^(https?:)?\/\//.test(path) || path.startsWith('#')) return path;
  return `${BASE}${path.startsWith('/') ? path : `/${path}`}`;
}