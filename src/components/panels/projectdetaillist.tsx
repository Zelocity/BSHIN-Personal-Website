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
      contentClassName="p-5 sm:p-6"
    >
      <h3 className="text-xl font-bold leading-tight text-ink">{title}</h3>

      <div className="mt-4 border-t-2 border-dashed border-divider/50" />

      <ul className="mt-5 space-y-4">
        {items.map((item, index) => (
          <li
            key={`${title}-${index}`}
            className="
              flex items-start gap-3
              text-sm leading-7 text-muted
              sm:text-base
            "
          >
            <span
              aria-hidden="true"
              className="
                mt-[0.65rem] h-2 w-2
                shrink-0 bg-accent
              "
            />

            <span>{item}</span>
          </li>
        ))}
      </ul>
    </PixelPanel>
  );
}

export default ProjectDetailList;
