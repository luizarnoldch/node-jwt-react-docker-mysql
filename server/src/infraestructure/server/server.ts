import * as dotenv from 'dotenv'
dotenv.config()

import express from "express";
import morgan from "morgan";
import cors from "cors";
import bodyParser from 'body-parser';

import authRoute from '../../infraestructure/routes/auth.routes.js'

export default class Server {
  private app: express.Application;
  private port: number;
  private serverInstance: any;

  constructor(port: number) {
    this.port = port;
    this.app = express();
    this.app.use(morgan('dev'));
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false}));
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({
        extended: true
    }));

    // Routes
    this.app.use(authRoute)
  }

  public start(): void {
    this.serverInstance = this.app.listen(this.port, () => {
      console.log(`Server listening on port ${this.port}`);
      console.log(`Press Ctrl-C to stop\n`)
    });
  }

  public stop(): void {
    if (this.serverInstance) {
      this.serverInstance.close(() => {
        console.log("Server stopped");
      });
    }
  }
}
