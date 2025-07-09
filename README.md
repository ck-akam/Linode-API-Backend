# Linode-API-Backend

This is a sample Node.js Express API backend for demonstration and development purposes.

## Features
- User endpoints (GET, POST, DELETE)
- Product endpoints (GET, GET by ID)
- Example data for users and products
- Custom headers for product responses

## Endpoints

### Users
- `GET /api/users` — List all users
- `GET /api/users/:id` — Get user by ID
- `POST /api/users` — Create a new user (JSON body: `{ name, email }`)
- `DELETE /api/users/:id` — Delete a user by ID

### Products
- `GET /api/products` — List all products
- `GET /api/products/:id` — Get product by ID

### Hello
- `GET /api/hello` — Returns a hello message

## Example Usage

**Get all users:**
```sh
curl http://localhost:3000/api/users
```

**Get a user by ID:**
```sh
curl http://localhost:3000/api/users/1
```

**Create a user:**
```sh
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name": "Alice Wilson", "email": "alice@example.com"}'
```

**Delete a user:**
```sh
curl -X DELETE http://localhost:3000/api/users/1
```

**Get all products:**
```sh
curl http://localhost:3000/api/products
```

**Get a product by ID:**
```sh
curl http://localhost:3000/api/products/1
```

## Running the Server

1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the development server:
   ```sh
   npm run dev
   ```

The server will run on `http://localhost:3000` by default.

## Notes
- This project uses in-memory data for demonstration. No data is persisted between restarts.
- For production, remove sensitive fields (like `ssn`) from API responses.

---

© 2025 Ck-akam