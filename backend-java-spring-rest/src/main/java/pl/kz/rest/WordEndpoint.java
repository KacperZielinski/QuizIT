package pl.kz.rest;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.kz.model.Word;

@RestController
public class WordEndpoint {

    @PostMapping
    public String addWord(Word word) {
        return null;
    }
}
