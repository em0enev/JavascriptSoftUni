function solve() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }
    }

    Post.prototype.toString = function () {
        return `Post: ${this.title}\nContent: ${this.content}`
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(comment);
        }
    }

    SocialMediaPost.prototype.toString = function () {
        return Post.prototype.toString.call(this)
            + `\nRating: ${this.likes - this.dislikes}`
            + (this.comments.length > 0 ? `\nComments:\n * ${this.comments.join("\n" + " * ")}` : "")
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content)
            this.views = views;
        }

        view() {
            this.views += 1
            console.log(this)
            return this;
        }
    }

    BlogPost.prototype.toString = function () {
        return Post.prototype.toString.call(this)
            + `\nViews: ${this.views}`
    }

    return {
        Post,
        SocialMediaPost,
        BlogPost
    }
}
