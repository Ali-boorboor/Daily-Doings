import "@/index.css";
import "@/languages/index.ts";
import App from "./App.tsx";
import { StrictMode } from "react";
import { RecoilRoot } from "recoil";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

const client = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <RecoilRoot>
          <App />
        </RecoilRoot>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
