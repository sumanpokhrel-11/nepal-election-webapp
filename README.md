# Nepal Election Candidacy Web App

An interactive web application designed to provide citizens of Nepal with comprehensive, easily accessible information about electoral candidates and constituencies for upcoming elections. The platform is built for educational purposes to promote transparency and informed participation.

## ✨ Features

*   **🗺️ 3D Constituency Explorer**: An interactive 3D map to search and visualize each constituency and its candidates.
*   **🗳️ Candidate Profiles**: Detailed CV-like profiles for each candidate, including education, work experience, and political history.
*   **🏛️ Party Information**: Centralized access to party manifestos and candidate lists (Direct and Proportional Representation).
*   **📊 Historical Data**: View the official results from the previous two election cycles for any constituency.
*   **✏️ Mock Voting System**: Users can cast a vote for educational purposes using their email. Includes an option for "No Vote."
*   **💬 User Engagement**: A commenting system for users to discuss and share opinions on constituencies.
*   **📱 Responsive Design**: Fully functional and visually appealing on both mobile and desktop devices.
*   **🔗 Social Sharing**: Easily share candidate profiles on Facebook to increase reach.
*   **🔐 Admin & Staff Panel**: A secure backend interface for administrators and staff to add, update, or delete data (candidates, parties, etc.).
*   **👤 Role-Based Access Control**: Django-like user management with distinct permissions for Admins, Staff, and general Users.

## 🛠️ Tech Stack

This project is built on a modern, robust technology stack:

| Component | Technology | Description |
| :--- | :--- | :--- |
| **Backend** | **FastAPI** | A high-performance Python web framework for building the API. |
| **Database** | **PostgreSQL** | A powerful, open-source object-relational database system. |
| **Frontend** | **React** | A JavaScript library for building the user interface and interactive components. |
| **3D Visualization**| **Deck.gl / Mapbox** | Libraries for rendering the interactive 3D map of constituencies. |

## 🏗️ Architecture Overview

The application follows a standard three-tier architecture:

1.  **Frontend (React)**: The client-side application that the user interacts with. It makes API requests to the backend to fetch and display data.
2.  **Backend (FastAPI)**: The server-side application that contains all the business logic. It exposes a RESTful API, processes requests, and communicates with the database.
3.  **Database (PostgreSQL)**: The persistence layer where all application data—from user accounts to candidate profiles—is stored.

## 🗃️ Database Schema

The database is structured into several related tables to efficiently store and manage the application's data.

<details>
<summary>Click to view Database Tables</summary>

| Table | Purpose |
| :--- | :--- |
| **`users`** | Stores user accounts and roles (admin, staff, voter). |
| **`constituencies`**| Contains constituency names, state, and GeoJSON data for mapping. |
| **`parties`** | Stores political party details, including manifestos and logos. |
| **`candidates`** | Contains detailed profiles for each candidate and links them to a party and constituency. |
| **`election_results`** | Stores historical vote counts from previous elections. |
| **`votes`** | Records the mock votes cast by users on the platform. |
| **`comments`** | Stores user comments related to specific constituencies. |

</details>

## 🚀 Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

*   Python 3.8+ and `pip`
*   Node.js and `npm`
*   PostgreSQL database server

### 1. Backend Setup (FastAPI)

```bash
# 1. Clone the repository
git clone https://github.com/your-username/nepal-election-app.git
cd nepal-election-app/backend

# 2. Create and activate a virtual environment
python -m venv venv
source venv/bin/activate  # On Windows, use `venv\Scripts\activate`

# 3. Install Python dependencies
pip install -r requirements.txt

# 4. Set up environment variables
#    Create a .env file and add your database URL and other secrets
#    DATABASE_URL="postgresql://user:password@host:port/database"
#    SECRET_KEY="your_secret_key"

# 5. Run database migrations (if using an ORM like Tortoise-ORM or Alembic)
#    alembic upgrade head

# 6. Start the backend server
uvicorn main:app --reload
```
The API will be available at `http://127.0.0.1:8000`.

### 2. Frontend Setup (React)

```bash
# 1. Navigate to the frontend directory
cd ../frontend

# 2. Install JavaScript dependencies
npm install

# 3. Set up environment variables
#    Create a .env.local file to specify the backend API URL
#    REACT_APP_API_URL="http://127.0.0.1:8000"

# 4. Start the React development server
npm start
```
The frontend application will open in your browser at `http://localhost:3000`.

## 🤝 Contributing

Contributions are welcome! Please feel free to open an issue to discuss a bug or feature, or submit a pull request with your improvements.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request