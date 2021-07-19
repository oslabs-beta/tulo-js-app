import mongoose from 'mongoose';

const MetricSchema = new mongoose.Schema({
  origin: String, // e.g. 'https://example.com'
  url: String, // e.g. 'https://example.com/logo.png'
  message: String,
  strategy: String, // e.g. 'Cache First'
  size: String, // e.g. 1120 (Bytes)
  loadtime: String,
  connection: String,
  device: String,
  timestamp: Date,
});

export default mongoose.models.Metric || mongoose.model('Metric', MetricSchema);
