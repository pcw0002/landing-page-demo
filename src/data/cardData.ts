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
    description: 'Automatically collects periodic locations of each animal',
    content: 'Automatically collects periodic locations of each animal',
    footer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
    image: 'https://picsum.photos/200/300',
    icon: IconType.Location
  },
  {
    title: 'Historical data',
    description: 'View location and activity history for your animals',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
    footer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
    image: 'https://picsum.photos/200/300',
    icon: IconType.HistoricalData

  },
  {
    title: 'Geo-fencing',
    description: 'Receive notifications for animals that escape their pens',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
    footer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
    image: 'https://picsum.photos/200/300',
    icon: IconType.GeoFence

  },
  {
    title: 'Zone reporting',
    description: 'MicroTraks receivers create mesh zones that actively monitor animals, such as at water or feed stations',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
    footer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
    image: 'https://picsum.photos/200/300',
    icon: IconType.ZoneReporting

  },
  {
    title: 'Activity alerts',
    description: 'Collect fine-grain animal activity and receive alerts based on activity thresholds',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
    footer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
    image: 'https://picsum.photos/200/300',
    icon: IconType.ActivityAlerts

  },
  {
    title: 'Ranch sensors',
    description: 'Water, gate, and other sensors are available to remotely monitor ranch infrastructure',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
    footer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
    image: 'https://picsum.photos/200/300',
    icon: IconType.Sensors

  }
]
