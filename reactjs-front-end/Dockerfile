# B1: Use image button as building environment.
FROM node:latest

# B2: Set working directory in container
WORKDIR /app/reactjs-front-end

# Bước 3: Sao chép package.json và package-lock.json vào container và cài đặt các dependency
COPY package.json package-lock.json ./

RUN npm install

# Bước 4: Sao chép toàn bộ mã nguồn của ứng dụng vào container
COPY . .

# B5: Expose port 3000 for React app
EXPOSE 3000

# Bước 6: Chạy ứng dụng React trên cổng 3000
CMD ["npm", "start"]
