echo "hello"
docker compose -f docker-compose.ci.api.yml up --build
# docker compose -f docker-compose.ci.api.yml up --build --exit-code-from api-ci
