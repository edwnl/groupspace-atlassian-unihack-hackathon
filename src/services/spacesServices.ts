// Functions related to the spaces
import { getFunctions, httpsCallable } from "firebase/functions";
import { isLoggedIn } from "./firestoreServices";
import { CreateNewSpace, UserFeatures } from "./models";
import { auth } from "../firebase";

const functions = getFunctions();

export async function getSpaceData(spaceId: string) {
  try {
    let result = await httpsCallable(functions, "getSpaceData")({ space_id: spaceId });
    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function getUserSpaces() {
  if (!isLoggedIn) {
    throw new Error("Not logged in");
  }

  try {
    let result = httpsCallable(functions, "getMemberSpaces")({ uid: auth.currentUser?.uid });
    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function addUserToSpace(spaceId: string, userData: UserFeatures) {
  try {
    let result = await httpsCallable(
      functions,
      "addUserToSpace",
    )({ space_id: spaceId, user_data: userData, uid: auth.currentUser?.uid });
    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function createNewSpace(data: CreateNewSpace) {
  try {
    let result = await httpsCallable(
      functions,
      "createSpace",
    )({
      space_data: {
        name: data.roomName,
        min_size: data.minSize,
        max_size: data.maxSize,
        features: data.features,
      },
      uid: auth.currentUser?.uid,
    });

    console.log("DONE");
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
