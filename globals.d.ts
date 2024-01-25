declare module 'src/schema.json' {
  import { Method } from 'src/constants/api';
  import { EntitySchema, EntityType } from 'src/types';

  interface ISchema {
    definitions: Record<
      EntityType,
      {
        type: 'object';
        properties: EntitySchema;
      }
    >;
    paths: Record<
      string,
      Record<
        Method,
        {
          parameters?: any[];
          summary: string;
          requestBody?: {
            schema: {
              type: 'object';
              properties: any;
            };
          };
        }
      >
    >;
  }

  const content: ISchema;
  export default content;
}
