import { ContentEntityResponseCollection, Maybe } from "~/@types/graphql";

export type StringHashMap = { [key: string]: string };

export function transformGraphQLResponseToObject(data: Maybe<ContentEntityResponseCollection>): StringHashMap {
  const obj = {};

  data?.data.forEach((val) => {
    Object.assign(obj, { [val.attributes?.key ?? ""]: val.attributes?.value });
  });

  return obj;
}
