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
  heroImage: any;
  modules: any;
  date: string;
}

export interface fullPage {
  currentSlug: string;
  title: string;
  modules: any;
  heroImage: any;
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
