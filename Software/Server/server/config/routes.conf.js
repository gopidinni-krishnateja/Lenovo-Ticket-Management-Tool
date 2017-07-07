import morgan from "morgan";
import bodyParser from "body-parser";
import contentLength from "express-content-length-validator";
import helmet from "helmet";
import express from "express";
import compression from "compression";
import zlib from "zlib";

export default class RouteConfig {
    static init(application) {
      const _root = process.cwd();
      const morganFormat = (process.env.NODE_ENV === "production") ? "combined" : "tinydate";

      morgan.format("tinydate", "[:date[clf]] :method :url :status :res[content-length] - :response-time ms");

      application.use(compression({
        level: zlib.Z_BEST_COMPRESSION,
        threshold: "1kb"
      }));

      application.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Content-Type, X-Requested-With, Authorization");
        res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE,PATCH, OPTIONS");
        next();
      });
      application.options("*", (req, res, next) => {
        res.end();
      });

      application.use(bodyParser.json());


    }
}
