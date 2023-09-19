import { Entities } from "src/entity/entities";
import { EntityKey } from "src/service/type";

export const createServiceEndpoint = (entity: EntityKey) => {
  switch (entity) {
    case "products": {
      return `${Entities[entity]}`;
    }

    case "category": {
      return `${Entities.products}/${Entities[entity]}`;
    }

    default: {
      throw new Error("Invalid entity to create service endpoint");
    }
  }
};
