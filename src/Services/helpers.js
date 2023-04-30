export const transformReceivingData = (data) => {
  return Object.keys(data).map((key) => ({
    ...data[key],
    id: key,
  }));
};
