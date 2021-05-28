-include secrets.mk

build :
				export DOCKER_CONTENT_TRUST=1 && docker compose -f docker-compose.dev.yml build --force-rm --no-cache

start:
				export DOCKER_CONTENT_TRUST=1 && docker compose -f docker-compose.dev.yml up

stop :
				docker compose -f docker-compose.dev.yml down --remove-orphans

debug :
				docker compose -f docker-compose.dev.yml --verbose up

reload:
				docker compose -f docker-compose.dev.yml down && docker compose -f docker-compose.dev.yml up

hard-reload:
				docker compose -f docker-compose.dev.yml down && docker rmi frontend_frontend && docker compose -f docker-compose.dev.yml up

test-security:
				snyk config set api=$(snyk_auth_token) && snyk test

test-image-security:
				snyk config set api=$(snyk_auth_token) && snyk container test node:lts-buster-slim --file=Dockerfile --fail-on=upgradable

lint:
				npm run lint

rm :
				docker container prune -f
				
rm-all:
				docker stop $$(docker ps -aq) && docker rm $$(docker ps -aq)

rmi :
				docker rmi frontend_frontend

rmi-all:
				docker rmi $$(docker images -q)
	
purge:
				docker system prune --volumes --all -f