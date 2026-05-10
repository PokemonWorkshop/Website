export const getFormats = (src: ImageMetadata | string):  ('avif' | 'webp')[] => {
  const isGif = typeof src === 'string' ? src.endsWith('.gif') : src.format === 'gif'
  if (isGif) return ['webp'];

  return ['avif', 'webp']
}
