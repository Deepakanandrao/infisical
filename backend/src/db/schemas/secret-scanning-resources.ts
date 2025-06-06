// Code generated by automation script, DO NOT EDIT.
// Automated by pulling database and generating zod schema
// To update. Just run npm run generate:schema
// Written by akhilmhdh.

import { z } from "zod";

import { TImmutableDBKeys } from "./models";

export const SecretScanningResourcesSchema = z.object({
  id: z.string().uuid(),
  externalId: z.string(),
  name: z.string(),
  type: z.string(),
  dataSourceId: z.string().uuid(),
  createdAt: z.date(),
  updatedAt: z.date()
});

export type TSecretScanningResources = z.infer<typeof SecretScanningResourcesSchema>;
export type TSecretScanningResourcesInsert = Omit<z.input<typeof SecretScanningResourcesSchema>, TImmutableDBKeys>;
export type TSecretScanningResourcesUpdate = Partial<
  Omit<z.input<typeof SecretScanningResourcesSchema>, TImmutableDBKeys>
>;
