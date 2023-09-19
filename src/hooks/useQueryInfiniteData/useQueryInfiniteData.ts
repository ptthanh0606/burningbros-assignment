import { UseInfiniteQueryOptions, useInfiniteQuery } from "react-query";
import { Pagination } from "src/entity/pagination";
import useShowSnackbar from "src/hooks/useShowSnackbar/useShowSnackbar";
import { DoQueryParams, doQuery } from "src/service/doQuery";
import { createServiceEndpoint } from "src/service/service-creator";
import { EntityKey } from "src/service/type";

export interface UseQueryInfiniteDataParams<T>
  extends Omit<DoQueryParams, "endpoint"> {
  entity: EntityKey;
  options?: UseInfiniteQueryOptions<T, Error>;
  dependencies?: unknown[];
}

const useQueryInfiniteData = <T extends Pagination>({
  entity,
  action,
  requestData,
  dependencies,
  options,
}: UseQueryInfiniteDataParams<T>) => {
  const showSnackbar = useShowSnackbar();

  const endpoint = createServiceEndpoint(entity);

  const queryKey = dependencies ? [entity, ...dependencies] : [entity];

  return useInfiniteQuery<T, Error>(
    queryKey,
    ({ pageParam = 0 }) =>
      doQuery({
        endpoint,
        action,
        requestData: {
          ...requestData,
          offset: pageParam,
        },
      }),
    {
      ...options,
      onError: (error) => {
        console.error("debug error", error);
        showSnackbar("There was an unknown error. Please try again!", "error");
      },
      getNextPageParam: (lastPage) => {
        const nextOffset = lastPage.skip + lastPage.limit;

        if (nextOffset === lastPage.total) return undefined;

        return nextOffset;
      },
    }
  );
};

export default useQueryInfiniteData;
