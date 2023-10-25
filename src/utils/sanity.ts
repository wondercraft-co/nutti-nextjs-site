// ./src/utils/sanity/client.ts
import { PortableTextComponentProps } from "@portabletext/react";
import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID; // "pv8y60vp"
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET; // "production"
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-05-03";

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion, // https://www.sanity.io/docs/api-versioning
  useCdn: true, // if you're using ISR or only static generation at build time then you can set this to `false` to guarantee no stale content
});

export interface Store {
  _id: string;
  address: string;
  _createdAt: string;
  url: string;
  phone: string;
  country_iso: string;
  slug: {
    _type: string;
    current: string;
  };
  country: string;
  location: {
    lat: number;
    lng: number;
    _type: string;
  };
  _type: string;
  title: string;
  _updatedAt: string;
  city: string;
  _rev: string;
}

export interface Recipe {
  slug: Slug;
  _id: string;
  _rev: string;
  title: string;
  _updatedAt: string;
  image: Image;
  videoUrl: string;
  _createdAt: string; 
  _type: string;
  description: any;
  ingredients: Ingredient[];
}

export interface Slug {
  current: string;
  _type: string;
}

export interface Image {
  asset: Asset;
}

export interface Asset {
  uploadId: string;
  size: number;
  _updatedAt: string;
  metadata: Metadata;
  _rev: string;
  mimeType: string;
  extension: string;
  _id: string;
  url: string;
  path: string;
  assetId: string;
  originalFilename: string;
  _type: string;
  sha1hash: string;
  _createdAt: string;
}

export interface Metadata {
  isOpaque: boolean;
  blurHash: string;
  _type: string;
  palette: Palette;
  hasAlpha: boolean;
  lqip: string;
  dimensions: Dimensions;
}

export interface Palette {
  muted: Muted;
  lightVibrant: LightVibrant;
  darkVibrant: DarkVibrant;
  lightMuted: LightMuted;
  vibrant: Vibrant;
  dominant: Dominant;
  _type: string;
  darkMuted: DarkMuted;
}

export interface Muted {
  background: string;
  _type: string;
  foreground: string;
  title: string;
  population: number;
}

export interface LightVibrant {
  _type: string;
  foreground: string;
  title: string;
  population: number;
  background: string;
}

export interface DarkVibrant {
  title: string;
  population: number;
  background: string;
  _type: string;
  foreground: string;
}

export interface LightMuted {
  foreground: string;
  title: string;
  population: number;
  background: string;
  _type: string;
}

export interface Vibrant {
  foreground: string;
  title: string;
  population: number;
  background: string;
  _type: string;
}

export interface Dominant {
  background: string;
  _type: string;
  foreground: string;
  title: string;
  population: number;
}

export interface DarkMuted {
  foreground: string;
  title: string;
  population: number;
  background: string;
  _type: string;
}

export interface Dimensions {
  aspectRatio: number;
  height: number;
  _type: string;
  width: number;
}

export interface Ingredient {
  ingredient: Ingredient2;
  name: string;
  number: string;
  unit: string;
}

export interface Ingredient2 {
  _id: string;
  name: string;
}
