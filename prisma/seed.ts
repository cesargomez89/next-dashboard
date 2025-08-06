import { PrismaClient } from "../src/app/generated/prisma";

const prisma = new PrismaClient();

async function main() {
  const customers = [
    {
      salesforceID: '001D0000001o3kMAAQ',
      name: 'John Doe',
    },
    {
      salesforceID: '001D0000001o3kMAAW',
      name: 'Jane Doe',
    },
    {
      salesforceID: '001D0000001o3kMAAE',
      name: 'Joe Doe',
    },
  ];

  await Promise.all(
    customers.map(async (customer) => {
      await prisma.customer.upsert({
        where: {
          salesforceID: customer.salesforceID,
        },
        create: customer,
        update: customer,
      });
    }),
  );
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
