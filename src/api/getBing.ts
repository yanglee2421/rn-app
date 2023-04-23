import { request } from "@/api/request";

interface bingData {
  images: any[];
}

export async function getBing(idx = 0, n = 8) {
  const bingUrl = "https://cn.bing.com";
  const { images } = await request<unknown, bingData>({
    url: "https://cn.bing.com/HPImageArchive.aspx",
    params: {
      format: "js",
      idx,
      n,
    },
  });
  return images.map((item) => bingUrl + item.url);
}
