import { defaultVRTConfig } from "./lib/vrtConfig";
import { parseFromString } from "./lib/utils";

async function setupGlobal() {
  // Set up global VRT configuration for tests
  global.__VRT_CONFIG__ = parseFromString(JSON.stringify(defaultVRTConfig));
  return;
}

export default setupGlobal;
