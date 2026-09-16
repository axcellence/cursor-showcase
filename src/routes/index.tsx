import { createFileRoute } from "@tanstack/react-router";
import { CursorTile } from "#/components/cursor-tile";
import { CURSORS } from "#/data/cursors";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
	return (
		<main className="app-shell">
			<header className="app-header">
				<div>
					<p className="eyebrow">CSS cursor keywords</p>
					<h1>Hover a tile to wear it</h1>
				</div>
				<p className="lede">
					Each square is a standard CSS <code>cursor</code> value. On a pointer
					device, the illustration fades and your mouse becomes that cursor
					until you leave. Touch screens keep the drawings visible.
				</p>
			</header>

			<ul className="cursor-grid">
				{CURSORS.map((cursor) => (
					<CursorTile key={cursor.name} cursor={cursor} />
				))}
			</ul>
		</main>
	);
}
