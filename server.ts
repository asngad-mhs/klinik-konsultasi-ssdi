import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Database Mock sederhana (Bisa diganti Firebase di masa depan jika diizinkan)
  const appointments: any[] = [];
  
  // API: Get Specialists
  app.get("/api/specialists", (req, res) => {
    res.json([
      { id: '1', name: 'Dr. Ahmad WiFi', role: 'Network Specialist', status: 'Online' },
      { id: '2', name: 'Prof. Siti Web', role: 'Web Developer', status: 'In Meeting' },
      { id: '3', name: 'Dr. Budi Domain', role: 'Domain Expert', status: 'Online' },
    ]);
  });

  // API: Simulasikan integrasi SIAKAD
  app.post("/api/auth/siakad", (req, res) => {
    const { id } = req.body;
    // Di sini biasanya ada pengecekan ke database SIAKAD UNUGHA
    if (id && id.length > 5) {
      res.json({ success: true, user: { name: "Civitas UNUGHA", role: "Mahasiswa/Dosen" } });
    } else {
      res.status(401).json({ success: false, message: "ID tidak ditemukan di SIAKAD" });
    }
  });

  // API: Create Appointment
  app.post("/api/appointments", (req, res) => {
    const appointment = { ...req.body, id: `APT-${Date.now()}`, status: 'Pending' };
    appointments.push(appointment);
    res.json({ success: true, appointment });
  });

  // Vite middleware untuk development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server Klinik SSDI running on http://localhost:${PORT}`);
  });
}

startServer();
