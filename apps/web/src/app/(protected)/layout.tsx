import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/protected/components/AppSidebar";
import { PathProvider } from "@/protected/contexts/PathProvider";
import type { ProtectedNextProps } from "@/protected/types";

const Layout = (props: ProtectedNextProps["layout"]) => {
  return (
    <PathProvider>
      <SidebarProvider className="min-h-screen overflow-hidden">
        <AppSidebar />
        <SidebarInset className="px-2 py-2 gap-2 h-screen">
          <header className="flex h-[3rem] w-full items-center justify-between px-4">
            {props.breadcrumbs}
            {props.actions}
          </header>
          <main className="flex h-[calc(100vh-4rem)]">{props.children}</main>
        </SidebarInset>
      </SidebarProvider>
    </PathProvider>
  );
};

export default Layout;
