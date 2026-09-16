import type { CSSProperties } from "react";
import { CursorGlyph } from "#/components/cursor-glyphs";
import type { CursorSpec } from "#/data/cursors";

export function CursorTile({ cursor }: { cursor: CursorSpec }) {
	return (
		<li>
			<figure
				className="cursor-tile"
				style={{ "--tile-cursor": cursor.name } as CSSProperties}
			>
				<div className="cursor-tile-art">
					<CursorGlyph name={cursor.name} />
				</div>
				<figcaption className="cursor-tile-name">
					{cursor.name}
					<span className="sr-only">. {cursor.hint}</span>
				</figcaption>
			</figure>
		</li>
	);
}
