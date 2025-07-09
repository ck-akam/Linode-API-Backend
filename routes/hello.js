const express = require('express');
const router = express.Router();

// Example GET route
router.get('/hello', (req, res) => {
  res.json({ message: 'Hello from /api/routes/hello!' });
});

router.get('/users', (req, res) => {
    const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com',ssn: '123-45-6789' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com',ssn: '987-65-4321' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com',ssn: '555-55-5555' }
  ];
  res.json(users);
 // res.json({ message: 'Hello from /api/routes/users!' });
});

router.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const users = [
      { id: 1, name: 'John Doe', email: 'john@example.com',ssn: '123-45-6789' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com',ssn: '987-65-4321' },
      { id: 3, name: 'Bob Johnson', email: 'bob@example.com',ssn: '555-55-5555' }
    ];
    const user = users.find(u => u.id === userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
});

router.post('/users', (req, res) => {
  const { name, email } = req.body;
  
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }
  
  const newUser = {
    id: Date.now(), // Simple ID generation
    name,
    email
  };
  
  res.status(201).json(newUser);
});

router.delete('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  // In a real app, you would remove the user from the database or array here
  res.json({ message: `User ${userId} deleted successfully` });
});
// Add more routes here as needed

let products = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    description: "Premium noise-cancelling wireless headphones with 30-hour battery life",
    price: 299.99,
    currency: "USD",
    category: "Electronics",
    subcategory: "Audio",
    brand: "SoundMax",
    sku: "SM-WH-001",
    stock: 45,
    specifications: {
      color: "Black",
      weight: "250g",
      connectivity: "Bluetooth 5.0",
      batteryLife: "30 hours"
    },
    tags: ["wireless", "bluetooth", "noise-cancelling", "premium"],
    rating: 4.5,
    reviewCount: 128,
    isActive: true,
    createdAt: "2024-01-15T10:30:00Z",
    updatedAt: "2024-01-20T15:45:00Z"
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    description: "Advanced fitness tracking watch with heart rate monitor and GPS",
    price: 199.99,
    currency: "USD",
    category: "Electronics",
    subcategory: "Wearables",
    brand: "FitTech",
    sku: "FT-SW-002",
    stock: 23,
    specifications: {
      color: "Silver",
      displaySize: "1.4 inch",
      waterResistant: "50m",
      batteryLife: "7 days"
    },
    tags: ["fitness", "smartwatch", "gps", "heart-rate"],
    rating: 4.2,
    reviewCount: 89,
    isActive: true,
    createdAt: "2024-01-10T08:15:00Z",
    updatedAt: "2024-01-18T12:30:00Z"
  },
  {
    id: 3,
    name: "Organic Cotton T-Shirt",
    description: "Comfortable organic cotton t-shirt in various colors",
    price: 29.99,
    currency: "USD",
    category: "Clothing",
    subcategory: "Shirts",
    brand: "EcoWear",
    sku: "EW-TS-003",
    stock: 150,
    specifications: {
      material: "100% Organic Cotton",
      sizes: ["S", "M", "L", "XL"],
      colors: ["White", "Black", "Navy", "Gray"],
      care: "Machine wash cold"
    },
    tags: ["organic", "cotton", "eco-friendly", "casual"],
    rating: 4.7,
    reviewCount: 256,
    isActive: true,
    createdAt: "2024-01-05T14:20:00Z",
    updatedAt: "2024-01-22T09:15:00Z"
  }
];

// Helper function to set common headers
const setCommonHeaders = (res) => {
  res.set({
    'Content-Type': 'application/json',
    'Server': 'Linode-Apps API',
    'Cache-Control': 'public, max-age=300',
    'ETag': `"${Date.now()}"`,
    'Last-Modified': new Date().toUTCString()
  });
};

router.get('/products', (req, res) => {
  setCommonHeaders(res);
  res.json(products);
});

router.get('/products/:id', (req, res) => {
  setCommonHeaders(res);
  
  const productId = parseInt(req.params.id);
  
  if (isNaN(productId) || productId <= 0) {
    return res.status(400).json({
      success: false,
      error: 'Invalid product ID',
      timestamp: new Date().toISOString()
    });
  }
  
  const product = products.find(p => p.id === productId);
  
  if (!product) {
    return res.status(404).json({
      success: false,
      error: 'Product not found',
      timestamp: new Date().toISOString()
    });
  }
  
  res.json({
    success: true,
    data: product,
    timestamp: new Date().toISOString()
  });
});


module.exports = router;
