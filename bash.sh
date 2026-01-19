#!/bin/bash

# This script creates the directory and file structure for the Nepal Election Candidacy Web App.
# To run: copy and paste the entire script into your terminal and press Enter.

echo "🚀 Starting project setup for 'nepal-election-app'..."

# --- Main Project Directory ---
mkdir -p nepal-election-app
cd nepal-election-app

# --- Backend Structure (FastAPI) ---
echo "  - Setting up backend directory..."
mkdir -p backend/api/endpoints backend/core backend/db backend/schemas

# Create Python package markers
touch backend/api/__init__.py
touch backend/api/endpoints/__init__.py
touch backend/core/__init__.py
touch backend/db/__init__.py
touch backend/schemas/__init__.py

# Create core files
touch backend/main.py
touch backend/requirements.txt
touch backend/.env.example

# Create placeholder endpoint files
touch backend/api/endpoints/candidates.py
touch backend/api/endpoints/constituencies.py
touch backend/api/endpoints/parties.py
touch backend/api/endpoints/users.py

# Create core config file
touch backend/core/config.py

# Create database model and session files
touch backend/db/models.py
touch backend/db/session.py

# Create Pydantic schema files
touch backend/schemas/candidate.py
touch backend/schemas/party.py
touch backend/schemas/user.py
touch backend/schemas/vote.py

# --- Frontend Structure (React) ---
echo "  - Setting up frontend directory..."
mkdir -p frontend/public frontend/src/api frontend/src/components frontend/src/pages

# Create basic public files
touch frontend/public/index.html

# Create core src files
touch frontend/src/App.js
touch frontend/src/index.js

# Create placeholder component files
touch frontend/src/components/ThreeDMap.js
touch frontend/src/components/CandidateCard.js
touch frontend/src/components/CandidateProfile.js
touch frontend/src/components/HistoricalResults.js
touch frontend/src/components/VoteModal.js
touch frontend/src/components/CommentSection.js
touch frontend/src/components/AdminDashboard.js

# Create placeholder page files
touch frontend/src/pages/ConstituencyPage.js
touch frontend/src/pages/HomePage.js
touch frontend/src/pages/AdminLoginPage.js

# Create placeholder api client file
touch frontend/src/api/client.js

# Create frontend environment file example
touch frontend/.env.local.example

# Create a placeholder package.json
echo '{
  "name": "frontend",
  "version": "0.1.0",
  "private": true,
  "dependencies": {},
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
}' > frontend/package.json


# --- Root Files ---
echo "  - Creating root configuration files..."
touch .gitignore
touch README.md

# --- Populate Placeholder Files ---
echo "  - Adding placeholder content to key files..."

# Add content to backend/.env.example
echo '# PostgreSQL Database URL
DATABASE_URL="postgresql://user:password@localhost:5432/election_db"

# Secret key for JWT tokens
SECRET_KEY="your_super_secret_key_here"
ALGORITHM="HS256"
ACCESS_TOKEN_EXPIRE_MINUTES=30
' > backend/.env.example

# Add content to frontend/.env.local.example
echo '# URL of the FastAPI backend
REACT_APP_API_URL="http://127.0.0.1:8000"
' > frontend/.env.local.example

# Add content to requirements.txt
echo 'fastapi
uvicorn[standard]
sqlalchemy
psycopg2-binary
pydantic[email]
python-jose[cryptography]
passlib[bcrypt]
python-multipart
' > backend/requirements.txt

# Add content to .gitignore
echo '# Environments
venv/
.env

# Byte-compiled / optimized / DLL files
__pycache__/
*.pyc
*.so

# Node modules
node_modules/
build/
.DS_Store
' > .gitignore

# Add a title to the README
echo '# Nepal Election Candidacy Web App' > README.md

echo "✅ Project 'nepal-election-app' created successfully!"
echo "Navigate into the new directory with: cd nepal-election-app"
