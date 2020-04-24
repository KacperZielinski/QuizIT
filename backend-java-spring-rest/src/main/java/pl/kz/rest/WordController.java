package pl.kz.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.kz.dto.WordDto;
import pl.kz.mapper.WordMapper;
import pl.kz.model.Word;
import pl.kz.repository.WordRepository;

@RestController
@RequestMapping("/api")
public class WordController {

    @Autowired
    WordRepository wordRepository;

    @CrossOrigin
    @PostMapping(value = "/word")
    public Word addWord(@RequestBody WordDto word) {
        return wordRepository.insert(WordMapper.getInstance().toWord(word));
    }

    @GetMapping(value = "/word")
    public Word getRandomWord() {
        return wordRepository.findAll().get(0);
    }
}
