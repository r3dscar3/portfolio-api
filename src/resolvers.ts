import prisma from './db';
// Provide resolver functions for your schema fields
interface Id {
  id?: number;
}
const resolvers = {
  Query: {
    page: async (_root: any, { id }: Id) => {
      return await prisma.page.findUnique({
        where: { id: id },
      });
    },
		sections: async (_root: any, { id }: Id) => {
			return await prisma.section.findMany({
				where: { 
					pageId: id 
				},
				include: {
					sectionItems: true
				}
			});
		},
		pages: async (_root: any, args: any) => {
			return await prisma.page.findMany();
		}
  },
};

export default resolvers;
