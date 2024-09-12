FROM node:20-alpine AS builder

WORKDIR /app
COPY . .
RUN yarn install --frozen-lockfile
RUN yarn build


FROM jawg/nginx-spa:latest AS runner

WORKDIR /app
COPY --from=builder /app/dist /usr/share/nginx/html
RUN chmod -R 777 /usr/share/nginx/html