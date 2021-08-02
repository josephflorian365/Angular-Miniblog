package com.fullstack.Miniblog.RestRepository;

import com.fullstack.Miniblog.Document.Comentario;
import com.fullstack.Miniblog.Document.Post;
import com.mongodb.client.result.UpdateResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class PostRep {

    @Autowired
    private MongoTemplate mongoTemplate;

    public Post save(Post post){
        return mongoTemplate.save(post);
    }

    public UpdateResult addComment(String idPost, Comentario comentario){
        return mongoTemplate.updateFirst(
                new Query().addCriteria(Criteria.where("_id").is(idPost)),
                new Update().addToSet("comentarios", comentario),
                "Post"
        );
    }

    public List<Post> findAll(){
        return mongoTemplate.findAll(Post.class);
    }

    public Post find(String idPost){
        return mongoTemplate.find(new Query().addCriteria(Criteria.where("_id").is(idPost)), Post.class).get(0);
    }
    
    public List<Post> search(String search){
        return mongoTemplate.aggregate(Aggregation.newAggregation(
                Aggregation.match(new Criteria().orOperator(
                        Criteria.where("nombre").regex(search),
                        Criteria.where("descripcion").regex(search)
                ))
        ),"Post", Post.class).getMappedResults();
    }
}
