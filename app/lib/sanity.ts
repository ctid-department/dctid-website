import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  apiVersion: "2023-05-03",
  dataset: "production",
  projectId: "hnjzgegk",
  useCdn: false,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

export async function fetchFromQuery(query: string) {
  const ret = await client.fetch(`*[_id == '${query}']`);
}

export async function getObjectFromRef(_input_: any) {
  const latestPersonId = await client.fetch(
    '*[_id == "b747dc9e-3dae-4553-b412-ad64aa786c94"]'
  );
}
