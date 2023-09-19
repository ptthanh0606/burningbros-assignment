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

const getEndpointWithSearch = (searchQuery: string) => {
  return `/search?q=${searchQuery}`;
};

export const doQuery = async <T>({
  endpoint,
  action,
  requestData,
}: DoQueryParams) => {
  let fullEndpoint = `${import.meta.env.VITE_API_HOST}/${endpoint}`;

  switch (action) {
    case "GetOne": {
      if (!requestData || !requestData.id) {
        throw new Error(`Missing id param for ${fullEndpoint}`);
      }

      fullEndpoint += `/${requestData?.id}`;

      break;
    }

    case "GetMany": {
      if (requestData?.searchQuery && requestData.searchQuery.trim()) {
        fullEndpoint += getEndpointWithSearch(requestData.searchQuery.trim());
      }

      break;
    }

    case "GetManyWithPagination": {
      if (!requestData || typeof requestData.offset === "undefined") {
        throw new Error(`Missing offset param for ${fullEndpoint}`);
      }

      const paginationParamsString = `limit=${LIMIT_PRODUCTS}&skip=${requestData.offset}`;

      if (requestData.searchQuery && requestData.searchQuery.trim()) {
        const endpointWithSearch = getEndpointWithSearch(
          requestData.searchQuery.trim()
        );

        fullEndpoint += `${endpointWithSearch}&${paginationParamsString}`;
      } else fullEndpoint += `?${paginationParamsString}`;

      break;
    }

    default: {
      throw new Error(`Unknown action ${action}`);
    }
  }

  try {
    const response = await fetch(fullEndpoint);
    return (await response.json()) as T;
  } catch (error) {
    throw new Error(error.message);
  }
};
