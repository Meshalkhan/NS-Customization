const BASE_RATE = 120;

export function estimateQuote({ textLength = 0, sizeKey = 'small' }) {
  const sizeMultiplier = { small: 1, medium: 1.35, large: 1.7 }[String(sizeKey).toLowerCase()] ?? 1;
  const lengthFactor = Math.min(40, Math.max(1, Number(textLength) || 1));
  const subtotal = Math.round(BASE_RATE * sizeMultiplier * (0.4 + lengthFactor * 0.06) * 100) / 100;
  return {
    currency: 'PKR',
    subtotal,
    validUntil: new Date(Date.now() + 7 * 86400000).toISOString(),
  };
}
