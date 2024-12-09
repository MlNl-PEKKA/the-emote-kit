type ProtectedPath = "/profile" | "/feedbacks";

type Path = "/" | ProtectedPath;

type ProtectedPaths<T extends ProtectedPath = ProtectedPath> = {
  [id in `${T}`]: string;
};

type Paths<T extends Path = Path> = {
  [id in `${T}`]: string;
};

export const PUBLIC_ROUTES = {};

export const PROTECTED_PATHS = {
  "/profile": "Profile",
  "/feedbacks": "Feedbacks",
} as const satisfies ProtectedPaths;

export const PATHS = {
  "/": "Landing",
  ...PROTECTED_PATHS,
} as const satisfies Paths;
