package ProvaPratica.PokeAPI;

import com.intuit.karate.junit5.Karate;

class PokeRunner {

    @Karate.Test
    Karate testPokemonKarate() {
        return Karate.run("Pokemon").relativeTo(getClass());
    }

}
