import { createRoot } from "react-dom/client";
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "app/providers/ThemeProvider";
import "shared/config/i18n/i18n";

const container = document.getElementById("root");
const root = createRoot(container);

const render = () => {
    root.render(
        <BrowserRouter>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </BrowserRouter>
    );
};

render();

if (module.hot) {
    module.hot.accept("./app/App", () => {
        render();
    });
}