import mongoose from "mongoose";
const connect = async () => {
  mongoose.connect(process.env.MONGO_URI!).then(() => console.log("DB connected succesfully !")).catch((err)=>console.log(err));
};
export default connect;
