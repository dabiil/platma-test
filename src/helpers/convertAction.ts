import { Method } from 'src/constants/api';
import { IAction } from 'src/types';

type SchemaActions = Record<
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
>;

export const convertActions = (schemaActions: [string, SchemaActions][]): IAction[] =>
  schemaActions.flatMap<IAction>(([url, paths]) =>
    Object.entries(paths).map<IAction>(([method, action]) => ({
      method: method as Method,
      summary: action.summary,
      url,
      parameters: action.parameters,
      requestBody: action.requestBody?.schema?.properties
        ? Object.entries(action.requestBody.schema.properties).map(
            ([key, value]) =>
              ({
                ...(value as {}),
                name: key,
              }) as any,
          )
        : undefined,
    })),
  );
