import express from "express";

import { createRegistryController } from "../dependency/DependenciesRegistry";

export const registrationRouter = express.Router();

registrationRouter.post("/", createRegistryController.run.bind(createRegistryController));