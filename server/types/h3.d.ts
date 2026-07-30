import type { User } from "better-auth";

declare module "h3" {
  // We need to extend and override the h3 types here so we must use interface
  // And not let eslint change this to a type
  // eslint-disable-next-line ts/consistent-type-definitions
  interface H3EventContext {
    user?: Omit<User, "id"> & {
      id: number;
    };
  }
}

export {};
