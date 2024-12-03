import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { ThemeProvider } from "./components/theme-provider";
import ModeToggle from "./components/mode-toggle";

function App() {
    // const router = createBrowserRouter();
    return (
        <ThemeProvider>
            <div>
                <h1 className="text-3xl font-bold underline">Hello World!</h1>
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>
                                Item One
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <NavigationMenuLink>Link</NavigationMenuLink>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            <ModeToggle />
        </ThemeProvider>
    );
}

export default App;
