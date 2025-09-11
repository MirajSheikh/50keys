package com.example._keys.Controller;

import org.springframework.core.io.ClassPathResource;
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
    public List<List<Character>> getWords(@PathVariable int wordCount) throws IOException {
        ClassPathResource path = new ClassPathResource("static/words.txt");
        String str = new String(path.getInputStream().readAllBytes());
        System.out.println(str);
        double randomStart = Math.round(Math.random()*100);
        System.out.println(randomStart);
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
        List<List<Character>> words = new ArrayList<>();
        for(int i = (int) randomStart; i < (int) randomStart + wordCount; i++){
            words.add(wordsList.get(i));
        }
        return words;
    }
}
