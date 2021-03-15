import * as Updates from "expo-updates";

async function expoUpdate() {
  const { isAvailable } = await Updates.checkForUpdateAsync();
  if (isAvailable) {
    await Updates.fetchUpdate.Async();
    await Updates.reloadAsync();
  }
  return null;
}

export default expoUpdate;