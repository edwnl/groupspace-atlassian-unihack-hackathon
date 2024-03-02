// Functions related to the spaces
import { getFunctions, httpsCallable } from "firebase/functions";

const functions = getFunctions();

export async function getSpaceData(spaceId: string) {
  try {
    let result = await httpsCallable(functions, "getSpaceData")({ space_id: spaceId });
    return result;
  } catch (error) {
    console.log(error);
  }
}
