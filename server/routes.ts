import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { setupAuth } from "./auth";
import { storage } from "./storage";
import {
  InsertProject,
  InsertSkill,
  InsertExperience,
  InsertAboutMe,
  InsertContactInfo,
  InsertChatbotResponse
} from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Set up authentication
  const { isAuthenticated } = setupAuth(app);

  // Public routes
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
  });

  // Projects API - Public routes
  app.get('/api/projects', async (req, res) => {
    try {
      const projects = await storage.getProjects();
      res.json(projects);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch projects' });
    }
  });

  app.get('/api/projects/:id', async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const project = await storage.getProject(id);
      
      if (!project) {
        return res.status(404).json({ error: 'Project not found' });
      }
      
      res.json(project);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch project' });
    }
  });

  // Skills API - Public routes
  app.get('/api/skills', async (req, res) => {
    try {
      const skills = await storage.getSkills();
      res.json(skills);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch skills' });
    }
  });

  // Experience API - Public routes
  app.get('/api/experiences', async (req, res) => {
    try {
      const experiences = await storage.getExperiences();
      res.json(experiences);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch experiences' });
    }
  });

  // About Me API - Public routes
  app.get('/api/about', async (req, res) => {
    try {
      const aboutEntries = await storage.getAboutMeEntries();
      res.json(aboutEntries);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch about info' });
    }
  });

  // Contact Info API - Public routes
  app.get('/api/contact', async (req, res) => {
    try {
      const contactInfo = await storage.getContactInfo();
      res.json(contactInfo || {});
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch contact info' });
    }
  });

  // Chatbot Responses API - Public routes
  app.get('/api/chatbot/responses', async (req, res) => {
    try {
      const responses = await storage.getChatbotResponses();
      res.json(responses);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch chatbot responses' });
    }
  });

  // Protected routes - Admin API
  // Projects Management
  app.post('/api/admin/projects', isAuthenticated, async (req, res) => {
    try {
      const projectData = req.body as InsertProject;
      const project = await storage.createProject(projectData);
      res.status(201).json(project);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create project' });
    }
  });

  app.put('/api/admin/projects/:id', isAuthenticated, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const projectData = req.body as Partial<InsertProject>;
      
      const updatedProject = await storage.updateProject(id, projectData);
      
      if (!updatedProject) {
        return res.status(404).json({ error: 'Project not found' });
      }
      
      res.json(updatedProject);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update project' });
    }
  });

  app.delete('/api/admin/projects/:id', isAuthenticated, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const success = await storage.deleteProject(id);
      
      if (!success) {
        return res.status(404).json({ error: 'Project not found' });
      }
      
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete project' });
    }
  });

  // Skills Management
  app.post('/api/admin/skills', isAuthenticated, async (req, res) => {
    try {
      const skillData = req.body as InsertSkill;
      const skill = await storage.createSkill(skillData);
      res.status(201).json(skill);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create skill' });
    }
  });

  app.put('/api/admin/skills/:id', isAuthenticated, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const skillData = req.body as Partial<InsertSkill>;
      
      const updatedSkill = await storage.updateSkill(id, skillData);
      
      if (!updatedSkill) {
        return res.status(404).json({ error: 'Skill not found' });
      }
      
      res.json(updatedSkill);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update skill' });
    }
  });

  app.delete('/api/admin/skills/:id', isAuthenticated, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const success = await storage.deleteSkill(id);
      
      if (!success) {
        return res.status(404).json({ error: 'Skill not found' });
      }
      
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete skill' });
    }
  });

  // Experience Management
  app.post('/api/admin/experiences', isAuthenticated, async (req, res) => {
    try {
      const experienceData = req.body as InsertExperience;
      const experience = await storage.createExperience(experienceData);
      res.status(201).json(experience);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create experience' });
    }
  });

  app.put('/api/admin/experiences/:id', isAuthenticated, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const experienceData = req.body as Partial<InsertExperience>;
      
      const updatedExperience = await storage.updateExperience(id, experienceData);
      
      if (!updatedExperience) {
        return res.status(404).json({ error: 'Experience not found' });
      }
      
      res.json(updatedExperience);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update experience' });
    }
  });

  app.delete('/api/admin/experiences/:id', isAuthenticated, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const success = await storage.deleteExperience(id);
      
      if (!success) {
        return res.status(404).json({ error: 'Experience not found' });
      }
      
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete experience' });
    }
  });

  // About Me Management
  app.post('/api/admin/about', isAuthenticated, async (req, res) => {
    try {
      const aboutData = req.body as InsertAboutMe;
      const aboutEntry = await storage.createAboutMeEntry(aboutData);
      res.status(201).json(aboutEntry);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create about entry' });
    }
  });

  app.put('/api/admin/about/:id', isAuthenticated, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const aboutData = req.body as Partial<InsertAboutMe>;
      
      const updatedAbout = await storage.updateAboutMeEntry(id, aboutData);
      
      if (!updatedAbout) {
        return res.status(404).json({ error: 'About entry not found' });
      }
      
      res.json(updatedAbout);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update about entry' });
    }
  });

  app.delete('/api/admin/about/:id', isAuthenticated, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const success = await storage.deleteAboutMeEntry(id);
      
      if (!success) {
        return res.status(404).json({ error: 'About entry not found' });
      }
      
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete about entry' });
    }
  });

  // Contact Info Management
  app.post('/api/admin/contact', isAuthenticated, async (req, res) => {
    try {
      const contactData = req.body as InsertContactInfo;
      const contact = await storage.createOrUpdateContactInfo(contactData);
      res.status(201).json(contact);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update contact info' });
    }
  });

  // Chatbot Responses Management
  app.post('/api/admin/chatbot/responses', isAuthenticated, async (req, res) => {
    try {
      const responseData = req.body as InsertChatbotResponse;
      const response = await storage.createChatbotResponse(responseData);
      res.status(201).json(response);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create chatbot response' });
    }
  });

  app.put('/api/admin/chatbot/responses/:id', isAuthenticated, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const responseData = req.body as Partial<InsertChatbotResponse>;
      
      const updatedResponse = await storage.updateChatbotResponse(id, responseData);
      
      if (!updatedResponse) {
        return res.status(404).json({ error: 'Chatbot response not found' });
      }
      
      res.json(updatedResponse);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update chatbot response' });
    }
  });

  app.delete('/api/admin/chatbot/responses/:id', isAuthenticated, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const success = await storage.deleteChatbotResponse(id);
      
      if (!success) {
        return res.status(404).json({ error: 'Chatbot response not found' });
      }
      
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete chatbot response' });
    }
  });

  // Create HTTP server
  const httpServer = createServer(app);

  return httpServer;
}
