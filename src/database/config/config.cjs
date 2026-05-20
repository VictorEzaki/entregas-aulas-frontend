require("dotenv").config();

const shared = {
  username: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "petshop_db",
  host: process.env.DB_HOST || "127.0.0.1",
  port: Number(process.env.DB_PORT) || 3306,
  dialect: "mysql",
  logging: (process.env.DB_LOGGING || "false") === "true",
  define: {
    underscored: true,
    timestamps: true,
  },
};

module.exports = {
  development: shared,
  test: {
    ...shared,
    database: `${shared.database}_test`,
  },
  production: shared,
};
