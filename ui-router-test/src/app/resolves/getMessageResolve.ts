import { ResolvableLiteral, Transition } from "@uirouter/core";

export async function resolveFn(
  trans: Transition,
  listData
) {
  return listData.pop();
}

export const getMessageResolver: ResolvableLiteral = {
  token: "messageData",
  deps: [Transition,"listData"],
  resolveFn
};
