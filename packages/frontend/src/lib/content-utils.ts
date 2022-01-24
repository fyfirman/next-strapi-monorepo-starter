import { ContentEntityResponseCollection } from "~/@types/graphql";

export type StringHashMap = { [key: string]: string };

export function transformGraphQLResponseToObject(data: ContentEntityResponseCollection): StringHashMap {
  const obj = {};

  data.data.forEach((val) => {
    if (val.attributes?.key) {
      Object.assign(obj, { [val.attributes.key]: val.attributes.value });
    }
  });

  return obj;
}
