package pl.kz.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.NotBlank;

@Data
@Document(value = "dictionary")
public class Word {

    @Id
    private String id;

    @NotBlank
    private String english;

    @NotBlank
    private String polish;
    private String german;
    private String french;
}
