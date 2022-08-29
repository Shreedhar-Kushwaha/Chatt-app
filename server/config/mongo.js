import mongoose from "mongoose";
import config from "./index.js";

const CONNECTION_URL =
  "mongodb://shree:Shreedhar%40123%23@ac-xbl1lst-shard-00-00.ckcltxr.mongodb.net:27017,ac-xbl1lst-shard-00-01.ckcltxr.mongodb.net:27017,ac-xbl1lst-shard-00-02.ckcltxr.mongodb.net:27017/chatdb?ssl=true&replicaSet=atlas-x6bo2z-shard-0&authSource=admin&retryWrites=true&w=majority";

mongoose.connect(CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Mongo has connected succesfully");
});
mongoose.connection.on("reconnected", () => {
  console.log("Mongo has reconnected");
});
mongoose.connection.on("error", (error) => {
  console.log("Mongo connection has an error", error);
  mongoose.disconnect();
});
mongoose.connection.on("disconnected", () => {
  console.log("Mongo connection is disconnected");
});
