import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface Props {
  href: string;
  title: string;
  date?: string;
  imageSrc?: any;
}

const ArticleCard: React.FC<Props> = async ({
  href,
  title,
  date,
  imageSrc,
}) => {
  return (
    <Card className="shadow rounded">
      {imageSrc ? (
        <Link href={href}>
          <Image
            src={imageSrc}
            alt="image"
            width={500}
            height={500}
            className="rounded-t h-[200px] object-cover min-w-full"
          />
        </Link>
      ) : (
        <></>
      )}

      <CardContent className="p-4">
        <Link href={href}>
          <h3 className="text-md line-clamp-2 font-semibold text-ctid-taupe hover:underline">
            {title}
          </h3>
        </Link>
        {date ? (
          <p className="line-clamp-3 text-xs mt-1 text-ctid-taupe">{date}</p>
        ) : (
          <></>
        )}
      </CardContent>
    </Card>
  );
};

export default ArticleCard;
