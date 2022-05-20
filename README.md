## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

## Data

Data for hacks and users are present in
pages/api/hacks/data.ts
pages/api/users/data.ts

## Deployement url

https://internal-hack.vercel.app/

## Docker Build command

docker build . -t internal-hacks

## Docker run command

docker run -d -p ::3000 internal-hacks
This command will randomly map any free host port to the docker container

If you want to map a specific local-port
docker run -d -p [host-port]::3000 internal-hacks
