import swaggerUI from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";

export const options = {
  swaggerDefinition: {
    info: {
      title: "Test API",
      version: "1.0.0",
      description: "Test API with express",
    },
    host: "localhost:3000",
    basePath: "/api",
  },
  apis: ["./src/apis/routes/*.js", "./swagger/*"],
};

export const specs = swaggerJSDoc(options);
export const swaggerUi = swaggerUI;
