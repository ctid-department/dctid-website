import ArticlesList from "./modules/ArticlesList";
import EventsList from "./modules/EventsList";
import HeroSplit from "./modules/HeroSplit";
import ImageModule from "./modules/ImageModule";
import RichTextModule from "./modules/RichTextModule";

export default function Modules({
  modules,
  page,
}: {
  modules?: any[];
  page?: any;
}) {
  return (
    <>
      {modules?.map((module) => {
        switch (module._type) {
          case "hero.split":
            return <HeroSplit {...module} key={module._key} />;
          case "richtext-module":
            return <RichTextModule {...module} key={module._key} />;
          case "articles-list":
            return <ArticlesList {...module} key={module._key} />;
          case "events-list":
            return <EventsList {...module} key={module._key} />;
          case "image-module":
            return <ImageModule {...module} key={module._key} />;
          default:
            return <div data-type={module._type} key={module._key} />;
        }
      })}
    </>
  );
}
