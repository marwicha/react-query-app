export const updateQueryUrl = (queryParams: string) => {
  const newUrl = `${window.location.pathname}?${queryParams.toString()}`;
  window.history.replaceState({}, "", newUrl);
  return queryParams;
};
