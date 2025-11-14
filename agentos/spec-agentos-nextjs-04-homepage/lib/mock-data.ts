/**
 * Mock data for Agent Hub Phase 1 MVP
 *
 * Usage: import { Agent, mockAgents } from '@/lib/mock-data'
 *
 * In Phase 2, replace imports with database queries.
 * The Agent interface will be reused for database schema definition.
 */

/**
 * Agent interface for Phase 1 MVP with mock data.
 *
 * This interface defines the structure for Claude Code agent files
 * in the Agent Hub platform. All fields are required to ensure
 * type safety and consistent data structure across the application.
 *
 * Phase 2 Migration: This interface will be reused for database schema
 * definition when transitioning from mock data to a real database.
 */
export interface Agent {
  /** Unique identifier for each agent */
  id: string;

  /** Agent file name - clear, descriptive name for the agent */
  name: string;

  /** Brief description of the agent's purpose and functionality */
  description: string;

  /** Full markdown content of the agent file */
  content: string;

  /** Author name - realistic professional name */
  author: string;

  /** Creation date in ISO 8601 format (e.g., "2025-10-15T10:30:00Z") */
  createdAt: string;

  /** Array of 2-4 category tags in lowercase kebab-case */
  tags: string[];

  /** Simulated view count - range from 45 to 850 */
  viewCount: number;

  /** Simulated copy count - range from 5 to 120 */
  copyCount: number;
}

/**
 * Mock agents array for Phase 1 development and testing.
 *
 * Contains 12 diverse agent objects across 6 primary categories with
 * realistic metadata, diverse authors, and markdown placeholder content.
 */
export const mockAgents: Agent[] = [
  {
    id: "agent-001",
    name: "Python Code Review Assistant",
    description: "Comprehensive code review agent that analyzes Python code for best practices, performance issues, and potential bugs.",
    author: "Sarah Chen",
    createdAt: "2025-08-15T10:30:00Z",
    tags: ["code-review", "python", "backend"],
    viewCount: 782,
    copyCount: 95,
    content: `## Python Code Review Assistant

This agent performs thorough code reviews for Python projects, focusing on code quality and maintainability.

### Features

- **Style Analysis**: Checks adherence to PEP 8 standards
- **Performance Review**: Identifies potential bottlenecks
- **Security Scanning**: Detects common security vulnerabilities
- **Best Practices**: Suggests improvements based on Python idioms

### Usage Instructions

Simply provide your Python code, and the agent will analyze it comprehensively:

\`\`\`python
def example_function(data):
    # Your code here
    return processed_data
\`\`\`

The agent will return detailed feedback with specific line numbers and actionable recommendations for improvement.`
  },
  {
    id: "agent-002",
    name: "React Component Reviewer",
    description: "Specialized code review agent for React components, focusing on hooks, performance, and accessibility.",
    author: "Marcus Rodriguez",
    createdAt: "2025-09-22T14:45:00Z",
    tags: ["code-review", "react", "frontend", "javascript"],
    viewCount: 645,
    copyCount: 78,
    content: `## React Component Reviewer

Analyze your React components for optimal performance, accessibility, and modern best practices.

### What This Agent Reviews

- **Hooks Usage**: Proper implementation of useState, useEffect, and custom hooks
- **Performance**: Identifies unnecessary re-renders and optimization opportunities
- **Accessibility**: Ensures ARIA attributes and semantic HTML
- **Component Structure**: Recommends better organization and composition

### Example Review Process

\`\`\`jsx
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  // Component code here
}
\`\`\`

The agent provides inline suggestions with clear explanations and links to relevant documentation.`
  },
  {
    id: "agent-003",
    name: "TypeScript Code Quality Checker",
    description: "Examines TypeScript code for type safety, proper typing patterns, and modern TypeScript best practices.",
    author: "Priya Sharma",
    createdAt: "2025-10-05T09:15:00Z",
    tags: ["code-review", "typescript", "frontend"],
    viewCount: 523,
    copyCount: 67,
    content: `## TypeScript Code Quality Checker

Ensure your TypeScript code leverages the full power of static typing and modern language features.

### Review Focus Areas

- **Type Safety**: Eliminates 'any' types and improves type inference
- **Generic Usage**: Proper implementation of generics for reusable code
- **Interface Design**: Clean and maintainable type definitions
- **Advanced Features**: Utilizes mapped types, conditional types, and utility types

### Analysis Output

\`\`\`typescript
interface DataProcessor<T> {
  process(data: T): Promise<T>;
}
\`\`\`

Detailed feedback on type definitions, with suggestions for improving type safety and reducing complexity.`
  },
  {
    id: "agent-004",
    name: "API Documentation Generator",
    description: "Automatically generates comprehensive API documentation from your code, including endpoints, parameters, and examples.",
    author: "James Mitchell",
    createdAt: "2025-08-28T16:20:00Z",
    tags: ["documentation", "api", "backend"],
    viewCount: 698,
    copyCount: 89,
    content: `## API Documentation Generator

Transform your API code into beautiful, comprehensive documentation automatically.

### Documentation Coverage

- **Endpoint Details**: HTTP methods, paths, and descriptions
- **Request/Response**: Parameter types, body schemas, and response codes
- **Authentication**: Security requirements and token handling
- **Code Examples**: Generated examples in multiple languages

### Supported Formats

\`\`\`javascript
// REST API endpoint
app.get('/api/users/:id', async (req, res) => {
  // Handler code
});
\`\`\`

Outputs documentation in **Markdown**, **OpenAPI 3.0**, or **HTML** formats with customizable templates.`
  },
  {
    id: "agent-005",
    name: "Component Documentation Writer",
    description: "Creates detailed documentation for UI components, including props, usage examples, and visual guidelines.",
    author: "Elena Kowalski",
    createdAt: "2025-09-10T11:30:00Z",
    tags: ["documentation", "react", "frontend"],
    viewCount: 456,
    copyCount: 58,
    content: `## Component Documentation Writer

Generate professional documentation for your React component library with minimal effort.

### Documentation Includes

- **Component API**: Props, types, and default values
- **Usage Examples**: Multiple use cases with code snippets
- **Visual Samples**: Rendered examples with different prop combinations
- **Accessibility Notes**: ARIA implementation and keyboard navigation

### Example Documentation

\`\`\`tsx
interface ButtonProps {
  variant: 'primary' | 'secondary';
  onClick: () => void;
}
\`\`\`

Creates comprehensive documentation that's ready for Storybook or custom documentation sites.`
  },
  {
    id: "agent-006",
    name: "Jest Test Generator",
    description: "Creates comprehensive Jest test suites for JavaScript and TypeScript functions, including edge cases and mocks.",
    author: "Yuki Tanaka",
    createdAt: "2025-08-20T13:45:00Z",
    tags: ["testing", "javascript", "automation"],
    viewCount: 734,
    copyCount: 92,
    content: `## Jest Test Generator

Automatically generate thorough Jest test suites with excellent coverage and edge case handling.

### Test Generation Features

- **Unit Tests**: Individual function and method testing
- **Edge Cases**: Boundary conditions and error scenarios
- **Mock Generation**: Automatic mocking for dependencies
- **Assertions**: Comprehensive expect statements

### Generated Test Structure

\`\`\`javascript
describe('calculateTotal', () => {
  it('should return correct sum', () => {
    // Generated test code
  });
});
\`\`\`

Produces well-organized test files following Jest best practices with high code coverage.`
  },
  {
    id: "agent-007",
    name: "React Testing Library Test Writer",
    description: "Generates user-centric tests for React components using Testing Library best practices and accessibility queries.",
    author: "Amara Okafor",
    createdAt: "2025-09-18T10:00:00Z",
    tags: ["testing", "react", "frontend", "accessibility"],
    viewCount: 587,
    copyCount: 71,
    content: `## React Testing Library Test Writer

Create tests that focus on user behavior and component accessibility using Testing Library principles.

### Testing Approach

- **User-Centric**: Tests interact with components as users would
- **Accessibility First**: Uses semantic queries (getByRole, getByLabelText)
- **Integration Testing**: Tests component behavior, not implementation
- **Async Handling**: Proper waitFor and async utilities

### Sample Test Output

\`\`\`javascript
test('user can submit form', async () => {
  render(<ContactForm />);
  // Test implementation
});
\`\`\`

Generates maintainable tests that remain stable through refactoring and emphasize accessibility.`
  },
  {
    id: "agent-008",
    name: "Python Bug Detective",
    description: "Identifies and suggests fixes for common Python bugs, including logic errors, type issues, and runtime exceptions.",
    author: "Rafael Santos",
    createdAt: "2025-08-25T15:30:00Z",
    tags: ["debugging", "python", "backend"],
    viewCount: 621,
    copyCount: 76,
    content: `## Python Bug Detective

Specialized agent for detecting and resolving Python bugs with detailed explanations and fix suggestions.

### Bug Detection Categories

- **Logic Errors**: Incorrect algorithms or control flow
- **Type Issues**: Type mismatches and incorrect type usage
- **Runtime Exceptions**: IndexError, KeyError, AttributeError, etc.
- **Resource Leaks**: File handles, connections, and memory issues

### Debugging Process

\`\`\`python
def process_items(items):
    for i in range(len(items) + 1):  # Bug here
        print(items[i])
\`\`\`

Identifies the issue, explains why it's problematic, and provides corrected code with explanations.`
  },
  {
    id: "agent-009",
    name: "JavaScript Error Resolver",
    description: "Diagnoses and fixes JavaScript errors, including async issues, promise chains, and common runtime errors.",
    author: "Sarah Chen",
    createdAt: "2025-10-12T08:45:00Z",
    tags: ["debugging", "javascript", "frontend"],
    viewCount: 412,
    copyCount: 52,
    content: `## JavaScript Error Resolver

Quickly identify and resolve JavaScript errors with clear explanations and working solutions.

### Error Categories Handled

- **Async/Await Issues**: Promise handling and race conditions
- **Scope Problems**: Closures and variable hoisting
- **DOM Errors**: Element selection and manipulation issues
- **Type Coercion**: Unexpected type conversions and comparisons

### Error Resolution Example

\`\`\`javascript
async function fetchData() {
  const data = await fetch(url);
  return data.json;  // Missing parentheses
}
\`\`\`

Provides step-by-step debugging guidance with corrected code and best practice recommendations.`
  },
  {
    id: "agent-010",
    name: "Code Modernization Agent",
    description: "Refactors legacy code to modern standards, updating syntax, patterns, and dependencies to current best practices.",
    author: "Marcus Rodriguez",
    createdAt: "2025-09-05T12:00:00Z",
    tags: ["refactoring", "javascript", "typescript"],
    viewCount: 389,
    copyCount: 48,
    content: `## Code Modernization Agent

Transform legacy JavaScript/TypeScript code into modern, maintainable code following current standards.

### Modernization Tasks

- **ES6+ Syntax**: Convert to arrow functions, destructuring, and modern operators
- **Promise Migration**: Update callbacks to async/await
- **Module System**: Convert CommonJS to ES modules
- **TypeScript Adoption**: Add proper type annotations

### Refactoring Example

\`\`\`javascript
// Legacy code with var and callbacks
var users = [];
function getUsers(callback) {
  // Old pattern
}
\`\`\`

Converts to modern patterns with detailed explanations of changes and benefits.`
  },
  {
    id: "agent-011",
    name: "React Component Optimizer",
    description: "Refactors React components for better performance, including memoization, code splitting, and hook optimization.",
    author: "Priya Sharma",
    createdAt: "2025-10-20T14:30:00Z",
    tags: ["refactoring", "react", "frontend", "performance"],
    viewCount: 298,
    copyCount: 38,
    content: `## React Component Optimizer

Optimize React components for maximum performance and better user experience.

### Optimization Techniques

- **Memoization**: Strategic use of useMemo and useCallback
- **Code Splitting**: Dynamic imports and lazy loading
- **Re-render Prevention**: React.memo and proper dependency arrays
- **Bundle Size**: Reduce unnecessary imports and optimize dependencies

### Optimization Process

\`\`\`jsx
function ExpensiveComponent({ data, onUpdate }) {
  // Unoptimized component
}
\`\`\`

Analyzes performance bottlenecks and applies targeted optimizations with measurable impact.`
  },
  {
    id: "agent-012",
    name: "REST API Integration Helper",
    description: "Generates client code for consuming REST APIs, including type-safe fetch functions, error handling, and request/response types.",
    author: "James Mitchell",
    createdAt: "2025-09-28T16:15:00Z",
    tags: ["api-integration", "typescript", "backend"],
    viewCount: 534,
    copyCount: 65,
    content: `## REST API Integration Helper

Streamline REST API integration with generated type-safe client code and comprehensive error handling.

### Integration Features

- **Type Definitions**: Automatic TypeScript types from API schemas
- **Request Builders**: Type-safe functions for all endpoints
- **Error Handling**: Standardized error responses and retry logic
- **Authentication**: Built-in token management and refresh

### Generated Client Code

\`\`\`typescript
interface User {
  id: string;
  name: string;
}

async function getUser(id: string): Promise<User> {
  // Generated implementation
}
\`\`\`

Creates production-ready API client code with full TypeScript support and testing utilities.`
  },
  {
    id: "agent-013",
    name: "GraphQL Client Generator",
    description: "Creates type-safe GraphQL client code with queries, mutations, and automatic type generation from schema.",
    author: "Elena Kowalski",
    createdAt: "2025-10-08T11:20:00Z",
    tags: ["api-integration", "graphql", "typescript", "frontend"],
    viewCount: 267,
    copyCount: 34,
    content: `## GraphQL Client Generator

Generate complete GraphQL client implementation with full type safety and optimal query structure.

### Client Generation Features

- **Schema Analysis**: Parses GraphQL schema for type generation
- **Query Builder**: Creates optimized queries and mutations
- **Fragment Management**: Reusable fragments for common fields
- **Cache Integration**: Apollo or urql cache configuration

### Generated Query Example

\`\`\`typescript
const GET_USER = gql\`
  query GetUser($id: ID!) {
    user(id: $id) {
      id
      name
    }
  }
\`;
\`\`\`

Produces type-safe GraphQL operations with React hooks and automatic cache updates.`
  }
];
