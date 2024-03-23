export type TDetailsData = {
  title: string;
  value: string;
};

type TAppDetailsProps = {
  data: TDetailsData[];
};

export const AppDetails = ({ data }: TAppDetailsProps) => {
  return (
    <dl className="flex flex-col flex-1 gap-2.5">
      {data.map((d, i) => (
        <div key={i} className="flex justify-between items-center">
          <dt>{d.title}</dt>
          <dd className="font-bold">{d.value}</dd>
        </div>
      ))}
    </dl>
  )
}
