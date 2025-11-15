Create a specification document for the feature we just planned.

## Structure

- **Overview**: Brief description of the feature and its purpose
- **Requirements**: Clear, numbered list of functional requirements
- **Technical Specifications**:
  - API endpoints to be used (reference openapi.json)
  - Component structure and file organization
  - State management approach (TanStack Query patterns)
  - Key dependencies and hooks (useApiInstance, etc.)
- **Implementation Notes**:
  - Follow existing patterns from similar pages when specified
  - Use components consistently
  - Apply proper TypeScript typing with OpenAPI schema types
- **Success Criteria**: Specific, testable acceptance criteria for manual testing

## Guidelines

- Generate a concise spec.md highlighting only core requirements, key design points.
- Avoid extended narratives
- Use the codebase conventions from CLAUDE.md
- Reference existing code patterns where applicable
- Make it actionable - a developer should be able to implement from this spec alone
- When creating a flow, use mermaid syntax to describe the flow.

Save the file as `specs/spec-{YYYYMMDD}-{feature}.md` for future reference.
