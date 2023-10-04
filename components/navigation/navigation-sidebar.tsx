import { redirect } from "next/navigation";

import { UserButton } from "@clerk/nextjs";
// import ScrollArea from "@/components/scroll-area";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "@/components/mode-toggle";

import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";

import NavigationAction from "./navigation-action";
import NavigationItem from "./navigation-item";

const NavigationSidebar = async () => {
  const profile = await currentProfile();

  if (!profile) {
    return redirect("/");
  }

  const servers = await db.server.findMany({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  return (
    <div className="flex h-full w-full flex-col items-center space-y-4 py-3 text-primary dark:bg-[#1e1f22] bg-[#E3E5E8]">
      <NavigationAction />
      <Separator className="mx-auto h-[2px] w-10 rounded-md bg-zinc-300 dark:bg-zinc-700" />
      <ScrollArea className="flex-1 w-full">
        {servers.map((server) => (
          <div key={server.id} className="mb-4">
            <NavigationItem
              id={server.id}
              imageUrl={server.imageUrl}
              name={server.name}
            />
          </div>
        ))}
        {/* {Array.from({ length: 100 }, (_, index) => index).map((number) => (
          <div key={number}>{number} </div>
        ))} */}
      </ScrollArea>
      <div className="mt-auto flex flex-col items-center gap-y-4 pb-3">
        <ModeToggle />
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox: "h-[48px] w-[48px]",
            },
          }}
        />
      </div>
    </div>
  );
};

export default NavigationSidebar;
