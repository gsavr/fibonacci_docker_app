FROM node:16-alpine as builder

WORKDIR '/app'
COPY ./package.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx

# copy from builder phase
COPY --from=builder /app/build /usr/share/nginx/html
# do not need to specificaly run anything to start nginx container
