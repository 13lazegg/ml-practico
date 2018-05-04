import { Idetail, Iresults } from '../interfaces/props';
const getItems = (value: string): Promise<Iresults> => {
  return fetch(`http://localhost:8080/api/items?q=${value}`)
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

const getItemById = (id: string): Promise<Idetail> => {
  return fetch(`http://localhost:8080/api/items/${id}`)
    .then((response) => {
      return response.json()
    })
    .then((item) => {
      return item;
    })
    .catch((error) => {
      return error;
    });
}

export {
  getItems,
  getItemById
};