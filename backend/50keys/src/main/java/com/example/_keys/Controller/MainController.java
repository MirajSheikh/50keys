package com.example._keys.Controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:5173")
public class MainController {

    @GetMapping("/selectWords/{wordCount}")
    public List<List<Character>> getWords(@PathVariable String wordCount) throws IOException {
        String filePath = "D:\\50keys\\backend\\50keys\\src\\main\\resources\\static\\words"+wordCount+".txt";
        Path path = Path.of(filePath);
        String str = Files.readString(path);
        System.out.println(str);
        List<List<Character>> wordsList = new ArrayList<>();
        List<Character> word = new ArrayList<>();
        for(int i = 0; i < str.length(); i++){
            if(str.charAt(i) == ' '){
                wordsList.add(word);
                word = new ArrayList<>();
            }
            else{
                word.add(str.charAt(i));
            }
        }
        wordsList.add(word);
        return wordsList;
    }
}
