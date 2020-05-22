package pl.kz.dto;

import lombok.Data;

import java.io.Serializable;

@Data
public class WordDto implements Serializable {
    private static final long serialVersionUID = 2471539214785929291L;

    private String id;
    private String english;
    private String polish;
    private String german;
    private String french;
}
