# Client Management System

A RESTful API for managing client data built with Node.js, Express, and SQLite. This system provides complete CRUD operations.

## 📋 Table of Contents

- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [Database Schema](#database-schema)
- [API Endpoints](#api-endpoints)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)

## 🏗️ Architecture

This project follows a **layered architecture** pattern with clear separation of concerns:

```
┌─────────────────┐
│   API Routes    │  ← HTTP endpoint definitions
├─────────────────┤
│  Controllers    │  ← Request/Response handling
├─────────────────┤
│   Services      │  ← Business logic
├─────────────────┤
│    Models       │  ← Data models (Sequelize)
├─────────────────┤
│   Database      │  ← SQLite storage
└─────────────────┘
```

## 📁 Project Structure

```
finalProject/
├── app.js                     # Main application entry point
├── package.json               # Dependencies and scripts
├── package-lock.json          # Dependency lock file
├── README.md                  # Project documentation
├── controllers/
│   └── clientController.js    # HTTP request handlers
├── routes/
│   └── clientRoutes.js        # API route definitions
├── services/
│   └── clientService.js       # Business logic layer
├── models/
│   └── client.js              # Client data model
├── data/
│   ├── database.js            # Database configuration
│   └── db.sqlite              # SQLite database file
└── diagrams/                  # Architecture documentation
    ├── c4-level1-system-context.drawio
    ├── c4-level2-container.drawio
    ├── c4-level3-component.drawio
    └── c4-level4-code.drawio
```

### File Descriptions:

- **`app.js`**: Main application file that sets up Express server, middleware, and database connection
- **`controllers/`**: Handle HTTP requests and responses, input validation
- **`routes/`**: Define API endpoints and route them to appropriate controllers
- **`services/`**: Contain business logic and interact with models
- **`models/`**: Define data structure and database schema using Sequelize
- **`data/`**: Database configuration and SQLite file storage
- **`diagrams/`**: Architecture documentation using C4 Model methodology

## 🗄️ Database Schema

### Client Table

| Column    | Type    | Constraints           | Description                    |
|-----------|---------|----------------------|--------------------------------|
| id        | INTEGER | PRIMARY KEY, AUTO_INCREMENT | Unique client identifier |
| name      | STRING  | NOT NULL             | Client's full name             |
| email     | STRING  | NOT NULL             | Client's email address         |
| createdAt | DATE    | AUTO_GENERATED       | Record creation timestamp      |
| updatedAt | DATE    | AUTO_GENERATED       | Last update timestamp          |

**Database Details:**
- **Type**: SQLite
- **Location**: `./data/db.sqlite`
- **ORM**: Sequelize v6.37.7
- **Auto-sync**: Database schema is automatically synchronized on startup

## 🔌 API Endpoints

Base URL: `http://localhost:3000`

### Client Operations

| Method | Endpoint | Description | Request Body | Response |
|--------|----------|-------------|--------------|----------|
| GET | `/clients` | Get all clients | - | Array of client objects |
| GET | `/clients/:id` | Get client by ID | - | Client object or 404 |
| GET | `/clients/name/:name` | Get clients by name | - | Array of matching clients |
| GET | `/clients/count` | Get total client count | - | `{ "total": number }` |
| POST | `/clients` | Create new client | `{ "name": "string", "email": "string" }` | Created client object |
| PUT | `/clients/:id` | Update client | `{ "name": "string", "email": "string" }` | Updated client object |
| DELETE | `/clients/:id` | Delete client | - | Success message |

### Request/Response Examples

#### Create Client
```bash
POST /clients
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john.doe@example.com"
}
```

#### Response
```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john.doe@example.com",
  "createdAt": "2024-01-01T12:00:00.000Z",
  "updatedAt": "2024-01-01T12:00:00.000Z"
}
```

#### Error Response
```json
{
  "error": "The field \"name\" is required and must be a non-empty string."
}
```

## 🚀 Installation

### Prerequisites
- Node.js (v18 or higher)
- npm (Node Package Manager)

### Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd finalProject
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the server**
   ```bash
   node app.js
   ```

4. **Verify installation**
   ```bash
   curl http://localhost:3000/clients
   ```

The server will start on port 3000 and automatically create the SQLite database.

## 💻 Usage

### Starting the Server
```bash
node app.js
```

Expected output:
```
Banco OK
Servidor rodando na porta 3000
```

### Testing the API

#### Using curl:
```bash
# Get all clients
curl http://localhost:3000/clients

# Create a client
curl -X POST http://localhost:3000/clients \
  -H "Content-Type: application/json" \
  -d '{"name":"Jane Smith","email":"jane@example.com"}'

# Get client by ID
curl http://localhost:3000/clients/1

# Update client
curl -X PUT http://localhost:3000/clients/1 \
  -H "Content-Type: application/json" \
  -d '{"name":"Jane Doe","email":"jane.doe@example.com"}'

# Delete client
curl -X DELETE http://localhost:3000/clients/1
```

## 📊 C4 Model Documentation

This project includes comprehensive architecture documentation using the C4 Model methodology. The C4 Model provides a hierarchical approach to software architecture documentation, with each level providing increasing detail.

### Architecture Overview

The Client Management System follows a **layered architecture** pattern with clear separation of concerns:

```
┌─────────────────┐
│   API Routes    │  ← HTTP endpoint definitions
├─────────────────┤
│  Controllers    │  ← Request/Response handling
├─────────────────┤
│   Services      │  ← Business logic
├─────────────────┤
│    Models       │  ← Data models (Sequelize)
├─────────────────┤
│   Database      │  ← SQLite storage
└─────────────────┘
```

### C4 Model Levels

All diagrams are located in the `diagrams/` folder and can be opened with [draw.io](https://app.diagrams.net/):

1. **Level 1 - System Context** (`c4-level1-system-context.drawio`)
   - **Purpose**: Shows the big picture of the system and its users
   - **Audience**: Everyone (technical and non-technical stakeholders)
   - **Content**: API consumers interacting with the Client Management System

2. **Level 2 - Container** (`c4-level2-container.drawio`)
   - **Purpose**: Shows the high-level technology choices and how containers communicate
   - **Audience**: Technical stakeholders, architects, developers
   - **Content**: Web Application (Node.js/Express) and Database (SQLite) containers

3. **Level 3 - Component** (`c4-level3-component.drawio`)
   - **Purpose**: Shows the major structural building blocks and their interactions
   - **Audience**: Software architects and developers
   - **Content**: Routes, Controllers, Services, Models, and Database Config components

4. **Level 4 - Code** (`c4-level4-code.drawio`)
   - **Purpose**: Shows the implementation details at the class level
   - **Audience**: Developers and maintainers
   - **Content**: Class diagrams with methods, properties, and relationships

## 🛠️ Technologies Used

- **Runtime**: Node.js
- **Framework**: Express.js v5.1.0
- **Database**: SQLite v5.1.7
- **ORM**: Sequelize v6.37.7
- **Documentation**: C4 Model

### Dependencies
```json
{
  "express": "^5.1.0",
  "sequelize": "^6.37.7",
  "sqlite3": "^5.1.7"
}
```
