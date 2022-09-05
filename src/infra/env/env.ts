interface IEnv {
  apiPort: number;
  apiSecret: string;
  typeorm: {
    postgresql: {
      host: string;
      port: number;
      username: string;
      password: string;
      database: string;
    };
  };
}

export const ENV: IEnv = {
  apiPort: Number(process.env.API_PORT),
  apiSecret: process.env.APP_SECRET as string,
  typeorm: {
    postgresql: {
      host: process.env.POSTGRES_DB_HOST as string,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_DB_USER as string,
      password: process.env.POSTGRES_DB_PASS as string,
      database: process.env.POSTGRES_DB_NAME as string,
    },
  },
};
