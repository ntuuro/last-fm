## Get Started

### 1. Prerequisites

- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [Node 18](https://nodejs.org/en)
- IDE like [Intellij](https://www.jetbrains.com/idea/) or VS Code [https://code.visualstudio.com/download]
- [Docker](https://docs.docker.com/engine/install/ubuntu/)
  and [docker-compose](https://docs.docker.com/compose/install/)

### 2. Clone the project

```
git clone https://github.com/ntuuro/last-fm.git
cd lastfmapi
```

### 3. Set .env

```bash
#Copy .env.example to .env
# Change the following
    DB_HOST=host.docker.internal
    DB_PORT=33061

# Add the following
    GOOGLE_CLIENT_ID={your_id}
    GOOGLE_CLIENT_SECRET={your_secret}
    GOOGLE_REDIRECT_URI=http://localhost:3000/callback

    LAST_FM_BASE_URL=https://ws.audioscrobbler.com/2.0/
    LAST_FM_API_KEY={your_last_fm_key}
    LAST_FM_USER={your_fm_user}
```

### 3. Run docker compose

> run docker compose up
> inside a container run `php artisan key:generate && php artisan migrate `

> Open [http://localhost](http://localhost)

### 4. Web

```
cd last-fm-web
```

```bash
> npm install
# or
> yarn or yarn install

> npm run dev
```

```bash
yarn dev
# or
npm run dev
```

> Open [http://localhost:3000](http://localhost:3000)

## Contributors

- Elie K. Gashagaza <elie.gash42@gmail.com>
