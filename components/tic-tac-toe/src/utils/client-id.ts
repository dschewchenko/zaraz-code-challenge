import { Client } from "@managed-components/types";

/**
 * Get client ID. If not exists, generate a new one.
 */
export const getClientId = (client: Client) => {
  let clientId = client.get("clientId") as string;
  if (!clientId) {
    clientId = crypto.randomUUID();
    client.set("clientId", clientId);
  }

  return clientId;
};
