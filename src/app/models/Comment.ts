
export class Comment{
    user: String;
    comment: String;

    constructor(user:String, comment: String){
        this.user = user;
        this.comment = comment;
    }
}

export interface CommentResponse{
    user: String;
    comment: String;
}