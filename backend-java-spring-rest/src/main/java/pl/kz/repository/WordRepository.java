package pl.kz.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import pl.kz.model.Word;

import java.util.List;

@Repository
public interface WordRepository extends MongoRepository<Word, String> {
    List<Word> findAll();
}
