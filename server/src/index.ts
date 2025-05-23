import express from 'express';
import path from 'path';

const app = express();
const PORT = 8000;

const publicPath = path.join(__dirname, '../public');
app.use(express.static(publicPath));

app.get('*', (_, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
