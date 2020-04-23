package pl.kz.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import pl.kz.model.Word;

@Repository
public interface DictionaryRepository extends MongoRepository {
    Word findByName(String name);
}
