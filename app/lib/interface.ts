export interface simpleArticleCard {
  title: string;
  smallDescription: string;
  currentSlug: string;
  titleImage: any;
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
