import { Iresults } from '../interfaces/props';
const getItems = (value: string): Promise<Iresults> => {
  return fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${value}&include=category&limit=4#json`)
    .then((response) => {
      return response.json()
    })
      .then((items) => {
        return items;
      })
      .catch((error) => {
        return error;
      });
};

export {
  getItems
};