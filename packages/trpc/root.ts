import { app } from "./routers";
import { createCallerFactory } from ".";

export const appRouter = app;

export type AppRouter = typeof appRouter;

export const createCaller = createCallerFactory(appRouter);
