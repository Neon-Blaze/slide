"use server";

import { onCurrentUser } from "../user";
import { createAutomation } from "./queries";

export const createAutomations = async () => {
  const user = await onCurrentUser();
  try {
    const create = await createAutomation(user.id);
    if (create) return { status: 200, message: "Automation created" };
    return { status: 400, message: "Oops! Something went wrong" };
  } catch (error) {
    return { status: 500, message: "Internal server error" };
  }
};
