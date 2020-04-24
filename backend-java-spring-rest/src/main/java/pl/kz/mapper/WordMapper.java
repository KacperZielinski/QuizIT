package pl.kz.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import pl.kz.dto.WordDto;
import pl.kz.model.Word;

@Mapper
public interface WordMapper {

    static WordMapper getInstance() {
        return Mappers.getMapper(WordMapper.class);
    }

    WordDto toWordDto(Word word);

    Word toWord(WordDto wordDto);
}
