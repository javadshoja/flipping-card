import { FlippingCard } from "./flipping-card";

interface CardData {
  id: string;
  front: {
    imageSrc: string;
    imageAlt: string;
    title: string;
    description: string;
  };
  back: {
    description: string;
    buttonText: string;
  };
}

const cardsData: Array<CardData> = [
  {
    id: "design-excellence",
    front: {
      imageSrc:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
      imageAlt: "Design Excellence",
      title: "Design Excellence",
      description:
        "Beautiful, intuitive designs that create meaningful connections with users.",
    },
    back: {
      description:
        "We craft exceptional user experiences through thoughtful design, user research, and modern design systems that ensure consistency and accessibility.",
      buttonText: "View Portfolio",
    },
  },
  {
    id: "data-analytics",
    front: {
      imageSrc:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      imageAlt: "Data Analytics",
      title: "Data Analytics",
      description:
        "Transform raw data into actionable insights that drive informed decision-making.",
    },
    back: {
      description:
        "Our data analytics platform provides real-time insights, predictive modeling, and interactive dashboards to help businesses make data-driven decisions.",
      buttonText: "Learn More",
    },
  },
];

interface GenericCardFrontProps {
  data: CardData["front"];
}

function GenericCardFront({ data }: GenericCardFrontProps) {
  return (
    <div className="flex h-full w-full flex-col p-3">
      <img
        alt={data.imageAlt}
        className="h-auto min-h-0 w-full flex-grow rounded-md object-cover"
        src={data.imageSrc}
      />
      <div className="p-2">
        <h3 className="mt-2 text-base font-semibold">{data.title}</h3>
        <p className="text-muted-foreground mt-2 text-[13.5px]">
          {data.description}
        </p>
      </div>
    </div>
  );
}

interface GenericCardBackProps {
  data: CardData["back"];
}

function GenericCardBack({ data }: GenericCardBackProps) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-6">
      <p className="text-muted-foreground mt-2 text-center text-[13.5px]">
        {data.description}
      </p>
      <button className="bg-foreground text-background mt-6 flex h-8 w-min items-center justify-center rounded-md px-4 py-2 text-[13.5px] whitespace-nowrap">
        {data.buttonText}
      </button>
    </div>
  );
}

export default function FlippingCardDemo() {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-8">
      {cardsData.map((card) => (
        <FlippingCard
          key={card.id}
          backContent={<GenericCardBack data={card.back} />}
          frontContent={<GenericCardFront data={card.front} />}
          width={300}
        />
      ))}
    </div>
  );
}
