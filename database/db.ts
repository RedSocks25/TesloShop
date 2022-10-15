import mongoose from 'mongoose';


/**
 * 0 = disconnected
 * 1 = connected
 * 2 = connecting
 * 3 = disconnecting
 */

const mongoConnection = {
    isConnected: 0
}

export const connect = async() => {

  // Check if we are connected to the DB already
  if (mongoConnection.isConnected) {
    console.log('Already connected to DB');
    return;
  }

  // Check if there exists any connections to the DB
  if ( mongoose.connections.length > 0 ) {
    mongoConnection.isConnected = mongoose.connections[0].readyState;

    // If there exists one where we are connected, then we are going to use it
    if ( mongoConnection.isConnected === 1 ) {
      console.log('Using a previous connection');
      return;
    }

    // Otherwise, if exists and there is no connection, then is going to be deleted
    await mongoose.disconnect();
  }

  // Create new connection to DB
  await mongoose.connect( process.env.MONGO_URL || '');
  mongoConnection.isConnected = 1;
  console.log('Connecting to MongoDB:', process.env.MONGO_URL );
}

export const disconnect = async() => {
    
  // We are not going to disconnect if we are in a DEV environment
  if ( process.env.NODE_ENV === 'development' ) return;

  // Do nothing if we are already disconnected
  if ( mongoConnection.isConnected === 0 ) return;

  // Disconnect
  await mongoose.disconnect();
  mongoConnection.isConnected = 0;

  console.log('Desconectado de MongoDB');
}