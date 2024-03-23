# ScaleX Backend Task: Pair Price and Volume API

This project implements a backend API for managing cryptocurrency pairs, including CRUD operations for schemas, updating schema versions, and fetching price and volume data.

## Features

- Create, read, update, and delete cryptocurrency pairs schemas
- Retrieve price and volume data for specific schema versions

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Postman (for testing API endpoints)

## Installation
Clone the repository:
   ```
   git clone https://github.com/ansh-mehta7/scaleX_price-vol-data.git
   ```
Install dependencies:
```
npm install
```
Start Server
```
npm run dev

```
API Endpoints:
You can access these endpoints using the provided server URL http://localhost:4000 followed by the respective endpoint paths.
Make sure to include any required parameters in your requests where necessary.

- Create Schema
  POST /api/v1/create/schemas

- Get Pairs
  GET /api/v1/get/pairs

- Update Schema
  PUT /api/v1/update/schemas/:id

- Delete Schema
  DELETE /api/v1/delete/schemas/:id

- Get Price and Volume
  GET /api/v1/get/price-volume/schemas/:id





   
