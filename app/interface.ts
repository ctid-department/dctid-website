export interface simpleArticleCard {
  title: string;
  currentSlug: string;
  heroImage: any;
  creationDate: string;
  date: string;
}

export interface fullArticle {
  currentSlug: string;
  title: string;
  content: any;
  heroImage: any;
}

export interface fullPage {
  currentSlug: string;
  title: string;
  modules: any;
}

export interface linkItem {
  title: string;
  link: string;
}

export interface navItem {
  title: string;
  type: "dropdown" | "link";
  items?: linkItem[];
  link?: linkItem;
}
