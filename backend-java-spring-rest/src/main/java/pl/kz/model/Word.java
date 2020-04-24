package pl.kz.model;

import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;

@Data
@Document(value = "dictionary")
public class Word {

    @Id
    private String id;
    private String english;
    private String polish;
    private String german;
    private String french;
}
