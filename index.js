// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";

// server/auth.ts
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import session from "express-session";

// server/storage.ts
import * as ExpressSession from "express-session";
import createMemoryStore from "memorystore";
var MemoryStore = createMemoryStore(ExpressSession);
var MemStorage = class {
  users;
  projects;
  skills;
  experiences;
  aboutMeEntries;
  contactInfoEntry;
  chatbotResponses;
  // Counters for IDs
  userIdCounter;
  projectIdCounter;
  skillIdCounter;
  experienceIdCounter;
  aboutMeIdCounter;
  contactInfoIdCounter;
  chatbotResponseIdCounter;
  sessionStore;
  constructor() {
    this.users = /* @__PURE__ */ new Map();
    this.projects = /* @__PURE__ */ new Map();
    this.skills = /* @__PURE__ */ new Map();
    this.experiences = /* @__PURE__ */ new Map();
    this.aboutMeEntries = /* @__PURE__ */ new Map();
    this.chatbotResponses = /* @__PURE__ */ new Map();
    this.userIdCounter = 1;
    this.projectIdCounter = 1;
    this.skillIdCounter = 1;
    this.experienceIdCounter = 1;
    this.aboutMeIdCounter = 1;
    this.contactInfoIdCounter = 1;
    this.chatbotResponseIdCounter = 1;
    this.sessionStore = new MemoryStore({
      checkPeriod: 864e5
      // 24 hours
    });
    this.createUser({
      username: "KisanrAI2703",
      password: "$Creation_0812"
    });
  }
  // User methods
  async getUser(id) {
    return this.users.get(id);
  }
  async getUserByUsername(username) {
    return Array.from(this.users.values()).find(
      (user) => user.username === username
    );
  }
  async createUser(insertUser) {
    const id = this.userIdCounter++;
    const user = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  // Project methods
  async getProjects() {
    return Array.from(this.projects.values());
  }
  async getProject(id) {
    return this.projects.get(id);
  }
  async createProject(project) {
    const id = this.projectIdCounter++;
    const now = /* @__PURE__ */ new Date();
    const newProject = {
      ...project,
      id,
      createdAt: now,
      updatedAt: now
    };
    this.projects.set(id, newProject);
    return newProject;
  }
  async updateProject(id, project) {
    const existingProject = this.projects.get(id);
    if (!existingProject) return void 0;
    const updatedProject = {
      ...existingProject,
      ...project,
      updatedAt: /* @__PURE__ */ new Date()
    };
    this.projects.set(id, updatedProject);
    return updatedProject;
  }
  async deleteProject(id) {
    return this.projects.delete(id);
  }
  // Skill methods
  async getSkills() {
    return Array.from(this.skills.values());
  }
  async getSkill(id) {
    return this.skills.get(id);
  }
  async createSkill(skill) {
    const id = this.skillIdCounter++;
    const now = /* @__PURE__ */ new Date();
    const newSkill = {
      ...skill,
      id,
      createdAt: now,
      updatedAt: now
    };
    this.skills.set(id, newSkill);
    return newSkill;
  }
  async updateSkill(id, skill) {
    const existingSkill = this.skills.get(id);
    if (!existingSkill) return void 0;
    const updatedSkill = {
      ...existingSkill,
      ...skill,
      updatedAt: /* @__PURE__ */ new Date()
    };
    this.skills.set(id, updatedSkill);
    return updatedSkill;
  }
  async deleteSkill(id) {
    return this.skills.delete(id);
  }
  // Experience methods
  async getExperiences() {
    return Array.from(this.experiences.values()).sort((a, b) => a.order - b.order);
  }
  async getExperience(id) {
    return this.experiences.get(id);
  }
  async createExperience(experience) {
    const id = this.experienceIdCounter++;
    const now = /* @__PURE__ */ new Date();
    const newExperience = {
      ...experience,
      id,
      createdAt: now,
      updatedAt: now
    };
    this.experiences.set(id, newExperience);
    return newExperience;
  }
  async updateExperience(id, experience) {
    const existingExperience = this.experiences.get(id);
    if (!existingExperience) return void 0;
    const updatedExperience = {
      ...existingExperience,
      ...experience,
      updatedAt: /* @__PURE__ */ new Date()
    };
    this.experiences.set(id, updatedExperience);
    return updatedExperience;
  }
  async deleteExperience(id) {
    return this.experiences.delete(id);
  }
  // About Me methods
  async getAboutMeEntries() {
    return Array.from(this.aboutMeEntries.values()).sort((a, b) => a.order - b.order);
  }
  async getAboutMeEntry(id) {
    return this.aboutMeEntries.get(id);
  }
  async createAboutMeEntry(aboutMe) {
    const id = this.aboutMeIdCounter++;
    const now = /* @__PURE__ */ new Date();
    const newAboutMe = {
      ...aboutMe,
      id,
      createdAt: now,
      updatedAt: now
    };
    this.aboutMeEntries.set(id, newAboutMe);
    return newAboutMe;
  }
  async updateAboutMeEntry(id, aboutMe) {
    const existingAboutMe = this.aboutMeEntries.get(id);
    if (!existingAboutMe) return void 0;
    const updatedAboutMe = {
      ...existingAboutMe,
      ...aboutMe,
      updatedAt: /* @__PURE__ */ new Date()
    };
    this.aboutMeEntries.set(id, updatedAboutMe);
    return updatedAboutMe;
  }
  async deleteAboutMeEntry(id) {
    return this.aboutMeEntries.delete(id);
  }
  // Contact Info methods
  async getContactInfo() {
    return this.contactInfoEntry;
  }
  async createOrUpdateContactInfo(contactInfo) {
    const now = /* @__PURE__ */ new Date();
    if (this.contactInfoEntry) {
      this.contactInfoEntry = {
        ...this.contactInfoEntry,
        ...contactInfo,
        updatedAt: now
      };
    } else {
      const id = this.contactInfoIdCounter++;
      this.contactInfoEntry = {
        ...contactInfo,
        id,
        updatedAt: now
      };
    }
    return this.contactInfoEntry;
  }
  // Chatbot Response methods
  async getChatbotResponses() {
    return Array.from(this.chatbotResponses.values());
  }
  async getChatbotResponse(id) {
    return this.chatbotResponses.get(id);
  }
  async getChatbotResponseByKeyword(keyword) {
    for (const response of this.chatbotResponses.values()) {
      if (response.keyword.toLowerCase() === keyword.toLowerCase()) {
        return response;
      }
    }
    return void 0;
  }
  async createChatbotResponse(response) {
    const id = this.chatbotResponseIdCounter++;
    const now = /* @__PURE__ */ new Date();
    const newResponse = {
      ...response,
      id,
      createdAt: now,
      updatedAt: now
    };
    this.chatbotResponses.set(id, newResponse);
    return newResponse;
  }
  async updateChatbotResponse(id, response) {
    const existingResponse = this.chatbotResponses.get(id);
    if (!existingResponse) return void 0;
    const updatedResponse = {
      ...existingResponse,
      ...response,
      updatedAt: /* @__PURE__ */ new Date()
    };
    this.chatbotResponses.set(id, updatedResponse);
    return updatedResponse;
  }
  async deleteChatbotResponse(id) {
    return this.chatbotResponses.delete(id);
  }
};
var storage = new MemStorage();

// server/auth.ts
import { scrypt, randomBytes, timingSafeEqual } from "crypto";
import { promisify } from "util";
var scryptAsync = promisify(scrypt);
async function comparePasswords(supplied, stored) {
  const [hashed, salt] = stored.split(".");
  const hashedBuf = Buffer.from(hashed, "hex");
  const suppliedBuf = await scryptAsync(supplied, salt, 64);
  return timingSafeEqual(hashedBuf, suppliedBuf);
}
function setupAuth(app2) {
  const SESSION_SECRET = process.env.SESSION_SECRET || "kisanrai-portfolio-session-secret";
  const sessionSettings = {
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: storage.sessionStore,
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 24 * 60 * 60 * 1e3
      // 24 hours
    }
  };
  app2.use(session(sessionSettings));
  app2.use(passport.initialize());
  app2.use(passport.session());
  passport.use(
    new LocalStrategy(async (username, password, done) => {
      try {
        const user = await storage.getUserByUsername(username);
        if (!user) {
          return done(null, false, { message: "Incorrect username or password" });
        }
        const isPasswordValid = await comparePasswords(password, user.password);
        if (!isPasswordValid) {
          return done(null, false, { message: "Incorrect username or password" });
        }
        return done(null, user);
      } catch (error) {
        return done(error);
      }
    })
  );
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await storage.getUser(id);
      done(null, user);
    } catch (error) {
      done(error);
    }
  });
  function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.status(401).json({ message: "Unauthorized" });
  }
  app2.post("/api/auth/login", (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
      if (err) return next(err);
      if (!user) return res.status(401).json({ message: info?.message || "Authentication failed" });
      req.login(user, (err2) => {
        if (err2) return next(err2);
        return res.status(200).json({ success: true, user: { id: user.id, username: user.username } });
      });
    })(req, res, next);
  });
  app2.post("/api/auth/logout", (req, res) => {
    req.logout((err) => {
      if (err) {
        return res.status(500).json({ message: "Logout failed" });
      }
      res.status(200).json({ success: true, message: "Logged out successfully" });
    });
  });
  app2.get("/api/auth/status", (req, res) => {
    if (req.isAuthenticated()) {
      const { id, username } = req.user;
      return res.status(200).json({
        authenticated: true,
        user: { id, username }
      });
    }
    res.status(200).json({
      authenticated: false
    });
  });
  return { isAuthenticated };
}

// server/routes.ts
async function registerRoutes(app2) {
  const { isAuthenticated } = setupAuth(app2);
  app2.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });
  app2.get("/api/projects", async (req, res) => {
    try {
      const projects = await storage.getProjects();
      res.json(projects);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch projects" });
    }
  });
  app2.get("/api/projects/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const project = await storage.getProject(id);
      if (!project) {
        return res.status(404).json({ error: "Project not found" });
      }
      res.json(project);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch project" });
    }
  });
  app2.get("/api/skills", async (req, res) => {
    try {
      const skills = await storage.getSkills();
      res.json(skills);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch skills" });
    }
  });
  app2.get("/api/experiences", async (req, res) => {
    try {
      const experiences = await storage.getExperiences();
      res.json(experiences);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch experiences" });
    }
  });
  app2.get("/api/about", async (req, res) => {
    try {
      const aboutEntries = await storage.getAboutMeEntries();
      res.json(aboutEntries);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch about info" });
    }
  });
  app2.get("/api/contact", async (req, res) => {
    try {
      const contactInfo = await storage.getContactInfo();
      res.json(contactInfo || {});
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch contact info" });
    }
  });
  app2.get("/api/chatbot/responses", async (req, res) => {
    try {
      const responses = await storage.getChatbotResponses();
      res.json(responses);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch chatbot responses" });
    }
  });
  app2.post("/api/admin/projects", isAuthenticated, async (req, res) => {
    try {
      const projectData = req.body;
      const project = await storage.createProject(projectData);
      res.status(201).json(project);
    } catch (error) {
      res.status(500).json({ error: "Failed to create project" });
    }
  });
  app2.put("/api/admin/projects/:id", isAuthenticated, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const projectData = req.body;
      const updatedProject = await storage.updateProject(id, projectData);
      if (!updatedProject) {
        return res.status(404).json({ error: "Project not found" });
      }
      res.json(updatedProject);
    } catch (error) {
      res.status(500).json({ error: "Failed to update project" });
    }
  });
  app2.delete("/api/admin/projects/:id", isAuthenticated, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const success = await storage.deleteProject(id);
      if (!success) {
        return res.status(404).json({ error: "Project not found" });
      }
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: "Failed to delete project" });
    }
  });
  app2.post("/api/admin/skills", isAuthenticated, async (req, res) => {
    try {
      const skillData = req.body;
      const skill = await storage.createSkill(skillData);
      res.status(201).json(skill);
    } catch (error) {
      res.status(500).json({ error: "Failed to create skill" });
    }
  });
  app2.put("/api/admin/skills/:id", isAuthenticated, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const skillData = req.body;
      const updatedSkill = await storage.updateSkill(id, skillData);
      if (!updatedSkill) {
        return res.status(404).json({ error: "Skill not found" });
      }
      res.json(updatedSkill);
    } catch (error) {
      res.status(500).json({ error: "Failed to update skill" });
    }
  });
  app2.delete("/api/admin/skills/:id", isAuthenticated, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const success = await storage.deleteSkill(id);
      if (!success) {
        return res.status(404).json({ error: "Skill not found" });
      }
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: "Failed to delete skill" });
    }
  });
  app2.post("/api/admin/experiences", isAuthenticated, async (req, res) => {
    try {
      const experienceData = req.body;
      const experience = await storage.createExperience(experienceData);
      res.status(201).json(experience);
    } catch (error) {
      res.status(500).json({ error: "Failed to create experience" });
    }
  });
  app2.put("/api/admin/experiences/:id", isAuthenticated, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const experienceData = req.body;
      const updatedExperience = await storage.updateExperience(id, experienceData);
      if (!updatedExperience) {
        return res.status(404).json({ error: "Experience not found" });
      }
      res.json(updatedExperience);
    } catch (error) {
      res.status(500).json({ error: "Failed to update experience" });
    }
  });
  app2.delete("/api/admin/experiences/:id", isAuthenticated, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const success = await storage.deleteExperience(id);
      if (!success) {
        return res.status(404).json({ error: "Experience not found" });
      }
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: "Failed to delete experience" });
    }
  });
  app2.post("/api/admin/about", isAuthenticated, async (req, res) => {
    try {
      const aboutData = req.body;
      const aboutEntry = await storage.createAboutMeEntry(aboutData);
      res.status(201).json(aboutEntry);
    } catch (error) {
      res.status(500).json({ error: "Failed to create about entry" });
    }
  });
  app2.put("/api/admin/about/:id", isAuthenticated, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const aboutData = req.body;
      const updatedAbout = await storage.updateAboutMeEntry(id, aboutData);
      if (!updatedAbout) {
        return res.status(404).json({ error: "About entry not found" });
      }
      res.json(updatedAbout);
    } catch (error) {
      res.status(500).json({ error: "Failed to update about entry" });
    }
  });
  app2.delete("/api/admin/about/:id", isAuthenticated, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const success = await storage.deleteAboutMeEntry(id);
      if (!success) {
        return res.status(404).json({ error: "About entry not found" });
      }
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: "Failed to delete about entry" });
    }
  });
  app2.post("/api/admin/contact", isAuthenticated, async (req, res) => {
    try {
      const contactData = req.body;
      const contact = await storage.createOrUpdateContactInfo(contactData);
      res.status(201).json(contact);
    } catch (error) {
      res.status(500).json({ error: "Failed to update contact info" });
    }
  });
  app2.post("/api/admin/chatbot/responses", isAuthenticated, async (req, res) => {
    try {
      const responseData = req.body;
      const response = await storage.createChatbotResponse(responseData);
      res.status(201).json(response);
    } catch (error) {
      res.status(500).json({ error: "Failed to create chatbot response" });
    }
  });
  app2.put("/api/admin/chatbot/responses/:id", isAuthenticated, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const responseData = req.body;
      const updatedResponse = await storage.updateChatbotResponse(id, responseData);
      if (!updatedResponse) {
        return res.status(404).json({ error: "Chatbot response not found" });
      }
      res.json(updatedResponse);
    } catch (error) {
      res.status(500).json({ error: "Failed to update chatbot response" });
    }
  });
  app2.delete("/api/admin/chatbot/responses/:id", isAuthenticated, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const success = await storage.deleteChatbotResponse(id);
      if (!success) {
        return res.status(404).json({ error: "Chatbot response not found" });
      }
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: "Failed to delete chatbot response" });
    }
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import themePlugin from "@replit/vite-plugin-shadcn-theme-json";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
var vite_config_default = defineConfig({
  base: "/KisanPortfolio/",
  // 👈 IMPORTANT LINE
  plugins: [
    react(),
    runtimeErrorOverlay(),
    themePlugin(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets")
    }
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = 5e3;
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true
  }, () => {
    log(`serving on port ${port}`);
  });
})();
