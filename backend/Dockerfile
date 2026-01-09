# 1️⃣ Use lightweight Node image  // taking the light weight image here 
FROM node:22-alpine

# 2️⃣ Set working directory inside container // inside container
WORKDIR /app

# 3️⃣ Copy only package files first (better caching) :: taking the package and package-lock
COPY package*.json ./

# 4️⃣ Install only production dependencies: install the dependecies
RUN npm install --omit=dev

# 5️⃣ Copy rest of the backend code :: copy code part
COPY . .

# 6️⃣ Expose backend port :: expose port no.
EXPOSE 5000

# 7️⃣ Start backend ::
CMD ["node", "index.js"]
