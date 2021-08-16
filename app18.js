
// class iterator
//static key for function # research

class Article {

    constructor(title, date) {
      this.title = title
      this.date = date
    }

    static compare(a, b) {
        console.log(a.date , b.date , a.date-b.date) //2019-12-31T18:30:00.000Z 2020-01-31T18:30:00.000Z -2678400000
                                                    //2020-11-30T18:30:00.000Z 2019-12-31T18:30:00.000Z 28944000000
                                                    //2020-11-30T18:30:00.000Z 2020-01-31T18:30:00.000Z 26265600000
      return a.date - b.date;
    }

  }

  const  articles = [
    new Article("HTML", new Date(2020, 1, 1)),
    new Article("CSS", new Date(2020, 0, 1)),
    new Article("JavaScript", new Date(2020, 11, 1))
  ];
  
  articles.sort(Article.compare);
  
  console.log( articles[0].title ); //CSS