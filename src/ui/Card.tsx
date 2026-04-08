import { ReactNode } from "react";

type CardProps = {
  icon?: ReactNode | string;
  tag?: string | number | React.ReactNode;
  amount?: number | string;
  description?: React.ReactNode;
  bg?: string;
};

function Card({ icon, tag, amount, description, bg }: CardProps) {
  return (
    <div
      className={`flex cursor-pointer flex-col gap-5 rounded-2xl ${bg ? bg : "bg-neutral-50"} px-6 py-5 shadow-md transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-lg`}
    >
      <div className="flex items-center justify-between text-indigo-500">
        <span className={typeof icon === "string" ? "text-sm" : ""}>
          {icon}
        </span>{" "}
        <span className="rounded-lg bg-indigo-100 px-2 py-1 text-xs">
          {tag}
        </span>
      </div>
      <div className="flex flex-col gap-1">
        <strong className="text-3xl font-bold text-gray-800">{amount}</strong>
        <p className="text-base capitalize text-gray-500">{description}</p>
      </div>
    </div>
  );
}

export default Card;
