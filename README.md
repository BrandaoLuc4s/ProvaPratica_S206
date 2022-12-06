# ProvaPratica_S206

Para executar o ProjetoPratico_karate e obter o relatório de testes:

mvn test –Dtest=PokeRunner

Para executar o ProjetoPratico_cypress, basta rodar o comando dentro da pasta /ProjetoPratico:

./node_modules/.bin/cypress open

Para executar o ProjetoPratico_cypress e emitir o relatório em vídeo e .html, rodar o comando:

./node_modules/.bin/cypress run --spec 'cypress/e2e/**/'
