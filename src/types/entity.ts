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

export interface IAction {
  url: string;
  method: Method;
  summary: string;
  parameters?: {
    name: string;
    required: boolean;
    type: 'integer' | 'string';
    description: string;
  }[];
}

export interface IEntity {
  type: EntityType;
  label: string;
  itemsUrl: APIUrls;
  schema: EntitySchema;
  actions: IAction[];
}
