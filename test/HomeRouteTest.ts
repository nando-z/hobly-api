import { RequestHandler } from "./http";

export const HomeRoute: RequestHandler = (_req, res) => {
  res.status(200).send({ message: "Hello Test File" });
};
