import winston from "winston";
import winstonDaily from "winston-daily-rotate-file";

const logConfiguration = {
  transports: [
    new winstonDaily({
      level: "error",
      // Create the log directory if it does not exist
      dirname: "logs",
      filename: `%DATE%.error.log`,
      datePattern: "YYYY-MM-DD",
      maxFiles: "14d",
    }),
    new winstonDaily({
      level: "info",
      // Create the log directory if it does not exist
      dirname: "logs",
      filename: `%DATE%.info.log`,
      datePattern: "YYYY-MM-DD",
      maxFiles: "14d",
    }),
  ],
  format: winston.format.combine(
    winston.format.label({
      label: `Label🏷️`,
    }),
    winston.format.timestamp({
      format: "MMM-DD-YYYY HH:mm:ss",
    }),
    winston.format.printf(
      (info) =>
        `${info.level}: ${info.label}: ${info.timestamp}: ${info.message}`
    )
  ),
};

const loggers = winston.createLogger(logConfiguration);

loggers.stream = {
  write: (message) => {
    loggers.info(message);
  },
};

export default loggers;
