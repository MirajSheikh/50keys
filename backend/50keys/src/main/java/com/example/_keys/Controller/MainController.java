package com.example._keys.Controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:5173")
public class MainController {

    @GetMapping("/words")
    public List<String> getWords() throws IOException{
        String filePath = "D:\\50keys\\backend\\50keys\\src\\main\\resources\\static\\words.txt";
        Path path = Path.of(filePath);
        System.out.println(Files.readString(path));
        String str = Files.readString(path);
        List<String> words = new ArrayList<>();
        int begin = 0;
        for(int i = 0; i < str.length(); i++){
            if(str.charAt(i) == ' '){
                words.add(str.substring(begin, i));
                begin = i+1;
            }
        }
        return words;
    }
}
