import type { FeedbacksNextProps } from "@/feedbacks/types";
import { Search } from "@/feedbacks/components/Search";
import { List } from "@/feedbacks/components/List";

const Page = async (_props: FeedbacksNextProps["page"]) => {
  return (
    <div className="flex flex-col w-full gap-2">
      <div className="flex flex-row w-full gap-2">
        <Search />
      </div>
      <List />
    </div>
  );
};

export default Page;
