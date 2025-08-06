// app/dashboard/page.tsx

import { PrismaClient } from '../generated/prisma';
import Link from 'next/link'


const prisma = new PrismaClient()

// Dynamic by default
export default async function DashboardPage() {
  const customers = await prisma.customer.findMany()

  return (
    <ul>
      {customers.map(customer => (
        <li key={customer.id}>
          <Link href={`/customers/${customer.id}`}>
            {customer.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}
