FROM node
WORKDIR /app/front
COPY package.json /app/front
COPY package-lock.json /app/front
RUN npm i
COPY . /app/front
EXPOSE 5173
CMD ["npm", "run", "dev"]
