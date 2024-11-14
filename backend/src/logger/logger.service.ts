import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as winston from 'winston';
import 'winston-mongodb'; // Import the MongoDB transport module
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Log } from './logger.schema'; // Import the Log schema

@Injectable()
export class LoggerService {
  private logger: winston.Logger;

  constructor(
    private configService: ConfigService,
    @InjectModel('Log') private logModel: Model<Log>, // Inject the Log model
  ) {
    const mongodbTransport = new winston.transports.MongoDB({
      db: this.configService.get<string>('MONGO_LOG_URI'), // MongoDB URL
      collection: 'logs',
      level: 'info',
      storeHost: true,
      options: { useUnifiedTopology: true }, // Ensures compatibility with latest MongoDB driver
    });

    // Initialize winston logger with MongoDB transport
    this.logger = winston.createLogger({
      transports: [
        new winston.transports.Console(),
        mongodbTransport, // Adding MongoDB transport
      ],
    });
  }

  async log(level: string, message: string, metadata: Record<string, any> = {}) {
    const log = new this.logModel({
      level,
      message,
      timestamp: new Date(),
      ...metadata,
    });
    await log.save(); // Save the log to the database

    this.logger.log(level, message, metadata); // Also log to console and MongoDB via winston
  }

  info(message: string, metadata?: Record<string, any>) {
    this.log('info', message, metadata);
  }

  error(message: string, metadata?: Record<string, any>) {
    this.log('error', message, metadata);
  }

  warn(message: string, metadata?: Record<string, any>) {
    this.log('warn', message, metadata);
  }
}
