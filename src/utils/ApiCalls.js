import { useQuery } from "@tanstack/react-query";
const endPoint = import.meta.env.VITE_APP_URL;

export function getContactList(params) {
  const queryStr = new URLSearchParams(params);

  return useQuery({
    queryKey: ["contacts"],
    queryFn: async () => {
      const response = await fetch(
        endPoint + "/contacts" + "?" + queryStr.toString()
      );

      return await response.json();
    },
  });
}
