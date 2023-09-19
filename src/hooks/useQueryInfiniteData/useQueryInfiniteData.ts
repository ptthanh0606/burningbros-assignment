import { UseInfiniteQueryOptions, useInfiniteQuery } from "react-query";
import { Pagination } from "src/entity/pagination";
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
  const endpoint = createServiceEndpoint(entity);

  const queryKey = dependencies ? [entity, ...dependencies] : [entity];

  return useInfiniteQuery<T, Error>(
    queryKey,
    async ({ pageParam = 0 }) =>
      await doQuery({
        endpoint,
        action,
        requestData: {
          ...requestData,
          offset: pageParam,
        },
      }),
    {
      ...options,
      getNextPageParam: (lastPage) => {
        const nextOffset = lastPage.skip + lastPage.limit;

        if (nextOffset === lastPage.total) return undefined;

        return nextOffset;
      },
    }
  );
};

export default useQueryInfiniteData;
