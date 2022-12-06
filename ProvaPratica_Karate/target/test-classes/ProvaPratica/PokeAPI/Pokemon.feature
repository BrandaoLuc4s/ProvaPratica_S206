Feature: Testando API PokeAPI

Background: Executa antes de cada teste.
    * def url_base = 'https://pokeapi.co/api/v2/'

Scenario: Testando o retorno 'pokemon/charizard' com o método BackGround.
    Given url url_base
    And path 'pokemon/charizard'
    When method get
    Then status 200

Scenario: Testando o retorno 'pokemon/Lucas' com falha com o método BackGround.
    Given url url_base
    And path 'pokemon/Lucas'
    When method get
    Then status 404

Scenario: Testando se o retorno pokemon/charizard, apresenta o id correto.
    Given url url_base
    And path 'pokemon/charizard'
    When method get
    Then status 200
    And match response.name == "charizard"
    And match response.id == 6

Scenario: Testando se o elemento "name" é do tipo string.
    Given url url_base
    And path 'pokemon/charizard'
    When method get
    Then status 200
    And match response.name == "#string"

Scenario: Criando um novo elemento com falha utilizando o método Post.
    Given url url_base
    And path 'pokemon/charizard'
    And request {name: 'voador'}
    When method post
    Then status 404




