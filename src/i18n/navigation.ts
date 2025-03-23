import { routing } from "@/i18n";
import { createNavigation } from "next-intl/navigation";

export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);
