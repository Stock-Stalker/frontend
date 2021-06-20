-include secrets.mk
compose = docker-compose
dev = -f docker-compose.dev.yml
build = -f docker-compose.build.yml

build :
				TAG=$$(date +%m%d%H%M%S) && ${compose} ${dev} build --force-rm --no-cache

start:
				TAG=$$(date +%m%d%H%M%S) && ${compose} ${dev} up

stop:
				${compose} ${dev} down --remove-orphans

debug:
				TAG=$$(date +%m%d%H%M%S) ${compose} ${dev} --verbose up

start-build:
				TAG=$$(date +%m%d%H%M%S) && ${compose} ${build} up

stop-build:
				${compose} ${build} down --remove-orphans

reload: stop start

hard-reload: stop rmi start

test-security:
				snyk config set api=$(snyk_auth_token) && snyk test

test-image-security:
				snyk config set api=$(snyk_auth_token) && snyk container test node:lts-buster-slim --file=Dockerfile --fail-on=upgradable

lint:
				npm run lint

rm:
				docker container prune -f
				
rm-all:
				docker stop $$(docker ps -aq) && docker rm $$(docker ps -aq)

rmi:
				docker rmi frontend_frontend

rmi-all:
				docker rmi $$(docker images -q)
	
purge:
				docker system prune --volumes --all -f