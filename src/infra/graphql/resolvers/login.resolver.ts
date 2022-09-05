const loginResolver = {
  Mutation: {
    login: async (_: any, args: any, context: any): Promise<string> => {
      return context.token;
    },
  },
};

export { loginResolver };
