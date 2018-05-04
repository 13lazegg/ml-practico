interface Iprops {
  status?: string | null;
  value?: any | null;
  location?: Ilocation | null;
  match?: Imatch | null;
}

interface Istate {
  isEditing?: boolean | null;
  value?: any | null;
  filters?: any | null;
  results?: any | null;
  description?: any | null;
}

interface Imatch {
  isExact?: boolean | null;
  params?: any | null;
  path?: string | null;
  url?: string | null;
}

interface Ilocation {
  hash?: string | null;
  pathname?: string | null;
  search?: string | null;
  state?: string | null;
}

interface IitemResult {
  id?: string;
  title?: string;
  price?: {
    currency?: string;
    amount?: number | null;
    decimals?: number | null;
  };
  picture?: string | null;
  condition?: string | null;
  free_shipping?: boolean | null;
  location?: string | null;
  description?: string | null;
  sold_quantity?: number | null;
}

interface Iresults {
  author: Iauthor;
  categories: string[]; 
  items: IitemResult[];
}

interface Idetail {
  author: Iauthor;
  categories: string[];
  items: IitemResult;
}

interface Iauthor{
  name: string;
  lastname: string;
}

export { Iprops, Istate, Iresults, IitemResult, Idetail};