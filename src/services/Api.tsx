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
        // tslint:disable-next-line:no-console
        console.log(error);
        return error;
      });
};

const getItemById = (id: string): Promise<any> => {
  return fetch(`https://api.mercadolibre.com/items/${id}`)
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

const getItemDescriptionById = (id: string): Promise<Idetail> => {
  return fetch(`https://api.mercadolibre.com/items/${id}/description`)
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

const getItemCategoryById = (id: string): Promise<any> => {
  return fetch(`https://api.mercadolibre.com/categories/${id}`)
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
  getItemById,
  getItemDescriptionById,
  getItemCategoryById
};