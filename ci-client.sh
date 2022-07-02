echo "hello"
docker compose -f docker-compose.ci.client.yml up --build
# docker compose -f docker-compose.ci.client.yml up --build --exit-code-from client-ci
