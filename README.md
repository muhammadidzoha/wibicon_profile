# Wibicon Profile

## 1. Install Dependencies
Pastikan sudah terinstall:

- Node.js (versi 18+ disarankan) / Docker Dekstop

## 2. Clone Repository
```bash
git clone https://github.com/muhammadidzoha/wibicon_profile.git
cd wibicon_profile
code .
```

## 3. Install Node Module
```bash
npm i
```

# 4. Jalankan App
```bash
npm run dev
```

# 5. Hanya jika menggunakan Docker dengan (docker-compose.yml)
- Edit file docker-compose.yml yang sudah tersedia menjadi:
```yaml
version: "3.9"

services:
  wibicon_profile:
    image: muhammadidzoha/wibicon_profile
    container_name: wibicon_profile
    ports:
      - "8080:80"
    restart: unless-stopped
```
- Jalankan App dengan perintah:
```bash
docker compose up -d
```
- Buka app: http://localhost:8080/

# 6. Hanya jika menggunakan Docker tanpa (docker-compose.yml) Tidak Perlu Clone Repo
- Buka terminal docker, jalankan:
```bash
docker login
docker pull muhammadidzoha/wibicon_profile
docker run -d -p 8080:80 muhammadidzoha/wibicon_profile
```
- Jalankan App dengan perintah:
```bash
docker run -d -p 8080:80 muhammadidzoha/wibicon_profile
```
- Buka app: http://localhost:8080/

