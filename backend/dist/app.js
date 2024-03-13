import express from 'express';
import { config } from 'dotenv';
import appRouter from './routes/route.js';
import morgan from 'morgan';
config();
const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use("/api/v1/", appRouter);
export default app;
//# sourceMappingURL=app.js.map