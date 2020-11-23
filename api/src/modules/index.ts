/*
  Register Express routes
*/
import express from "express";
import VideoRoutes from "./video/video.routes";

const Routes = (app: express.Application) => {
  app.use("/api/v1/video", VideoRoutes);
  app.get("/", function(req, res) {
    res.send("Welcome to simplified Youtube");
  });

  //Test Route
  app.get("/test", (req: any, res: { send: (arg0: string) => void }) => {
    res.send("This is a TEST route!!!!");
  });
};
export default Routes;
