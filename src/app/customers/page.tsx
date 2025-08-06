// app/dashboard/page.tsx

import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient()

// Dynamic by default
export default async function DashboardPage() {
  const customers = await prisma.customer.findMany()

  return (
    <ul>
      {customers.map(customer => (
        <li key={customer.id}>
          <a href={`/customers/${customer.id}`}>{customer.name}</a>
        </li>
      ))}
    </ul>
  )
}
