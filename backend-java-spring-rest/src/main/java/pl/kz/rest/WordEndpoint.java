package pl.kz.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.kz.dto.WordDto;
import pl.kz.model.Word;
import pl.kz.repository.WordRepository;

@RestController
@RequestMapping("/api")
public class WordEndpoint {

    @Autowired
    WordRepository wordRepository;

    @CrossOrigin
    @PostMapping(value = "/word")
    public String addWord(@RequestBody WordDto word) {
        Word w = new Word();
        w.setEnglish(word.getEnglish());
        w.setFrench(word.getFrench());
        w.setGerman(word.getGerman());
        w.setPolish(word.getPolish());

        wordRepository.insert(w);
        return word.toString();
    }

    @GetMapping(value = "/word")
    public String getWord() {
        return "test";
    }
}
