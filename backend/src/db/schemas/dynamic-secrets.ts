// Code generated by automation script, DO NOT EDIT.
// Automated by pulling database and generating zod schema
// To update. Just run npm run generate:schema
// Written by akhilmhdh.

import { z } from "zod";

import { zodBuffer } from "@app/lib/zod";

import { TImmutableDBKeys } from "./models";

export const DynamicSecretsSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  version: z.number(),
  type: z.string(),
  defaultTTL: z.string(),
  maxTTL: z.string().nullable().optional(),
  inputIV: z.string().nullable().optional(),
  inputCiphertext: z.string().nullable().optional(),
  inputTag: z.string().nullable().optional(),
  algorithm: z.string().default("aes-256-gcm"),
  keyEncoding: z.string().default("utf8"),
  folderId: z.string().uuid(),
  status: z.string().nullable().optional(),
  statusDetails: z.string().nullable().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  encryptedInput: zodBuffer,
  projectGatewayId: z.string().uuid().nullable().optional(),
  gatewayId: z.string().uuid().nullable().optional(),
  usernameTemplate: z.string().nullable().optional()
});

export type TDynamicSecrets = z.infer<typeof DynamicSecretsSchema>;
export type TDynamicSecretsInsert = Omit<z.input<typeof DynamicSecretsSchema>, TImmutableDBKeys>;
export type TDynamicSecretsUpdate = Partial<Omit<z.input<typeof DynamicSecretsSchema>, TImmutableDBKeys>>;
