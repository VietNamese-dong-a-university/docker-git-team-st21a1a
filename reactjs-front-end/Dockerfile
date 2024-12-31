# Bước 1: Sử dụng image node làm môi trường xây dựng
FROM node:latest

# Bước 2: Đặt thư mục làm việc trong container
WORKDIR /app/reactjs-front-end

# Bước 3: Sao chép package.json và package-lock.json vào container và cài đặt các dependency
COPY package.json package-lock.json ./

RUN npm install

# Bước 4: Sao chép toàn bộ mã nguồn của ứng dụng vào container
COPY . .

# Bước 5: Expose cổng 3000 cho ứng dụng React
EXPOSE 3000

# Bước 6: Chạy ứng dụng React trên cổng 3000
CMD ["npm", "start"]
