import { useQuery } from "react-query";
import { getStoryblokApi } from "@storyblok/react";

const fetchStoryblokData = async (slug : string) => {
  const storyblokApi = getStoryblokApi();
  const response = await storyblokApi.get(`cdn/stories/${slug}`, { version: "draft" });
  return response.data.story;
};

export const useStoryblok = (slug : string) => {
  return useQuery({
    queryKey: ["storyblok", slug],
    queryFn: () => fetchStoryblokData(slug),
  });
};
