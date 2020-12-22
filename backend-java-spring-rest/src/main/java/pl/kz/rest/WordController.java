package pl.kz.rest;

import lombok.extern.slf4j.Slf4j;
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

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Slf4j
@CrossOrigin
@RestController
@RequestMapping("/api")
public class WordController {

    @Autowired
    WordRepository wordRepository;

    @Autowired
    WordMapper mapper;

    @PostMapping(value = "/word")
    public Word addWord(@RequestBody WordDto word) {
        log.info("Received " + word.toString());
        return wordRepository.insert(mapper.toWord(word));
    }

    @GetMapping(value = "/word")
    public Word getRandomWord() {
        return wordRepository.findAll().get(0);
    }

    @GetMapping(value = "/quiz/rand")
    public List<Word> getRandomQuiz() throws InterruptedException {
        // TODO make it more performant and clean..
        List<Word> chosenWords = new ArrayList<>(4);
        List<Word> words = wordRepository.findAll();

        if(words.size() >= 4) {
            for (int i = 0; i < 4; i++) {
                Random random = new Random();
                chosenWords.add(words.get(Math.abs(random.nextInt() % words.size())));
                Thread.sleep(Math.abs(random.nextInt() % 1000));
            }
        }

        return chosenWords;
    }
}
