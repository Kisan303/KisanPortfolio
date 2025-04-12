import { 
  users,
  projects,
  skills,
  experiences,
  aboutMe,
  contactInfo,
  chatbotResponses,
  type User, 
  type InsertUser,
  type Project,
  type InsertProject,
  type Skill,
  type InsertSkill,
  type Experience,
  type InsertExperience,
  type AboutMe,
  type InsertAboutMe,
  type ContactInfo,
  type InsertContactInfo,
  type ChatbotResponse,
  type InsertChatbotResponse
} from "@shared/schema";
import session from "express-session";
import createMemoryStore from "memorystore";

const MemoryStore = createMemoryStore(session);

export interface IStorage {
  // User authentication
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Projects
  getProjects(): Promise<Project[]>;
  getProject(id: number): Promise<Project | undefined>;
  createProject(project: InsertProject): Promise<Project>;
  updateProject(id: number, project: Partial<InsertProject>): Promise<Project | undefined>;
  deleteProject(id: number): Promise<boolean>;
  
  // Skills
  getSkills(): Promise<Skill[]>;
  getSkill(id: number): Promise<Skill | undefined>;
  createSkill(skill: InsertSkill): Promise<Skill>;
  updateSkill(id: number, skill: Partial<InsertSkill>): Promise<Skill | undefined>;
  deleteSkill(id: number): Promise<boolean>;
  
  // Experiences
  getExperiences(): Promise<Experience[]>;
  getExperience(id: number): Promise<Experience | undefined>;
  createExperience(experience: InsertExperience): Promise<Experience>;
  updateExperience(id: number, experience: Partial<InsertExperience>): Promise<Experience | undefined>;
  deleteExperience(id: number): Promise<boolean>;
  
  // About Me
  getAboutMeEntries(): Promise<AboutMe[]>;
  getAboutMeEntry(id: number): Promise<AboutMe | undefined>;
  createAboutMeEntry(aboutMe: InsertAboutMe): Promise<AboutMe>;
  updateAboutMeEntry(id: number, aboutMe: Partial<InsertAboutMe>): Promise<AboutMe | undefined>;
  deleteAboutMeEntry(id: number): Promise<boolean>;
  
  // Contact Info
  getContactInfo(): Promise<ContactInfo | undefined>;
  createOrUpdateContactInfo(contactInfo: InsertContactInfo): Promise<ContactInfo>;
  
  // Chatbot Responses
  getChatbotResponses(): Promise<ChatbotResponse[]>;
  getChatbotResponse(id: number): Promise<ChatbotResponse | undefined>;
  getChatbotResponseByKeyword(keyword: string): Promise<ChatbotResponse | undefined>;
  createChatbotResponse(response: InsertChatbotResponse): Promise<ChatbotResponse>;
  updateChatbotResponse(id: number, response: Partial<InsertChatbotResponse>): Promise<ChatbotResponse | undefined>;
  deleteChatbotResponse(id: number): Promise<boolean>;
  
  // Session store
  sessionStore: session.SessionStore;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private projects: Map<number, Project>;
  private skills: Map<number, Skill>;
  private experiences: Map<number, Experience>;
  private aboutMeEntries: Map<number, AboutMe>;
  private contactInfoEntry: ContactInfo | undefined;
  private chatbotResponses: Map<number, ChatbotResponse>;
  
  // Counters for IDs
  private userIdCounter: number;
  private projectIdCounter: number;
  private skillIdCounter: number;
  private experienceIdCounter: number;
  private aboutMeIdCounter: number;
  private contactInfoIdCounter: number;
  private chatbotResponseIdCounter: number;
  
  sessionStore: session.SessionStore;

  constructor() {
    this.users = new Map();
    this.projects = new Map();
    this.skills = new Map();
    this.experiences = new Map();
    this.aboutMeEntries = new Map();
    this.chatbotResponses = new Map();
    
    this.userIdCounter = 1;
    this.projectIdCounter = 1;
    this.skillIdCounter = 1;
    this.experienceIdCounter = 1;
    this.aboutMeIdCounter = 1;
    this.contactInfoIdCounter = 1;
    this.chatbotResponseIdCounter = 1;
    
    this.sessionStore = new MemoryStore({
      checkPeriod: 86400000 // 24 hours
    });
    
    // Initialize with default admin user
    this.createUser({
      username: "KisanrAI2703",
      password: "$Creation_0812"
    });
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userIdCounter++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Project methods
  async getProjects(): Promise<Project[]> {
    return Array.from(this.projects.values());
  }
  
  async getProject(id: number): Promise<Project | undefined> {
    return this.projects.get(id);
  }
  
  async createProject(project: InsertProject): Promise<Project> {
    const id = this.projectIdCounter++;
    const now = new Date();
    const newProject: Project = { 
      ...project, 
      id, 
      createdAt: now, 
      updatedAt: now 
    };
    this.projects.set(id, newProject);
    return newProject;
  }
  
  async updateProject(id: number, project: Partial<InsertProject>): Promise<Project | undefined> {
    const existingProject = this.projects.get(id);
    if (!existingProject) return undefined;
    
    const updatedProject: Project = { 
      ...existingProject, 
      ...project, 
      updatedAt: new Date() 
    };
    this.projects.set(id, updatedProject);
    return updatedProject;
  }
  
  async deleteProject(id: number): Promise<boolean> {
    return this.projects.delete(id);
  }
  
  // Skill methods
  async getSkills(): Promise<Skill[]> {
    return Array.from(this.skills.values());
  }
  
  async getSkill(id: number): Promise<Skill | undefined> {
    return this.skills.get(id);
  }
  
  async createSkill(skill: InsertSkill): Promise<Skill> {
    const id = this.skillIdCounter++;
    const now = new Date();
    const newSkill: Skill = { 
      ...skill, 
      id, 
      createdAt: now, 
      updatedAt: now 
    };
    this.skills.set(id, newSkill);
    return newSkill;
  }
  
  async updateSkill(id: number, skill: Partial<InsertSkill>): Promise<Skill | undefined> {
    const existingSkill = this.skills.get(id);
    if (!existingSkill) return undefined;
    
    const updatedSkill: Skill = { 
      ...existingSkill, 
      ...skill, 
      updatedAt: new Date() 
    };
    this.skills.set(id, updatedSkill);
    return updatedSkill;
  }
  
  async deleteSkill(id: number): Promise<boolean> {
    return this.skills.delete(id);
  }
  
  // Experience methods
  async getExperiences(): Promise<Experience[]> {
    return Array.from(this.experiences.values())
      .sort((a, b) => a.order - b.order);
  }
  
  async getExperience(id: number): Promise<Experience | undefined> {
    return this.experiences.get(id);
  }
  
  async createExperience(experience: InsertExperience): Promise<Experience> {
    const id = this.experienceIdCounter++;
    const now = new Date();
    const newExperience: Experience = { 
      ...experience, 
      id, 
      createdAt: now, 
      updatedAt: now 
    };
    this.experiences.set(id, newExperience);
    return newExperience;
  }
  
  async updateExperience(id: number, experience: Partial<InsertExperience>): Promise<Experience | undefined> {
    const existingExperience = this.experiences.get(id);
    if (!existingExperience) return undefined;
    
    const updatedExperience: Experience = { 
      ...existingExperience, 
      ...experience, 
      updatedAt: new Date() 
    };
    this.experiences.set(id, updatedExperience);
    return updatedExperience;
  }
  
  async deleteExperience(id: number): Promise<boolean> {
    return this.experiences.delete(id);
  }
  
  // About Me methods
  async getAboutMeEntries(): Promise<AboutMe[]> {
    return Array.from(this.aboutMeEntries.values())
      .sort((a, b) => a.order - b.order);
  }
  
  async getAboutMeEntry(id: number): Promise<AboutMe | undefined> {
    return this.aboutMeEntries.get(id);
  }
  
  async createAboutMeEntry(aboutMe: InsertAboutMe): Promise<AboutMe> {
    const id = this.aboutMeIdCounter++;
    const now = new Date();
    const newAboutMe: AboutMe = { 
      ...aboutMe, 
      id, 
      createdAt: now, 
      updatedAt: now 
    };
    this.aboutMeEntries.set(id, newAboutMe);
    return newAboutMe;
  }
  
  async updateAboutMeEntry(id: number, aboutMe: Partial<InsertAboutMe>): Promise<AboutMe | undefined> {
    const existingAboutMe = this.aboutMeEntries.get(id);
    if (!existingAboutMe) return undefined;
    
    const updatedAboutMe: AboutMe = { 
      ...existingAboutMe, 
      ...aboutMe, 
      updatedAt: new Date() 
    };
    this.aboutMeEntries.set(id, updatedAboutMe);
    return updatedAboutMe;
  }
  
  async deleteAboutMeEntry(id: number): Promise<boolean> {
    return this.aboutMeEntries.delete(id);
  }
  
  // Contact Info methods
  async getContactInfo(): Promise<ContactInfo | undefined> {
    return this.contactInfoEntry;
  }
  
  async createOrUpdateContactInfo(contactInfo: InsertContactInfo): Promise<ContactInfo> {
    const now = new Date();
    if (this.contactInfoEntry) {
      // Update existing
      this.contactInfoEntry = {
        ...this.contactInfoEntry,
        ...contactInfo,
        updatedAt: now
      };
    } else {
      // Create new
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
  async getChatbotResponses(): Promise<ChatbotResponse[]> {
    return Array.from(this.chatbotResponses.values());
  }
  
  async getChatbotResponse(id: number): Promise<ChatbotResponse | undefined> {
    return this.chatbotResponses.get(id);
  }
  
  async getChatbotResponseByKeyword(keyword: string): Promise<ChatbotResponse | undefined> {
    for (const response of this.chatbotResponses.values()) {
      if (response.keyword.toLowerCase() === keyword.toLowerCase()) {
        return response;
      }
    }
    return undefined;
  }
  
  async createChatbotResponse(response: InsertChatbotResponse): Promise<ChatbotResponse> {
    const id = this.chatbotResponseIdCounter++;
    const now = new Date();
    const newResponse: ChatbotResponse = { 
      ...response, 
      id, 
      createdAt: now, 
      updatedAt: now 
    };
    this.chatbotResponses.set(id, newResponse);
    return newResponse;
  }
  
  async updateChatbotResponse(id: number, response: Partial<InsertChatbotResponse>): Promise<ChatbotResponse | undefined> {
    const existingResponse = this.chatbotResponses.get(id);
    if (!existingResponse) return undefined;
    
    const updatedResponse: ChatbotResponse = { 
      ...existingResponse, 
      ...response, 
      updatedAt: new Date() 
    };
    this.chatbotResponses.set(id, updatedResponse);
    return updatedResponse;
  }
  
  async deleteChatbotResponse(id: number): Promise<boolean> {
    return this.chatbotResponses.delete(id);
  }
}

export const storage = new MemStorage();
