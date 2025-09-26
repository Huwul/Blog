import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Root endpoint ekleyin
app.get('/', (req, res) => {
  res.json({ message: 'Blog Server çalışıyor!', endpoints: ['/api', '/api/posts'] });
});

// Routes
app.get('/api', (req, res) => {
  res.json({ message: 'Blog API çalışıyor!' });
});

app.get('/api/posts', (req, res) => {
  res.json([
    { id: 1, title: 'İlk Post', content: 'Bu ilk blog yazısı' },
    { id: 2, title: 'İkinci Post', content: 'Bu ikinci blog yazısı' }
  ]);
});

app.listen(PORT, () => {
  console.log(`Server http://localhost:${PORT} portunda çalışıyor`);
});