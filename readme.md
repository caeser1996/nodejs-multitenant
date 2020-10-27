# Setup Instructions

## Run postgres using docker compose in backgroud

`docker-compose up -d`

### Once Done install node dependencies

> npm install

### Install sequelize-cli

>npm install --save sequelize-cli

### Migrate the master tables 

>sequelize db:migrate

### To Start the prod server 
>npm run start:dev

#### Application will be running at 
>localhost:7000


#### Create a posgres db and use it in .env 

####