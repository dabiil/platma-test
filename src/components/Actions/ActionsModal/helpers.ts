export const normalizeUrl = (url: string, params: Record<string, any>) => {
  let newUrl = url;

  Object.entries(params).forEach(([key, value]) => {
    newUrl = newUrl.replace(`{${key}}`, value);
  });

  return newUrl;
};
