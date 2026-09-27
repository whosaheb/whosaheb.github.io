import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

// Serve static directory
app.use(express.static(__dirname));

// HTML routes handling (supports /about, /about.html, etc.)
app.get('*', (req, res, next) => {
  if (req.accepts('html')) {
    const cleanPath = req.path.replace(/^\//, '').replace(/\/$/, '');
    if (!cleanPath) {
      return res.sendFile(path.join(__dirname, 'index.html'));
    }
    const htmlFile = path.join(__dirname, `${cleanPath}.html`);
    return res.sendFile(htmlFile, (err) => {
      if (err) {
        res.sendFile(path.join(__dirname, 'index.html'));
      }
    });
  }
  next();
});

app.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
});
