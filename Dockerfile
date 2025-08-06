FROM node:24-alpine
WORKDIR /app

RUN corepack enable && corepack prepare pnpm@latest --activate

COPY . .

EXPOSE 3000

ENTRYPOINT ./entrypoint.sh

CMD ["pnpm", "run", "dev"]
