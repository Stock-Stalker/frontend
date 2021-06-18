<!-- logo -->
<p align="center">
  <img width="300" src="public/assets/icon/icon.png">
</p>

<!-- short description -->
<h3 align="center">The frontend user interface to StockStalker</h3>
<h1 align="center">StockStalker - Frontend </h1>

<p align="center">
    <!-- license -->
    <img src="https://img.shields.io/github/license/Stock-Stalker/frontend" />
    <!-- code size  -->
    <img src="https://img.shields.io/github/languages/code-size/Stock-Stalker/frontend" />
    <!-- issues -->
    <img src="https://img.shields.io/github/issues/Stock-Stalker/frontend" />
    <!-- pull requests -->
    <img src="https://img.shields.io/github/issues-pr/Stock-Stalker/frontend" />
    <!-- number of commits per year -->
    <img src="https://img.shields.io/github/commit-activity/y/Stock-Stalker/frontend" />
    <!-- last commit -->
    <img src="https://img.shields.io/github/last-commit/Stock-Stalker/frontend" />
    <!-- docker image size -->
    <img src="https://img.shields.io/docker/image-size/starlightromero/stockstalker-frontend" />
    <!-- docker pulls -->
    <img src="https://img.shields.io/docker/pulls/starlightromero/stockstalker-frontend" />
    <!-- website status -->
    <img src="https://img.shields.io/website?url=https%3A%2F%2Fstockstalker.tk" />
</p>


## Table of Contents

- [Make Commands](#make-commands)
- [Required Software](#required-software)
- [How to Run](#how-to-run)


## Make Commands

`stop`: Stop the running server

`rm`: Remove all unused containers

`rm-all`: Stop and remove all containers

`rmi`: Remove stockstalker images without removing base images. Useful for speeding up build time when switching from one start script to another such as `make start` to `make test`

`rmi-all`: Remove all images

`purge`: _Use with caution_ Completely purge Docker containers, networks, images, volumes, and cache

`lint`: Run prettier and eslint

`build`: Build development server without running the server

`start`: Start development server at port `8080`

`reload`: Stop development server and restart the server at port `8080`

`hard-reload`: Stop container, remove container, rebuild container, and start development server

`debug`: Start development server in debug mode

`test-security`: Test security vulnerabilities (must have [snyk](https://support.snyk.io/hc/en-us/articles/360003812538-Install-the-Snyk-CLI) installed globally)

`test-image-security`: Test security vulnerabilities for base images (must have [snyk](https://support.snyk.io/hc/en-us/articles/360003812538-Install-the-Snyk-CLI) installed globally)


## Required Software

- [Docker](https://docs.docker.com/get-docker/)
- [docker-comopse](https://docs.docker.com/compose/install/)
- [CMake](https://cmake.org/install/)


## How to Run

Clone the repo
```zsh
git clone git@github.com:Stock-Stalker/frontend.git
```

cd into the directory
```zsh
cd frontend
```

Rename `.env.sample` to `.env`
```zsh
mv .env.sample .env
```

Edit the `.env` file to contain your environment variables
```zsh
vim .env
```

Run the application!
```zsh
make start
```

To stop the app press `CNTRL + C`. Then run:
```zsh
make stop
```
