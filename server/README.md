# MERN Bug Tracker - Testing & Debugging

## Features
- ✅ Create bugs with title, description, severity, priority, status
- ✅ View all reported bugs
- ✅ Track bug status (open, in-progress, closed)
- ✅ MongoDB database integration
- ✅ Error handling & boundaries
- ✅ Responsive design

## Tech Stack
- **Backend:** Node.js, Express, MongoDB, Mongoose
- **Frontend:** React, CSS3
- **Testing:** Jest, Supertest, React Testing Library

## Installation

### Backend
```bash
cd server
npm install
npm run dev

Frontend
cd clint
npm install
npm start

Running Tests
cd server
npm test

cd client
npm test

API Endpoints
	•	GET /api/bugs - Get all bugs
	•	POST /api/bugs - Create bug
	•	GET /api/bugs/:id - Get specific bug
	•	PUT /api/bugs/:id - Update bug
	•	DELETE /api/bugs/:id - Delete bug
Debugging Techniques Used
	•	Chrome DevTools for network inspection
	•	React Error Boundaries for error handling
	•	Console logging for state tracking
	•	Try-catch blocks for async operations
How to Use
	1.	Fill in the bug form with title, description, severity, priority
	2.	Click “Create Bug”
	3.	Bug appears in the list on the right
	4.	View all bugs with their details
Author
MawunyoF Mary
License
MIT