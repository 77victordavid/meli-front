export const formatNumner = (amount) => {
  const numberFormat = new Intl.NumberFormat("es-ES");
  return numberFormat.format(amount);
};