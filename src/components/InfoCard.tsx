import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

interface InfoCardProps {
  title: string;
  description: string;
  content?: string;
  footer?: string;
}

const InfoCard = ({
  title,
  description,
  content,
  footer,
}: InfoCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="text-sm font-thin">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {content}
      </CardContent>
      {footer && (
        <>
          <Separator className="mb-2" />
          <CardFooter className="text-xs font-thin">
            {footer}
          </CardFooter>
        </>
      )
      }
    </Card>
  );
}

export default InfoCard;