export interface ResponseNewsApi {
  status: string;
  totalResults: number;
  articles: Articles;
}

export type Articles = Article[];

export interface Source {
  id?: string;
  name: string;
}

export interface Article {
  source: Source;
  author?: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content?: string;
}
