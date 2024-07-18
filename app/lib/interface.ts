export interface simpleArticleCard {
  title: string;
  currentSlug: string;
  titleImage: any;
  creationDate: string;
}

export interface fullArticle {
  currentSlug: string;
  title: string;
  content: any;
  titleImage: any;
}

export interface fullPage {
  currentSlug: string;
  title: string;
  content: any;
}

export interface linkItem {
  title: string;
  link: string;
}

export interface navItem {
  title: string;
  items: linkItem[];
}
