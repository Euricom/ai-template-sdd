# This Dockerfile creates a containerized environment for running Claude Code
# It's designed to work on Windows systems by providing a consistent Linux environment
# The image uses Node.js as the base and installs the Claude Code CLI tool
# This allows you to run Claude Code on your Windows machine without Linux Subsystem

FROM node:23-slim

# Create a none-root user to run the code
RUN useradd -m codeuser

# Install claude-code globally (as root)
RUN npm install -g @anthropic-ai/claude-code

# Set working directory
WORKDIR /app

# Give the none-root user ownership of the app folder
RUN chown -R codeuser:codeuser /app

# Switch to the none-root user
USER codeuser

# Default command to run when the container starts
CMD ["claude"]
