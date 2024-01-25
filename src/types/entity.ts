import { Method } from 'src/constants/api';

import { EntitySchema } from './schema';

export const enum EntityType {
  Post = 'Post',
  Comment = 'Comment',
}

export const enum APIUrls {
  Posts = 'posts',
  Comments = 'comments',
}

export interface IParam {
  name: string;
  required: boolean;
  type: 'integer' | 'string';
  description: string;
}

export interface IAction {
  url: string;
  method: Method;
  summary: string;
  parameters?: IParam[];
  requestBody?: IParam[];
}

export interface IEntity {
  type: EntityType;
  label: string;
  itemsUrl: APIUrls;
  schema: EntitySchema;
  actions: IAction[];
}
