.PHONY: up down down-v restart restart-v push logs

DOCKER := $(shell command -v docker)
COMPOSE := $(DOCKER) compose

up:
	$(COMPOSE) up -d --build

down:
	$(COMPOSE) down

down-v:
	$(COMPOSE) down -v

restart:
	$(MAKE) down
	$(MAKE) up

restart-v:
	$(MAKE) down-v
	$(MAKE) up

push:
	@$(eval MSG := $(filter-out $@,$(MAKECMDGOALS)))
	@if [ -z "$(MSG)" ]; then \
		echo 'Uso: make push "mensaje de commit"'; \
		exit 1; \
	fi
	git add .
	git commit -m "$(MSG)"
	git push

logs:
	$(COMPOSE) logs -f gaboWebService

# permite pasar argumentos: make push "mensaje"
%:
	@:
