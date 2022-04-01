class Site {
  constructor() {
    this.boards = [];
  }

  findBoardByName(boardName) {
    return this.boards.find((board) => board.boardName === boardName);
  }

  addBoard(board) {
    // board.boardName === this.findBoardByName(board.boardName).boardName
    if (this.findBoardByName(board.boardName)) {
      throw new Error("중복");
    }
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
      // this.boardSite =
    }
  }

  publish(article) {
    // console.log(this.boardName)
    // if ()********************************
    return this.articles.push(article)
  }

  getAllArticles() {
    // return this.boardName
  }

}

class Article {
  constructor(subject, content, author) {
    if (subject === '' || content === '' || author === '' || subject === null || content === null || author === null) {
      throw new Error('subject, content, author 정보없음');
    } else {
      this.ArticleSubject = subject;
      this.ArticleContent = content;
      this.ArticleAuthor = author;
    }
  }

  getAllComments() {
  }

  reply() {
  }
}


class Comment {
  constructor(content, author) {
    if (content === "" || content === null || author === "" || author === null) {
      throw new Error("Comment 정보없음");
    } else {
      this.CommentContent = content;
      this.CommentAuthor = author;
    }
  }
}


module.exports = {
  Site,
  Board,
  Article,
  Comment
};
