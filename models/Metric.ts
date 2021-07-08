import mongoose from 'mongoose';

const MetricSchema = new mongoose.Schema({
  origin: String, // e.g. 'https://example.com'
  resource: String, // e.g. 'https://example.com/logo.png'
  strategy: String, // e.g. 'Cache First'
  active: { type: Boolean, default: true }, // flag to check if strategy is currently in use
  // e.g. { action: 'Fetched from Network', timestamp, loadTime }
  actions: [
    {
      action: String,
      timestamp: Date,
      resourceSize: { type: Number, default: 0 }, // e.g. 1120 (Bytes)
      loadTime: { type: Number, default: 0 },
    },
  ],
});

export default mongoose.models.Metric || mongoose.model('Metric', MetricSchema);
