import getVideoId from 'get-video-id'
import {cn} from '@/lib/utils';

export default function VideoModule({
  url,
  caption,
}: Partial<{
  caption?: string;
  url: string;
}>) {

  const videoWrapperCSS = cn(
    "flex flex-col mx-auto gap-2",
    "w-full h-[calc(100vw*0.75)]",
    "md:w-[640px] md:h-[480px]"
  )

  const videoCSS = cn(
    "w-full h-full"
  );

  return (
    <section className="my-8">
      <div className={videoWrapperCSS}>
        <iframe
          width="0"
          height="0"
          src={url ? `https://www.youtube.com/embed/${getVideoId(url).id}` : ""}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className={videoCSS}
        ></iframe>
        {caption ? (
          <div className="text-center text-sm italic">{caption}</div>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
}
