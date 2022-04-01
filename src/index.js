class Site {
  constructor() {
    this.boards = [];
  }

  findBoardByName(boardName) {
    return this.boards.find((board) => board.boardName === boardName);
  }

  addBoard(board) {
    if (this.findBoardByName(board.boardName)) {
      throw new Error("중복");
    }
    board.myBoard = true;
    return this.boards.push(board);
  }
}

class Board {
  constructor(boardName) {
    if (boardName === "" || boardName === null) {
      throw new Error("boardName 정보없음");
    } else {
      this.boardName = boardName;
      this.articles = [];
      this.myBoard = false;
      // this.boardSite =
    }
  }

  publish(article) {
    if (!this.myBoard)
      throw new Error("Site에 추가되지 않음");
    else {
      article.id = `${this.boardName}-`+Math.random()
      article.createdDate = new Date().toISOString()
      this.articles.push(article)
    }

  }

  getAllArticles() {
    return this.articles
  }

}

class Article {
  //article은 object로 들어옴. 따라서 분리해주어야 함. {}도 씌워주어야 함.
  constructor({subject, content, author}) {
    if (subject === '' || subject === null) {
      throw new Error('subject 정보없음');
    }
    else if (content === '' || content === null) {
      throw new Error('content 정보없음');
    }
    else if (author === '' || author === null) {
      throw new Error('author 정보없음');
    }
    else {
      this.subject = subject;
      this.content = content;
      this.author = author
      this.comments = []
    }
  }

  getAllComments() {
    return this.comments
  }

  reply(comment) {
    if (!this.id)
      throw new Error("article에 추가되지 않음");
    else {
      comment.createdDate = new Date().toISOString()
      this.comments.push(comment)
    }
  }
}


class Comment {
  constructor({content, author}) {
    if (content === "" || content === null || author === "" || author === null) {
      throw new Error("Comment 정보없음");
    } else {
      this.content = content;
      this.author = author;
    }
  }
}


module.exports = {
  Site,
  Board,
  Article,
  Comment
};
