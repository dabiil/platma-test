import { convertActions } from 'src/helpers';
import APISchema from 'src/schema.json';
import { APIUrls, EntityType, IEntity } from 'src/types';

const schemaPathsEntries = Object.entries(APISchema.paths);

export const entities: IEntity[] = [
  {
    type: EntityType.Post,
    itemsUrl: APIUrls.Posts,
    label: 'Post',
    schema: APISchema.definitions.Post.properties,
    actions: convertActions(schemaPathsEntries.filter(([key]) => key.startsWith(`/${APIUrls.Posts}`))),
  },
  {
    type: EntityType.Comment,
    itemsUrl: APIUrls.Comments,
    label: 'Comment',
    schema: APISchema.definitions.Comment.properties,
    actions: convertActions(schemaPathsEntries.filter(([key]) => key.startsWith(`/${APIUrls.Comments}`))),
  },
];
