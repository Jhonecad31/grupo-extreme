export default function imageKitLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  const urlEndpoint = "https://ik.imagekit.io/pos7v26vx";

  // Si la ruta ya incluye el endpoint de ImageKit, se lo quitamos temporalmente para procesarla
  if (src.startsWith(urlEndpoint)) {
    src = src.replace(urlEndpoint, "");
  } else if (src.startsWith("http")) {
    // Si es OTRA URL completa (por ejemplo, Unsplash), devuélvela tal cual sin tocarla
    return src;
  }

  // Si la ruta es un asset estático interno de Next.js (importado en código), devuélvela tal cual
  if (src.startsWith("/_next/") || src.startsWith("_next/")) {
    return src;
  }

  // Si la ruta es un ícono local (SVGs en la carpeta /public/icon/), no usar ImageKit
  if (src.startsWith("/icon/") || src.startsWith("icon/")) {
    return src;
  }

  // Elimina la barra inicial si existe para evitar dobles barras en la URL
  if (src[0] === "/") {
    src = src.slice(1);
  }

  // Parámetros de transformación de ImageKit
  const params = [`w-${width}`];
  if (quality) {
    params.push(`q-${quality}`);
  } else {
    params.push(`q-75`); 
  }
  const paramsString = params.join(",");
  
  return `${urlEndpoint}/${src}?tr=${paramsString}`;
}
