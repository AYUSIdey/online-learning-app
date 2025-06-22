// type User = {
//   name: string;
//   email: string;
//   image?: string;
//   accountId: string;
// };

enum Subject {
  // maths = "maths",
  // language = "language",
  // science = "science",
  // history = "history",
  // coding = "coding",
  // geography = "geography",
  // economics = "economics",
  // finance = "finance",
  // business = "business",

  AnalogAndDigitalElectronics = "Analog and Digital Electronics",
  DataStructureAndAlgorithm = "Data Structure and Algorithm",
  ComputerOrganisation = "Computer Organisation",
  DifferentialCalculus = "Differential Calculus",
  EconomicsForEngineers = "Economics for Engineers",
  DiscreteMathematics = "Discrete Mathematics",
  ComputerArchitecture = "Computer Architecture",
  AutomataTheory = "Automata Theory",
  EnvironmentalScience = "Environmental Science",
  Biology = "Biology",
  SoftwareEngineering = "Software Engineering",
  CompilerDesign = "Compiler Design",
  IndustrialManagement = "Industrial Management",
  ObjectOrientedProgramming = "Object Oriented Programming",
  ArtificialIntelligence = "Artificial Intelligence",
  ComputerGraphics = "Computer Graphics",
  TheoryOfComputation = "Theory of Computation",
  DatabaseManagementSystem = "Database Management System",
  ComputerNetworks = "Computer Networks",
  ImageProcessing = "Image Processing",
  AdvanceAlgorithm = "Advance Algorithm",
  DistributedDatabaseManagementSystem = "Distributed Database Management System",
  DataWarehousingAndMining = "Data Warehousing and Mining",
  PatternRecognition = "Pattern Recognition",
  HumanComputerInteraction = "Human Computer Interaction",
  QuantumComputing = "Quantum Computing",
  CloudComputing = "Cloud Computing",
  MachineLearning = "Machine Learning",
  DigitalSignalProcessing = "Digital Signal Processing",
  MultiAgentIntelligentSystem = "Multi-agent Intelligent System",
  NeuralNetworksAndDeepLearning = "Neural Networks and Deep Learning",
  SoftComputing = "Soft Computing",
  CyberSecurity = "Cyber Security",
  SignalAndNetworks = "Signal and Networks",
  CryptographyAndNetworkSecurity = "Cryptography and Network Security",
  SpeechAndNaturalLanguageProcessing = "Speech and Natural Language Processing",
  InternetOfThings = "Internet of Things",
  BigDataAnalysis = "Big Data Analysis",
  MobileComputing = "Mobile Computing",
  Robotics = "Robotics",
  SoftSkillsAndInterpersonalCommunication = "Soft Skills and Interpersonal Communication",
  EcommerceAndERP = "Ecommerce and ERP",
  MicroElectronicsAndVLSIDesign = "Micro-electronics and VLSI Design",
  EconomicPolicieInIndia = "Economic Policie in India",
  ProgrammingLanguageC = "Programming Language C",
  ProgrammingLanguagePython = "Programming Language Python",
  ProgrammingLanguageCpp = "Programming Language C++",
  ProgrammingLanguageJava = "Programming Language Java",
}

type Companion = Models.DocumentList<Models.Document> & {
  $id: string;
  name: string;
  subject: Subject;
  topic: string;
  duration: number;
  bookmarked: boolean;
};

interface CreateCompanion {
  name: string;
  subject: string;
  topic: string;
  voice: string;
  style: string;
  duration: number;
}

interface GetAllCompanions {
  limit?: number;
  page?: number;
  subject?: string | string[];
  topic?: string | string[];
}

interface BuildClient {
  key?: string;
  sessionToken?: string;
}

interface CreateUser {
  email: string;
  name: string;
  image?: string;
  accountId: string;
}

interface SearchParams {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

interface Avatar {
  userName: string;
  width: number;
  height: number;
  className?: string;
}


interface SavedMessage {
  role: "user" | "system" | "assistant";
  content: string;
}

interface CompanionComponentProps {
  companionId: string;
  subject: string;
  topic: string;
  name: string;
  userName: string;
  userImage: string;
  voice: string;
  style: string;
}