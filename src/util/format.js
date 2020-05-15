export const { format: formatPrice } = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

export function Capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
