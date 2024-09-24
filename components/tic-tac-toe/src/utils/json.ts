/**
 * Safely parse JSON. Returns null if invalid.
 *
 * @param value
 */
export const tryParseJSON = <T>(value: string): T | null => {
  try {
    return JSON.parse(value) as T;
  } catch (error) {
    // invalid json value
    return null;
  }
};
