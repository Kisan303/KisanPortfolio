import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes - we don't need complex API for a static portfolio site
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
  });

  // Create HTTP server
  const httpServer = createServer(app);

  return httpServer;
}
