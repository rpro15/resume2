# Data Model

## Entities

### Hero Section
- **Fields**:
  - name (string, required): Full name
  - title (string, required): Job title (e.g., Junior DevOps Engineer)
  - subtitle (string, optional): Short tagline
  - avatar (string, optional): Path to profile image
- **Relationships**: None
- **Validation**: Name and title must be non-empty strings
- **Notes**: Displayed prominently with anime styling

### About Section
- **Fields**:
  - description (string, required): Personal bio
  - highlights (array of strings, optional): Key achievements
- **Relationships**: None
- **Validation**: Description must be non-empty
- **Notes**: Transparent content presentation

### Skills Section
- **Fields**:
  - name (string, required): Skill name
  - level (number, 1-5, required): Proficiency level
  - category (string, optional): e.g., "Technical", "Soft Skills"
- **Relationships**: None (list of skills)
- **Validation**: Level between 1-5
- **Notes**: Visual representation with progress bars

### DevOps Toolbox Section
- **Fields**:
  - name (string, required): Tool name (e.g., Kubernetes)
  - description (string, required): Brief description
  - icon (string, required): Path to SVG icon
  - proficiency (string, optional): e.g., "Beginner", "Intermediate"
- **Relationships**: None (list of tools)
- **Validation**: Name, description, icon required
- **Notes**: Includes logos/icons for major DevOps tools

### Experience Section
- **Fields**:
  - position (string, required): Job title
  - company (string, required): Company name
  - startDate (date, required): Start date
  - endDate (date, optional): End date (null for current)
  - description (string, required): Job description
  - achievements (array of strings, optional): Key achievements
- **Relationships**: None (list of experiences)
- **Validation**: Dates in valid format, endDate >= startDate if present
- **Notes**: Chronological order, current position highlighted

### Projects Section
- **Fields**:
  - name (string, required): Project name
  - description (string, required): Project description
  - technologies (array of strings, required): Tech stack used
  - link (string, optional): URL to project/demo
  - github (string, optional): GitHub repo URL
  - image (string, optional): Screenshot path
- **Relationships**: None (list of projects)
- **Validation**: Name and description required
- **Notes**: Showcase DevOps-related projects

### Contact Section
- **Fields**:
  - email (string, required): Email address
  - linkedin (string, optional): LinkedIn URL
  - github (string, optional): GitHub URL
  - otherLinks (array of objects, optional): {name, url}
- **Relationships**: None
- **Validation**: Email in valid format
- **Notes**: Social links and contact form

## State Transitions
N/A - Static site with no dynamic state changes.