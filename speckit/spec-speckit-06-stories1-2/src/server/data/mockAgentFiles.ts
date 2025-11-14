// src/server/data/mockAgentFiles.ts
import { AgentFile } from '@/types/AgentFile';

export const initialMockAgentFiles: AgentFile[] = [
  {
    id: '1',
    name: 'code-reviewer.md',
    description: 'An agent that reviews code for best practices, potential bugs, and style issues',
    content: `# Code Reviewer Agent

## Purpose
This agent specializes in reviewing code for best practices, identifying potential bugs, and ensuring consistent style.

## Usage
Invoke this agent when you want comprehensive code review feedback on your pull requests or commits.

## Capabilities
- Static analysis
- Style checking
- Security vulnerability detection
- Performance optimization suggestions

## Example
\`\`\`typescript
// The agent will analyze code like this and provide feedback
function getUserData(userId: string) {
  return fetch('/api/users/' + userId).then(r => r.json());
}
\`\`\`

## Best Practices
- Run this agent before submitting pull requests
- Address critical issues immediately
- Consider suggestions for improvements
- Use in CI/CD pipeline for automated checks`,
    datePosted: '2025-11-10',
    author: 'Anonymous',
  },
  {
    id: '2',
    name: 'test-generator.md',
    description: 'Generates comprehensive unit tests for your code',
    content: `# Test Generator Agent

## Purpose
Automatically generates unit tests with high coverage for your codebase.

## Usage
Point this agent at your source files to generate corresponding test files.

## Capabilities
- Unit test generation
- Edge case identification
- Mock data creation
- Test coverage analysis

## Example
\`\`\`typescript
// For this function:
function addNumbers(a: number, b: number): number {
  return a + b;
}

// The agent generates:
describe('addNumbers', () => {
  it('should add two positive numbers', () => {
    expect(addNumbers(2, 3)).toBe(5);
  });

  it('should handle negative numbers', () => {
    expect(addNumbers(-2, 3)).toBe(1);
  });
});
\`\`\`

## Best Practices
- Review generated tests before committing
- Customize tests for domain-specific logic
- Maintain test coverage above 80%`,
    datePosted: '2025-11-09',
    author: 'Anonymous',
  },
  {
    id: '3',
    name: 'documentation-writer.md',
    description: 'Creates clear and comprehensive documentation for your code',
    content: `# Documentation Writer Agent

## Purpose
Generates clear, comprehensive documentation for functions, classes, and modules.

## Usage
Use this agent to automatically document your codebase with JSDoc, docstrings, or markdown files.

## Capabilities
- Function documentation
- API documentation
- README generation
- Code comment suggestions

## Example
\`\`\`typescript
/**
 * Calculates the total price including tax
 * @param price - The base price of the item
 * @param taxRate - The tax rate as a decimal (e.g., 0.08 for 8%)
 * @returns The total price including tax
 * @example
 * calculateTotal(100, 0.08) // returns 108
 */
function calculateTotal(price: number, taxRate: number): number {
  return price * (1 + taxRate);
}
\`\`\`

## Best Practices
- Keep documentation up-to-date with code changes
- Include examples for complex functions
- Document edge cases and assumptions`,
    datePosted: '2025-11-08',
    author: 'Anonymous',
  },
  {
    id: '4',
    name: 'refactoring-assistant.md',
    description: 'Suggests and implements code refactorings to improve maintainability',
    content: `# Refactoring Assistant Agent

## Purpose
Identifies code smells and suggests refactorings to improve code quality and maintainability.

## Usage
Run this agent on legacy code or complex functions that need simplification.

## Capabilities
- Code smell detection
- Extract method refactoring
- Simplify conditional logic
- Remove duplication

## Common Refactorings

### Extract Method
\`\`\`typescript
// Before
function processOrder(order) {
  // validate order
  if (!order.items || order.items.length === 0) {
    throw new Error('Invalid order');
  }

  // calculate total
  let total = 0;
  for (const item of order.items) {
    total += item.price * item.quantity;
  }

  // apply discount
  if (order.discountCode) {
    total *= 0.9;
  }

  return total;
}

// After
function processOrder(order) {
  validateOrder(order);
  const total = calculateTotal(order.items);
  return applyDiscount(total, order.discountCode);
}
\`\`\`

## Best Practices
- Refactor in small increments
- Run tests after each refactoring
- Commit working code frequently`,
    datePosted: '2025-11-07',
    author: 'Anonymous',
  },
  {
    id: '5',
    name: 'bug-finder.md',
    description: 'Analyzes code to find potential bugs and edge cases',
    content: `# Bug Finder Agent

## Purpose
Proactively identifies potential bugs, edge cases, and error-prone code patterns.

## Usage
Use this agent for pre-deployment checks or when debugging difficult issues.

## Capabilities
- Null pointer detection
- Off-by-one errors
- Race condition identification
- Type mismatch detection

## Common Issues Detected

### Null/Undefined Access
\`\`\`typescript
// Potential bug
function getUserName(user) {
  return user.profile.name; // What if profile is undefined?
}

// Fixed
function getUserName(user) {
  return user?.profile?.name ?? 'Anonymous';
}
\`\`\`

### Off-by-One Errors
\`\`\`typescript
// Potential bug
for (let i = 0; i <= array.length; i++) { // <= instead of <
  console.log(array[i]);
}

// Fixed
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
\`\`\`

## Best Practices
- Run regularly during development
- Pay attention to edge case warnings
- Add defensive programming checks
- Write tests for identified issues`,
    datePosted: '2025-11-06',
    author: 'Anonymous',
  },
  {
    id: '6',
    name: 'api-designer.md',
    description: 'Designs RESTful and GraphQL APIs following best practices',
    content: `# API Designer Agent

## Purpose
Designs well-structured APIs following REST and GraphQL best practices.

## Usage
Use this agent when planning new API endpoints or restructuring existing APIs.

## Capabilities
- RESTful API design
- GraphQL schema design
- OpenAPI/Swagger specification generation
- API versioning strategies

## Example REST Design
\`\`\`
GET    /api/v1/users          # List users
GET    /api/v1/users/:id      # Get user
POST   /api/v1/users          # Create user
PUT    /api/v1/users/:id      # Update user
DELETE /api/v1/users/:id      # Delete user
\`\`\``,
    datePosted: '2025-11-05',
    author: 'Anonymous',
  },
  {
    id: '7',
    name: 'performance-optimizer.md',
    description: 'Identifies and fixes performance bottlenecks in your code',
    content: `# Performance Optimizer Agent

## Purpose
Identifies performance bottlenecks and suggests optimizations.

## Capabilities
- Time complexity analysis
- Memory usage optimization
- Database query optimization
- Caching strategies`,
    datePosted: '2025-11-04',
    author: 'Anonymous',
  },
  {
    id: '8',
    name: 'security-auditor.md',
    description: 'Audits code for security vulnerabilities and best practices',
    content: `# Security Auditor Agent

## Purpose
Performs security audits to identify vulnerabilities.

## Capabilities
- OWASP Top 10 checks
- SQL injection detection
- XSS vulnerability detection
- Authentication/authorization review`,
    datePosted: '2025-11-03',
    author: 'Anonymous',
  },
  {
    id: '9',
    name: 'ui-designer.md',
    description: 'Generates UI component designs and implementations',
    content: `# UI Designer Agent

## Purpose
Designs and implements user interface components.

## Capabilities
- Component library creation
- Responsive design
- Accessibility compliance
- Design system implementation`,
    datePosted: '2025-11-02',
    author: 'Anonymous',
  },
  {
    id: '10',
    name: 'database-architect.md',
    description: 'Designs database schemas and optimizes queries',
    content: `# Database Architect Agent

## Purpose
Designs efficient database schemas and optimizes queries.

## Capabilities
- Schema design
- Index optimization
- Query performance tuning
- Migration planning`,
    datePosted: '2025-11-01',
    author: 'Anonymous',
  },
  {
    id: '11',
    name: 'devops-helper.md',
    description: 'Assists with CI/CD, deployments, and infrastructure',
    content: `# DevOps Helper Agent

## Purpose
Assists with DevOps tasks and infrastructure management.

## Capabilities
- CI/CD pipeline setup
- Docker containerization
- Kubernetes orchestration
- Infrastructure as Code`,
    datePosted: '2025-10-31',
    author: 'Anonymous',
  },
  {
    id: '12',
    name: 'accessibility-checker.md',
    description: 'Ensures your application meets accessibility standards',
    content: `# Accessibility Checker Agent

## Purpose
Ensures applications meet WCAG accessibility standards.

## Capabilities
- ARIA label verification
- Keyboard navigation testing
- Screen reader compatibility
- Color contrast checking`,
    datePosted: '2025-10-30',
    author: 'Anonymous',
  },
  {
    id: '13',
    name: 'error-handler.md',
    description: 'Implements comprehensive error handling strategies',
    content: `# Error Handler Agent

## Purpose
Implements robust error handling across your application.

## Capabilities
- Try-catch implementation
- Error boundary creation
- Logging strategies
- User-friendly error messages`,
    datePosted: '2025-10-29',
    author: 'Anonymous',
  },
  {
    id: '14',
    name: 'mobile-adapter.md',
    description: 'Adapts web applications for mobile platforms',
    content: `# Mobile Adapter Agent

## Purpose
Optimizes applications for mobile platforms.

## Capabilities
- Responsive design implementation
- Touch gesture support
- Mobile performance optimization
- Progressive Web App features`,
    datePosted: '2025-10-28',
    author: 'Anonymous',
  },
  {
    id: '15',
    name: 'analytics-integrator.md',
    description: 'Integrates analytics and tracking into applications',
    content: `# Analytics Integrator Agent

## Purpose
Integrates analytics and event tracking.

## Capabilities
- Event tracking setup
- Conversion funnel analysis
- A/B testing implementation
- Privacy-compliant tracking`,
    datePosted: '2025-10-27',
    author: 'Anonymous',
  },
];

// In-memory store for runtime additions
let agentFilesStore: AgentFile[] = [...initialMockAgentFiles];

export function getAgentFiles(): AgentFile[] {
  return agentFilesStore;
}

export function getAgentFileById(id: string): AgentFile | undefined {
  return agentFilesStore.find(file => file.id === id);
}

export function addAgentFile(file: AgentFile): void {
  agentFilesStore.push(file);
}

export function resetAgentFiles(): void {
  agentFilesStore = [...initialMockAgentFiles];
}
