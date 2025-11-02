const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');

let mongoServer;

module.exports = {
  async setup() {
    console.log('Setting up MongoDB Memory Server...');
    mongoServer = await MongoMemoryServer.create();
    const uri = mongoServer.getUri();
    process.env.MONGODB_URI = uri;
    
    // Connect Mongoose
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    console.log('MongoDB Memory Server is ready and connected');
  },

  async teardown() {
    await mongoose.disconnect();
    if (mongoServer) {
      await mongoServer.stop();
    }
  },
};
