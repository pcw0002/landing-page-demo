type Card = {
  title: string;
  description: string;
  content?: string;
  footer?: string;
  image: string;
  icon: IconType;
}

export enum IconType {
  Location,
  GeoFence,
  HistoricalData,
  ZoneReporting,
  ActivityAlerts,
  Sensors
}


export const cardData: Card[] = [
  {
    title: 'Location tracking',
    description: 'Automatically capture periodic coordinates for each animal.',
    content: 'Automatically collect periodic locations of each animal',
    footer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
    image: 'https://picsum.photos/200/300',
    icon: IconType.Location
  },
  {
    title: 'Historical data',
    description: 'View previous locations and activity history for your animals.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
    footer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
    image: 'https://picsum.photos/200/300',
    icon: IconType.HistoricalData

  },
  {
    title: 'Geo-fencing',
    description: 'Designate your pens and receive notifications for animals that escape.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
    footer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
    image: 'https://picsum.photos/200/3000',
    icon: IconType.GeoFence

  },
  {
    title: 'Zone reporting',
    description: 'Create mesh zones with MicroTraks receivers to actively monitor animals, like at water or feed stations.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
    footer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
    image: 'https://picsum.photos/200/300',
    icon: IconType.ZoneReporting

  },
  {
    title: 'Activity alerts',
    description: 'Collect animal activity details and get alerts based on activity thresholds.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
    footer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
    image: 'https://picsum.photos/200/300',
    icon: IconType.ActivityAlerts

  },
  {
    title: 'Ranch sensors',
    description: 'Remotely monitor ranch infrastructure with available water, gate, and other sensors.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
    footer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
    image: 'https://picsum.photos/200/300',
    icon: IconType.Sensors

  }
]
