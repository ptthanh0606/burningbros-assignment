import { LIMIT_PRODUCTS } from "src/service/constants";
import { APIAction } from "src/service/type";

export interface RequestData {
  id?: string;
  searchQuery?: string;
  offset?: number;
}

export interface DoQueryParams {
  endpoint: string;
  action: APIAction;
  requestData?: RequestData;
}

export const doQuery = async <T>({
  endpoint,
  action,
  requestData,
}: DoQueryParams) => {
  let fullEndpoint = `${import.meta.env.VITE_API_HOST}/${endpoint}`;

  switch (action) {
    case "GetOne": {
      if (!requestData || !requestData.id) {
        throw new Error(`Missing id param in ${fullEndpoint}`);
      }

      fullEndpoint += `/${requestData?.id}`;
      break;
    }

    case "GetManyWithPagination": {
      if (requestData) {
        const offset = requestData.offset ?? 0;
        const paginationParamsString = `limit=${LIMIT_PRODUCTS}&skip=${offset}`;

        if (requestData.searchQuery && requestData.searchQuery.trim()) {
          fullEndpoint += `/search?q=${requestData.searchQuery}&${paginationParamsString}`;
        } else {
          fullEndpoint += `?${paginationParamsString}`;
        }
      }

      break;
    }

    default: {
      throw new Error(`Unknown action ${action}`);
    }
  }

  const response = await fetch(fullEndpoint);

  return (await response.json()) as T;
};
