import { UseBaseQueryOptions, useQuery } from "react-query";
import useShowSnackbar from "src/hooks/useShowSnackbar/useShowSnackbar";
import { DoQueryParams, doQuery } from "src/service/doQuery";
import { createServiceEndpoint } from "src/service/service-creator";
import { EntityKey } from "src/service/type";

export interface UseQueryDataParams<T> extends Omit<DoQueryParams, "endpoint"> {
  entity: EntityKey;
  options?: UseBaseQueryOptions<T, Error>;
  dependencies?: unknown[];
}

const useQueryData = <T>({
  entity,
  action,
  requestData,
  dependencies,
  options,
}: UseQueryDataParams<T>) => {
  const showSnackbar = useShowSnackbar();

  const endpoint = createServiceEndpoint(entity);

  const queryKey = dependencies ? [entity, ...dependencies] : [entity];

  return useQuery<T, Error>(
    queryKey,
    () =>
      doQuery({
        endpoint,
        action,
        requestData,
      }),
    {
      ...options,
      onError: (error) => {
        console.error("debug error", error);
        showSnackbar("There was an unknown error. Please try again!", "error");
      },
    }
  );
};

export default useQueryData;
