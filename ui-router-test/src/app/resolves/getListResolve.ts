import { ResolvableLiteral, Transition } from "@uirouter/core";

export async function resolveFn(
  trans: Transition,
) {
  return [
    {
      id: "123",
      name: "jack"
    },
    {
      id: "234",
      name: "joke"
    }
  ]
}

export const getListResolver: ResolvableLiteral = {
  token: "listData",
  deps: [Transition],
  resolveFn
};
