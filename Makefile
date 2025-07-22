.PHONY: up down down-v restart restart-v push

up:
    docker-compose up -d --build

down:
    docker-compose down

down-v:
    docker-compose down -v

restart: down up

restart-v: down-v up

push:
    @if [ -z "$(m)" ]; then \
        echo "Usage: make push m=\"commit message\""; \
        exit 1; \
    fi
    git add .
    git commit -m "$(m)"
    git push
