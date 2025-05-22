import { RequestHandler } from "@/types/http";

export const abort: RequestHandler = (_req, res) => {
  res.status(404).json({
    message: "Error 404",
  });
};
