import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardIcon,
} from "@/components/ui/card";
import { IconType } from "@/data/cardData";
import LocationIcon from "@mui/icons-material/LocationOnOutlined";
import SensorIcon from "@mui/icons-material/SensorsOutlined";
import QueryStatsOutlinedIcon from "@mui/icons-material/QueryStatsOutlined";
import AnnouncementOutlinedIcon from "@mui/icons-material/RunningWithErrorsOutlined";
import JoinInnerOutlinedIcon from '@mui/icons-material/HubOutlined';
import AutoAwesomeMosaicOutlinedIcon from '@mui/icons-material/ViewQuiltOutlined';

interface InfoCardProps {
  title: string;
  description: string;
  content?: string;
  footer?: string;
  icon: IconType;
}

const getIcon = (icon: IconType) => {
  switch (icon) {
    case IconType.Location:
      return (
        <div className="rounded-full bg-green-700">
          {" "}
          <LocationIcon
            sx={{ color: "white" }}
            className="p-1.5 w-12 h-12"
          />
        </div>
      );
    case IconType.Sensors:
      return (
        <div className="rounded-full bg-green-700">
          <SensorIcon
            sx={{ color: "white" }}
            className="p-1.5 w-12 h-12"
          />
        </div>
      );
    case IconType.GeoFence:
      return (
        <div className="rounded-full bg-green-700">
          <AutoAwesomeMosaicOutlinedIcon
            sx={{ color: "white" }}
            className="p-1.5 w-12 h-12"
          />
        </div>
      );
    case IconType.HistoricalData:
      return (
        <div className="rounded-full bg-green-700">
          <QueryStatsOutlinedIcon
            sx={{ color: "white" }}
            className="p-2 w-12 h-12"
          />
        </div>
      );

    case IconType.ZoneReporting:
      return (
        <div className="rounded-full bg-green-700">
          {" "}
          <JoinInnerOutlinedIcon
            sx={{ color: "white" }}
            className="p-2 w-12 h-12"
          />
        </div>
      );

    case IconType.ActivityAlerts:
      return (
        <div className="rounded-full bg-green-700">
          <AnnouncementOutlinedIcon
            sx={{ color: "white" }}
            className="p-2 w-12 h-12 scale-x-[-1] "
          />
        </div>
      );
    default:
      return <LocationIcon />;
  }
};

const InfoCard = ({
  title,
  description,
  content,
  footer,
  icon,
}: InfoCardProps) => {
  return (
    <Card>
      <CardIcon>{getIcon(icon)}</CardIcon>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="text-sm">{description}</CardDescription>
      </CardHeader>
      {/* <CardContent>
        {content}
      </CardContent>
       */}
      {/* {footer && (
        <>
          <Separator className="mb-2" />
          <CardFooter className="text-xs">
            {footer}
          </CardFooter>
        </>
      )
      } */}
    </Card>
  );
};

export default InfoCard;
