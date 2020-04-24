package pl.kz.mapper;

import org.mapstruct.Mapper;
import pl.kz.dto.WordDto;
import pl.kz.model.Word;

@Mapper(componentModel = "spring")
public interface WordMapper {
    WordDto toWordDto(Word word);

    Word toWord(WordDto wordDto);
}
