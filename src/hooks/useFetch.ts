import useSWR from 'swr';

export default function useFetch<Data = any, Error = any>(urlApi: string) {
  const { data, error } = useSWR<Data, Error>(
    urlApi,
    async url => {
      const response = await fetch(url);
      const responseData = await response.json();

      return responseData;
    },
    {
      revalidateOnFocus: false,
    }
  );

  return { data, error };
}
