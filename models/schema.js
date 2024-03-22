const mongoose = require("mongoose");

// Define sub-schemas for token, transaction, volume, price change, liquidity, and info
const TokenSchema = new mongoose.Schema({
  address: String,
  name: String,
  symbol: String
});

const TransactionSchema = new mongoose.Schema({
  m5: {
    buys: Number,
    sells: Number
  },
  h1: {
    buys: Number,
    sells: Number
  },
  h6: {
    buys: Number,
    sells: Number
  },
  h24: {
    buys: Number,
    sells: Number
  }
});

const VolumeSchema = new mongoose.Schema({
  m5: Number,
  h1: Number,
  h6: Number,
  h24: Number
});

const PriceChangeSchema = new mongoose.Schema({
  m5: Number,
  h1: Number,
  h6: Number,
  h24: Number
});

const LiquiditySchema = new mongoose.Schema({
  usd: Number,
  base: Number,
  quote: Number
});

const InfoSchema = new mongoose.Schema({
  imageUrl: String,
  websites: [{ label: String, url: String }],
  socials: [{
    type: { type: String }, // Ensure type is defined as a string
    url: String
  }],
});



// Define the main schema for a pair
const PairSchema = new mongoose.Schema({
  chainId: String,
  dexId: String,
  url: String,
  pairAddress: String,
  baseToken: TokenSchema,
  quoteToken: TokenSchema,
  priceNative: Number,
  priceUsd: Number,
  txns: TransactionSchema,
  volume: VolumeSchema,
  priceChange: PriceChangeSchema,
  liquidity: LiquiditySchema,
  pairCreatedAt: Number,
  info: InfoSchema
});



// Define the schema version schema
const SchemaVersionSchema = new mongoose.Schema({
  schemaVersion: String,
  pairs: [PairSchema]
});

// Export the model
module.exports = mongoose.model("SchemaVersion", SchemaVersionSchema);


// within the SchemaVersion model, there are sub-schemas such as tokenSchema, transactionSchema, VolumeSchema, PriceChangeSchema, LiquiditySchema, and InfoSchema, which are embedded within the PairSchema. These sub-schemas define the structure of nested objects within a pair, such as token details, transaction information, volume data, price change metrics, liquidity information, and additional metadata. Each sub-schema provides a consistent format for storing and accessing specific types of data within a pair document.