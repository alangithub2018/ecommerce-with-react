export const formatPrice = (price) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
};

export const formatRating = (rating) => {
  return Number(rating).toFixed(1);
};

export const getInstallments = (price, installments) => {
  const monthPrice = price / installments;
  return `${installments}x ${formatPrice(monthPrice)} interest-free`;
};
