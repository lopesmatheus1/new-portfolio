export const formateDate = (date: Date) => {
    return new Date(date).toLocaleDateString("pt-BR", {
      month: "long",
      year: "numeric",
    });
  };
  