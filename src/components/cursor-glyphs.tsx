import type { ReactNode } from "react";
import type { CssCursorKeyword } from "#/data/cursors";

const fill = "#f4f1ea";
const ink = "#121214";

function Frame({ children }: { children: ReactNode }) {
	return (
		<svg viewBox="0 0 48 48" aria-hidden="true" className="cursor-glyph">
			<g
				fill={fill}
				stroke={ink}
				strokeWidth="1.35"
				strokeLinejoin="round"
				strokeLinecap="round"
			>
				{children}
			</g>
		</svg>
	);
}

function Arrow({ x = 10, y = 6 }: { x?: number; y?: number }) {
	return (
		<path
			transform={`translate(${x} ${y})`}
			d="M1.4 1.2 1.4 26.2 8.1 19.8 12.4 31.2 16.6 29.6 12.2 18.2 22.4 18.2Z"
		/>
	);
}

function Badge({
	cx,
	cy,
	children,
}: {
	cx: number;
	cy: number;
	children?: ReactNode;
}) {
	return (
		<g>
			<circle cx={cx} cy={cy} r="7.4" />
			<g
				fill={ink}
				stroke="none"
				filter="none"
				fontFamily="ui-sans-serif, system-ui, sans-serif"
				fontSize="9.5"
				fontWeight="700"
				textAnchor="middle"
				dominantBaseline="central"
			>
				{children}
			</g>
		</g>
	);
}

function Plus({ cx, cy }: { cx: number; cy: number }) {
	return (
		<path
			d={`M${cx} ${cy - 3.2}v6.4M${cx - 3.2} ${cy}h6.4`}
			fill="none"
			stroke={ink}
			strokeWidth="1.7"
			filter="none"
		/>
	);
}

function SlashCircle({
	cx,
	cy,
	r = 8.2,
}: {
	cx: number;
	cy: number;
	r?: number;
}) {
	const x = Number(cx);
	const y = Number(cy);
	const radius = Number(r);
	const offset = radius * 0.62;
	return (
		<g>
			<circle cx={x} cy={y} r={radius} fill="none" strokeWidth="2.15" />
			<path
				d={`M${x - offset} ${y + offset} L${x + offset} ${y - offset}`}
				fill="none"
				strokeWidth="2.15"
			/>
		</g>
	);
}

function HandOpen() {
	return (
		<path d="M16.8 21.4c0-2.8 1.6-8.2 2.7-10.2.7-1.2 2.7-1.1 2.7.5v7.2c.1-2.6.3-7.2 1.4-8.4.7-1 2.6-.7 2.6.7v8.2c.2-2.2.6-6 1.7-7 .8-.8 2.5-.3 2.5 1v8.4c.4-1.5 1.2-3.6 2.4-4 1.3-.4 2.4.8 2.4 2.2 0 3.8-.5 8.2-1.8 11.4-1.5 3.6-4.7 6-8.8 6-4.8 0-8.8-3.6-8.8-8.2z" />
	);
}

function HandPoint() {
	return (
		<path d="M22.2 5.8c0-1.4 2-.1 2.3 1.2.6 2.4.9 5.6.9 8.2 1-2.6 1.4-6.4 2.6-7.4.9-.8 2.5-.3 2.5 1.1v7.6c.3-1.8.9-4.8 2.1-5.5 1-.6 2.5.1 2.5 1.4v7.2c.3-1.2 1.1-3.2 2.2-3.5 1.2-.3 2.2.8 2.2 2 0 4.2-.8 8.8-2.3 11.8-1.6 3.2-4.7 5.2-8.6 5.2-4.8 0-8.4-3.6-8.4-8.4 0-2.7.4-6.6 1-9.8.3-1.7.8-5.2.8-6.1z" />
	);
}

function HandGrab() {
	return (
		<path d="M15.6 23.2c.2-2.4 1.7-4.2 3.6-4.8.4-2.2 2-3.8 3.8-3.8.7 0 1.3.2 1.8.5.7-1.4 2.1-2.3 3.7-2.3 1.4 0 2.6.7 3.3 1.8.6-.7 1.6-1.2 2.7-1.2 2.1 0 3.6 1.7 3.6 3.8v.8c1.5.6 2.5 2.1 2.5 3.8 0 2.8-1.8 7.4-6.4 9.2-2.2.9-4.7 1.3-7.6 1.3-5.4 0-8.2-3-8.2-7.4 0-.6.1-1.2.2-1.7z" />
	);
}

function Magnifier({ minus = false }: { minus?: boolean }) {
	return (
		<g>
			<circle cx="21" cy="20" r="8.6" fill={fill} />
			<path d="M27.2 26.4 34.4 33.6" fill="none" strokeWidth="2.2" />
			{minus ? (
				<path
					d="M17.4 20h7.2"
					fill="none"
					stroke={ink}
					strokeWidth="1.7"
					filter="none"
				/>
			) : (
				<path
					d="M21 16.4v7.2M17.4 20h7.2"
					fill="none"
					stroke={ink}
					strokeWidth="1.7"
					filter="none"
				/>
			)}
		</g>
	);
}

function DoubleArrow({
	rotate = 0,
	bar = false,
}: {
	rotate?: number;
	bar?: boolean;
}) {
	return (
		<g transform={`rotate(${rotate} 24 24)`}>
			<path d="M8 24h32" fill="none" strokeWidth="2" />
			<path d="M10.2 24 17 17.6v12.8Z" />
			<path d="M37.8 24 31 17.6v12.8Z" />
			{bar ? <path d="M24 14v20" fill="none" strokeWidth="2" /> : null}
		</g>
	);
}

function CompassArrow({ rotate = 0 }: { rotate?: number }) {
	return (
		<g transform={`rotate(${rotate} 24 24)`}>
			<path d="M24 8.2 30.6 22.4h-4.1V39h-5V22.4h-4.1Z" />
		</g>
	);
}

function MenuLines({ x, y }: { x: number; y: number }) {
	return (
		<g filter="none">
			<rect x={x} y={y} width="12.5" height="11.5" rx="1.4" />
			<path
				d={`M${x + 2.2} ${y + 3.3}h8.1M${x + 2.2} ${y + 5.8}h8.1M${x + 2.2} ${y + 8.3}h5.6`}
				fill="none"
				stroke={ink}
				strokeWidth="1.15"
			/>
		</g>
	);
}

function Spinner({ cx, cy }: { cx: number; cy: number }) {
	return (
		<g>
			<circle
				cx={cx}
				cy={cy}
				r="7"
				fill={fill}
				stroke={ink}
				strokeWidth="1.4"
			/>
			<path
				d={`M${cx} ${cy - 7}a7 7 0 0 1 6.1 3.6`}
				fill="none"
				stroke={ink}
				strokeWidth="2.4"
			/>
		</g>
	);
}

function glyph(name: CssCursorKeyword): ReactNode {
	switch (name) {
		case "auto":
			return (
				<>
					<Arrow x={8} y={6} />
					<Badge cx={34.5} cy={34.5}>
						<text x={34.5} y={34.7}>
							A
						</text>
					</Badge>
				</>
			);
		case "default":
			return <Arrow />;
		case "none":
			return (
				<>
					<g opacity="0.42">
						<Arrow />
					</g>
					<SlashCircle cx={33} cy={33} r={8} />
				</>
			);
		case "context-menu":
			return (
				<>
					<Arrow x={7} y={5} />
					<MenuLines x={27} y={27} />
				</>
			);
		case "help":
			return (
				<>
					<Arrow x={8} y={6} />
					<Badge cx={34} cy={34}>
						<text x={34} y={34.2}>
							?
						</text>
					</Badge>
				</>
			);
		case "pointer":
			return <HandPoint />;
		case "progress":
			return (
				<>
					<Arrow x={7} y={6} />
					<Spinner cx={34.5} cy={34.5} />
				</>
			);
		case "wait":
			return (
				<path d="M16.5 9h15v3.2c0 4.4-4.4 7-7.5 9.8 3.1 2.8 7.5 5.4 7.5 9.8V35h-15v-3.2c0-4.4 4.4-7 7.5 9.8-3.1-2.8-7.5-5.4-7.5-9.8z" />
			);
		case "cell":
			return (
				<>
					<path d="M24 8.5v31M8.5 24h31" fill="none" strokeWidth="1.9" />
					<rect
						x="16"
						y="16"
						width="16"
						height="16"
						fill="none"
						strokeWidth="1.9"
					/>
				</>
			);
		case "crosshair":
			return (
				<>
					<path d="M24 6.5v35M6.5 24h35" fill="none" strokeWidth="1.7" />
					<circle cx="24" cy="24" r="3.4" />
				</>
			);
		case "text":
			return (
				<path d="M15.2 10h17.6v3.1h-7.2v21.8h7.2V38H15.2v-3.1h7.2V13.1h-7.2z" />
			);
		case "vertical-text":
			return (
				<path d="M10 15.2v17.6h3.1v-7.2h21.8v7.2H38V15.2h-3.1v7.2H13.1v-7.2z" />
			);
		case "alias":
			return (
				<>
					<Arrow x={7} y={6} />
					<g transform="translate(26 26)">
						<rect x="0" y="0" width="14" height="14" rx="2.2" fill={fill} />
						<path
							d="M4.2 9.6V4.4h5.2"
							fill="none"
							stroke={ink}
							strokeWidth="1.6"
							filter="none"
						/>
						<path
							d="M4.6 4.8 10.4 10.6"
							fill="none"
							stroke={ink}
							strokeWidth="1.6"
							filter="none"
						/>
					</g>
				</>
			);
		case "copy":
			return (
				<>
					<Arrow x={7} y={6} />
					<Badge cx={34.5} cy={34.5} />
					<Plus cx={34.5} cy={34.5} />
				</>
			);
		case "move":
			return (
				<>
					<path d="M24 9v30M9 24h30" fill="none" strokeWidth="2" />
					<path d="M24 8.4 18.2 16h11.6Z" />
					<path d="M24 39.6 18.2 32h11.6Z" />
					<path d="M8.4 24 16 18.2v11.6Z" />
					<path d="M39.6 24 32 18.2v11.6Z" />
				</>
			);
		case "no-drop":
			return (
				<>
					<Arrow x={6} y={6} />
					<SlashCircle cx={34.2} cy={34.2} />
				</>
			);
		case "not-allowed":
			return <SlashCircle cx={24} cy={24} r={11.4} />;
		case "grab":
			return <HandOpen />;
		case "grabbing":
			return <HandGrab />;
		case "all-scroll":
			return (
				<>
					<circle cx="24" cy="24" r="3.1" />
					<path d="M24 9v30M9 24h30" fill="none" strokeWidth="1.7" />
					<path d="M24 8.6 19.4 15h9.2Z" />
					<path d="M24 39.4 19.4 33h9.2Z" />
					<path d="M8.6 24 15 19.4v9.2Z" />
					<path d="M39.4 24 33 19.4v9.2Z" />
				</>
			);
		case "col-resize":
			return <DoubleArrow bar />;
		case "row-resize":
			return <DoubleArrow rotate={90} bar />;
		case "n-resize":
			return <CompassArrow />;
		case "e-resize":
			return <CompassArrow rotate={90} />;
		case "s-resize":
			return <CompassArrow rotate={180} />;
		case "w-resize":
			return <CompassArrow rotate={-90} />;
		case "ne-resize":
			return <CompassArrow rotate={45} />;
		case "nw-resize":
			return <CompassArrow rotate={-45} />;
		case "se-resize":
			return <CompassArrow rotate={135} />;
		case "sw-resize":
			return <CompassArrow rotate={-135} />;
		case "ew-resize":
			return <DoubleArrow />;
		case "ns-resize":
			return <DoubleArrow rotate={90} />;
		case "nesw-resize":
			return <DoubleArrow rotate={-45} />;
		case "nwse-resize":
			return <DoubleArrow rotate={45} />;
		case "zoom-in":
			return <Magnifier />;
		case "zoom-out":
			return <Magnifier minus />;
	}
}

export function CursorGlyph({ name }: { name: CssCursorKeyword }) {
	return <Frame>{glyph(name)}</Frame>;
}
