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
  id?: string | null;
  site_id?: string | null;
  title?: string | null;
  seller?: {
    id?: number | null;
    power_seller_status?: string | null;
    car_dealer?: boolean | null;
    real_estate_agency?: boolean | null;
    tags: any[];
  };
  price?: number | null;
  currency_id?: string | null;
  available_quantity?: number | null;
  sold_quantity?: number | null;
  buying_mode?: string | null;
  listing_type_id?: string | null;
  stop_time?: string | null;
  condition?: string | null;
  permalink?: string | null;
  thumbnail?: string | null;
  differential_pricing?: any | null;
  accepts_mercadopago?: boolean | null;
  installments?: {
    quantity?: number | null;
    amount?: number | null;
    rate?: number | null;
    currency_id?: string | null;
  };
  address?: {
    state_id?: string | null;
    state_name?: string | null;
    city_id?: string | null;
    city_name?: string | null;
  };
  shipping?: {
    free_shipping?: boolean | null;
    mode?: string | null;
    tags?: any[];
    logistic_type?: string | null;
  };
  seller_address?: {
    id?: string | null;
    comment?: string | null;
    address_line?: string | null;
    zip_code?: string | null;
    country?: {
      id?: string | null;
      name?: string | null;
    };
    state?: {
      id?: string | null;
      name?: string | null;
    };
    city?: {
      id?: string | null;
      name?: string;
    };
    latitude?: string | null;
    longitude: string | null; 
  };
  attributes?: any[];
  original_price?: number | null;
  category_id?: string | null;
  official_store_id?: string | null;
  catalog_product_id?: string | null;
  reviews?: any;
  tags?: string[] | null;
}

interface IresultsAvaliableSorts {
  id?: string | null;
  name?: string | null;
}

interface IresultsAvaliableFiltersValues {
  id?: string | null;
  name?: string | null;
  results?: number | null;
}

interface IresultsAvaliableFilters {
  id?: string | null;
  name?: string | null;
  type?: string | null;
  values?: IresultsAvaliableFiltersValues[];
}

interface Iresults {
  site_id?: string | null;
  query?: string | null;
  paging?: {
    total?: number | null;
    offset?: number | null;
    limit?: number | null;
    primary_results?: number | null;
  };
  results?: IitemResult[];
  secondary_results?: any[];
  related_results?: any[];
  sort?: {
    id?: string | null;
    name?: string | null;
  };
  available_sorts?: IresultsAvaliableSorts[];
  filters?: Ifilters[];
  available_filters: IresultsAvaliableFilters[];
}

export { Iprops, Istate, Ifilters, IfiltersValues, Iresults, IitemResult};