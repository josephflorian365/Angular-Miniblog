package com.fullstack.Miniblog.Controller;

import com.fullstack.Miniblog.Document.Comentario;
import com.fullstack.Miniblog.Document.Post;
import com.fullstack.Miniblog.RestRepository.PostRep;
import com.mongodb.client.result.UpdateResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin()
public class PostController {

    @Autowired
    private PostRep postRep;

    @GetMapping("/posts/")
    public List<Post> findAll(){
        return postRep.findAll();
    }

    @PostMapping("/posts")
    public Post save(@RequestBody Post post){
        return postRep.save(post);
    }

    @PostMapping("/posts/{idPost}/addcomment")
    public UpdateResult addComment(@PathVariable("idPost") String idPost, @RequestBody Comentario comentario){
        return postRep.addComment(idPost, comentario);
    }

    @GetMapping("/post/{idPost}")
    public Post find(@PathVariable("idPost") String idPost){
        return postRep.find(idPost);
    }

    @GetMapping("/post/search/{searchPost}")
    public List<Post> search(@PathVariable("searchPost") String searchPost){
        return postRep.search(searchPost);
    }
}
