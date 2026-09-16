import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import type { ReactNode } from "react";
import appCss from "../styles.css?url";

const TITLE = "CSS Cursor Showcase";
const DESCRIPTION =
	"A specimen sheet of standard CSS cursor keywords. Hover a tile to try each cursor.";

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{ title: TITLE },
			{ name: "description", content: DESCRIPTION },
			{ name: "theme-color", content: "#0b0b0d" },
			{ property: "og:title", content: TITLE },
			{ property: "og:description", content: DESCRIPTION },
		],
		links: [
			{ rel: "stylesheet", href: appCss },
			{ rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
		],
	}),
	shellComponent: RootDocument,
});

function RootDocument({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<head>
				<HeadContent />
			</head>
			<body>
				{children}
				<Scripts />
			</body>
		</html>
	);
}
