import { NextFunction, Request, Response } from "express";

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
    try {
        const authHeader = request.headers.authorization;
        if (!authHeader) {
            throw new Error("Token is missing");
        }

        const [, token] = authHeader.split(" ");

        next();
    } catch (error) {
        return response.status(401).json({ error: "Unauthorized" });
    }
}
