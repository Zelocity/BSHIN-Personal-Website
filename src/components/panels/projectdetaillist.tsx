import PixelPanel from "../ui/pixelpanel";

type ProjectDetailListProps = {
  title: string;
  items: string[];
};

function ProjectDetailList({ title, items }: ProjectDetailListProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <PixelPanel
      variant="secondary"
      shadowSize={4}
      className="h-full"
      contentClassName="h-full p-5"
    >
      <h3 className="text-lg font-bold text-ink">{title}</h3>

      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-muted">
            <span
              aria-hidden="true"
              className="mt-2 h-2 w-2 shrink-0 bg-accent"
            />

            <span>{item}</span>
          </li>
        ))}
      </ul>
    </PixelPanel>
  );
}

export default ProjectDetailList;
