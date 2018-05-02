interface Iprops {
  status?: string;
  value?: any;
  location?: Ilocation;
}

interface Istate {
  isEditing?: boolean;
  value?: any;
}

interface Ilocation {
  hash?: string;
  pathname?: string;
  search?: string;
  state?: string;
}

interface Ifilters {
  id?: string;
  name?: string;
  type?: string;
  values?: IfiltersValues[];
}

interface IfiltersValues {
  id?: string;
  name?: string;
  path_from_root?: IfiltersValuesPath[];
}

interface IfiltersValuesPath {
  id?: string;
  name?: string
}

export { Iprops, Istate, Ifilters, IfiltersValues};