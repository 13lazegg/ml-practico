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

interface Ifilters {
  id?: string | null;
  name?: string | null;
  type?: string | null;
  values?: IfiltersValues[];
}

interface IfiltersValues {
  id?: string | null;
  name?: string | null;
  path_from_root?: IfiltersValuesPath[];
}

interface IfiltersValuesPath {
  id?: string | null;
  name?: string | null;
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
  author: { 
    name: string;
    lastname: string;
  }; 
  categories: string[]; 
  items: IitemResult[];
}

interface Idetail {
  author: {
    name: string;
    lastname: string;
  };
  categories: string[];
  items: IitemResult;
}

export { Iprops, Istate, Ifilters, IfiltersValues, Iresults, IitemResult, Idetail};