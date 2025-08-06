import { PrismaClient } from '../../generated/prisma';

const prisma = new PrismaClient()

export default async function CustomerPage({ params }: { params: { id: string } }) {
  const customer = await prisma.customer.findUnique({
    where: {
      id: params.id
    }
  })

  return (
    <div>
      <h1>{customer?.name}</h1>
    </div>
  )
}
