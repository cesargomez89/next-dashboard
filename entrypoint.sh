#!/bin/sh

pnpm install
pnpx prisma generate
pnpx prisma migrate dev
pnpx prisma db seed

exec "$@"
