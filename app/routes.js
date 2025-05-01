import homeRoute from "./routes/home";

import authRoutes from "./routes/auth";
import userSavedRecipeRoutes from "./routes/userSavedRecipes";
import schemaRoutes from "./routes/schema";
import { redirect } from "./redirect";
import postRoutes from "./routes/posts";
import uploadRoutes from "./routes/uploads";
import recipeAiRoutes from "./routes/admin/ai";
import userProfileRoutes from "./routes/userProfile";
//TODO: Need the rest of the routing merged into this
// 1. APIs have no indexing on:
//    - /api/buckets (many buckets with collisions in crawlers or DDoS-retype attacks)
//    - /api/recipe/my-recipes (crawlers)
//
// 2. APIs should ideally require same google_account_id hassle on on:
//    - /api/recipe/my-recipes (API-key is not enough? we still need to double check and clone behavior from /api/wishlist)
//
//
// 3. APIs show clear errors on:
export const routes:
  | {
      loader: any;
      code: any;
      oauth?: boolean;
      appCall?: Function;
      cacheControl?: {
        admin: number;
        app: number;
        public: number;
        searchEngines: boolean;
        matchPath: string;
      };
    }[]
  | [string, { manualInputs?: { [key: string]: object | string } }] = [
  {
    loader: { path: "", urlPath: "", config: "" },
    code: homeRoute as any,
    cacheControl: {
      admin: 180,
      app: 180,
      public: 180,
      searchEngines: true,
      matchPath: "/*",
    },
    amazonDownloadSearch: [null, null, null],
  },
  {
    loader: { path: "", urlPath: "/recipes/more-categories", config: "" },
    amazonDownloadSearch: [null, null, null],
    isModal: true,
    code: homeRoute as any,
    cacheControl: {
      admin: 180,
      app: 180,
    },
    crampLessCssOutput: true,
  },
  ...authRoutes,
  ...userSavedRecipeRoutes,
  ...userProfileRoutes,
  ...schemaRoutes,
  ...postRoutes,
  ...uploadRoutes,
  ...redirect,
  ...recipeAiRoutes,
];