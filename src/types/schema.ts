export type EntitySchema = Record<
  string,
  {
    type: 'integer' | 'string';
    format?: 'email' | 'int64';
  }
>;
