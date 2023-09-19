import { Entities } from "src/entity/entities";

export type EntityKey = keyof typeof Entities;

export type APIAction = "GetOne" | "GetMany" | "GetManyWithPagination";
