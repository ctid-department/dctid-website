import ArticlesList from "./modules/ArticlesList";
import EventsList from "./modules/EventsList";
import HeroSplit from "./modules/HeroSplit";
import ImageModule from "./modules/ImageModule";
import VideoModule from "./modules/VideoModule";
import RichTextModule from "./modules/RichTextModule";
import ProfileCard from "./modules/ProfileCard";
import ProfilesList from "./modules/ProfilesList";
import Slideshow from "./modules/Slideshow";
import FeatureList from "./modules/FeatureList"

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
          case "video-module":
            return <VideoModule {...module} key={module._key} />;
          case "profile-card":
            return <ProfileCard {...module} key={module._key} />;
          case "profiles-list":
            return <ProfilesList {...module} key={module._key} />;
          case "slideshow":
            return <Slideshow {...module} key={module._key} />;
          case "feature-list":
            return <FeatureList {...module} key={module._key} />;
          default:
            return <div data-type={module._type} key={module._key} />;
        }
      })}
    </>
  );
}
