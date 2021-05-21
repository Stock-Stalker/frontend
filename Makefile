-include secrets.mk

build :
				docker-compose build --force-rm --no-cache

start:
				docker-compose up

stop :
				docker-compose down --remove-orphans

debug :
				docker-compose --verbose up

reload:
				docker-compose down && docker-compose up

test-security:
				snyk config set api=$(snyk_auth_token) && snyk test

test-image-security:
				snyk config set api=$(snyk_auth_token) && snyk container test node:lts-alpine --file=Dockerfile --fail-on=upgradable

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